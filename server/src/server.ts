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
  TextDocumentPositionParams
} from 'vscode-languageserver';

import { createConnection } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Console } from 'console';
import {SPBSLexer} from '../../parser/out/SPBSLexer';
import {SPBSParser} from '../../parser/out/SPBSParser';
import {CharStreams, CommonTokenStream} from 'antlr4ts';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection: ProposedFeatures.Connection = createConnection(ProposedFeatures.all);

let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;
connection.onInitialize((params: InitializeParams) => {
  let capabilities = params.capabilities;

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
    // Register for all configuration changes.
    connection.client.register(DidChangeConfigurationNotification.type, undefined);
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log('Workspace folder change event received.');
    });
  }
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

// Only keep settings for open documents
documents.onDidClose(e => {
  documentSettings.delete(e.document.uri);
});

documents.onDidChangeContent(change => {
  validateTextDocument(change.document);
});

type MatchingBracket = {[key: string]: string};
interface WrongCharacter {
  char: string;
  pos: number;
  reason: string
}

enum IgnoreMode{
  off,
  comment_oneline,
  comment_multiline,
  double_quote,
  single_quote
}

function getIgnoreMode(text: string, i: number, ignoreMode: IgnoreMode): {newIgnoreMode: IgnoreMode, newPos: number}{
  if(ignoreMode === IgnoreMode.off)
  {
    if(text[i] === '/' && i < text.length - 1 && text[i + 1] === '*'){
      ignoreMode = IgnoreMode.comment_multiline;
      i++;
    } 
    else if(text[i] === '/' && i < text.length - 1 && text[i + 1] === '/'){
      ignoreMode = IgnoreMode.comment_oneline;
      i++;
    }
    else if(text[i] === '"'){
      ignoreMode = IgnoreMode.double_quote;
    }
    else if(text[i] === "'"){
      ignoreMode = IgnoreMode.single_quote;
    }
  }
  else{
    switch(ignoreMode){
      case IgnoreMode.comment_multiline:
        if(text[i]  === '*' && i < text.length - 1 && text[i + 1] === '/'){
          ignoreMode = IgnoreMode.off;
          i++;
        } 
        break;
      case IgnoreMode.comment_oneline:
        if(text[i] === '\n'){
          ignoreMode = IgnoreMode.off;
        } 
        break;
      case IgnoreMode.double_quote:
        if(text[i] === '"'){
          ignoreMode = IgnoreMode.off;
        } 
        break;
      case IgnoreMode.single_quote:
        if(text[i] === "'"){
          ignoreMode = IgnoreMode.off;
        } 
        break;
    }
  }

  return {newIgnoreMode: ignoreMode, newPos: i}
}

function reportWrongCharacter(text: string) : Array<WrongCharacter>{
  let supportedBrackets: MatchingBracket = {'}': '{', ')': '(', ']': '['};
  const forbiddenCharacters : string = "<>`";

  let bracketStack: Array<WrongCharacter> = []
  let openings  = Object.values(supportedBrackets);
  let closings  = Object.keys(supportedBrackets);
  let ignoreMode: IgnoreMode = IgnoreMode.off;
  for(let i = 0; i < text.length; i++){
    let c = text[i];
    let newIgnoreData: {newIgnoreMode: IgnoreMode, newPos: number} = getIgnoreMode(text, i, ignoreMode);
    ignoreMode = newIgnoreData.newIgnoreMode;
    i = newIgnoreData.newPos;

    if(ignoreMode !== IgnoreMode.off){
      continue;
    }

    if(openings.includes(c)){
      bracketStack.push(<WrongCharacter>{char: c, pos: i, reason: `unbalanced ${c}`});
      continue;
    }
    if(forbiddenCharacters.includes(c)){
      bracketStack.push(<WrongCharacter>{char: c, pos: i, reason: `forbidden character ${c}`});
      continue;
    }
    if (closings.includes(c)){
      let matchingOpening = supportedBrackets[c];
      //let lastMatchingClosingIndex = bracketStack.map(el => el.char).indexOf(matchingOpening);
      let lastBracket: string = bracketStack[bracketStack.length - 1].char;
      if(lastBracket === matchingOpening){
        bracketStack.pop();
      }
      else{
        bracketStack.push(<WrongCharacter>{char: c, pos: i, reason: `unbalanced ${c}`})
      }
    }
  }
  return bracketStack;
}

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  let settings = await getDocumentSettings(textDocument.uri);
  let text = textDocument.getText();
  const inputStream = CharStreams.fromString(text);
  const lexer = new SPBSLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new SPBSParser(tokenStream);
  let tree = parser.xml_document()

  console.log(tree);
}
async function validateTextDocument_old(textDocument: TextDocument): Promise<void> {
  let settings = await getDocumentSettings(textDocument.uri);

  let text = textDocument.getText();
  //let beanShellSource : string | null = await getBeanShellBlock(text);
  //console.log(beanShellSource);

  let pattern1 = /(?<=<Source>\s*<!\[CDATA\[\s*)[\w\/][\W\w]*?(?=\s*\]\]>\s*<\/Source>)/g;
  let pattern2 = /(?<=<Source>\s*)[\w\/][\W\w]*?(?=\s*<\/Source>)/g;
  let m: RegExpExecArray | null;

  let problems = 0;
  let diagnostics: Diagnostic[] = [];
  let maxNumberOfProblems = null != settings.maxNumberOfProblems ? settings.maxNumberOfProblems: 10;
  m = pattern1.exec(text);
  m = m ? m:pattern2.exec(text);
  if(!m || m.length > 1){
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
    return;
  }

  let beanShellSource = m[0];
  let startBeanShell: number = m.index;
  let endBeanShell: number = m.index + m[0].length;
  let wrongCharacters: Array<WrongCharacter> = reportWrongCharacter(beanShellSource);
  for(let err of wrongCharacters){
    if(++problems > maxNumberOfProblems){
      break;
    }
    let diagnostic: Diagnostic = {
      severity: DiagnosticSeverity.Error,
      range: {
        start: textDocument.positionAt(startBeanShell + err.pos),
        end: textDocument.positionAt(startBeanShell + err.pos)
      },
      message: err.reason
    }
    diagnostics.push(diagnostic);
  }

  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
  connection.console.log('We received an file change event');
});

connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
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

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
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

documents.listen(connection);
connection.listen();
