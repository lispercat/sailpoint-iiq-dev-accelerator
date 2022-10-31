import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import {SPBSParserListener} from './SPBSParserListener'
import { Xml_elementContext } from "./SPBSParser";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {IIQObjectInfoImpl, IIQObjectType}  from '../common-types'; 

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
    if(names.length === 1 && names[0].text === "entry"){
      let key:string = ctx.xml_attribute().
                          filter(a => a.XMLName().text == "key").
                          map(el => el.STRING().text.replace(/'|"/g, ""))[0];

      let value:string = ctx.xml_attribute().
                          filter(a => a.XMLName().text == "value").
                          map(el => el.STRING().text.replace(/'|"/g, ""))[0];
      if("program" === key && "powershell.exe" === value){
        this.m_data["language"] = "powershell";
      }
          
    }
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
                            .map(el => el.STRING().text.replace(/'|"/g, ""))
                            .reduce((prev, curr) => prev + curr, "");
      let language: string = ctx.xml_attribute()
                            .filter(attr => attr.XMLName().text == "language")
                            .map(el => el.STRING().text.replace(/'|"/g, ""))
                            .reduce((prev, curr) => prev + curr, "");
      this.m_data["type"] = IIQObjectType.Rule;
      this.m_data["name"] = name;
      if(null == this.m_data["language"]){
        this.m_data["language"] = language;
      }
    }
  }
}