import {
  TextDocuments,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  TextDocumentSyncKind,
  InitializeResult,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  ExecuteCommandParams,
  WorkspaceFolder
} from 'vscode-languageserver';

import { createConnection } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {SPBSLexer} from '../../parser/out/SPBSLexer';
import {SPBSParser} from '../../parser/out/SPBSParser';
import {SPBSParserVisitorImpl} from '../../parser/out/SPBSParserVisitorImpl';
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {ParserErrorListenerImpl} from "../../parser/out/ParserErrorListenerImpl";
import {LexerErrorListenerImpl} from "../../parser/out/LexerErrorListenerImpl";
import {SPBSParserListenerImpl} from "../../parser/out/SPBSParserListenerImpl";
import { IIQObjectInfo, IIQDictionary, IIQObjectType, IIQObjectInfoImpl } from './common-types'; 
import * as proto from 'vscode-languageserver-protocol';
import { URL } from 'url';
import { unescape } from 'querystring';
import * as fs from 'fs';
const glob = require('glob');
import { URI } from 'vscode-uri';


let connection: ProposedFeatures.Connection = createConnection(ProposedFeatures.all);
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);
let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = true;
let hasDiagnosticRelatedInformationCapability: boolean = false;
let workspaceFolder: WorkspaceFolder | null = null;
let currentDocUri: string = null;
let IIQObjects: IIQDictionary = {};

documents.listen(connection);
connection.listen();

function uriToPath(lspUri: string): string {
  let uri: URI = URI.parse(lspUri);
  return uri.fsPath.replace(/\\/g, "/");
}

async function parseIIQObject(path: string): Promise<IIQObjectInfo | null>{
  let text = fs.readFileSync(path,'utf8');
  //For now only collect rules
  if(text.search(/<Rule\s+.*?>/gi) == -1){
    return null;
  }
  connection.console.log(path);
  const inputStream = CharStreams.fromString(text);
  const lexer = new SPBSLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new SPBSParser(tokenStream);
  parser.removeErrorListeners();
  let data: IIQObjectInfo = new IIQObjectInfoImpl(path);
  parser.addParseListener(new SPBSParserListenerImpl([], data));
  let tree = parser.xml_document();
  return data;
}

async function collectIIQObjectsInfo(folder: WorkspaceFolder){
  await new Promise(f => setTimeout(f, 5000));

  IIQObjects = {};
  var unsescapedUri = unescape(workspaceFolder.uri)
  var folderName = new URL(unsescapedUri).pathname.replace(/^\//g, "");
  connection.console.log(folderName);
  var files: string[] = glob.sync(`${folderName}/config/**/*.xml`);
  if(files.length == 0){
    connection.console.log("no files");
    return;
  }
  
  files.forEach(async path => {
    let obj: IIQObjectInfoImpl = await parseIIQObject(path);
    if(null !== obj){
      IIQObjects[path] = obj;
    }
  });

}

connection.onInitialize(async (params: InitializeParams) => {
  let capabilities = params.capabilities;
  workspaceFolder = params.workspaceFolders != null ? params.workspaceFolders[0] : null;
  connection.console.log(`workspaceFolder: ${workspaceFolder.name} ${workspaceFolder.uri}` );

  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  );

  connection.console.log(`HasWorkspaceFolderCaps: ${hasWorkspaceFolderCapability}` );
  await collectIIQObjectsInfo(workspaceFolder);

  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true
      },

      workspace: {
        workspaceFolders: {
          supported: true
        },
        fileOperations: {
          didCreate: { 
            filters: [{ scheme: 'file', pattern: { glob: '**/*.xml' } }] 
          },
          didRename: {
            filters: [{ scheme: 'file', pattern: { glob: '**/*.xml' } }]
          },
          didDelete: {
            filters: [{ scheme: 'file', pattern: { glob: '**/*.xml'} }]
          }
        }
      }
    }
  };
  return result;
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    connection.client.register(DidChangeConfigurationNotification.type, undefined);
  }
  connection.console.log("Sending notification that the server is ready");
  connection.sendNotification("ServerReady");
});


interface LanguageServerSettings {
  maxNumberOfProblems: number;
}

const defaultSettings: LanguageServerSettings = { maxNumberOfProblems: 1000 };
let globalSettings: LanguageServerSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<LanguageServerSettings>> = new Map();

// connection.workspace.onDidChangeWorkspaceFolders(_event => {
//   connection.console.log('Workspace folder change event received.');
// });

