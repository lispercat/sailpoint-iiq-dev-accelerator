# Change Log
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

