import * as vscode from 'vscode';
import fetch from 'node-fetch';
import {Headers} from 'node-fetch';
import * as base64 from 'base-64';
import * as fs from 'fs';
import * as propertiesReader from 'properties-reader';
import * as xml2js from 'xml2js';
import * as tmp from 'tmp';
import { URL } from 'url';
import * as path from 'path';

var xpath = require('xpath')
import { DOMParser } from 'xmldom'
import { XMLSerializer } from 'xmldom'
const fg = require('fast-glob');

export namespace Commands{
  export const SHOW_LANGUAGE_SERVER_OUTPUT = 'show.language.server.output';
  export const EXECUTE_WORKSPACE_COMMAND = 'execute.workspaceCommand';
}

enum UseTokenization {
  Yes = "Yes",
  No = "No",
  Ask = "Ask"
}

interface PropFileInfo{
   mtime: Date;
   props: {};
};

type IIQProperties = {[name: string]: PropFileInfo};

enum ContextValue {
  NotIIQContext = "NotIIQContext",
  BeanShellSelection = "BeanShellSelection",
  Rule = "Rule",
  Task = "Task",
  ProjectXMLObject = "ProjectXMLObject",
  TempXMLObject = "TempXMLObject",
  JavaFile = "JavaFile",
  LogConfig = "LogConfig",
}

class ContextManager {
  private _name: string;
  private _lastValue: ContextValue;
  private _objClass: string;
  private _objName: string;
  private _bsSource: string;

  constructor(name: string) {
    this._name = name;
  } 

  public getParsedObjectAttr(parsedXml){
    var objClass = null;
    var objName = null;
    var bsSource = null;
    if(!parsedXml){
      return [objClass, objName, bsSource];
    }

     objClass = Object.keys(parsedXml)[0];
    if("sailpoint" == objClass){
      parsedXml = parsedXml["sailpoint"];
      objClass = Object.keys(parsedXml)[0];
      parsedXml = parsedXml[objClass][0];
    }
    else{
      parsedXml = parsedXml[objClass];
    }
    objName = parsedXml["ATTR"]["name"];
    if(parsedXml["Source"]){
      bsSource = parsedXml["Source"][0];
    }
    return [objClass, objName, bsSource];
  }

  public set(contextValue: ContextValue, parsedXml?: any, isProjectObject?: boolean): void {
    //reset objClass and objName
    [this._objClass, this._objName, this._bsSource] = this.getParsedObjectAttr(parsedXml);

    //try to deduce contextValue when only objClass and objNames are set
    if(null == contextValue && this._objClass){
      switch(this._objClass){
        case "Rule":
          contextValue = ContextValue.Rule;
          break;
        case "TaskDefinition":
          contextValue = ContextValue.Task;
          break;
        default:
          contextValue = isProjectObject ? ContextValue.ProjectXMLObject : ContextValue.TempXMLObject;
      }
    }
    else if(null == contextValue && !this._objClass){
      throw new Error('Either context or objClass need to be initialized');
    }
    this._lastValue = contextValue;
    vscode.commands.executeCommand('setContext', this._name, this._lastValue);
  }

  public getContextValue() : ContextValue{
    return this._lastValue;
  }
  public getObjClass(): string{
    return this._objClass;
  }
  public getObjName(): string{
    return this._objName;
  }
  public getBSSource(): string{
    return this._bsSource;
  }
}

export class IIQCommands {
  private g_props: IIQProperties = {};
  private g_statusBarEnvItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  private g_IIQClasses = null;
  private g_workflowUpdated: boolean = false;
  private g_workflowUrl: string = "/rest/workflows/IIQDevAcceleratorWF/launch";
  private g_contextManager : ContextManager = new ContextManager("iiq.context");
  private g_iiqOutput = vscode.window.createOutputChannel("iiq-output");
  private g_fullWFPath = path.resolve(__dirname, "../../iiq-wf/workflow.xml");
  private g_workspaceFolder: string = null;
  private g_baseSSBFolder: string = null;

  private initVariables(){
    this.g_workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath.replace(/\\/g, "/");
    //const buildProps = await vscode.workspace.findFiles("**/build.properties");
    var files: string[] = fg.sync(`${this.g_workspaceFolder}/**/build.properties`);
    if(1 == files.length){
      const baseSSBFolder = require("path").dirname(files[0]);
      
      var xml_files: string[] = fg.sync(`${baseSSBFolder}/config/**/*.xml`);
      var lib_files: string[] = fg.sync(`${baseSSBFolder}/lib/*.jar`);
      var scripts_files: string[] = fg.sync(`${baseSSBFolder}/scripts/*.xml`);
      if(xml_files.length > 0 && lib_files.length > 0 && scripts_files.length > 0){
        this.g_baseSSBFolder = baseSSBFolder;
      }
    }
  }
  constructor(){
    this.contextChange();
    vscode.window.onDidChangeActiveTextEditor((textEditor: vscode.TextEditor | undefined) => {
      if (!textEditor || undefined == textEditor) {
        return;
      }
      this.contextChange();
    });
		vscode.window.onDidChangeTextEditorSelection((e: vscode.TextEditorSelectionChangeEvent) => {
			// this.contextChange();
		});
    this.initVariables();
  }
  
  public getContextManager(): ContextManager{
    return this.g_contextManager;
  }

  private async contextChange(){
    var editor = vscode.window.activeTextEditor;
    if(!editor.document)  {
      vscode.window.showInformationMessage(`To execute based on context, please open file with some IIQ object or a logging config`); 
      return;
    }

    var fullFileName = editor.document.fileName;
    var ext = path.extname(fullFileName);
    var baseName = path.basename(fullFileName);
    var selection = editor.selection;
    var script = editor.document.getText(selection);
    if(script && ext === '.xml'){
      this.g_contextManager.set(ContextValue.BeanShellSelection);
    }
    else if(ext === ".properties" && baseName.includes("log4j")){
      this.g_contextManager.set(ContextValue.LogConfig);
    }
    else if(ext === ".java"){
      this.g_contextManager.set(ContextValue.JavaFile);
    }
    else if(ext === '.xml'){
      try {
        var parsedXml = this.parseXMLObject();
        this.g_contextManager.set(null, parsedXml, this.isProjectFile(fullFileName));
      } 
      catch (error) {
        vscode.window.showErrorMessage(`Error parsing ${editor.document.fileName}`);
      }
    }
    else{
      this.g_contextManager.set(ContextValue.NotIIQContext);
    }
  }

  private getVersion() : string{
    const version = vscode.extensions.getExtension('AndreiStebakov.sailpoint-iiq-dev-accelerator').packageJSON.version;
    return version;
  }

  public async updateWorkflowIfNeeded(url, username, password) : Promise<boolean>{
    var retValue : boolean = false;
    const extVersion: string = this.getVersion();
    const wfVersion: string = await this.getWorkflowVersion(url, username, password);
    if("undefined" == wfVersion){
      return false;
    }
    if(extVersion != wfVersion){
      const json = vscode.extensions.getExtension('AndreiStebakov.sailpoint-iiq-dev-accelerator').packageJSON;
      const fileContent = fs.readFileSync(this.g_fullWFPath, {encoding:'utf8', flag:'r'});
      var post_body = {
        "workflowArgs": {
          "operation": "Import",
          "resource": fileContent
        }
      };
      var result = await this.postRequestInternal(JSON.stringify(post_body), url, username, password);
      if(result["payload"] !== undefined){
        retValue = true;
      }
    }
    else{
      return true;
    }
    return retValue;
  }

