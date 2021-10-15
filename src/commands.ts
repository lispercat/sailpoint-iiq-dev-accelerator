import * as vscode from 'vscode';
import fetch from 'node-fetch';
import {Headers} from 'node-fetch';
import * as base64 from 'base-64';
import * as fs from 'fs';
import * as propertiesReader from 'properties-reader';
import * as xml2js from 'xml2js';
import * as tmp from 'tmp';
import { URL } from 'url';
import { execSync } from 'child_process';
import { Console } from 'console';

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

  constructor(name: string) {
    this._name = name;
  }

  public set(contextValue: ContextValue, objClass? :string, objName?: string, isProjectObject?: boolean): void {
    //try to deduce contextValue when only objClass and objNames are set
    if(null == contextValue && objClass){
      switch(objClass){
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
    else if(null == contextValue && !objClass){
      throw new Error('Either context or objClass need to be initialized');
    }
    this._lastValue = contextValue;
    this._objClass = objClass;
    this._objName = objName;
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
}

export class DevIIQCommands {
  private g_props: { [key: string]: any } = {"filePath": null, "props": null, "mtime": null};
  private g_statusBarEnvItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  private g_IIQClasses = null;
  private g_workflowUpdated: boolean = false;
  private g_workflowUrl: string = "/rest/workflows/IIQDevAcceleratorWF/launch";
  private g_contextManager : ContextManager = new ContextManager("iiq.context");
  private g_iiqOutput = vscode.window.createOutputChannel("iiq-output");
  constructor(){
    this.contextChange();
    vscode.window.onDidChangeActiveTextEditor((textEditor: vscode.TextEditor | undefined) => {
      if (!textEditor || undefined == textEditor) {
        return;
      }
      this.contextChange();
    });
		vscode.window.onDidChangeTextEditorSelection((e: vscode.TextEditorSelectionChangeEvent) => {
			this.contextChange();
		});
  }

  private async contextChange(){
    var editor = vscode.window.activeTextEditor;
    if(!editor.document)  {
      vscode.window.showInformationMessage(`To execute based on context, please open file with some IIQ object or a logging config`); 
      return;
    }

    var ext = require('path').extname(editor.document.fileName);
    var baseName = require('path').basename(editor.document.fileName);
    var selection = editor.selection;
    var script = editor.document.getText(selection);
    if(script && ext === '.xml'){
      this.g_contextManager.set(ContextValue.BeanShellSelection);
    }
    else if(ext === ".properties" && baseName.startsWith("log4j")){
      this.g_contextManager.set(ContextValue.LogConfig);
    }
    else if(ext === ".java"){
      this.g_contextManager.set(ContextValue.JavaFile);
    }
    else if(ext === '.xml'){
      try {
        var parsedXml = this.parseCurrentXmlFile();
        if(parsedXml){
          var theClass = Object.keys(parsedXml)[0];
          var objName = parsedXml[theClass]["ATTR"]["name"];
          var isProjectObject: boolean = await this.isProjectFile(baseName);
          this.g_contextManager.set(null, theClass, objName, isProjectObject);
        }
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
      const path = require("path");
      const fullWFPath = path.resolve(__dirname, "../src/workflow.xml");
      const fileContent = fs.readFileSync(fullWFPath, {encoding:'utf8', flag:'r'});
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

  public async updateStatusBar(currEnv: string){
    this.g_statusBarEnvItem.text = "IIQ: " + currEnv;
    if(currEnv){
      this.g_statusBarEnvItem.show();
    }else{
      this.g_statusBarEnvItem.hide();
    }
  }

  private parseCurrentXmlFile(text:string | null = null){
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


  private canUseCachedProp(){
    if(!this.g_props["filePath"]){
      return false;
    }
    const mtime = fs.statSync(this.g_props["filePath"]).mtime;
    if(mtime.getTime() != this.g_props["mtime"].getTime()){
      return false;
    }
    if(!this.g_props["props"]){
      return false;
    }
    return true;
  }

  private async listEnvironments(): Promise<string[]>{
    var result:string[] = [];

    var searchFileName = '*.target.properties';
    const uris = await vscode.workspace.findFiles(`**/${searchFileName}`);
    uris.forEach((uri) => {
      let [env, rest] = require('path').basename(uri.fsPath).split(".");
      result.push(env);
    });
    return result;
  }

  public async updateStatusBarIfEnvironmentIsSet(){
    var environment: string = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');
    if(!environment){
      return;
    }
    await this.updateStatusBar(environment);
  }

  private async getEnvironment(){
    var environment: string = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');
    if(!environment){
      var environments = await this.listEnvironments();
      if(!environments || environments.length < 1){
        return null;
      }
      environment = await vscode.window.showQuickPick(environments, 
      { placeHolder: 'Select an environment', ignoreFocusOut: false });
      if(environment === undefined){
        return null;
      }
      await vscode.workspace.getConfiguration('iiq-dev-accelerator').
            update('environment', environment, true);
      environment = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');
    }
    await this.updateStatusBar(environment);
    return environment;
  }

  public async getFileProperties(fileName){
    const uris = await vscode.workspace.findFiles(`**/${fileName}`);
    if(0 == uris.length){
      return null;
    }
    var uri = uris[0];
    console.log(`Trying to read ${uri.fsPath} file`);
    this.g_props["filePath"] = uri.fsPath.toString();
    this.g_props["mtime"] = fs.statSync(this.g_props["filePath"]).mtime;
    var properties = propertiesReader(this.g_props["filePath"]).getAllProperties();
    for(var key in properties){
      var val: string = properties[key].toString();
      properties[key] = val.replace(/\\\\/g, "\\");
    };

    return properties;
  }

  public async loadTargetProps(){
    if(this.canUseCachedProp()){
      return this.g_props["props"];
    }
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
    this.g_props["props"] = allProps;
    return this.g_props["props"];
  }

  public processFileContent(fileContent, props){
    var errors = {"processFileErrors" : []};
    if(props){
      var found = fileContent.match(/%%\w+%%/g);
      if(found){
        found.forEach((token) => {
          var replacement = props[token]; 
          if(replacement != null){
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
          return;
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
    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
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
      const fullWFPath = path.resolve(__dirname, "../src/workflow.xml");
      vscode.window.showErrorMessage(`Check if you manually imported the IIQ Dev Accelerator Workflow at ${fullWFPath}. Post request failed with ${error}`);
      result["fail"] = error;
    }
    
    return result;

  }
  private async postRequest(post_body){
    const [url, username, password] = await this.getSiteConfig();
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
    var folders  = vscode.workspace.workspaceFolders;
    for(var i = 0; i < folders.length; i++){
      //const uris = await vscode.workspace.findFiles(`**/WEB-INF/lib/identityiq.jar`);
      const uris = await vscode.workspace.findFiles(`**/identityiq.jar`);
      console.log("now trying to go over files...");
      if(uris.length > 0){
        var iiqJar = uris[0].fsPath;
        return require('path').dirname(iiqJar).replace(/\\/g, "/");
      }
    }
    return null;
  }

  private validateIIQLibPath(path){
    if (!path) {
      return 'You must enter some input';
    }
    const glob = require('glob');
    var result = glob.sync(path + '/identityiq.jar');
    if(result.length == 0){
      return `Couldn't find *.jar files under the folder ${path}`
    }
    return undefined;
  }

  private getClassFile(path, file) : string{
    const glob = require('glob');
    var result = glob.sync(`${path}/**/${file}`);
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
    var classFileBaseName = require('path').basename(javaFile, '.java') + '.class';
    var compilerPath = `javac`;
    var javaCompileOptions = `-source 1.8 -target 1.8`;  
    const cmd = `${compilerPath} ${javaCompileOptions} -d ${outputClassDir} -cp ${classPath} ${javaFile}`;

    const compileResult = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Compiling ${require('path').basename(javaFile)}`,
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
      vscode.window.showErrorMessage(`Couldn't compile ${require('path').basename(javaFile)}. Please see the output`);
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
    var relativeClassPath = require('path').relative(outputClassDir, classFile).replace(/\\/g, "/");
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
        require('path').extname(vscode.window.activeTextEditor.document.fileName) != '.xml'){
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
    if(!editor || require('path').extname(editor.document.fileName) != '.xml'){
      vscode.window.showInformationMessage(`Please open rule or rule argument file`); 
      return null;
    }

    var parsedXml = this.parseCurrentXmlFile();
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
    if(foundLogFileName){
      var folders  = vscode.workspace.workspaceFolders;
      for(var i = 0; i < folders.length; i++){
        const uris = await vscode.workspace.findFiles(`**/${searchFileName}`, `${folders[i].uri.fsPath}/**`);
        console.log("now trying to go over files...");
        uris.forEach((uri) => {
          console.log(`Trying to read ${uri.fsPath} file`);
          logContent = fs.readFileSync(uri.fsPath, {encoding:'utf8', flag:'r'}); 
        });
      }
    }

    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "reloadLog",
        "logContent": logContent
      }
    };
    
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Reloading Logging Config from ${foundLogFileName ? foundLogFileName:'server log file'}`,
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });


    if(result["payload"] !== undefined){
      vscode.window.showInformationMessage(`Refreshing from ${foundLogFileName ? foundLogFileName:'server log file'}: ${result["payload"]}`);
    }
    else{
      vscode.window.showErrorMessage(`Operation failed`);
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

  private async getClassObjects(cls){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getClassObjects",
        "theClass": cls
      }
    };
    
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: "Getting class objects ...",
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });

    return result["payload"];
  
  }

  private async searchObject(cls, objName){
    var post_body = 
    {
      "workflowArgs":
      {
        "operation": "getObject",
        "theClass": cls,
        "objName": objName
      }
    };
    
    var result = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Getting the object for ${objName} ...`,
      cancellable: true
      }, 
      progress => {
        return this.postRequest(JSON.stringify(post_body));
      });

    return result["payload"];
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
    this.g_props["props"] = null;
    var url = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('iiq_url');
    var username = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('username');
    var password = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('password');
    if(url || username || password){
      vscode.workspace.getConfiguration('iiq-dev-accelerator').update('iiq_url', "", true);
      vscode.workspace.getConfiguration('iiq-dev-accelerator').update('username', "", true);
      vscode.workspace.getConfiguration('iiq-dev-accelerator').update('password', "", true);
    }

    await this.updateStatusBar(environment);
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
    
    const rootPaths = vscode.workspace.workspaceFolders;
    var repository = null;
    for(var i=0; i < rootPaths.length; i++){
      var dir = rootPaths[i].uri.fsPath;
      repository = gitAPI.repositories.filter(r => r.rootUri.fsPath.startsWith(dir))[0];
      if(undefined != repository){
        break;
      }
      else{
        vscode.window.showErrorMessage(`Couldn't find a git repository at ${dir} try to open VSCode with a different folder`);
      }
    }
    if(undefined == repository){
      return;
    }
    const unstaged = repository._repository.workingTreeGroup.resourceStates;
    const staged = repository._repository.indexGroup.resourceStates;
    const all = unstaged.concat(staged);
    //const all = Array.from(new Set([...unstaged, ...staged]));
    var filesToDeploy = all.filter(res => res.letter !== "D").
                            filter(res => require('path').extname(res.resourceUri.fsPath) === '.xml').
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
    const buildProps = await vscode.workspace.findFiles("**/build.properties");
    if(1 != buildProps.length){
      vscode.window.showWarningMessage(`Couldn't find build.properties.`);
      return false;
    }
    const buildBaseDir = require("path").dirname(buildProps[0].fsPath);
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
                                      {cwd: `${buildBaseDir}`, 
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
    const parsedXml = this.parseCurrentXmlFile(spInitCustomContent);
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
      require('path').extname(editor.document.fileName) != '.xml')  {
      vscode.window.showWarningMessage(`Please make sure that your currently open document is a of xml type`); 
      return;
    }  

    var classes = await this.getClasses();
    if(!classes){
      vscode.window.showInformationMessage("No supported classes were found, exiting");
      return;
    }
    
    const parsedXml = this.parseCurrentXmlFile();
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

    if(require('path').extname(document.fileName) === '.xml'){
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

      if(require('path').extname(document.fileName) === '.xml'){
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

  private async isProjectFile(searchFileName){
    var folders  = vscode.workspace.workspaceFolders;
    for(var i = 0; i < folders.length; i++){
      const uris = await vscode.workspace.findFiles(`**/${searchFileName}`, `${folders[i].uri.fsPath}/**`);
      console.log("now trying to go over files...");
      if(uris.length > 0){
        return true;
      }
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

}