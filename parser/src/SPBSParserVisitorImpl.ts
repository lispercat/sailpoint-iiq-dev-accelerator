import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { SPBSParserVisitor } from "./SPBSParserVisitor";
import { VariableDeclaratorIdContext } from "./SPBSParser";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";

export class SPBSParserVisitorImpl extends AbstractParseTreeVisitor<string[]> implements SPBSParserVisitor<string[]> {
  private m_pos: number = 0;

  constructor(pos: number){
    super();
    this.m_pos = pos;
  }

  defaultResult() {
    return [];
  }
  aggregateResult(aggregate: string[], nextResult: string[]) {
    return aggregate.concat(nextResult);
  }
	visitVariableDeclaratorId  (ctx:  VariableDeclaratorIdContext ) : string[] {
    const arr = ctx.children ?? [];
    return arr.map((el) => el.text);
  }

  visitErrorNode(_node: ErrorNode) : string[] {
    return [_node._symbol.line.toString() + ':' + _node._symbol.charPositionInLine.toString()];
  }

	// visitXml_element(ctx: Xml_elementContext) : string[] {
  //   console.log(`Visit: ${ctx.children}`);
  //   return [];
  // }
}