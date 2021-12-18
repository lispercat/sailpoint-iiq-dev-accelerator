import { ANTLRErrorListener, Token } from "antlr4ts";
import { RecognitionException } from "antlr4ts";
import { Recognizer } from "antlr4ts";
import { posix } from "path";

export class LexerErrorListenerImpl implements ANTLRErrorListener<any> {
private m_errors: object[] = null;
  constructor(errors: object[]){
    this.m_errors = errors; 
  }
  public syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined): void {
    let error = `Mine!!! line ${line}:${charPositionInLine} ${msg} `;
    let object = {"line": line, "start": charPositionInLine, "end": charPositionInLine + 1, "msg": msg};
    this.m_errors.push(object);
    console.error(error);
  }

}