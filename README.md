<h2 align="center"><img src="https://raw.githubusercontent.com/lispercat/sailpoint-iiq-dev-accelerator/master/images/icon.png" width="128" height="128"><br>Sailpoint IIQ Development Accelerator</h2>

This is the README for "Sailpoint IIQ Development Accelerator" VSCode extension.
The main goal to accelerate and facilitate development by directly interacting with the target IIQ server via VSCode commands.
To use the extension, you need to:
* **Import in Sailpoint IIQ** the ["IIQDevAcceleratorWF" workflow](https://raw.githubusercontent.com/lispercat/sailpoint-iiq-dev-accelerator/master/iiq-wf/workflow.xml) 
  * (Optional) update the configuration of the extension with the name of your target IIQ environment (sandbox, dev, uat etc.).
* Go to File->Open Folder... and open the SSB root folder (the one with with your **build.properties** and **your-target-environment**.target.properties files along with **config** folder)

![Example of how to evalue a snippet of BeanShell script, import and run a rule with parameters](https://raw.githubusercontent.com/lispercat/sailpoint-iiq-dev-accelerator/master/images/EvalAndRunRule.gif)

## Features

To get access to the followig features, press `F1` or `Ctrl + Shipt + p` to open command palette and type: **iiq** to see all available commands. Then select one of the following:
* **Import File**
  * Will import your currently active document. If you use SSB, tokens will be substituted according to selected environment.
* **Get Object**
  * Will retrive an object of selected class
  * You can make modifications and import it with **Import File** command
  * As an option, you may reverse tokenize your object (see **Export Objects** for more details)
  * **Get Object** + **Import File** gives you the ability to modify objects
* **Refresh Object**
  * For a temporary object (that you got with a **Get Object** command) the command will try to refresh it's content grabbing the latest from the server
  * In the case of a local file this command will just execute **Compare Local with Deployed** command
  * You can display it in a "diff" mode
* **Delete Objects**
  * Will delete the selected objects from the target system
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
    * If you have a mulitple server environment you can put the servers in %%IIQ_SERVERS%% token (servers separated by commas) in your **your-target-environment**.target.properties file like this:
      %%IIQ_SERVERS%%=http://server1:8080/identityiq,http://server2:8080/identityiq
      In this case when you reload your logging config, it will be reloaded on all the servers specified in the token.

* **Switch Environment**
  * Allows to switch to a different SSB environment. For better results make sure that you have specified %%ECLIPSE_URL%%, %%ECLIPSE_USER%%, %%ECLIPSE_PASS%% tokens in your **your-target-environment**.target.properties file. You can also store your secret tokens in **your-target-environment**.target.secret.properties file
* **Switch Mode**
  * Allows to switch mode between SSB and DevSecOps
* **Context-based Execution**
  * Allows to execute a "smart" command based on a currently active file.
    * If the file is a **Rule**, the rule will be executed
    * If the file as a **TaskDefinition**, the task will be executed
    * If you have selected a snippet of BeanShell code, it'll be evaluated
    * If it's log4j config file, it will be reloaded
* **Deploy Custom Build**
  * Does the full deployment for your SSB build. You'll be prompted with an option to build/rebuild your deployment.
  The deployment consists of files specifed by sp.init-custom.xml under build/extract/WEB-INF/config.
* **Deploy Uncommitted Change**
  * Allows to import your current uncommited (in git) change. 
  It includes all modifed and new (staged or unstaged) *.xml files.
  Deleted files (as expected) will not be deployed.
* **Deploy Open Files**
  * Deploys the xml files which are currently open in the editor. It's a nice way to deploy a handful of files, especially if you need to deploy the same set to a few different environments
* **Compare Local with Deployed**
  * Compares current xml file with the corresponding deployed object in your target environment
  * As an option, you may reverse tokenize your remote object for comparison only (see **Export Objects** for more details)
* **Code snippets**
  * `rule + Tab` - inserts rule code snippet
* **Syntax highlighting**
  * By default the BeanShell code will be highlighed like regular Java code
* **Show System Information (About)**
  * Get some information about IIQ like version and Java properties
* **Import Java File** (Experimental)
  * A few stars need to align for a nice HotSwap (fast deployment) to happen:
    * You need to have a JDK to be installed on your dev system and "javac" should be on the PATH (if you use SSB you probably already have it)
    * You Java runtime (on IIQ side) should support HotSwap and be able to redefine classes (if not see below)
      - Based on your class modification HotSwap of your JVM may fail for a few reasons:
        - delete method not implemented (when you deleted a method)
        - add method not implemented (when you added a method)
        - schema change not implemented (when you added class/intance variables or changed constructor)
      - All of those failures will trigger a Tomcat app redeployment (longer wait time) but next time when you just change say a method contents the HotSwap will work
    * You Java libraries (on IIQ side) need to have correct com.sun.jdi.Bootstrap package. (the current WEB-INF/lib/tools.jar as of IIQ 8.1p2 is not good).
      - In your log you may see an error like: "java.lang.NoClassDefFoundError: sun/misc/Service". This is becase in the tools.jar the Bootstrap package fails to resolve sun.misc.Service dependency
      - To fix this on my side, I removed the tools.jar from /lib folder which allowed of automatic enablement of the same package that comes with Java (AdoptOpenJDK-11.0.11+9 at the moment)
    * You need to have you IIQ sources organized using SSB folder structure, so when you build your project using "build clean war" (or alike) you'll have build/extract/WEB-INF/lib folder with IIQ libraries
      - If you don't follow SSB structure, you can always specify the path to the /WEB-INF/lib in the plugin settings
      - if you have IIQ libraries under your VSCode project, the plugin should be able to find it by **detecting a folder containing identityiq.jar**
      - (The plugin needs the libraries to compile your Java file that you are about to deploy)
    * Make sure that you **run your Tomcat JVM in debug mode**:
      - It may vary based on your platform, but in a nutshell it comes down to providing following arguments to JVM: `-Xdebug -Xrunjdwp:transport=dt_socket,address=8000,server=y,suspend=n`
    * Sometimes Tomcat stops after the identityiq app has been reloaded many times. I guess it has to do with some Tomcat memory leaks. Just restart Tomcat in those cases
    * To get the best experience out of Java programming for IIQ feel free to install the **Language Support for Java(TM) by Red Hat**
      - When you open a Java file it will create a Java project automatically for your workspace
      - Once the project is created, add the IIQ libraries to the "Referenced Libraires" section of the "Java Projects", it will give your the right support for InelliSense for your Java files
  * If those conditions listed above are not satisfied, the current solution will redeploy the IIQ Tomcat application (which of course take a couple of minutes)
    - But it's still better than to do the same redeployment manually by compiling the file, copy *.class over to Tomcat's classes folder and restarting Tomcat
    - Sometimes HotSwap will fail to work when you add new methods to your class and your current VirtualMachine doesn't support adding methods. In this case you'll need to wait for identityiq redeployment only when you add new methods. When you modify the existing methods HotSwap will be able to instantly update the class.
* **Export Objects**
  * Using this command you can download your deployed objects (Rules, Taks etc) for your current environment and save them in a local folder
  * For exporting, the reverse token replacement is used. There are two options:
    1) If you have a file **your-target-environment**.target.vscode-reverse.properties with reverse tokens, it will be used as a first priority
      * Format of the entries in the file is based on xpath expressions like so:
        %%FILENAME%%=/Application[@name='TestApp']/Attributes/Map/entry[@key='file']/@value
      * This means that during the reverse tokenization process the element found by the xpath will be replaced by %%FILENAME%% token
      * Note, that this token %%FILENAME%% must be present in either **your-target-environment**.target.properties or **your-target-environment**.target.secret.properties files so that the file could be correctly compiled later
    2) If you don't want to deal with xpath expressions you can still use reverse tokenization based on your current **your-target-environment**.target.properties or **your-target-environment**.target.secret.properties files
      * Following tokens from your **your-target-environment**.target.properties will be *excluded* from the reverse tokenization:
        - %%ECLIPSE_URL%%
        - %%ECLIPSE_USER%%
        - %%ECLIPSE_PASS%%
        - %%IIQ_SERVERS%%
  * To test your reverse tokenization (using methods 1 or 2) you may experiment with **Get Object** command which also can optionally apply the reverse tokenization
  * To start exporting objects, 
    * specify the path to your target folder 
    * select object classes you are interested in (Rule, TaskDefinition etc)
    * choose if you need reverse tokenization or not

