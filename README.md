# iiq-dev-accelerator README

This is the README for  extension "Sailpoint IIQ Development Accelerator". 
The main goal to accelerate and facilitate development by direct interacting with the target IIQ server via VSCode commands.
To use the extension, you need to:
* install the "IIQDevAccelWF" workflow 
* update the configuration of the extension with the name of your target IIQ environment (sandbox, dev, uat etc.)


## Features

* Import File
* Run a task
  * Given a list of taks you select one to execute
* Run a task with parameters
  * Given a list of taks you select one to execute
  * Once you select a task you'll be presented with an input dialog to specify your arguments 
* Run a rule (with parameters)
  * Given a list of rules you select one to execute
  * If the rule requires arguments you'll be presented with an input diaglog to specify your arguments
  * If instead, you have an open argument document (which follows SST layout Map->entry), this file will be used to retrieve arguments
* Evaluate BeanShell script (by selecting lines in the open document)
* Reload logging configuration. It allows a few options:
  * Currently selected text
  * Currently open log4j document
  * Detected <env>.log4j(2).properties document, where <env> is your target environment configuration

## Requirements

* You need to have a running Sailpoint IIQ instance to where you can connect as admin
* I used IIQ 8.0p1 as a testing environment for the extension, but it should work with 7.3 and lower, but ymmv
* For the extension I used latest VSCode (version 1.45.1 at the moment)


## Extension Settings

* `iiq.dev-accelerator.environment`: your target environment for SSD build (that you specify for SPTARGET) like sandbox, dev, uat, prod etc
  * When you run the extension for the first time and the environment is not set, you'll be presented an input dialog where you can put it.

To specify the environment you may also add this to your settings.json:
```json
"iiq.dev-accelerator.environment": "sandbox"
```

* (optional) `iiq.dev-accelerator.iiq_url`: is your IIQ url like http://localhost:8080/identityiq. 
  * It's optional because I'll try to detect it from %%ECLIPSE_URL%% token of your <env>.target.properties file
To specify the environment you may also add this to your settings.json:
```json
"iiq.dev-accelerator.iiq_url": "http://localhost:8080/identityiq"
```

* (optional) `iiq.dev-accelerator.username`: is your IIQ username
  * It's optional because I'll try to detect it from %%ECLIPSE_USER%% token of your <env>.target.properties file
```json
"iiq.dev-accelerator.username": "spadmin"
```

* (optional) `iiq.dev-accelerator.password`: is your IIQ password
  * It's optional because I'll try to detect it from %%ECLIPSE_PASS%% token of your <env>.target.properties file
```json
"iiq.dev-accelerator.password": "admin"
```


## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of "Sailpoint IIQ Development Accelerator"


-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

##Note

Please report issues or feature requests at the github repo or email me: lispercat@gmail.com