  public  getStatusBar(){
    return this.g_statusBarEnvItem;
  }

  public updateStatusBar(text: string){
    this.g_statusBarEnvItem.text = text;
    if(this.g_statusBarEnvItem.text){
      this.g_statusBarEnvItem.show();
    }else{
      this.g_statusBarEnvItem.hide();
    }
  }

  private parseXMLObject(text:string | null = null){
    const xmlParser = new xml2js.Parser({ attrkey: "ATTR" });

    if(!text){
      text = vscode.window.activeTextEditor.document.getText();
    }

    var parsedXml = null;
    xmlParser.parseString(text, function(error, result) {
      if(error === null) {
        parsedXml = result;
      }
      else {
          console.log(error);
      }
    });
    return parsedXml;
  }



  private async listEnvironments(): Promise<string[]>{
    var result:string[] = [];

    var searchFileName = '*.target.properties';
    const uris = await vscode.workspace.findFiles(`**/${searchFileName}`);
    uris.forEach((uri) => {
      let [env, rest] = path.basename(uri.fsPath).split(".");
      result.push(env);
    });
    return result;
  }

  public getBaseSSBFolder() : string|null{
    return this.g_baseSSBFolder;
  }
 
  public updateStatusBarIfEnvironmentIsSet(){
    var environment: string = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');
    if(!environment){
      return;
    }
    this.updateStatusBar("IIQ: " + environment);
  }

  private async getEnvironment(){
    var environment: string = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');
    if(!environment){
      this.switchEnv();
    }
    return environment;
  }

  private canUseCachedProp(filePath: string){
    if(!this.g_props[filePath]){
      return false;
    }
    let props: PropFileInfo = this.g_props[filePath];
    
    if(!props["props"]){
      return false;
    }

    const mtime = fs.statSync(filePath).mtime;
    if(mtime.getTime() != props["mtime"].getTime()){
      return false;
    }
    return true;
  }

  public async getFileProperties(propName){
    const uris = await vscode.workspace.findFiles(`**/${propName}`);
    if(0 == uris.length){
      return null;
    }
    var uri = uris[0];
    var filePath: string = uri.fsPath; 

    if(this.canUseCachedProp(filePath)){
      return this.g_props[filePath]["props"];
    }

    this.g_props[filePath] = {"mtime": null, "props": {}};
    this.g_props[filePath]["mtime"] = fs.statSync(filePath).mtime;
    console.log(`Trying to read ${filePath} file`);
    var properties = propertiesReader(filePath).getAllProperties();
    for(var key in properties){
      var val: string = properties[key].toString();
      properties[key] = val.replace(/\\\\/g, "\\");
    };

    this.g_props[filePath]["props"] = properties;
    return this.g_props[filePath]["props"];
  }

  private async loadTargetProps(){
    var environment = await this.getEnvironment();
    if(!environment){
      return null;
    }

    var mainProps = await this.getFileProperties(`${environment}.target.properties`);
    if(!mainProps){
      return null;
    }
    var secretProps =  await this.getFileProperties(`${environment}.target.secret.properties`);
    var allProps = Object.assign({}, mainProps, secretProps);
    return allProps;
  }

  private async loadTokensToIgnore(){
    var environment = await this.getEnvironment();
    if(!environment){
      return null;
    }

    var ignoreTokens = await this.getFileProperties(`${environment}.target.ignoretokens.properties`);
    if(!ignoreTokens){
      ignoreTokens = {};
    }
    return ignoreTokens;
  }

  private async loadReverseTokens(){
    var environment = await this.getEnvironment();
    if(!environment){
      return null;
    }

    return await this.getFileProperties(`${environment}.target.vscode-reverse.properties`);
  }

  public processFileContent(fileContent, props){
    var errors = {"processFileErrors" : []};
    if(props){
      var found = fileContent.match(/%%\w+%%/g);
      if(found){
        found.forEach((token) => {
          var replacement = props[token]; 
          if(null != replacement){
            fileContent = fileContent.replace(token, replacement);
          }
        });
      }

      //second iteration, looking for missed tokens
      found = fileContent.match(/%%\w+%%/g);
      if(found){
        found.forEach((missed) => {
          if(!errors["processFileErrors"].includes(missed)){
            errors["processFileErrors"].push(missed);
          }
        });
      }
    }
    
    return [fileContent, errors];
  }

  private validateConfigInput(text){
    if (!text) {
      return 'You must enter some input';
    }
    let [url, username, password] = text.split(";");
    if(!url || !username || !password){
      return "Please enter: url;username;password"
    }
    let m = url.match(/https?:\/\/.*/g);
    if(!m || m[0] !== url){
      return "please enter correct url";
    }
    return undefined;
  }

  private async getSiteConfig() : Promise<[string, string, string]>{
    var environment = await this.getEnvironment();
    var url: string = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('iiq_url');
    var username: string = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('username');
    var password: string = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('password');

    if(!url || !username || !password){
      const props = await this.loadTargetProps();
      if(props){
        url = props["%%ECLIPSE_URL%%"];
        username = props["%%ECLIPSE_USER%%"];
        password = props["%%ECLIPSE_PASS%%"];
      }
      if(!url || !username || !password){
        url = url ? url:"http://localhost:8080/identityiq"; 
        username = username ? username:"spadmin";
        password = password ? password:"admin";
        let configParams = await vscode.window.showInputBox({
          ignoreFocusOut: true,
          value: `${url};${username};${password}`,
          prompt: `Couldn't detect your full configuration from ${environment}.target.properties. Please enter here `, 
          validateInput: this.validateConfigInput
        });
        if(configParams === undefined){
          return [null, null, null];
        }
        [url, username, password] = configParams.split(";");
        vscode.workspace.getConfiguration('iiq-dev-accelerator').update('iiq_url', url, true);
        vscode.workspace.getConfiguration('iiq-dev-accelerator').update('username', username, true);
        vscode.workspace.getConfiguration('iiq-dev-accelerator').update('password', password, true);
      }
    }
    if(!this.g_workflowUpdated){
      this.g_workflowUpdated = await this.updateWorkflowIfNeeded(url, username, password);
    }
    return [url, username, password];
  }

