import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import {SPBSParserListener} from './SPBSParserListener'
import { Xml_elementContext } from "./SPBSParser";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
export class SPBSParserListenerImpl implements SPBSParserListener{
  private m_errors: Object[];
  constructor(errors: Object[]){
    this.m_errors = errors;
  }

  public visitErrorNode(node: ErrorNode){
    this.m_errors.push({"line": node._symbol.line, 
                        "start": node._symbol.charPositionInLine, 
                        "end": node._symbol.charPositionInLine + node._symbol.text.length, 
                        "msg": "Syntax error"});
  }

  exitXml_element(ctx: Xml_elementContext): void {
    let names :TerminalNode[]= ctx.Name();
    if(names.length === 2 && names[0].text != names[1].text){
      console.log(`Mismatch with ${names[0].toString()}`);
      let node: TerminalNode = names[1];
      this.m_errors.push({"line": node._symbol.line, 
                          "start": node._symbol.charPositionInLine, 
                          "end": node._symbol.charPositionInLine + node._symbol.text.length, 
                          "msg": "Mismatched closing tag for <" + names[0].text + ">"});
    }
  }
}