connection.workspace.onDidCreateFiles( _event =>{
  _event.files.forEach(async file => {
    connection.console.log(`Create file: ${file.uri}`)
    let filePath: string = uriToPath(file.uri);
    IIQObjects[filePath] = await parseIIQObject(filePath);
  })
})
connection.workspace.onDidRenameFiles( _event =>{
  _event.files.forEach(async file => {
    connection.console.log(`Rename file: from  ${file.oldUri} to ${file.newUri}`)
    let oldFilePath: string = uriToPath(file.oldUri);
    let newFilePath: string = uriToPath(file.newUri);
    delete IIQObjects[oldFilePath];
    IIQObjects[newFilePath] = await parseIIQObject(newFilePath);
  })
})
connection.workspace.onDidDeleteFiles( _event =>{
  _event.files.forEach(async file => {
    connection.console.log(`Delete file: ${file.uri}`)
    let filePath: string = uriToPath(file.uri);
    delete IIQObjects[filePath];
  })
})
connection.onDidChangeConfiguration(change => {
  if (hasConfigurationCapability) {
    documentSettings.clear();
  } else {
    globalSettings = <LanguageServerSettings>(
      (change.settings.languageServerIIQ || defaultSettings)
    );
  }

  // Revalidate all open text documents
  documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<LanguageServerSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: 'iiq-dev-accelerator'
    });
    documentSettings.set(resource, result);
  }
  return result;
}

documents.onDidOpen((event) => {
	connection.console.log(`Document opened: ${event.document.uri}`);
  currentDocUri = event.document.uri;
});

documents.onDidClose(e => {
  documentSettings.delete(e.document.uri);
  currentDocUri = null;
});

documents.onDidChangeContent(change => {
  validateTextDocument(change.document);
});

connection.onDidChangeWatchedFiles(_change => {
  connection.console.log('We received an file change event');
  _change.changes.forEach(change => {
    connection.console.log(`Change: ${change.type} ${change.type}`)
  })
});

connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		return [
			{
				label: 'label1',
				kind: CompletionItemKind.Text,
				data: 'test1'
			},
			{
				label: 'label2',
				kind: CompletionItemKind.Text,
				data: 'test2'
			}
		];
	}
);

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
		if (item.data === 'test1') {
			item.detail = 'Completion1';
			item.documentation = 'Completion1 documentation';
		} else if (item.data === 'test2') {
			item.detail = 'Completion2';
			item.documentation = 'Completion2 documentation';
		}
		return item;
	}
);

connection.onExecuteCommand((params: ExecuteCommandParams) => {
	return undefined;
});


/* Implementation of server functionality */
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  //await collectIIQObjectsInfo(workspaceFolder);
  connection.console.log(`Validating doc: ${textDocument.uri}`)
  if(!textDocument.uri.includes(workspaceFolder.uri)){
    connection.console.log(`Skipping validation of ${textDocument.uri} since it's not part of the workspace folder ${workspaceFolder}`);
    return null;
  }

  let settings = await getDocumentSettings(textDocument.uri);
  let text = textDocument.getText();
  const inputStream = CharStreams.fromString(text);
  const lexer = new SPBSLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new SPBSParser(tokenStream);
  let nodeErrors: object[] = [];
  let lexerErrors: object[] = [];
  let parserErrors: object[] = [];
  lexer.addErrorListener(new LexerErrorListenerImpl(lexerErrors));
  parser.addErrorListener(new ParserErrorListenerImpl(parserErrors));

  let uri: URI = URI.parse(textDocument.uri);
  let filePath: string = uri.fsPath.replace(/\\/g, "/");
  let data: IIQObjectInfo = new IIQObjectInfoImpl(filePath);
  parser.addParseListener(new SPBSParserListenerImpl(nodeErrors, data));
  let tree = parser.xml_document();
  //Update the IIQObjects dictionary
  delete IIQObjects[filePath];
  IIQObjects[filePath] = data;

  const visitor = new SPBSParserVisitorImpl(100);
  let res = visitor.visit(tree);
  let allErrors: object[] = nodeErrors.concat(parserErrors).concat(lexerErrors);
 
  let diagnostics: Diagnostic[] = [];
  allErrors.forEach(err => {
    let line = err["line"] - 1;
    let start = err["start"];
    let end = err["end"];
    let msg = err["msg"];

    let diagnostic: Diagnostic = {
      severity: DiagnosticSeverity.Error,
      range: {
        start: proto.Position.create(line, start),
        end: proto.Position.create(line, end)
      },
      message: msg
    }
    diagnostics.push(diagnostic);
  })
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}