  private async postRequestInternal(post_body, url, username, password){
    var result = {};
    const headers = new Headers();
    
    if(vscode.workspace.getConfiguration('iiq-dev-accelerator').get('disableTLSValidation')){
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
    const parsedUrl = new URL(url);
    const https = require("https");
    const http = require("http");
    const agent = parsedUrl.protocol === 'https:' ? 
                  new https.Agent({rejectUnauthorized: false}):new http.Agent();

    try {
      let full_url = `${url.replace(/\/$/g, "")}${this.g_workflowUrl}`;
      const options = 
      {
        method: 'POST', 
        body: post_body,
        headers: headers, 
        agent: agent,
        timeout: 10000000
      };
      const response = await fetch(full_url, options);

      const json = await response.json();
      const payload = await json.attributes.payload;
      if(response.ok){
        result["payload"] = payload;
      }
      else{
        result["fail"] = response.status;
      }
    }
    catch(error){
      const path = require("path");
      vscode.window.showErrorMessage(`Check if you manually imported the IIQ Dev Accelerator Workflow at ${this.g_fullWFPath}. Post request failed with ${error}`);
      result["fail"] = error;
    }
    
    return result;

  }
  private async postRequest(post_body, url2 = null){
    let [url, username, password] = await this.getSiteConfig();
    if(null != url2){
      url = url2;
    }
    if(!url || !username || !password){
      vscode.window.showInformationMessage(`Please update your configuration with url, username and password`);
      return;
    }
    return this.postRequestInternal(post_body, url, username, password);
  }

  public async importFileList(filesToDeploy, resolveTokens = true){
    if(!filesToDeploy || filesToDeploy.length < 0){
      vscode.window.showInformationMessage(`Nothing to deploy, exiting`); 
      return;
    }
    var wasCancelled = false;
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Importing ",
      cancellable: true
      }, 
      async (progress, token) => {
        token.onCancellationRequested(() => {
          //vscode.window.showInformationMessage(`Operation was cancelled`); 
        });
        var incr = 100/filesToDeploy.length;
        progress.report({ increment: 0 });
        var result = {"deployed": 0, "failed": 0, "failedFiles": {}};

        for(var i = 0; i < filesToDeploy.length; i++){
          try {
            var f = filesToDeploy[i];
            progress.report({ increment: incr, message: `${require("path").basename(f)}` });
            const fileContent = fs.readFileSync(f, {encoding:'utf8', flag:'r'});
            let [success, processFileErrors] = await this.importFile(fileContent, resolveTokens);
            if(token.isCancellationRequested){
              wasCancelled = true;
              break;
            }
            if(success){
              result["deployed"] += 1;
            }
            else{
              result["failed"] += 1;
              result["failedFiles"][require("path").basename(f)] = processFileErrors;
            }
          } catch (error) {
            result["failed"] += 1;
            result["failedFiles"][require("path").basename(filesToDeploy[i])] = {};
          }
        }
        return result;
      });

