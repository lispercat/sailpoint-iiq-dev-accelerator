import { VariableDeclaratorIdContext, Xml_attributeContext, Xml_elementContext } from "./SPBSParser";
import { SPBSParserVisitor } from "./SPBSParserVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from "antlr4ts/tree/ErrorNode";

export class SPBSObjectParserVisitorImpl extends AbstractParseTreeVisitor<{}> implements SPBSParserVisitor<{}> {

  constructor(){
    super();
  }

  defaultResult() {
    return {};
  }
  aggregateResult(aggregate: {}, nextResult: {}) {
    return {...aggregate, ...nextResult};
  }
	visitVariableDeclaratorId  (ctx:  VariableDeclaratorIdContext ) : {} {
    const arr = ctx.children ?? [];
    return arr.map((el) => el.text);
  }

	visitXml_element(ctx: Xml_elementContext) :{} {
    console.log(`VisitXMLElementXMLName: ${ctx.XMLName()}`);
    if(ctx.XMLName().length != 2){
      return {};
    }
    let XMLName = ctx.XMLName()[0].text;
    // if("Rule" == XMLName){
    //   this.visitChildren(ctx);
    // }
    return {"type": XMLName};
  }
	visitXml_attribute(ctx: Xml_attributeContext) : {}{
    console.log(`VisitXMLAttribute:${ctx.text}`);
    return {};
  } 
}