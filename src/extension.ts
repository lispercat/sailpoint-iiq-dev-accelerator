// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {DevIIQCommands} from "./commands";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "sailpoint-iiq-dev-accelerator" is now active!');

	let disposable = vscode.commands.registerCommand('sailpoint-iiq-dev-accelerator.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from sailpoint-iiq-dev-accelerator!');
	});

	ctx.subscriptions.push(disposable);
	var myModule: DevIIQCommands = new DevIIQCommands();
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

}

// this method is called when your extension is deactivated
export function deactivate() {}
