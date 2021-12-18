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
import {SPBSObjectParserVisitorImpl} from '../../parser/out/SPBSObjectParserVisitorImpl';
import * as proto from 'vscode-languageserver-protocol';
import { URL } from 'url';
import { unescape } from 'querystring';
import * as fs from 'fs';
const glob = require('glob');

let connection: ProposedFeatures.Connection = createConnection(ProposedFeatures.all);
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);
let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;
let workspaceFolder: WorkspaceFolder | null = null;
let currentDocUri: string = null;
type IIQDictionary = {[name: string]: IIQObjectInfo};
let IIQObjects: IIQDictionary = {};
documents.listen(connection);
connection.listen();
enum IIQObjectType{
  Rule = "Rule",
  Task = "Task"
};

interface IIQObjectInfo{
   type: IIQObjectType;
   path: string;
   name: string;
};
const delay = ms => new Promise(res => setTimeout(res, ms));
async function parseIIQObject(path: string): Promise<IIQObjectInfo>{
  let text = fs.readFileSync(path,'utf8');
  let name = path;
  let type = IIQObjectType.Rule;
  const inputStream = CharStreams.fromString(text);
  const lexer = new SPBSLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new SPBSParser(tokenStream);
  parser.removeErrorListeners();
  let tree = parser.xml_document();
  const visitor = new SPBSObjectParserVisitorImpl();
  let res: {} = visitor.visit(tree);
  return {type: res["type"], path: path, name: res["name"]};
}

async function collectIIQObjectsInfo(folder: WorkspaceFolder){
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
    connection.console.log(path);
    var obj: IIQObjectInfo = await parseIIQObject(path);
    IIQObjects[obj.type + ":" + obj.name] = obj;
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

  await collectIIQObjectsInfo(workspaceFolder);

  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true
      }
    }
  };
  if (hasWorkspaceFolderCapability) {
    result.capabilities.workspace = {
      workspaceFolders: {
        supported: true
      }
    };
  }
  return result;
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    connection.client.register(DidChangeConfigurationNotification.type, undefined);
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log('Workspace folder change event received.');
    });
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
  parser.addParseListener(new SPBSParserListenerImpl(nodeErrors));
  let tree = parser.xml_document();
  const visitor = new SPBSParserVisitorImpl(100);
  let res = visitor.visit(tree);
  let allErrors: object[] = nodeErrors.concat(parserErrors).concat(lexerErrors);
 
  let diagnostics: Diagnostic[] = [];
  for(let err of allErrors){
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
  }
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}