## Shortcuts
  * `Ctrl Alt s` - will execute either "Import File" or "Import Java File" based on your currently open file
  * `Ctrl Alt x` - will do "Context-based Execution" which means that based on your currently open file it will execute one of the following:
    - Run rule
    - Run task
    - Evaluate BeanShell selection
    - Reload Logging Config
    - Refresh Object

## Requirements

* You need to have a running Sailpoint IIQ instance to where you can connect as admin
* I used IIQ 8.0p1 as a testing environment for the extension, but it should work with 7.3 and lower
* For the extension I used latest VSCode (version 1.45.1 at the moment) on Windows 10.
* For better results you may want to use SSB which provides a building framework for multiple IIQ environments/targets


## Extension Settings

* `iiq.dev-accelerator.environment`: your target environment for SSB build (that you specify for SPTARGET) like sandbox, dev, uat, prod etc
  * When you run the extension for the **first time** and the environment is not set, you'll be presented an input dialog where you can put it.

To specify the environment you may also add this to your settings.json:
```json
"iiq.dev-accelerator.environment": "sandbox"
```

* (optional) `iiq.dev-accelerator.iiq_url`: is your IIQ url 
  * It's optional because I'll try to detect it from %%ECLIPSE_URL%% token of your **your-target-environment**.target.properties or **your-target-environment**.target.secret.properties file
