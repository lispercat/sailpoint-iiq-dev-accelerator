<h2 align="center"><img src="https://raw.githubusercontent.com/lispercat/sailpoint-iiq-dev-accelerator/master/images/icon.png" width="128" height="128"><br>Sailpoint IIQ Development Accelerator</h2>

This is the README for "Sailpoint IIQ Development Accelerator" VSCode extension.
The main goal to accelerate and facilitate development by directly interacting with the target IIQ server via VSCode commands.
To use the extension, you need to:
* Import in Sailpoint IIQ the ["IIQDevAcceleratorWF" workflow](https://raw.githubusercontent.com/lispercat/sailpoint-iiq-dev-accelerator/master/src/workflow.xml) 
* update the configuration of the extension with the name of your target IIQ environment (sandbox, dev, uat etc.).

![Example of how to evalue a snippet of BeanShell script, import and run a rule with parameters](https://raw.githubusercontent.com/lispercat/sailpoint-iiq-dev-accelerator/master/images/EvalAndRunRule.gif)

## Features

To get access to the followig features, press `F1` or `Ctrl + Shipt + p` to open command palette and type: **iiq** to see all available commands. Then select one of the following:
* **Import File**
  * Will import your currently active document. If you use SSB, tokens will be substituted according to selected environment.
* **Get Object**
  * Will retrive an object of selected class
  * You can make modifications and import it with **Import File** command
  * Go **Get Object** + **Import File** gives you the ability to modify objects
* **Delete Object**
  * Will delete the selected object from the target system
* **Run Task**
  * Given a list of taks you select one to execute
* **Run Task With Parameters**
  * Given a list of taks you select one to execute
  * Once you select a task you'll be presented with an input dialog to specify your arguments 
* **Run Rule** (with parameters)
  * Given a list of rules you select one to execute
  * If the rule requires arguments you'll be presented with an input diaglog to specify your arguments
  * If instead, you have an open argument document (which follows SST layout Map->entry), this file will be used to retrieve arguments
* **Evaluate BeanShell Script** 
  * To evaluate a script please open a document containing a BeanShell script code (can be a rule or just any text file) and **select lines you want to evaluate**
  * To better observe the result of execution make sure that the last line of the script is a **return  statement**
  * After executing the selected script the return result will be displayed. You can also check your log file if you used logging commands in the script
* **Get Logging Config**
  * Loads your current log file config in a temp file and displays it
  * You can modify its content and send the **Reload Logging Config** command (see below)
* **Reload Logging Config**. 
  * It allows a few options (sorted by priority):
    * Currently selected text
    * Currently open log4j document (including the one obtained with **Get Logging Config** command)
    * Detected **your-target-environment**.log4j(2).properties document, where **your-target-environment** is your target environment configuration. It should work equally with old log4j and new log4j2 files.
* **Switch Environment**
  * Allows to switch to a different SSB environment. For better results make sure that you have specified %%ECLIPSE_URL%%, %%ECLIPSE_USER%%, %%ECLIPSE_PASSWORD%% tokens in your **your-target-environment**.target.properties file 
* **Context-based Execution**
  * Allows to execute a "smart" command based on a currently active file.
    * If the file is a **Rule**, the rule will be executed
    * If the file as a **TaskDefinition**, the task will be executed
    * If you have selected a snippet of BeanShell code, it'll be evaluated
    * If it's log4j config file, it will be reloaded
* **Code snippets**
  * `rule + Tab` - inserts rule code snippet
* **Syntax highlighting**
  * By default the BeanShell code will be highlighed like regular Java code

## Requirements

* You need to have a running Sailpoint IIQ instance to where you can connect as admin
* I used IIQ 8.0p1 as a testing environment for the extension, but it should work with 7.3 and lower
* For the extension I used latest VSCode (version 1.45.1 at the moment) on Windows 10.
* For better results you may want to use SSD which provides a building framework for multiple IIQ environments/targets


## Extension Settings

* `iiq.dev-accelerator.environment`: your target environment for SSD build (that you specify for SPTARGET) like sandbox, dev, uat, prod etc
  * When you run the extension for the **first time** and the environment is not set, you'll be presented an input dialog where you can put it.

To specify the environment you may also add this to your settings.json:
```json
"iiq.dev-accelerator.environment": "sandbox"
```

* (optional) `iiq.dev-accelerator.iiq_url`: is your IIQ url 
  * It's optional because I'll try to detect it from %%ECLIPSE_URL%% token of your **your-target-environment**.target.properties file
To specify the environment you may also add this to your settings.json:
```json
"iiq.dev-accelerator.iiq_url": "http://localhost:8080/identityiq"
```

* (optional) `iiq.dev-accelerator.username`: is your IIQ username
  * It's optional because I'll try to detect it from %%ECLIPSE_USER%% token of your **your-target-environment**.target.properties file
```json
"iiq.dev-accelerator.username": "spadmin"
```

* (optional) `iiq.dev-accelerator.password`: is your IIQ password
  * It's optional because I'll try to detect it from %%ECLIPSE_PASS%% token of your **your-target-environment**.target.properties file
```json
"iiq.dev-accelerator.password": "admin"
```


## Release Notes

Refer to [CHANGELOG](https://github.com/lispercat/sailpoint-iiq-dev-accelerator/blob/master/CHANGELOG.md)

## Feedback

* File a bug in [GitHub Issues](https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues)
* Or drop me a line: lispercat@gmail.com

