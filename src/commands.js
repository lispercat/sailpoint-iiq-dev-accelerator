const vscode = require('vscode');
const fetch = require('node-fetch');
const base64 = require('base-64');
const fs = require('fs');
const propertiesReader = require('properties-reader');
const xml2js = require('xml2js');
const tmp = require('tmp');

var g_props = {"filePath": null, "props": null, "mtime": null};

module.exports = {
  importFile,
  runTask,
  runTaskWithAttr,
  runRule,
  evalBS,
  getLog,
  reloadLog,
  getObject,
  deleteObject,
  switchEnv,
  runContext
}

function parseCurrentXmlFile(){
  const xmlParser = new xml2js.Parser({ attrkey: "ATTR" });

  var text = vscode.window.activeTextEditor.document.getText();
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


function canUseCachedProp(){
  if(!g_props["filePath"]){
    return false;
  }
  const mtime = fs.statSync(g_props["filePath"]).mtime;
  if(mtime.getTime() != g_props["mtime"].getTime()){
    return false;
  }
  if(!g_props["props"]){
    return false;
  }
  return true;
}

async function listEnvironments(){
  var result = [];

  var folders  = vscode.workspace.workspaceFolders;
  var searchFileName = '*.target.properties';
  for(var i = 0; i < folders.length; i++){
    const uris = await vscode.workspace.findFiles(`**/${searchFileName}`, `${folders[i].uri.fsPath}/**`);
    uris.forEach((uri) => {
      let [env, rest] = require('path').basename(uri.fsPath).split(".");
      result.push(env);
    });
  }
  return result;
}

async function getEnvironment(){
  var environment = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');
  if(!environment){
    var environments = await listEnvironments();
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
  
  return environment;
}

async function loadTargetProps(){
  if(canUseCachedProp()){
    return g_props["props"];
  }
  var environment = await getEnvironment();
  if(!environment){
    return null;
  }

  var fileName = `${environment}.target.properties`;
  console.log(`Looking for and loading ${fileName}`);

  var folders  = vscode.workspace.workspaceFolders;
  for(var i = 0; i < folders.length; i++){
    const uris = await vscode.workspace.findFiles(`**/${fileName}`, `${folders[i].uri.fsPath}/**`);
    console.log("now trying to go over files...");
    uris.forEach((uri) => {
      console.log(`Trying to read ${uri.fsPath} file`);
      g_props["filePath"] = uri.fsPath.toString();
      g_props["mtime"] = fs.statSync(g_props["filePath"]).mtime;
      g_props["props"] = propertiesReader(g_props["filePath"]);
    });
  }
  return g_props["props"];
}

function processFileContent(fileContent, props){
  if(props){
    var found = fileContent.match(/%%\w+%%/g);
    if(found){
      found.forEach((m) => {
        fileContent = fileContent.replace(m, props.get(m));
      });
    }
  }
  return fileContent;
}

function validateConfigInput(text){
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

async function getSiteConfig(){
  var environment = await getEnvironment();
  var url = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('iiq_url');
  var username = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('username');
  var password = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('password');

  if(!url || !username || !password){
    const props = await loadTargetProps();
    if(props){
      url = props.get("%%ECLIPSE_URL%%");
      username = props.get("%%ECLIPSE_USER%%");
      password = props.get("%%ECLIPSE_PASS%%");
    }
    if(!url || !username || !password){
      url = url ? url:"http://localhost:8080/identityiq"; 
      username = username ? username:"spadmin";
      password = password ? password:"admin";
      let configParams = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        value: `${url};${username};${password}`,
        prompt: `Couldn't detect your full configuration from ${environment}.target.properties). Please enter here `, 
        validateInput: validateConfigInput
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
  return [url, username, password];
}

async function postRequest(post_body){
  var result = {};
  const [url, username, password] = await getSiteConfig();
  if(!url || !username || !password){
    vscode.window.showInformationMessage(`Please update your configuration with url, username and password`);
    return;
  }

  let headers = new fetch.Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
  
  await (async () => {
    try {
      let full_url = `${url.replace(/\/$/g, "")}/rest/workflows/IIQDevAcceleratorWF/launch`;
      const response = await fetch(full_url, {
        method: 'POST', 
        body: post_body,
        headers}
      );
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
      vscode.window.showInformationMessage(`Post request failed with ${error}`);
    }
  })();
  
  return result;
}

async function importFile(){
  if(!vscode.window.activeTextEditor || 
    require('path').extname(vscode.window.activeTextEditor.document.fileName) != '.xml'){
    vscode.window.showInformationMessage(`Please open an xml document to import`); 
    return;
  }
  var document = vscode.window.activeTextEditor.document;
  var props = await loadTargetProps();
  var fileContent = processFileContent(document.getText(), props);
  
  var post_body = {
    "workflowArgs": {
      "operation": "Import",
      "resource": fileContent
    }
  };

  var result = await vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: "Importing file...",
    cancellable: true
    }, 
      progress => {return postRequest(JSON.stringify(post_body));
    });

  if(result["payload"] !== undefined){
    vscode.window.showInformationMessage(`File import result: ${result["payload"]}`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }
}

async function getTasksNames(){
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
      progress => {return postRequest(JSON.stringify(post_body));
    });

  return result["payload"];
}


async function runTask(taskName = null){
  if(!taskName){
    taskName = await vscode.window.showQuickPick(getTasksNames(), 
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
      progress => {return postRequest(JSON.stringify(post_body));
    });


  if(result["payload"] !== undefined){
    vscode.window.showInformationMessage(`Launched "${taskName} with result: ${result["payload"]}"`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }
}

async function getArgumentsFromBuffer(){
  var retArgs = null;
  var editor = vscode.window.activeTextEditor;
  if(!editor || require('path').extname(editor.document.fileName) != '.xml'){
    vscode.window.showInformationMessage(`Please open rule or rule argument file`); 
    return null;
  }

  var parsedXml = parseCurrentXmlFile();
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

async function getArgumentsFromInput(prompt, initialValues){
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


async function runTaskWithAttr(){
  let taskName = await vscode.window.showQuickPick(getTasksNames(), 
  { placeHolder: 'Pick a task...', ignoreFocusOut: true});

  if(!taskName){
    vscode.window.showInformationMessage(`No task name was specified, cancelled`);
    return;
  }

  let inputArgs = await getArgumentsFromInput("Please enter arguments (filter->name==\"Identity-XYZ\" etc.): ",  "");

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
      progress => {return postRequest(JSON.stringify(post_body));
    });


  if(result["payload"] !== undefined){
    vscode.window.showInformationMessage(`Launched "${taskName} with result: ${result["payload"]}"`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }

}


async function getRuleNames(ruleName = null){
  var post_body = 
  {
    "workflowArgs":
    {
      "operation": "getRules",
      "ruleName": ruleName
    }
  };
  
  ruleName = ruleName ? ruleName:"all rules";
  var result = await vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: `Retrieving information for ${ruleName}`,
    cancellable: true
    }, 
      progress => {return postRequest(JSON.stringify(post_body));
    });

  return result["payload"];
}

function argsIntersect(ruleArgs, fileArgs){
  var result = ruleArgs.filter(value => -1 !== fileArgs.indexOf(value));
  return result.length > 0;
}

async function retrieveCurrentRuleName(){
  var ruleName = null;
  var argText = vscode.window.activeTextEditor.document.getText();
  var parsedXml = null;
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

async function runRule(ruleName = null){
  let rulesMap = await getRuleNames(ruleName);
  if(!ruleName){
    ruleName = await vscode.window.showQuickPick(Object.keys(rulesMap), 
    { placeHolder: 'Pick a rule or press Esc to run the currently open rule', ignoreFocusOut: true });
  }
  if(!ruleName){
    vscode.window.showInformationMessage(`No rule name was specified, exiting`);
    return;
  }
  let ruleArgs = rulesMap[ruleName];
  let inputArgs = {};
  if(ruleArgs.length > 0){
    inputArgs = await getArgumentsFromBuffer();
    if(!inputArgs || !argsIntersect(ruleArgs, Object.keys(inputArgs))){
      inputArgs = await getArgumentsFromInput("Please enter arguments (arg1->value1 arg2->'value two' etc.): ",  ruleArgs.join('-> ') + "->");
    }
    if(!inputArgs){
      inputArgs = {};
    }
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
  progress => {return postRequest(JSON.stringify(post_body));
  });

  if(result["payload"] !== undefined){
    vscode.window.showInformationMessage(`Reslut: ${result["payload"]}`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }
}

async function evalBS(){
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
    progress => {return postRequest(JSON.stringify(post_body));
    });

  if(result["payload"] !== undefined){
    vscode.window.showInformationMessage(`Reslut: ${result["payload"]}`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }
}

async function getLog(){
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
    progress => {return postRequest(JSON.stringify(post_body));
    });

  if(result["payload"] !== undefined){
    //let rootFolder = vscode.workspace.rootPath;
    const tempFile = tmp.fileSync({ prefix: 'log4j-', postfix: '.properties' });
    fs.writeFileSync(tempFile.name, result["payload"]);
    let doc = await vscode.workspace.openTextDocument(tempFile.name); 
    await vscode.window.showTextDocument(doc);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }
}

async function reloadLog(){
  var logContent = null;
  var environment = await getEnvironment();
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
      progress => {return postRequest(JSON.stringify(post_body));
    });


  if(result["payload"] !== undefined){
    vscode.window.showInformationMessage(`Refreshing from ${foundLogFileName ? foundLogFileName:'server log file'}: ${result["payload"]}"`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }
}

async function getClasses(){
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
      progress => {return postRequest(JSON.stringify(post_body));
    });

  return result["payload"];
}

async function getClassObjects(cls){
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
      progress => {return postRequest(JSON.stringify(post_body));
    });

  return result["payload"];
 
}

async function searchObject(cls, objName){
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
      progress => {return postRequest(JSON.stringify(post_body));
    });

  return result["payload"];
 }

async function getObject(){
  var classes = await getClasses();
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

  var classObjects = await getClassObjects(theClass);
  let objName = await vscode.window.showQuickPick(classObjects, 
    { placeHolder: `Pick an object for ${theClass} ...`, ignoreFocusOut: true });
  if(!objName){
    vscode.window.showInformationMessage("No object was selected, exiting");
    return;
  }
 
  var xml = await searchObject(theClass, objName);
  if(!xml){
    vscode.window.showInformationMessage("Empty object, exiting");
    return;
  }
  const tempFile = tmp.fileSync({ prefix: `${theClass}-${objName}`, postfix: '.xml' });
  fs.writeFileSync(tempFile.name, xml);
  let doc = await vscode.workspace.openTextDocument(tempFile.name); 
  await vscode.window.showTextDocument(doc);
}

async function deleteObjectInternal(cls, objName){
  var post_body = 
  {
    "workflowArgs":
    {
      "operation": "deleteObject",
      "theClass": cls,
      "objName": objName
    }
  };
  
  var result = await vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: `Deleting object ${objName} ...`,
    cancellable: true
    }, 
      progress => {return postRequest(JSON.stringify(post_body));
    });

  return result["payload"];
}

async function deleteObject(){
  var classes = await getClasses();
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

  var classObjects = await getClassObjects(theClass);
  let objName = await vscode.window.showQuickPick(classObjects, 
    { placeHolder: `Pick an object for ${theClass} ...`, ignoreFocusOut: true });
  if(!objName){
    vscode.window.showInformationMessage("No object was selected, exiting");
    return;
  }
 
  const answer = await vscode.window.showQuickPick(["Yes", "No"],
                  {placeHolder: `Are you sure you want to delete ${objName}?`});
  if(!answer || answer === "No"){
    vscode.window.showInformationMessage("No object was deleted");
    return;
  }

  var status = await deleteObjectInternal(theClass, objName);
  if(status){
    vscode.window.showInformationMessage(`Operation status: ${status}`);
  }
}

async function switchEnv(){

  var old_environment = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');
  var environment = await vscode.window.showQuickPick(listEnvironments(), 
  { placeHolder: 'Select an environment', ignoreFocusOut: false });
  if(environment === undefined){
    return null;
  }

  if(old_environment === environment){
    return environment;
  }

  vscode.workspace.getConfiguration('iiq-dev-accelerator').update('environment', environment, true);
  environment = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('environment');

  //reset old environment's settings
  g_props["props"] = null;
  var url = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('iiq_url');
  var username = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('username');
  var password = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('password');
  if(url || username || password){
    vscode.workspace.getConfiguration('iiq-dev-accelerator').update('iiq_url', "", true);
    vscode.workspace.getConfiguration('iiq-dev-accelerator').update('username', "", true);
    vscode.workspace.getConfiguration('iiq-dev-accelerator').update('password', "", true);
  }
  return environment;
}


async function runContext(){
  var editor = vscode.window.activeTextEditor;
  if(!editor || !editor.document)  {
    vscode.window.showInformationMessage(`To execute based on context, please open file with some IIQ object or a logging config`); 
    return;
  }

  var ext = require('path').extname(vscode.window.activeTextEditor.document.fileName);
  var baseName = require('path').basename(vscode.window.activeTextEditor.document.fileName);
  var selection = editor.selection;
  var script = editor.document.getText(selection);
  if(script && ext === '.xml'){
    evalBS();
  }
  else if(ext === ".properties" && baseName.startsWith("log4j")){
    reloadLog();
  }
  else if(ext === '.xml'){
    var parsedXml = parseCurrentXmlFile();
    if(parsedXml){
      try{
        if(parsedXml["Rule"] && parsedXml["Rule"]["ATTR"]["name"]){
          runRule(parsedXml["Rule"]["ATTR"]["name"]);
        }
        else if(parsedXml["TaskDefinition"] && parsedXml["TaskDefinition"]["ATTR"]["name"]){
          runTask(parsedXml["TaskDefinition"]["ATTR"]["name"]);
        }
      }
      catch(error){
        vscode.window.showInformationMessage(`Error parsing ${editor.document.fileName}`);
      }
    }
  }
}