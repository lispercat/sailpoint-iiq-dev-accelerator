import * as vscode from 'vscode';
import * as path from 'path';
import { LanguageClient } from 'vscode-languageclient/node'
import { ServerOptions } from 'vscode-languageclient/node'
import { TransportKind } from 'vscode-languageclient/node'
import { CancellationToken, ExecuteCommandParams, ExecuteCommandRequest, LanguageClientOptions, NotificationType} from 'vscode-languageclient';
import {Commands, IIQCommands} from "./iiq-commands";
import { projectActivationProgress } from './IIQProjectActivationProgress';

let languageClient: LanguageClient;
let iiqCommands: IIQCommands = new IIQCommands();

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
  ctx.subscriptions.push(vscode.commands.registerCommand(Commands.SHOW_LANGUAGE_SERVER_OUTPUT, () => {
    languageClient.outputChannel.show();
  }));
  projectActivationProgress.showProgress();
  iiqCommands.updateStatusBarIcon("Sailpoint IIQ is warming up... $(sync~spin)");

  ctx.subscriptions.push(vscode.commands.registerCommand(Commands.EXECUTE_WORKSPACE_COMMAND, (command, ...rest) => {
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
    languageClient.onNotification("ServerReady", () => {
      console.log("The language server is ready");
      projectActivationProgress.hideProgress();
      iiqCommands.updateStatusBarIcon("$(thumbsup) please set iiq env");
      iiqCommands.updateStatusBarIfEnvironmentIsSet();
    });
  });
  languageClient.start();
}

async function shouldStartLSP(): Promise<boolean>{
  var enableLSP: boolean = vscode.workspace.getConfiguration('iiq-dev-accelerator').get('enableLSP');
  if(enableLSP && await iiqCommands.isCorrectSSBWorkspaceFolder()){
    return true;
  }
  return false;
}

export async function activate(ctx: vscode.ExtensionContext) {
  
  console.log('Congratulations, your extension "sailpoint-iiq-dev-accelerator" is now active!');

  let statusBarEnvItem = iiqCommands.getStatusBar();
  statusBarEnvItem.command = 'iiq-dev-accelerator.switchEnv';
  ctx.subscriptions.push(statusBarEnvItem);

  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.importFile', () => iiqCommands.importFile()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runTask', () => iiqCommands.runTask()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runTaskWithAttr', () => iiqCommands.runTaskWithAttr()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runRule', () => iiqCommands.runRule()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.evalBS', () => iiqCommands.evalBS()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.getLog', () => iiqCommands.getLog()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.reloadLog', () => iiqCommands.reloadLog()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.getObject', () => iiqCommands.getObject()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deleteObject', () => iiqCommands.deleteObject()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.switchEnv', () => iiqCommands.switchEnv()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.runContext', () => iiqCommands.runContext()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployChange', () => iiqCommands.deployChange()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployCustomBuild', () => iiqCommands.deployCustomBuild()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.compareLocalWithDeployed', () => iiqCommands.compareLocalWithDeployed()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.deployOpenFiles', () => iiqCommands.deployOpenFiles()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.showSysInfo', () => iiqCommands.showSysInfo()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.refreshObject', () => iiqCommands.refreshObject()));
  ctx.subscriptions.push(vscode.commands.registerCommand('iiq-dev-accelerator.importJava', () => iiqCommands.importJava()));
 
  if(await shouldStartLSP()){
    await startLanguageClient(ctx);
  }
  else{
    iiqCommands.updateStatusBarIfEnvironmentIsSet();
  }
}

export function deactivate() {
  if (!languageClient) {
    return undefined;
  }
  return languageClient.stop();
}
