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
async function activate(ctx) {
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
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.compareLocalWithDeployed', cmds.compareLocalWithDeployed));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployOpenFiles', cmds.deployOpenFiles));

  let statusBarEnvItem = cmds.getStatusBar();
  statusBarEnvItem.command = 'iiq-dev-accelerator.switchEnv';
  ctx.subscriptions.push(statusBarEnvItem);
  await cmds.updateStatusBar();
}

function deactivate() {}



