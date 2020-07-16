const vscode = require('vscode');
const cmds = require("./commands.js");


exports.activate = activate;
module.exports = {
	activate,
	deactivate
}

/**
 * @param {vscode.Extensionctx} ctx
 */
function activate(ctx) {
  console.log('Extension "iiq-dev-accelerator" is now active');
  
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.importFile', cmds.importFile));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runTask', cmds.runTask));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runTaskWithAttr', cmds.runTaskWithAttr));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runRule', cmds.runRule));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.evalBS', cmds.evalBS));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.getLog', cmds.getLog));
	ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.reloadLog', cmds.reloadLog));
	ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.getObject', cmds.getObject));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deleteObject', cmds.deleteObject));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.switchEnv', cmds.switchEnv));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runContext', cmds.runContext));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployChange', cmds.deployChange));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployCustomBuild', cmds.deployCustomBuild));
}

function deactivate() {}



