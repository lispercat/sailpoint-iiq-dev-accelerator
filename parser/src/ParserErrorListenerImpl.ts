import { Token } from "antlr4ts";
import { RecognitionException } from "antlr4ts";
import { Recognizer } from "antlr4ts";
import { ParserErrorListener } from "antlr4ts";

export class ParserErrorListenerImpl implements ParserErrorListener {
  private m_errors: object[] = null;
  constructor(errors: object[]){
    this.m_errors = errors; 
  }
  public syntaxError<T extends Token>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined): void {
    let error = `ParserErrorListenerImpl: pos: ${line}:${charPositionInLine} msg: ${msg} offendingSymbol: ${offendingSymbol}`;
    let object = {"line": line, 
                  "start": charPositionInLine, 
                  "end": charPositionInLine + (offendingSymbol.stopIndex - offendingSymbol.startIndex + 1), 
                  "msg": msg};
    this.m_errors.push(object);
    console.error(error);
  }

}