    if(result["deployed"] == filesToDeploy.length){
      vscode.window.showInformationMessage(`All ${filesToDeploy.length} files were successfully deployed!`);   
    }
    else{
      if(wasCancelled){
        vscode.window.showWarningMessage(`Operation was cancelled. ${result["deployed"]} out of ${filesToDeploy.length} files were deployed`);
      }else{
        var failedFiles = Object.keys(result["failedFiles"]).
          map(key => key + (result["failedFiles"][key]["processFileErrors"].length > 0 ? 
          `\n - Following tokes couldn't be substituted: 
            ${result["failedFiles"][key]["processFileErrors"]}`:"")).join("\n");
        await vscode.window.showInformationMessage(
          `${result["failed"]} files failed to deploy: \n\n${failedFiles}`, 
          { modal: true });
      }
    }
  }

  private async findIIQLibFolder(){
    const uris = await vscode.workspace.findFiles(`**/identityiq.jar`);
    console.log("now trying to go over files...");
    if(uris.length > 0){
      var iiqJar = uris[0].fsPath;
      return path.dirname(iiqJar).replace(/\\/g, "/");
    }
    return null;
  }

  private validateIIQLibPath(path){
    if (!path) {
      return 'You must enter some input';
    }
    var result = fg.sync(path + '/identityiq.jar');
    if(result.length == 0){
      return `Couldn't find *.jar files under the folder ${path}`
    }
    return undefined;
  }

  private getClassFile(path, file) : string{
    var result = fg.sync(`${path}/**/${file}`);
    if(result.length == 0){
      return null;
    }
    return result[0];
  }
  
  private async getIIQClassPath() : Promise<string>{
    var classPath: string = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('iiq_lib_path');
    if(!classPath){
      classPath = await this.findIIQLibFolder();
      if(!classPath){
        classPath = await vscode.window.showInputBox({
          ignoreFocusOut: true,
          value: "",
          prompt: `Couldn't detect your IIQ library path. Please enter here `, 
          validateInput: this.validateIIQLibPath
        });
        if(classPath === undefined){
          vscode.window.showErrorMessage(`Please specify the path to IIQ libraries so that you file can get compiled`);
          return;
        }
        classPath = classPath.replace(/\\/g, "/");
        vscode.workspace.getConfiguration('iiq-dev-accelerator').update('iiq_lib_path', classPath, true);
      }
    }
    classPath = classPath + "/*";
    return classPath;
  }

  public async importJava(){
    const [url, username, password] = await this.getSiteConfig();
    var classPath = await this.getIIQClassPath();
    var outputClassDir = tmp.dirSync().name.replace(/\\/g, "/"); 
    var javaFile = vscode.window.activeTextEditor.document.fileName.replace(/\\/g, "/");
    var classFileBaseName = path.basename(javaFile, '.java') + '.class';
    var compilerPath = `javac`;
    var javaCompileOptions = `-source 1.8 -target 1.8`;  
    const cmd = `${compilerPath} ${javaCompileOptions} -d ${outputClassDir} -cp ${classPath} ${javaFile}`;

    const compileResult = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Compiling ${path.basename(javaFile)}`,
      cancellable: true
      }, 
      async (progress) => {
        const util = require('util');
        const exec = util.promisify(require('child_process').exec);

        var result = {};
        try{
          result["ok"] = await exec(cmd);
        }
        catch(error){
          result["fail"] = error;
        }
        return result;
      });
    
    this.g_iiqOutput.clear();
    this.g_iiqOutput.hide();
    if(compileResult["fail"]){
      vscode.window.showErrorMessage(`Couldn't compile ${path.basename(javaFile)}. Please see the output`);
      this.g_iiqOutput.append(compileResult["fail"].message);
      this.g_iiqOutput.show();
      fs.rmdirSync(outputClassDir, { recursive: true });
      return;
    }
    var classFile = this.getClassFile(outputClassDir, classFileBaseName);
    if(!classFile){
      vscode.window.showErrorMessage(`Couldn't file ${classFileBaseName} under ${outputClassDir}`);
      fs.rmdirSync(outputClassDir, { recursive: true });
      return;
    }
    const classBytes = fs.readFileSync(classFile, {encoding: 'base64'});
    fs.rmdirSync(outputClassDir, { recursive: true });
    var relativeClassPath = path.relative(outputClassDir, classFile).replace(/\\/g, "/");
    var clazzName = relativeClassPath.substring(0, relativeClassPath.search('.class')).replace(/\//g, ".");
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "importJava",
        "clazzName": clazzName, 
        "clazzPath": relativeClassPath,
        "clazzBytes": classBytes,
        "debugPort": "8000",
        "debugTransport": "dt_socket",
        "host": "localhost"
      }
    };

    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Importing Java Class... ",
      cancellable: true
      }, 
      async (progress, cancellationToken) => {
        var result = await this.postRequest(JSON.stringify(post_body));
        var uploadFailure = result["payload"]["uploadFailure"];
        var hotswapFailure = result["payload"]["hotswapFailure"];
        if(uploadFailure){
          return `Java class upload failed: ${uploadFailure}`; 
        }
        else if(hotswapFailure){
          progress.report({  message: `Please wait for the Tomcat app restart (HotSwap failed with error: ${hotswapFailure}). See the README for more info on that` });
          await sleep(20000);
          function sleep(ms) {
            return new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
          }
          var version = await this.getWorkflowVersion(url, username, password);
          if(version != "undefined"){
            return "success";
          }
          else return "Timeout trying to get workflow version";
        }
        return "success";
      });

    if(result == "success"){
      vscode.window.showInformationMessage(`Operation succeded!`);
    }
    else{
      vscode.window.showErrorMessage(`${result}`);
    }
  }

  public async importFile(fileContent = null, resolveTokens = true) : Promise<[boolean, {}]>{
    if(this.g_contextManager.getContextValue() == ContextValue.JavaFile){
      this.importJava();
      return;
    }

    var withProgress = false;
    var processFileErrors = {};
    if(!fileContent || typeof fileContent === 'object'){
      if(!vscode.window.activeTextEditor || 
        path.extname(vscode.window.activeTextEditor.document.fileName) != '.xml'){
        vscode.window.showInformationMessage(`Please open an xml document to import`); 
        return [false, processFileErrors];
      }  
      var document = vscode.window.activeTextEditor.document;
      fileContent = document.getText();
      withProgress = true;
    }
    if(resolveTokens){
      var props = await this.loadTargetProps();
      [fileContent, processFileErrors] = this.processFileContent(fileContent, props);
    }

    if(Object.keys(processFileErrors).length > 0 &&
      processFileErrors["processFileErrors"].length > 0){
      if(withProgress){
        vscode.window.showErrorMessage(`Following tokens couldn't be substituted: ${processFileErrors["processFileErrors"]}`);
        return [false, processFileErrors];
      }
      else{
        return [false, processFileErrors];
      }
    }
    var post_body = {
      "workflowArgs": {
        "operation": "Import",
        "resource": fileContent
      }
    };

    var isSuccess = true;
    if(withProgress){
      var result = await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Importing file...",
        cancellable: true
        }, 
        progress => {
          return this.postRequest(JSON.stringify(post_body));
        });

      if(result["payload"] !== undefined){
        vscode.window.showInformationMessage(`File import result: ${result["payload"]}`);
      }
      else{
        vscode.window.showErrorMessage(`Operation failed`);
        isSuccess = false;
      }
    }
    else{
      var result = await this.postRequest(JSON.stringify(post_body));
      if(!result["payload"]){
        isSuccess = false;
      }
    }
    return [isSuccess, processFileErrors];
  }

  public async getTasksNames(){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getTaskList"
      }
    };
    
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Getting task names...",
      cancellable: true
      }, 
        progress => {
          return this.postRequest(JSON.stringify(post_body));
      });

    return result["payload"];
  }


  public async runTask(taskName = null){
    if(!taskName){
      taskName = await vscode.window.showQuickPick(this.getTasksNames(), 
      { placeHolder: 'Pick a task...', ignoreFocusOut: true });
    }
    if(!taskName){
      vscode.window.showInformationMessage(`No task name was specified, cancelled`);
      return;
    }

    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "runTask",
        "taskName": taskName,
        "inputArgs": {}
      }
    };
    
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Running task...",
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });


    if(result["payload"] !== undefined){
      vscode.window.showInformationMessage(`Launched "${taskName} with result: ${result["payload"]}"`);
    }
    else{
      vscode.window.showErrorMessage(`Operation failed`);
    }
  }

  private async getArgumentsFromBuffer(){
    var retArgs = null;
    var editor = vscode.window.activeTextEditor;
    if(!editor || path.extname(editor.document.fileName) != '.xml'){
      vscode.window.showInformationMessage(`Please open rule or rule argument file`); 
      return null;
    }

    var parsedXml = this.parseXMLObject();
    if(parsedXml){
      try{
        retArgs =
          parsedXml["Map"]["entry"].reduce(function(map, obj) {
            map[obj["ATTR"]["key"]] = obj["ATTR"]["value"];
            return map;}, {});
      }
      catch(error){
        //it's ok, we expect to fail if our current file is a rule file
      }
    }

    return retArgs;
  }

  private async getArgumentsFromInput(prompt, initialValues){
    let inputArgs = {};
    let inputParams = await vscode.window.showInputBox({
      value: initialValues,
      prompt: prompt, 
      validateInput: (text) => {
        if (!text) {
            return 'You must enter some input';
        } else {
            return undefined;
        }
    }
    });

    if(inputParams === undefined){
      return inputArgs;
    }
    
    //arg-1->'asdf adsf' arg2->something blah arg3->name=="Identity-1234"
    var pairs = inputParams.match(/\S+->(?:(['"]).*?\1|\S+)/g);
    if(pairs){
      pairs.forEach((pair) => {
        var pairArr = pair.split("->");
        let value = pairArr[1];
        //remove quotes from value
        if(value.match(/^(['"])(.*)?\1/g)){
          value = value.substring(1, value.length-1);
        }
        inputArgs[pairArr[0]] = value;
      });
    }
    return inputArgs;
  }


  public async runTaskWithAttr(){
    let taskName = await vscode.window.showQuickPick(this.getTasksNames(), 
    { placeHolder: 'Pick a task...', ignoreFocusOut: true});

    if(!taskName){
      vscode.window.showInformationMessage(`No task name was specified, cancelled`);
      return;
    }

    let inputArgs = await this.getArgumentsFromInput("Please enter arguments (filter->name==\"Identity-XYZ\" etc.): ",  "");

    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "runTask",
        "taskName": taskName,
        "inputArgs": inputArgs
      }
    };
    
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Running task...",
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });

    if(result["payload"] !== undefined){
      vscode.window.showInformationMessage(`Launched "${taskName} with result: ${result["payload"]}"`);
    }
    else{
      vscode.window.showErrorMessage(`Operation failed`);
    }

  }


  public async getRuleNames(ruleName = null){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getRules",
        "ruleName": ruleName
      }
    };
    
    ruleName = ruleName ? ruleName:"all rules";
    //var result = await vscode.window.withProgress({
    //  location: vscode.ProgressLocation.Notification,
    //  title: `Retrieving information for ${ruleName}`,
    //  cancellable: true
    //  }, 
    //  progress => {
    //    return this.postRequest(JSON.stringify(post_body));
    //  });
    var result = await this.postRequest(JSON.stringify(post_body));

    return result["payload"];
  }

  public argsIntersect(ruleArgs, fileArgs){
    var result = ruleArgs.filter(value => -1 !== fileArgs.indexOf(value));
    return result.length > 0;
  }

  private async retrieveCurrentRuleName(){
    var ruleName = null;
    var argText = vscode.window.activeTextEditor.document.getText();
    var parsedXml = null;
    const xmlParser = new xml2js.Parser({ attrkey: "ATTR" });

    xmlParser.parseString(argText, function(error, result) {
      if(error === null) {
        parsedXml = result;
      }
      else {
          console.log(error);
      }
    });
    
    if(parsedXml){
      try{
        ruleName = parsedXml["Rule"]["ATTR"]["name"];
      }
      catch(error){}
    }

    return ruleName;
  }

  public async runRule(ruleName = null){
    let rulesMap = await this.getRuleNames(ruleName);
    if(!ruleName){
      ruleName = await vscode.window.showQuickPick(Object.keys(rulesMap), 
      { placeHolder: 'Pick a rule or press Esc to run the currently open rule', ignoreFocusOut: true });
    }
    if(!ruleName){
      vscode.window.showInformationMessage(`No rule name was specified, exiting`);
      return;
    }
    let ruleArgs = rulesMap[ruleName];
    let inputArgs: object = {};
    if(ruleArgs.length > 0){
      inputArgs = await this.getArgumentsFromBuffer();
      if(!inputArgs || !this.argsIntersect(ruleArgs, Object.keys(inputArgs))){
        inputArgs = await this.getArgumentsFromInput("Please enter arguments (arg1->value1 arg2->'value two' etc.): ",  ruleArgs.join('-> ') + "->");
      }
      if(!inputArgs){
        inputArgs = {};
      }
    }

    if(ruleArgs.length != Object.keys(inputArgs).length){
      vscode.window.showWarningMessage(`Please specify the correct arguments`);
      return;
    }

    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "runRule",
        "ruleName": ruleName,
        "inputArgs": inputArgs
      }
    };

    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Running rule is in progress...",
      cancellable: true
    }, 
    progress => {
      return this.postRequest(JSON.stringify(post_body));
    });

    if(result["payload"] !== undefined){
      vscode.window.showInformationMessage(`Result: ${result["payload"]}`);
    }
    else{
      vscode.window.showErrorMessage(`Operation failed`);
    }
  }

  public async evalBS(){
    var editor = vscode.window.activeTextEditor;
    if(!editor || !editor.document)  {
      vscode.window.showInformationMessage(`Please open a document and select your BeanShell script`); 
      return;
    }

    var selection = editor.selection;
    var script = editor.document.getText(selection);
    if(!script)  {
      vscode.window.showInformationMessage(`Please select a few lines of beanshell script`); 
      return;
    }

    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "evalBS",
        "script": script
      }
    };

    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Bean Shell script is being evaluated...",
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });

    if(result["payload"] !== undefined){
      vscode.window.showInformationMessage(`Result: ${result["payload"]}`);
    }
    else{
      vscode.window.showErrorMessage(`Operation failed`);
    }
  }

  public async getLog(){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getLog"
      }
    };

    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Retrieving logging configuration...",
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });

    if(result["payload"] !== undefined){
      //let rootFolder = vscode.workspace.rootPath;
      const tempFile = tmp.fileSync({ prefix: 'log4j-', postfix: '.properties' });
      fs.writeFileSync(tempFile.name, result["payload"]);
      let doc = await vscode.workspace.openTextDocument(tempFile.name); 
      await vscode.window.showTextDocument(doc);
    }
    else{
      vscode.window.showErrorMessage(`Operation failed`);
    }
  }

  private async getURLs() : Promise<string[]> {
    var result = [];
    let [url, username, password] = await this.getSiteConfig();
    const props = await this.loadTargetProps();
    if(!props){
      return [url];
    }
    var servers = props["%%IIQ_SERVERS%%"];
    if(!servers){
      return [url];
    }
    servers = servers.split(",").map(s => s.trim());

    return servers;
  }

  public async reloadLog(){
    var logContent = null;
    var environment = await this.getEnvironment();
    var searchFileName = `${environment}.log4*.properties`;
    var foundFullLogFileName = null;
    var foundLogFileName = null;
    console.log(`Looking for and loading ${searchFileName}`);

    //Priority #1
    var editor = vscode.window.activeTextEditor;
    if(!logContent && editor && editor.document && 
      editor.document.getText(editor.selection)){
      logContent = editor.document.getText(editor.selection);
    }

    //Priority #2
    if(!logContent && editor && editor.document &&
      editor.document.fileName.includes("log4j")){
        logContent = editor.document.getText();
    }

    //Priority #3
    if(!logContent){
      const uris = await vscode.workspace.findFiles(`**/${searchFileName}`);
      console.log("now trying to go over log config files...");
      uris.forEach((uri) => {
        console.log(`Trying to read ${uri.fsPath} file`);
        logContent = fs.readFileSync(uri.fsPath, {encoding:'utf8', flag:'r'}); 
      });
    }

    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "reloadLog",
        "logContent": logContent
      }
    };
    //Check if we have mulitple servers
    var wasCancelled = false;
    const urls: string[] = await this.getURLs();
    var reload_count = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Reloading Logging Config `,
      cancellable: true
      }, 
      async (progress, token) => {
        token.onCancellationRequested(() => {
        });
        var incr = 100/urls.length;
        progress.report({ increment: 0 });
        var reload_count = 0;

        for(var url of urls){
          progress.report({ increment: incr, message: `on ${url} server` });
          if(token.isCancellationRequested){
            wasCancelled = true;
            break;
          }
          var result = await this.postRequest(JSON.stringify(post_body), url);
          if(result["payload"] !== undefined){
            reload_count += 1;
          }
        }
        return reload_count;
    });

    if(reload_count == urls.length){
      vscode.window.showInformationMessage(`Refreshing from ${foundLogFileName ? foundLogFileName:'server log file'}: ${reload_count} server(s) updated`);
    }
    else{
      if(wasCancelled){
        vscode.window.showErrorMessage(`Operation was cancelled ${reload_count} server(s) reloaded`);
      }
      else{
        vscode.window.showErrorMessage(`Operation failed`);
      }
    }
  }

  private async getClasses(){
    if(this.g_IIQClasses){
      return this.g_IIQClasses;
    }

    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getClasses"
      }
    };
    
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Getting classes ...",
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });
    
    this.g_IIQClasses = result["payload"];
    return this.g_IIQClasses;
  }

  private async getClassObjects(cls, showProgress=true){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getClassObjects",
        "theClass": cls
      }
    };
   
    var result = null;
    if(showProgress){
      result = await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Getting class objects ...",
        cancellable: true
        }, 
        progress => {
          return this.postRequest(JSON.stringify(post_body));
        });
    }
    else{
      result = await this.postRequest(JSON.stringify(post_body));
    }

    return result["payload"];
  
  }

  private beautifyIIQObject(xml){
    let replaceDict = {"&lt;": "<",
                       "&gt;": ">",
                       "&amp;&amp;": "&&",
                       "<Source>": "<Source><![CDATA[",
                       "</Source>": "]]></Source>",
                       '(id|created|modified)=".*?"\\s*': ""};
    try{
      for (let key in replaceDict){
        xml = xml.replace(new RegExp(key, "gi"), replaceDict[key]);
      }
    }
    catch(e){
      vscode.window.showErrorMessage(`IIQ object beautification failed: ${e}`);
    }
    return xml;
  }

  private async tokenizeWithDirectTokens(xml){
    const exclusions = [
    "%%ECLIPSE_URL%%",
    "%%ECLIPSE_USER%%",
    "%%ECLIPSE_PASS%%",
    "%%IIQ_SERVERS%%"
    ];
    const props = await this.loadTargetProps();
    const ignoreProps = await this.loadTokensToIgnore();
    var ignorePropsList = Object.keys(ignoreProps);
    try{
      for (let key in props){
        if(exclusions.includes(key) || ignorePropsList.includes(key)){
          continue;
        }
        xml = xml.replace(new RegExp(props[key], "g"), key);
      }
    }
    catch(e){
      vscode.window.showErrorMessage(`IIQ object beautification failed: ${e}`);
    }
    return xml;
  }

  private async tokenizeWithRerverseTokens(xml){
    const reverseTokens = await this.loadReverseTokens();
    const props = await this.loadTargetProps();

    try{
      var doc = new DOMParser().parseFromString(xml);
      for (let key in reverseTokens){
        var element = xpath.select(reverseTokens[key], doc)
        if(element && element.length > 0){
          const directReplacement = props[key];
          //check if we have "direct token" in our target.properties file, only then do the replacement
          if(directReplacement){
            element[0].value = key
          }
        }
      }
      xml = new XMLSerializer().serializeToString(doc)
    }
    catch(e){
      vscode.window.showErrorMessage(`tokenizeWithRerverseTokens failed: ${e}`);
    }
    return xml;
  }

  private async tokenizeIIQObject(xml){
    const reverseTokens = await this.loadReverseTokens();
    if(reverseTokens){
      return await this.tokenizeWithRerverseTokens(xml);
    }
    else{
      return await this.tokenizeWithDirectTokens(xml);
    }
  }

  private async searchObject(cls, objName, showProgress=true, useTokenization: UseTokenization=UseTokenization.Ask){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getObject",
        "theClass": cls,
        "objName": objName
      }
    };
  
    var result = null;
    if(showProgress){
      result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Getting the object for ${objName} ...`,
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });
    }
    else{
      result = await this.postRequest(JSON.stringify(post_body)); 
    }
    let xml = result["payload"];
    xml = this.beautifyIIQObject(xml);

    if(useTokenization == UseTokenization.Yes){
      xml = this.tokenizeIIQObject(xml);
    }
    else if(useTokenization == UseTokenization.Ask){
      const answer = await vscode.window.showQuickPick(["No", "Yes"], {placeHolder: `Would you like to tokenize the object`});
      if(answer === "Yes"){
        xml = this.tokenizeIIQObject(xml);
      }
    }
    return xml;
  }

  public async getObject(){
    var classes = await this.getClasses();
    if(!classes){
      vscode.window.showInformationMessage("No classes were found, exiting");
      return;
    }
    let theClass = await vscode.window.showQuickPick(classes, 
    { placeHolder: 'Pick a class...', ignoreFocusOut: true });
    if(!theClass){
      vscode.window.showInformationMessage("No class was selected, exiting");
      return;
    }

    var classObjects = await this.getClassObjects(theClass);
    let objName = await vscode.window.showQuickPick(classObjects, 
      { placeHolder: `Pick an object for ${theClass} ...`, ignoreFocusOut: true });
    if(!objName){
      vscode.window.showInformationMessage("No object was selected, exiting");
      return;
    }
  
    var xml = await this.searchObject(theClass, objName);
    if(!xml){
      vscode.window.showInformationMessage("Empty object, exiting");
      return;
    }
    const tempFile = tmp.fileSync({ prefix: `${theClass}-${objName}`, postfix: '.xml' });
    fs.writeFileSync(tempFile.name, xml);
    let doc = await vscode.workspace.openTextDocument(tempFile.name); 
    await vscode.window.showTextDocument(doc);
  }

  private async deleteObjectInBulk(cls, objNames){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "deleteObject",
        "theClass": cls,
        "objNames": objNames
      }
    };
    
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Deleting object ${objNames} ...`,
      cancellable: false
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });

    return result["payload"];
  }

  private async deleteObjectWithProgress(cls, objNames){

    var wasCancelled = false;
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Deleting objects: ",
      cancellable: true
      }, 
      async (progress, token) => {
        token.onCancellationRequested(() => {
        });
        var incr = 100/objNames.length;
        progress.report({ increment: 0 });

        for(var i = 0; i < objNames.length; i++){
          try {
            var obj = objNames[i];
            progress.report({ increment: incr, message: `${obj}` });
            var post_body = {
              "workflowArgs":
              {
                "operation": "deleteObject",
                "theClass": cls,
                "objNames": [obj]
              }
            };
            let res = await this.postRequest(JSON.stringify(post_body));
            if(token.isCancellationRequested){
              wasCancelled = true;
              break;
            }
          } catch (error) {
            vscode.window.showErrorMessage(`Operation failed`);
            return "Error";
          }
        }
        return "Success";
      });
      return result;
  }

  public async deleteObject(){
    var classes = await this.getClasses();
    if(!classes){
      vscode.window.showInformationMessage("No classes were found, exiting");
      return;
    }
    let theClass = await vscode.window.showQuickPick(classes, 
    { placeHolder: 'Pick a class...', ignoreFocusOut: true });
    if(!theClass){
      vscode.window.showInformationMessage("No class was selected, exiting");
      return;
    }

    var classObjects = await this.getClassObjects(theClass);
    let objNames = await vscode.window.showQuickPick(classObjects, 
      { placeHolder: `Pick an object for ${theClass} ...`, ignoreFocusOut: true, canPickMany: true });
    if(!objNames){
      vscode.window.showInformationMessage("No object was selected, exiting");
      return;
    }
  
    const answer = await vscode.window.showQuickPick(["Yes", "No"],
                    {placeHolder: `Are you sure you want to delete ${objNames.length} object(s)?`});
    if(!answer || answer === "No"){
      vscode.window.showInformationMessage("No object was deleted");
      return;
    }

    var showDeleteProgress: boolean = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('showDeleteProgress');
    var status = null; 
    if(showDeleteProgress){
      status = await this.deleteObjectWithProgress(theClass, objNames);
    }
    else{
      status = await this.deleteObjectInBulk(theClass, objNames);
    }
    if(status){
      vscode.window.showInformationMessage(`Operation status: ${status}`);
    }
  }

   public async switchEnv(){

    var old_environment = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');
    
    var environments = await this.listEnvironments();
    var environment = await vscode.window.showQuickPick(environments, 
    { placeHolder: 'Select an environment', ignoreFocusOut: false });
    if(environment === undefined){
      return null;
    }

    if(old_environment === environment){
      return environment;
    }

    await vscode.workspace.getConfiguration('iiq-dev-accelerator').update('environment', environment, true);
    environment = await vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');

    //reset old environment's settings
    this.g_props = {};
    vscode.workspace.getConfiguration('iiq-dev-accelerator').update('iiq_url', "", true);
    vscode.workspace.getConfiguration('iiq-dev-accelerator').update('username', "", true);
    vscode.workspace.getConfiguration('iiq-dev-accelerator').update('password', "", true);
    let [url, username, password] = await this.getSiteConfig();
    if(url && username && password){
      await this.updateStatusBar("IIQ: " + environment);
    }
    else{
      await this.updateStatusBar("$(thumbsdown) IIQ is not ready...");
    }

    return environment;
  }


  public async runContext(){
    var editor = vscode.window.activeTextEditor;
    if(!editor || !editor.document)  {
      vscode.window.showInformationMessage(`To execute based on context, please open file with some IIQ object or a logging config`); 
      return;
    }
    switch(this.g_contextManager.getContextValue()){
      case ContextValue.BeanShellSelection:
        this.evalBS();
        break;
      case ContextValue.LogConfig:
        this.reloadLog();
        break;
      case ContextValue.Rule:
        this.runRule(this.g_contextManager.getObjName());
        break;
      case ContextValue.Task:
        this.runTask(this.g_contextManager.getObjName());
        break;
      case ContextValue.TempXMLObject:
        this.refreshObject();
    }
  }

  public async deployChange(){
    var gitExtension = vscode.extensions.getExtension('vscode.git');
    if(!gitExtension){
      vscode.window.showInformationMessage(`Can't get git extension`);
      return;
    }
    const gitExports = await gitExtension.activate();
    const gitAPI = gitExports.getAPI(1);
    while(gitAPI.repositories.length === 0){
      vscode.window.showInformationMessage(`Couldn't find any git repositories`);
      //await gitAPI.onDidOpenRepository();
      return;
    }
    
    var repository = gitAPI.repositories.filter(r => r.rootUri.fsPath.replace(/\\/g, "/").startsWith(this.g_workspaceFolder))[0];
    if(undefined == repository){
      vscode.window.showErrorMessage(`Couldn't find a git repository at ${this.g_workspaceFolder} try to open VSCode with a different folder`);
      return;
    }
    const unstaged = repository.state.workingTreeChanges.map(r => r.resource);
    const staged = repository.state.indexChanges.map(r => r.resource);
    const all = unstaged.concat(staged);
    //const all = Array.from(new Set([...unstaged, ...staged]));
    var filesToDeploy = all.filter(res => res.letter !== "D").
                            filter(res => path.extname(res.resourceUri.fsPath) === '.xml').
                            map(res => res.resourceUri.fsPath);
    filesToDeploy = Array.from(new Set(filesToDeploy));
    if(filesToDeploy.length === 0){
      vscode.window.showWarningMessage(`Currently you don't have any modified or new files to import`);
      return;
    }
  
    var files = filesToDeploy.map(f => require("path").basename(f)).join("\n");
    
    var environment = await this.getEnvironment();
    environment = environment ? `to ${environment}`:"";
    const isPlural = filesToDeploy.length > 1 ? "s":"";
    const pick = await vscode.window.showInformationMessage(
      `You are about to import the following file${isPlural} ${environment}:\n\n${files}`, 
      { modal: true }, "Yes");
    if(pick !== "Yes"){
      return;
    }

    await this.importFileList(filesToDeploy);
  }

  public async getWorkflowVersion(url, username, password) : Promise<string>{
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getVersion"
      }
    };

    var result = await this.postRequestInternal(JSON.stringify(post_body), url, username, password);
    if(result["payload"] === undefined){
      return "undefined";
    }
    return result["payload"];
  }

  public async buildDeployment(environment){
    if(null == this.g_baseSSBFolder){
      vscode.window.showWarningMessage(`Couldn't find build.properties. Check that you use proper SSB folder structure under your workspace`);
      return false;
    }
    const util = require('util');
    const exec = util.promisify(require('child_process').exec);
    
    const buildCmd = "build clean main";
    const result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Running SSB "${buildCmd}" for ${environment}`,
      cancellable: false
      }, 
      async (progress) => {
        const {stdout, stderr} = await exec(`${buildCmd}`, 
                                      {cwd: `${this.g_baseSSBFolder}`, 
                                        env: {"SPTARGET": environment}}); 
        if (stderr) {
          vscode.window.showWarningMessage(`Build failed. ${stderr}`);
          return false;
        }
        return true;
      });

    return result;
  }

  public async deployCustomBuild(){
    const env = await this.getEnvironment();
    if(!env){
      vscode.window.showInformationMessage(`Can't deploy without knowing the SSB environment`);
      return;
    }

    const pick1 = await vscode.window.showInformationMessage(
      `Would you like to run SSB build for ${env}?\n(In case you already have the build, please say "No")`, 
      { modal: true }, "Yes", "No");
    if(!pick1){
      vscode.window.showInformationMessage(`Deployment was cancelled`);
      return;
    }
    if(pick1 === 'Yes'){
      const isSuccess = await this.buildDeployment(env);
      // if(!isSuccess){
      //   vscode.window.showInformationMessage(`Something went wrong during the build, please fix it and try again`);
      //   return;
      // }
    }

    const spInitCustom = await vscode.workspace.findFiles("**/build/extract/WEB-INF/config/sp.init-custom.xml");
    if(1 != spInitCustom.length){
      vscode.window.showInformationMessage(`Couldn't find /build/extract/WEB-INF/config/sp.init-custom.xml. Please run SSB build`);
      return;
    }
    const spInitCustomPath = spInitCustom[0].fsPath.replace(/\\/g, "/");
    const deployBaseDir = require("path").dirname(spInitCustomPath);
    const spInitCustomContent = fs.readFileSync(spInitCustomPath, {encoding:'utf8', flag:'r'});
    const parsedXml = this.parseXMLObject(spInitCustomContent);
    const filesToDeploy = parsedXml.sailpoint.ImportAction
                              .reduce(function(arr, obj){
                                if("include" === obj.ATTR.name){
                                  arr.push(obj.ATTR.value);
                                }
                                return arr;
                              }, [])
                              .map(f=>deployBaseDir + "/" + f);
    if(!filesToDeploy){
      vscode.window.showInformationMessage(`Couldn't find files in sp.init-custom.xml`);
      return;
    }
    if(0 == filesToDeploy.length){
      vscode.window.showInformationMessage(`Couldn't find files under build/extract folder. Please run SSB build`);
      return;
    }
    var files = filesToDeploy.map(f => require("path").basename(f)).join("\n");
    var deployCustomBuildQuietly: boolean = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('deployCustomBuildQuietly');
    if(!deployCustomBuildQuietly){
      const pick2 = await vscode.window.showInformationMessage(
        `You are about to import the following ${filesToDeploy.length} files to ${env} \n\n${files}`, 
        { modal: true }, "Yes");
      if(pick2 !== "Yes"){
        return;
      }
    }
    
    await this.importFileList(filesToDeploy, false);
  }

  public async compareLocalWithDeployed(){
    var editor = vscode.window.activeTextEditor;
    if(!editor || !editor.document || 
      path.extname(editor.document.fileName) != '.xml')  {
      vscode.window.showWarningMessage(`Please make sure that your currently open document is a of xml type`); 
      return;
    }  

    var classes = await this.getClasses();
    if(!classes){
      vscode.window.showInformationMessage("No supported classes were found, exiting");
      return;
    }
    
    const parsedXml = this.parseXMLObject();
    const keys = Object.keys(parsedXml);
    if(!keys || keys.length == 0 || keys.length > 1){
      vscode.window.showWarningMessage(`An IIQ object should have a well formed xml with one root element`); 
      return;
    }

    const objectClass = keys[0];
    if(!classes.includes(objectClass)){
      vscode.window.showWarningMessage(`${objectClass} is not a valid IIQ class. Please make sure your xml contains only one object`); 
      return;
    }

    const objectName = parsedXml[objectClass].ATTR.name;
    var xml = await this.searchObject(objectClass, objectName);
    if(!xml || xml === 'fail'){
      vscode.window.showInformationMessage("Couldn't find the deployed object in your target environment");
      return;
    }
    const tempFile = tmp.fileSync({ prefix: `${objectClass}-${objectName}`, postfix: '.xml' });
    fs.writeFileSync(tempFile.name, xml);
  
    const currObjPath = vscode.Uri.file(editor.document.fileName);
    const deployedObjPath = vscode.Uri.file(tempFile.name);
    
    const title = "Local vs deployed " + objectClass + ":'" + objectName + "'";
    await vscode.commands.executeCommand("vscode.diff", currObjPath, deployedObjPath, title);
  }

  public async collectOpenXMLFiles(){
    var res = [];
    var document = vscode.window.activeTextEditor.document;
    const firstImportedName = document.fileName;

    if(path.extname(document.fileName) === '.xml'){
      res.push(document.fileName);
    }

    const max_count = 20;
    var cnt = 0;
    do{
      await vscode.commands.executeCommand('workbench.action.nextEditor');
      document = vscode.window.activeTextEditor.document;
      if(firstImportedName === document.fileName || cnt++ > max_count){
        break;
      }

      if(path.extname(document.fileName) === '.xml'){
        res.push(document.fileName);
      }
    }while(true)
    return res;
  }

  public async deployOpenFiles(){
    const env = await this.getEnvironment();
    if(!vscode.window.activeTextEditor){
      vscode.window.showInformationMessage(`Please open an xml document to import`); 
      return;
    }  
    
    const openFiles = await this.collectOpenXMLFiles();
    const files = openFiles.map(f => require("path").basename(f)).join("\n");

    const pick = await vscode.window.showInformationMessage(
      `You are about to import the following ${openFiles.length} files to ${env} \n\n${files}`, 
      { modal: true }, "Yes");
    if(pick !== "Yes"){
      return;
    }

    await this.importFileList(openFiles);
  }
  public async showSysInfo(){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getSysInfo"
      }
    };

    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Retrieving system information...",
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });

    if(result["payload"] !== undefined){
      const tempFile = tmp.fileSync({ prefix: 'sysinfo-', postfix: '.info' });
      fs.writeFileSync(tempFile.name, result["payload"]);
      let doc = await vscode.workspace.openTextDocument(tempFile.name); 
      await vscode.window.showTextDocument(doc);
    }
    else{
      vscode.window.showErrorMessage(`Operation failed`);
    }
  }

  private isProjectFile(searchFileName: string){
    if(searchFileName.replace(/\\/g, "/").includes(this.g_workspaceFolder)){
      return true;
    }
    return false;
  }

  public async refreshObject(){
    if(this.g_contextManager.getContextValue() != ContextValue.TempXMLObject || !this.g_contextManager.getObjName())  {
      vscode.window.showInformationMessage(`To execute based on context, please open file with some IIQ object or a logging config`); 
      return;
    }

    var editor = vscode.window.activeTextEditor;
    var theClass = this.g_contextManager.getObjClass();
    var objName = this.g_contextManager.getObjName();

    var xml = await this.searchObject(theClass, objName);
    if(!xml){
      vscode.window.showInformationMessage("Empty object, exiting");
      return;
    }

    var showDiff = false;
    const answer = await vscode.window.showQuickPick(["Yes", "No"],
                    {placeHolder: `Would you like to display it in a diff mode?`});
    if(answer === "Yes"){
      showDiff = true;
    }

    const oldFileName = editor.document.fileName;
    const newFile = tmp.fileSync({ prefix: `${theClass}-${objName}`, postfix: '.xml' });
    const newFileName = newFile.name;
    fs.writeFileSync(newFileName, xml);

    if(showDiff){
      const title = "Old vs new " + theClass + ":'" + objName + "'";
      await vscode.commands.executeCommand("vscode.diff", vscode.Uri.file(oldFileName), vscode.Uri.file(newFileName), title);
    }
    else{
      let doc = await vscode.workspace.openTextDocument(newFileName); 
      await vscode.window.showTextDocument(doc);
    }
  }

  public async exportObjects(){
    let exportFolder = await vscode.window.showInputBox({
      ignoreFocusOut: true,
      value: `${this.g_workspaceFolder}/exportedObjects`,
      prompt: `Enter folder to save the exported objects`
    });
    if(exportFolder === undefined){
      vscode.window.showErrorMessage(`Please specify the path to IIQ libraries so that you file can get compiled`);
      return;
    }
    if (!fs.existsSync(exportFolder)){
      fs.mkdirSync(exportFolder, { recursive: true });
    }
    else{
      const answer = await vscode.window.showQuickPick(["No", "Yes"], {placeHolder: `The folder already exists, do you want to overwrite it?`});
      if(answer === "No"){
        return;
      }
    }

    var classes = await this.getClasses();
    if(!classes){
      vscode.window.showInformationMessage("No classes were found, exiting");
      return;
    }

    let selectedClasses = await vscode.window.showQuickPick(classes, 
      { placeHolder: `Pick classes that you want to export...`, ignoreFocusOut: true, canPickMany: true });
    if(!selectedClasses){
      vscode.window.showInformationMessage("No classes was selected, exiting");
      return;
    }
    let useTokenization: UseTokenization = UseTokenization.No;
    const answer = await vscode.window.showQuickPick(["No", "Yes"], {placeHolder: `Would you like to apply reverse tokenization?`});
    if(answer === "Yes"){
      useTokenization = UseTokenization.Yes;
    }

    let objectsToExport = {};
    let totalObjectCnt = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Collecting objects for class `,
      cancellable: true
      }, 
      async (progress, token) => {
        token.onCancellationRequested(() => {
        });
        var totalObjectCnt = 0;
        var incr = 100/selectedClasses.length;
        progress.report({ increment: 0 });
        for (let aClass of selectedClasses){
          if(token.isCancellationRequested){
            break;
          }
          progress.report({ increment: incr, message: `${aClass}` });
          let objects = await this.getClassObjects(aClass, false);
          if(objects && objects.length > 0){
            objectsToExport[aClass] = objects 
            totalObjectCnt += objects.length;
          }
        }
        return totalObjectCnt;
      });

    
    let exportedCount = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Exporting  `,
      cancellable: true
      }, 
      async (progress, token) => {
        token.onCancellationRequested(() => {
        });
        var exportedCount = 0;
        var incr = 100/totalObjectCnt;
        progress.report({ increment: 0 });
        for (let aClass in objectsToExport){
          if(token.isCancellationRequested){
            break;
          }
          let classFolder = `${exportFolder}/${aClass}`;
          if (!fs.existsSync(classFolder)){
            fs.mkdirSync(classFolder);
          }
          for (let objName of objectsToExport[aClass]){
            if(token.isCancellationRequested){
              break;
            }
            progress.report({ increment: incr, message: `${aClass} "${objName}"` });
            var xml = await this.searchObject(aClass, objName, false, useTokenization);
            fs.writeFileSync(`${classFolder}/${objName}.xml`, xml, {encoding:'utf8',flag:'w'});
            exportedCount++;
          }
        }
        return exportedCount;
      });

    vscode.window.showInformationMessage(`${exportedCount} objects out of ${totalObjectCnt} were exported to ${exportFolder}`);
  }
}