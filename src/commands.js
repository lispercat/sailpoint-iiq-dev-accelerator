const vscode = require('vscode');
const fetch = require('node-fetch');
const base64 = require('base-64');
const fs = require('fs');
const propertiesReader = require('properties-reader');
const xml2js = require('xml2js');
const xmlParser = new xml2js.Parser({ attrkey: "ATTR" });


var g_props = {"filePath": null, "props": null, "mtime": null};

module.exports = {
  importFile,
  runTask,
  runTaskWithAttr,
  runRule,
  evalBS,
  reloadLog
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

async function getEnvironment(){
  var environment = vscode.workspace.getConfiguration('iiq.dev-accelerator').get('environment');
  if(!environment){
    environment = await vscode.window.showInputBox({
      prompt: "Your environment configuration appears to be empty, please specify it here", 
      validateInput: (text) => {
        if (!text) {
            return 'You must enter some input';
        } else {
            return undefined;
        }
    }
    });
    if(environment === undefined){
      return null;
    }
    vscode.workspace.getConfiguration('iiq.dev-accelerator').update('environment', environment, true);
    environment = vscode.workspace.getConfiguration('iiq.dev-accelerator').get('environment');
  }
  
  return environment;
}

async function loadTargetProps(){
  if(canUseCachedProp()){
    return g_props["props"];
  }
  var environment = await getEnvironment();
  if(!environment){
    vscode.window.showInformationMessage(`Couldn't find/update the environment, exiting`);
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
  var found = fileContent.match(/%%\w+%%/g);
  if(found){
    found.forEach((m) => {
      fileContent = fileContent.replace(m, props.get(m));
    });
  }
  return fileContent;
}

async function getSiteConfig(){
  
  var environment = await getEnvironment();
  var url = vscode.workspace.getConfiguration('iiq.dev-accelerator').get('iiq_url');
  var username = vscode.workspace.getConfiguration('iiq.dev-accelerator').get('username');
  var password = vscode.workspace.getConfiguration('iiq.dev-accelerator').get('password');

  if(!url || !username || !password){
    const props = await loadTargetProps();
    if(!props){
      return null;
    }
    url = props.get("%%ECLIPSE_URL%%");
    username = props.get("%%ECLIPSE_USER%%");
    password = props.get("%%ECLIPSE_PASS%%");
    if(!url || !username || !password){
      let configParams = await vscode.window.showInputBox({
        value: "http://localhost:8080/identityiq;spadmin;admin",
        prompt: `Couldn't detect your configuration from ${environment}.target.properties). Please enter here `, 
        validateInput: (text) => {
          if (!text) {
              return 'You must enter some input';
          } else {
              return undefined;
          }
      }
      });
      if(configParams === undefined){
        return;
      }
      [url, username, password] = configParams.split(";");
      vscode.workspace.getConfiguration('iiq.dev-accelerator').update('iiq_url', url, true);
      vscode.workspace.getConfiguration('iiq.dev-accelerator').update('username', username, true);
      vscode.workspace.getConfiguration('iiq.dev-accelerator').update('password', password, true);
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
      let full_url = `${url.replace(/\/$/g, "")}/rest/workflows/IIQDevAccelWF/launch`;
      const response = await fetch(full_url, {
        method: 'POST', 
        body: post_body,
        headers}
      );
      const json = await response.json();
      const payload = await json.attributes.payload;
      if(response.ok){
        result["success"] = payload;
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
  if(!props){
    vscode.window.showInformationMessage(`Couldn't load properties, exiting`);
    return;
  }
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

  if(result["success"]  !== undefined ){
    const url = vscode.workspace.getConfiguration('iiq.dev-accelerator').get('iiq_url');
    vscode.window.showInformationMessage(`File was successfully imported`);
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

  return result["success"];
}


async function runTask(){
  let taskName = await vscode.window.showQuickPick(getTasksNames(), { placeHolder: 'Pick a task...' });

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


  if(result["success"]  !== undefined ){
    vscode.window.showInformationMessage(`Successfully launched "${taskName} with taskId=${result["success"]}"`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }
}

async function getArgumentsFromBuffer(){
  var retArgs = null;
  if(!vscode.window.activeTextEditor || 
    require('path').extname(vscode.window.activeTextEditor.document.fileName) != '.xml'){
    vscode.window.showInformationMessage(`Please open an xml document to import`); 
    return null;
  }
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
      retArgs =
        parsedXml["Map"]["entry"].reduce(function(map, obj) {
          map[obj["ATTR"]["key"]] = obj["ATTR"]["value"];
          return map;}, {});
    }
    catch(error){

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
  let taskName = await vscode.window.showQuickPick(getTasksNames(), { placeHolder: 'Pick a task...' });
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


  if(result["success"]  !== undefined ){
    vscode.window.showInformationMessage(`Successfully launched "${taskName} with taskId=${result["success"]}"`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }

}


async function getRuleNames(){
  var post_body = 
  {
    "workflowArgs":
    {
      "operation": "getRules"
    }
  };
  
  var result = await vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: "Getting rule names ...",
    cancellable: true
    }, 
      progress => {return postRequest(JSON.stringify(post_body));
    });

  return result["success"];
}

function argsIntersect(ruleArgs, fileArgs){
  var result = ruleArgs.filter(value => -1 !== fileArgs.indexOf(value));
  return result.length > 0;
}

async function runRule(){
  let rulesMap = await getRuleNames();
  let ruleName = await vscode.window.showQuickPick(Object.keys(rulesMap), { placeHolder: 'Pick rule...' });
  let ruleArgs = rulesMap[ruleName];
  let inputArgs = null;
  if(ruleArgs.length > 0){
    inputArgs = await getArgumentsFromBuffer();
    if(!inputArgs || !argsIntersect(ruleArgs, Object.keys(inputArgs))){
      inputArgs = await getArgumentsFromInput("Please enter arguments (arg1->value1 arg2->'value two' etc.): ",  ruleArgs.join('-> ') + "->");
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

  if(result["success"]  !== undefined ){
    vscode.window.showInformationMessage(`Reslut: ${result["success"]}`);
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

  script = script.replace(/"/g, '\\"');
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

  if(result["success"]  !== undefined ){
    vscode.window.showInformationMessage(`Reslut: ${result["success"]}`);
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

  var folders  = vscode.workspace.workspaceFolders;
  for(var i = 0; i < folders.length; i++){
    const uris = await vscode.workspace.findFiles(`**/${searchFileName}`, `${folders[i].uri.fsPath}/**`);
    console.log("now trying to go over files...");
    uris.forEach((uri) => {
      console.log(`Trying to read ${uri.fsPath} file`);
      logContent = fs.readFileSync(uri.fsPath, {encoding:'utf8', flag:'r'}); 
      foundFullLogFileName = require('path').basename(uri.fsPath);
      var [env, log4j, prop] = foundFullLogFileName.split(".");
      foundLogFileName = log4j + '.' + prop;
    });
  }

  let options = {};

  //Priority #1
  var editor = vscode.window.activeTextEditor;
  if(editor && editor.document && 
    editor.document.getText(editor.selection)){
    options[`Currently selected text`] = editor.document.getText(editor.selection);
  }

  //Priority #2
  if(editor && editor.document &&
    editor.document.fileName.includes("log4j") &&
    !editor.document.fileName.includes(foundFullLogFileName)){
      options[`Currently opened document`] = editor.document.getText();
  }

  //Priority #3
  if(foundLogFileName){
    options[`Detected ${foundFullLogFileName} file`] = logContent;
  }

  if(Object.keys(options).length > 1){
    let whatToDo = await vscode.window.showQuickPick(Object.keys(options), { placeHolder: 'Pick an option out of those detected...' });
    if(!whatToDo){
      logContent = options[Object.keys(options)[0]];
    }
    else{
      logContent = options[whatToDo];
    }
  }
  else{
    logContent = options[Object.keys(options)[0]];
  }

  var post_body = 
  {
    "workflowArgs":
    {
      "operation": "reloadLog",
      "logContent": logContent,
      "logFileName": foundLogFileName
    }
  };
  
  var result = await vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: `Reloading Logging Config from ${foundLogFileName ? foundLogFileName:'server log file'}`,
    cancellable: true
    }, 
      progress => {return postRequest(JSON.stringify(post_body));
    });


  if(result["success"]  !== undefined ){
    vscode.window.showInformationMessage(`Refreshing from ${foundLogFileName ? foundLogFileName:'server log file'}: ${result["success"]}"`);
  }
  else{
    vscode.window.showInformationMessage(`Operation failed`);
  }

}