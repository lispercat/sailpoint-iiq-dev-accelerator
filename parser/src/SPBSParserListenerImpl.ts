import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import {SPBSParserListener} from './SPBSParserListener'
import { Xml_elementContext } from "./SPBSParser";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {IIQObjectInfoImpl}  from '../../server/out/common-types'; 

export class SPBSParserListenerImpl implements SPBSParserListener{
  private m_errors: Object[];
  private m_data: IIQObjectInfoImpl;
  constructor(errors: Object[], data: IIQObjectInfoImpl){
    this.m_errors = errors;
    this.m_data = data;
  }

  public visitErrorNode(node: ErrorNode){
    this.m_errors.push({"line": node._symbol.line, 
                        "start": node._symbol.charPositionInLine, 
                        "end": node._symbol.charPositionInLine + node._symbol.text.length, 
                        "msg": "Syntax error"});
  }

  exitXml_element(ctx: Xml_elementContext): void {
    let names :TerminalNode[]= ctx.XMLName();
    if(names.length === 2 && names[0].text != names[1].text){
      console.log(`Mismatch with ${names[0].toString()}`);
      let node: TerminalNode = names[1];
      this.m_errors.push({"line": node._symbol.line, 
                          "start": node._symbol.charPositionInLine, 
                          "end": node._symbol.charPositionInLine + node._symbol.text.length, 
                          "msg": "Mismatched closing tag for <" + names[0].text + ">"});
    }
    if(names.length === 2 && names[0].text == names[1].text && "Rule" == names[0].text){
      let name: string = ctx.xml_attribute()
                            .filter(attr => attr.XMLName().text == "name")
                            .map(el => el.STRING().text.replace(/'|"/, ""))
                            .reduce((prev, curr) => prev + curr, "");
      this.m_data["type"] = "Rule";
      this.m_data["name"] = name;
    }
  }
}