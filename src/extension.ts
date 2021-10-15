import * as vscode from 'vscode';
import {DevIIQCommands} from "./commands";

export async function activate(ctx: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "sailpoint-iiq-dev-accelerator" is now active!');

	var myModule: DevIIQCommands = new DevIIQCommands();

  let statusBarEnvItem = myModule.getStatusBar();
  statusBarEnvItem.command = 'iiq-dev-accelerator.switchEnv';
  ctx.subscriptions.push(statusBarEnvItem);

  await myModule.updateStatusBarIfEnvironmentIsSet();
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.importFile', () => myModule.importFile()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runTask', () => myModule.runTask()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runTaskWithAttr', () => myModule.runTaskWithAttr()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runRule', () => myModule.runRule()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.evalBS', () => myModule.evalBS()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.getLog', () => myModule.getLog()));
	ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.reloadLog', () => myModule.reloadLog()));
	ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.getObject', () => myModule.getObject()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deleteObject', () => myModule.deleteObject()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.switchEnv', () => myModule.switchEnv()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runContext', () => myModule.runContext()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployChange', () => myModule.deployChange()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployCustomBuild', () => myModule.deployCustomBuild()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.compareLocalWithDeployed', () => myModule.compareLocalWithDeployed()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployOpenFiles', () => myModule.deployOpenFiles()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.showSysInfo', () => myModule.showSysInfo()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.refreshObject', () => myModule.refreshObject()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.importJava', () => myModule.importJava()));
}

export function deactivate() {}
