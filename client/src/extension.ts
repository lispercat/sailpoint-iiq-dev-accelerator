import * as vscode from 'vscode';
import * as path from 'path';
import { LanguageClient } from 'vscode-languageclient/node'
import { ServerOptions } from 'vscode-languageclient/node'
import { TransportKind } from 'vscode-languageclient/node'
import { CancellationToken, ExecuteCommandParams, ExecuteCommandRequest, LanguageClientOptions, NotificationType} from 'vscode-languageclient';
import {IIQCommands} from "./iiq-commands";
export const EXECUTE_WORKSPACE_COMMAND = 'execute.workspaceCommand';

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
    documentSelector: [{ scheme: 'file', language: 'xml',  }],
    //workspaceFolder: vscode.workspace.workspaceFolders[0];
  };

  languageClient = new LanguageClient(
    'languageServerIIQ',
    'IIQ Dev Accelerator LanguageServer',
    serverOptions,
    clientOptions
  );

  ctx.subscriptions.push(vscode.commands.registerCommand(EXECUTE_WORKSPACE_COMMAND, (command, ...rest) => {
    let token: vscode.CancellationToken;
    let commandArgs: any[] = rest;
    if (rest && rest.length && CancellationToken.is(rest[rest.length - 1])) {
      token = rest[rest.length - 1];
      commandArgs = rest.slice(0, rest.length - 1);
    }
    const params: ExecuteCommandParams = {
      command,
      arguments: commandArgs
    };
    if (token) {
      return languageClient.sendRequest(ExecuteCommandRequest.type, params, token);
    } else {
      return languageClient.sendRequest(ExecuteCommandRequest.type, params);
    }
  }));
  languageClient.onReady().then(() => {
    //activationProgressNotification.showProgress();
    languageClient.onNotification("ServerReady", () => {
      console.log("The language server is ready");
    });
  });
  languageClient.start();
}

export async function activate(ctx: vscode.ExtensionContext) {
  
  console.log('Congratulations, your extension "sailpoint-iiq-dev-accelerator" is now active!');

  var myModule: IIQCommands = new IIQCommands();

  let statusBarEnvItem = myModule.getStatusBar();
  statusBarEnvItem.command = 'iiq-dev-accelerator.switchEnv';
  ctx.subscriptions.push(statusBarEnvItem);
  if(!await myModule.isCorrectSSBWorkspaceFolder()){
    return false;
  }

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
