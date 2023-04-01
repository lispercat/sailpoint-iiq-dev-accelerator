# Change Log

## [1.0.43]
### Added
- Added the ability to sort by name or by last modified date (cf. https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues/44) 
- Added snippets for rules (cf. https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues/42)
- Added the possibility to disable, force or ask tokenization (cf. https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues/43)
- Added the possibility to define default folders (cf. https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues/41)
- Added the possibility to import several files and files within a folder (cf. https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues/40)

### Fixed
- &amp;&amp; is replaced in attribute value (cf. https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues/50)
- Upgrade the xmldom dependency

## [1.0.42]
### Fixed
 - Fixed "Refresh object" command. The command was expecting a temporary file context which was broken. Now I removed the dependency on the temp file so the command will work for both temp objects (obtained via Get Object command) and local files.

## [1.0.41]
### Fixed
 - Fixed deploying uncommitted change. In VSCode they [mangled private properties to speedup loading](https://github.com/microsoft/vscode-discussions/discussions/257) so I removed dependency on private properties.

## [1.0.40]
### Fixed
 - Fixed https://github.com/lispercat/sailpoint-iiq-dev-accelerator/issues/32 issue, thanks to @parithon
 - Bumped minimatch and mocha versions
### Added
 - Added ability to use extension with projects using DevSecOps project structure (https://community.sailpoint.com/t5/Professional-Services/IdentityIQ-DevSecOps-Toolkit-Alpha-V2/ta-p/196332), thanks to @claesjohansson

## [1.0.39]
### Fixed
 - Fixed the "Deploy Uncommitted Change" error 

## [1.0.38]
### Added
 - Bump minimist from 1.2.5 to 1.2.6 based on Dependabot suggestion
### Fixed
 - Removed the LSP diagnostics for powershell documents, now it will not underline powershell scripts with red lines
 - Allow tokens in property files to have empty values, before it used to complain that the token wasn't defined

## [1.0.37]
### Added
 - Added the ability to tokenize xml objects when using GetObject and compareLocalWithDeployed 
 - Added ExportObjects command using reverse tokenization which gets deployed objects and saves them in a local folder

## [1.0.36]
### Fixed
 - Make regex for xml object global so it doesn't miss repeated characters

## [1.0.35]
### Added
 - When getting a deployed XML object, it will be "beautified" before presenting to the user 
   (That is "id", "created", "modified" attributes will be removed and special XML characters like &lt; &gt; or &amp;&amp; will be correspondingly replaced by <, > or &&)

## [1.0.34]
### Added
 - The ability to update log4j configuration on multiple iiq servers
### Fixed
 - Ctrl-Alt-x will reload the logging configuraion if your current file is a log4j config (either from you disk or obtained from the iiq server)
 - Installed new packages with security updates
 - Cleared some ground for tests

## [1.0.33]
### Fixed
 - Some minor fixes for the setting xml context

## [1.0.32]
### Fixed
 - Added disableTLSValidation configuraion variable to address the issue of some users having to manually setting process.env.NODE_TLS_REJECT_UNAUTHORIZED=0 
 - Fixed the git repository failure to find git files 
 - Some LSP additions (trying out virtual documents)

## [1.0.31]
### Fixed
 - Fixed properties-reader weird dependency issue (properties-reader didn't pull the src folder)

## [1.0.30]
### Fixed
 - Rollback to version 1.0.27 to temporary fix dependency issue

## [1.0.29]
### Fixed
 - Disable LSP by default

## [1.0.28]
### Fixed
 - Fixed a bug with caching tokens from both target and secret properties files
### Added
 - Added some basic LSP functionality, some error highlighting (now disabled by default since still in development)

## [1.0.27]
### Fixed
 - Show Java compilation errors and improve compilation process
 
## [1.0.26]
### Added
 - Added compile/import feature for Java files 
 
## [1.0.25]
### Added
 - Enhanced context-based menu commands
 - Added an option to choose whether or not get confirmation for multipe files to be imported (deployCustomBuildQuietly = false by default)
 - Added the ability to refresh an XML object (obtained via GetObject before). Also you can choose to see the difference between the old and new objects
 - The workflow will now get updated automatically to the new version (before you had to do it manually)
 
## [1.0.24]
### Added
 - Added an option to choose whether or not to show the progess bar while deleting multiple objects (showDeleteProgress = true by default) 

## [1.0.23]
### Added
 - Added the ability to show system information (similar in debug about page) 
 - Refactored code to TypeScript

## [1.0.22]
### Added
 - Updated the delete object features, now the user can select multiple objects instead of just one 

## [1.0.21]
### Added
 - Support for <env>.target.secret.properties where you can store secret tokens (outside of source control) The secret properties files are also supported by SSB

## [1.0.20]
### Changed
 - Fixed a typo

## [1.0.19]
### Changed
 - Removed the ability to make token replacements when in format value=%%token%%
 - Added the ability for double backslashes to be replaced to one backslash (for SSD build compatibility)

## [1.0.18]
### Added
 - Added the ability to make token replacements when in format value=%%token%%

## [1.0.17]
### Changed
 - Fixed boolean tokens replacement

## [1.0.16]
### Added
 - The ability to deploy currently open files

## [1.0.15]
### Changed
 - Detect if some tokens couldn't be substituted and erroring out on that

## [1.0.14]
### Added
 - Compare Local object with Deployed
 - IIQ environment display/change from the status bar

## [1.0.13]
### Changed
 - Some minor updates to custom deploy (warnings during SSB build will not stop the deployment)

## [1.0.12]
### Changed
 - Fixed https agent

## [1.0.11]
### Changed
 - Removed typescript reference

## [1.0.8]
### Changed
 - Added option to run SSB build for custom deployment
 - Ignore expired SSL certificates when importing files

## [1.0.7]
### Changed
 - Fixed full deployment again. Now it's just deploying files from under build/extract/WEB-INF/config/custom. Let SSB take care of selecting the right files, we don't need to duplicate the SSB job

## [1.0.6]
### Changed
 - Fixed full deployment. Now it will filter out /build/extract/ xml files

## [1.0.5]
### Added
 - Do Full Deployment

### Changed
 - Fixed context menu commands

## [1.0.4]
### Added
 - Deploy Uncommited Change

## [1.0.3]
### Added
 - Context-based Execution

## [1.0.2]
### Added
 - Switch environment commmand

## [1.0.1]
### Added
 - Support for synax highlighting
 - Added context menu for file import

### Changed
 - Tutorial Image

## [1.0.0]
### Added
 - Initial release 

