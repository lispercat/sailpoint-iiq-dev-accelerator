import * as vscode from 'vscode';
import * as path from 'path';
import { LanguageClient } from 'vscode-languageclient/node'
import { ServerOptions } from 'vscode-languageclient/node'
import { TransportKind } from 'vscode-languageclient/node'
import { LanguageClientOptions} from 'vscode-languageclient';
import {DevIIQCommands} from "./commands";

let languageClient: LanguageClient;
async function startLanguageClient(ctx: vscode.ExtensionContext){
  let serverModule = ctx.asAbsolutePath(
    path.join('server', 'out', 'server.js')
  );
  // The debug options for the server
  // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
  let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

  let serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions
    }
  };

  // Options to control the language client
  let clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'xml' }],
  };

  languageClient = new LanguageClient(
    'languageServerIIQ',
    'IIQ Dev Accelerator LanguageServer',
    serverOptions,
    clientOptions
  );
  languageClient.start();
}

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
  await startLanguageClient(ctx);
}

export function deactivate() {
  if (!languageClient) {
    return undefined;
  }
  return languageClient.stop();
}