To specify the environment you may also add this to your settings.json:
```json
"iiq.dev-accelerator.iiq_url": "http://localhost:8080/identityiq"
```

* (optional) `iiq.dev-accelerator.username`: is your IIQ username
  * It's optional because I'll try to detect it from %%ECLIPSE_USER%% token of your **your-target-environment**.target.properties or **your-target-environment**.target.secret.properties file
```json
"iiq.dev-accelerator.username": "spadmin"
```

* (optional) `iiq.dev-accelerator.password`: is your IIQ password
  * It's optional because I'll try to detect it from %%ECLIPSE_PASS%% token of your **your-target-environment**.target.properties or **your-target-environment**.target.secret.properties file
```json
"iiq.dev-accelerator.password": "admin"
```

* (optional) `iiq.dev-accelerator.showDeleteProgress`: When set to true, you will see a progress bar when deleting multiple objects. It makes the process slower, but more tangible
  * By default this property is true so you will see the progress bar with the option to cancel when you delete multiple objects. 
  * When it's false, once you start the deletion process you will have to wait till the end, but it will be a bit faster. 
```json
"iiq.dev-accelerator.showDeleteProgress": true 
```

* (optional) `iiq.dev-accelerator.deployCustomBuildQuietly`: When set to true, you will not be asked during custom build to confirm the list of files to import  
```json
"iiq.dev-accelerator.deployCustomBuildQuietly": false 
```

* (optional) `iiq.dev-accelerator.iiq_lib_path`: Used to compile your Java files when you import them. 
  * When you use SSB build environment, usually the extracted libraries are located under build/extract/WEB-INF/lib so you don't need to worry about setting it, the plugin will automatically find it
  * In the case when you don't use SSB environment, or those libraries are localted not under your VSCode workspace, you'll need to specify this parameter
```json
"iiq.dev-accelerator.iiq_lib_path": null 
```
* (optional) `iiq.dev-accelerator.mode`: Change mode for the project between SSB or DevSecOps 
  * Gives you the ability to use this extension with a project using the [IdentityIQ DevSecOps Toolkit](https://community.sailpoint.com/t5/Professional-Services/IdentityIQ-DevSecOps-Toolkit-Alpha-V2/ta-p/196332) structure
  * Will default to SSB
```json
"iiq-dev-accelerator.mode": "devsecops"
```

## Release Notes

Refer to [CHANGELOG](https://github.com/lispercat/sailpoint-iiq-dev-accelerator/blob/master/CHANGELOG.md)

## Feedback

* File a bug in [GitHub Issues](https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues)
* Or drop me a line: lispercat@gmail.com

