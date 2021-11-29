// Generated from beanshell_grammar/SPBSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SPBSParserListener } from "./SPBSParserListener";
import { SPBSParserVisitor } from "./SPBSParserVisitor";


export class SPBSParser extends Parser {
	public static readonly COMMENT = 1;
	public static readonly BS_ELEMENT_START = 2;
	public static readonly DTD = 3;
	public static readonly EntityRef = 4;
	public static readonly CharRef = 5;
	public static readonly SEA_WS = 6;
	public static readonly OPEN = 7;
	public static readonly XMLDeclOpen = 8;
	public static readonly TEXT = 9;
	public static readonly CLOSE = 10;
	public static readonly SPECIAL_CLOSE = 11;
	public static readonly SLASH_CLOSE = 12;
	public static readonly SLASH = 13;
	public static readonly EQUALS = 14;
	public static readonly STRING = 15;
	public static readonly Name = 16;
	public static readonly S = 17;
	public static readonly PI = 18;
	public static readonly BS_ELEMENT_END = 19;
	public static readonly CDATA_START = 20;
	public static readonly CDATA_END = 21;
	public static readonly ABSTRACT = 22;
	public static readonly ASSERT = 23;
	public static readonly BOOLEAN = 24;
	public static readonly BREAK = 25;
	public static readonly BYTE = 26;
	public static readonly CASE = 27;
	public static readonly CATCH = 28;
	public static readonly CHAR = 29;
	public static readonly CLASS = 30;
	public static readonly CONST = 31;
	public static readonly CONTINUE = 32;
	public static readonly DEFAULT = 33;
	public static readonly DO = 34;
	public static readonly DOUBLE = 35;
	public static readonly ELSE = 36;
	public static readonly ENUM = 37;
	public static readonly EXTENDS = 38;
	public static readonly FINAL = 39;
	public static readonly FINALLY = 40;
	public static readonly FLOAT = 41;
	public static readonly FOR = 42;
	public static readonly IF = 43;
	public static readonly GOTO = 44;
	public static readonly IMPLEMENTS = 45;
	public static readonly IMPORT = 46;
	public static readonly INSTANCEOF = 47;
	public static readonly INT = 48;
	public static readonly INTERFACE = 49;
	public static readonly LONG = 50;
	public static readonly NATIVE = 51;
	public static readonly NEW = 52;
	public static readonly PACKAGE = 53;
	public static readonly PRIVATE = 54;
	public static readonly PROTECTED = 55;
	public static readonly PUBLIC = 56;
	public static readonly RETURN = 57;
	public static readonly SHORT = 58;
	public static readonly STATIC = 59;
	public static readonly STRICTFP = 60;
	public static readonly SUPER = 61;
	public static readonly SWITCH = 62;
	public static readonly SYNCHRONIZED = 63;
	public static readonly THIS = 64;
	public static readonly THROW = 65;
	public static readonly THROWS = 66;
	public static readonly TRANSIENT = 67;
	public static readonly TRY = 68;
	public static readonly VOID = 69;
	public static readonly VOLATILE = 70;
	public static readonly WHILE = 71;
	public static readonly IntegerLiteral = 72;
	public static readonly FloatingPointLiteral = 73;
	public static readonly BooleanLiteral = 74;
	public static readonly CharacterLiteral = 75;
	public static readonly StringLiteral = 76;
	public static readonly NullLiteral = 77;
	public static readonly LPAREN = 78;
	public static readonly RPAREN = 79;
	public static readonly LBRACE = 80;
	public static readonly RBRACE = 81;
	public static readonly LBRACK = 82;
	public static readonly RBRACK = 83;
	public static readonly SEMI = 84;
	public static readonly COMMA = 85;
	public static readonly DOT = 86;
	public static readonly ASSIGN = 87;
	public static readonly GT = 88;
	public static readonly LT = 89;
	public static readonly BANG = 90;
	public static readonly TILDE = 91;
	public static readonly QUESTION = 92;
	public static readonly COLON = 93;
	public static readonly EQUAL = 94;
	public static readonly LE = 95;
	public static readonly GE = 96;
	public static readonly NOTEQUAL = 97;
	public static readonly AND = 98;
	public static readonly OR = 99;
	public static readonly INC = 100;
	public static readonly DEC = 101;
	public static readonly ADD = 102;
	public static readonly SUB = 103;
	public static readonly MUL = 104;
	public static readonly DIV = 105;
	public static readonly BITAND = 106;
	public static readonly BITOR = 107;
	public static readonly CARET = 108;
	public static readonly MOD = 109;
	public static readonly ARROW = 110;
	public static readonly COLONCOLON = 111;
	public static readonly ADD_ASSIGN = 112;
	public static readonly SUB_ASSIGN = 113;
	public static readonly MUL_ASSIGN = 114;
	public static readonly DIV_ASSIGN = 115;
	public static readonly AND_ASSIGN = 116;
	public static readonly OR_ASSIGN = 117;
	public static readonly XOR_ASSIGN = 118;
	public static readonly MOD_ASSIGN = 119;
	public static readonly LSHIFT_ASSIGN = 120;
	public static readonly RSHIFT_ASSIGN = 121;
	public static readonly URSHIFT_ASSIGN = 122;
	public static readonly Identifier = 123;
	public static readonly AT = 124;
	public static readonly ELLIPSIS = 125;
	public static readonly WS = 126;
	public static readonly JAVA_COMMENT = 127;
	public static readonly LINE_COMMENT = 128;
	public static readonly RULE_literal = 0;
	public static readonly RULE_primitiveType = 1;
	public static readonly RULE_numericType = 2;
	public static readonly RULE_integralType = 3;
	public static readonly RULE_floatingPointType = 4;
	public static readonly RULE_referenceType = 5;
	public static readonly RULE_classOrInterfaceType = 6;
	public static readonly RULE_classType = 7;
	public static readonly RULE_classType_lf_classOrInterfaceType = 8;
	public static readonly RULE_classType_lfno_classOrInterfaceType = 9;
	public static readonly RULE_interfaceType = 10;
	public static readonly RULE_interfaceType_lf_classOrInterfaceType = 11;
	public static readonly RULE_interfaceType_lfno_classOrInterfaceType = 12;
	public static readonly RULE_typeVariable = 13;
	public static readonly RULE_arrayType = 14;
	public static readonly RULE_dims = 15;
	public static readonly RULE_typeParameter = 16;
	public static readonly RULE_typeParameterModifier = 17;
	public static readonly RULE_typeBound = 18;
	public static readonly RULE_additionalBound = 19;
	public static readonly RULE_typeArguments = 20;
	public static readonly RULE_typeArgumentList = 21;
	public static readonly RULE_typeArgument = 22;
	public static readonly RULE_wildcard = 23;
	public static readonly RULE_wildcardBounds = 24;
	public static readonly RULE_packageName = 25;
	public static readonly RULE_typeName = 26;
	public static readonly RULE_packageOrTypeName = 27;
	public static readonly RULE_expressionName = 28;
	public static readonly RULE_methodName = 29;
	public static readonly RULE_ambiguousName = 30;
	public static readonly RULE_bsCompilationUnit = 31;
	public static readonly RULE_packageDeclaration = 32;
	public static readonly RULE_packageModifier = 33;
	public static readonly RULE_importDeclaration = 34;
	public static readonly RULE_singleTypeImportDeclaration = 35;
	public static readonly RULE_typeImportOnDemandDeclaration = 36;
	public static readonly RULE_singleStaticImportDeclaration = 37;
	public static readonly RULE_staticImportOnDemandDeclaration = 38;
	public static readonly RULE_typeDeclaration = 39;
	public static readonly RULE_classDeclaration = 40;
	public static readonly RULE_normalClassDeclaration = 41;
	public static readonly RULE_classModifier = 42;
	public static readonly RULE_typeParameters = 43;
	public static readonly RULE_typeParameterList = 44;
	public static readonly RULE_superclass = 45;
	public static readonly RULE_superinterfaces = 46;
	public static readonly RULE_interfaceTypeList = 47;
	public static readonly RULE_classBody = 48;
	public static readonly RULE_classBodyDeclaration = 49;
	public static readonly RULE_classMemberDeclaration = 50;
	public static readonly RULE_fieldDeclaration = 51;
	public static readonly RULE_fieldModifier = 52;
	public static readonly RULE_variableDeclaratorList = 53;
	public static readonly RULE_variableDeclarator = 54;
	public static readonly RULE_variableDeclaratorId = 55;
	public static readonly RULE_variableInitializer = 56;
	public static readonly RULE_unannType = 57;
	public static readonly RULE_unannPrimitiveType = 58;
	public static readonly RULE_unannReferenceType = 59;
	public static readonly RULE_unannClassOrInterfaceType = 60;
	public static readonly RULE_unannClassType = 61;
	public static readonly RULE_unannClassType_lf_unannClassOrInterfaceType = 62;
	public static readonly RULE_unannClassType_lfno_unannClassOrInterfaceType = 63;
	public static readonly RULE_unannInterfaceType = 64;
	public static readonly RULE_unannInterfaceType_lf_unannClassOrInterfaceType = 65;
	public static readonly RULE_unannInterfaceType_lfno_unannClassOrInterfaceType = 66;
	public static readonly RULE_unannTypeVariable = 67;
	public static readonly RULE_unannArrayType = 68;
	public static readonly RULE_methodDeclaration = 69;
	public static readonly RULE_methodModifier = 70;
	public static readonly RULE_methodHeader = 71;
	public static readonly RULE_result = 72;
	public static readonly RULE_methodDeclarator = 73;
	public static readonly RULE_formalParameterList = 74;
	public static readonly RULE_formalParameters = 75;
	public static readonly RULE_formalParameter = 76;
	public static readonly RULE_variableModifier = 77;
	public static readonly RULE_lastFormalParameter = 78;
	public static readonly RULE_receiverParameter = 79;
	public static readonly RULE_throws_ = 80;
	public static readonly RULE_exceptionTypeList = 81;
	public static readonly RULE_exceptionType = 82;
	public static readonly RULE_methodBody = 83;
	public static readonly RULE_instanceInitializer = 84;
	public static readonly RULE_staticInitializer = 85;
	public static readonly RULE_constructorDeclaration = 86;
	public static readonly RULE_constructorModifier = 87;
	public static readonly RULE_constructorDeclarator = 88;
	public static readonly RULE_simpleTypeName = 89;
	public static readonly RULE_constructorBody = 90;
	public static readonly RULE_explicitConstructorInvocation = 91;
	public static readonly RULE_enumDeclaration = 92;
	public static readonly RULE_enumBody = 93;
	public static readonly RULE_enumConstantList = 94;
	public static readonly RULE_enumConstant = 95;
	public static readonly RULE_enumConstantModifier = 96;
	public static readonly RULE_enumBodyDeclarations = 97;
	public static readonly RULE_interfaceDeclaration = 98;
	public static readonly RULE_normalInterfaceDeclaration = 99;
	public static readonly RULE_interfaceModifier = 100;
	public static readonly RULE_extendsInterfaces = 101;
	public static readonly RULE_interfaceBody = 102;
	public static readonly RULE_interfaceMemberDeclaration = 103;
	public static readonly RULE_constantDeclaration = 104;
	public static readonly RULE_constantModifier = 105;
	public static readonly RULE_interfaceMethodDeclaration = 106;
	public static readonly RULE_interfaceMethodModifier = 107;
	public static readonly RULE_annotationTypeDeclaration = 108;
	public static readonly RULE_annotationTypeBody = 109;
	public static readonly RULE_annotationTypeMemberDeclaration = 110;
	public static readonly RULE_annotationTypeElementDeclaration = 111;
	public static readonly RULE_annotationTypeElementModifier = 112;
	public static readonly RULE_defaultValue = 113;
	public static readonly RULE_annotation = 114;
	public static readonly RULE_normalAnnotation = 115;
	public static readonly RULE_elementValuePairList = 116;
	public static readonly RULE_elementValuePair = 117;
	public static readonly RULE_elementValue = 118;
	public static readonly RULE_elementValueArrayInitializer = 119;
	public static readonly RULE_elementValueList = 120;
	public static readonly RULE_markerAnnotation = 121;
	public static readonly RULE_singleElementAnnotation = 122;
	public static readonly RULE_arrayInitializer = 123;
	public static readonly RULE_variableInitializerList = 124;
	public static readonly RULE_block = 125;
	public static readonly RULE_blockStatements = 126;
	public static readonly RULE_blockStatement = 127;
	public static readonly RULE_localVariableDeclarationStatement = 128;
	public static readonly RULE_localVariableDeclaration = 129;
	public static readonly RULE_statement = 130;
	public static readonly RULE_statementNoShortIf = 131;
	public static readonly RULE_statementWithoutTrailingSubstatement = 132;
	public static readonly RULE_emptyStatement = 133;
	public static readonly RULE_labeledStatement = 134;
	public static readonly RULE_labeledStatementNoShortIf = 135;
	public static readonly RULE_expressionStatement = 136;
	public static readonly RULE_statementExpression = 137;
	public static readonly RULE_ifThenStatement = 138;
	public static readonly RULE_ifThenElseStatement = 139;
	public static readonly RULE_ifThenElseStatementNoShortIf = 140;
	public static readonly RULE_assertStatement = 141;
	public static readonly RULE_switchStatement = 142;
	public static readonly RULE_switchBlock = 143;
	public static readonly RULE_switchBlockStatementGroup = 144;
	public static readonly RULE_switchLabels = 145;
	public static readonly RULE_switchLabel = 146;
	public static readonly RULE_enumConstantName = 147;
	public static readonly RULE_whileStatement = 148;
	public static readonly RULE_whileStatementNoShortIf = 149;
	public static readonly RULE_doStatement = 150;
	public static readonly RULE_forStatement = 151;
	public static readonly RULE_forStatementNoShortIf = 152;
	public static readonly RULE_basicForStatement = 153;
	public static readonly RULE_basicForStatementNoShortIf = 154;
	public static readonly RULE_forInit = 155;
	public static readonly RULE_forUpdate = 156;
	public static readonly RULE_statementExpressionList = 157;
	public static readonly RULE_enhancedForStatement = 158;
	public static readonly RULE_enhancedForStatementNoShortIf = 159;
	public static readonly RULE_breakStatement = 160;
	public static readonly RULE_continueStatement = 161;
	public static readonly RULE_returnStatement = 162;
	public static readonly RULE_throwStatement = 163;
	public static readonly RULE_synchronizedStatement = 164;
	public static readonly RULE_tryStatement = 165;
	public static readonly RULE_catches = 166;
	public static readonly RULE_catchClause = 167;
	public static readonly RULE_catchFormalParameter = 168;
	public static readonly RULE_catchType = 169;
	public static readonly RULE_finally_ = 170;
	public static readonly RULE_tryWithResourcesStatement = 171;
	public static readonly RULE_resourceSpecification = 172;
	public static readonly RULE_resourceList = 173;
	public static readonly RULE_resource = 174;
	public static readonly RULE_primary = 175;
	public static readonly RULE_primaryNoNewArray = 176;
	public static readonly RULE_primaryNoNewArray_lf_arrayAccess = 177;
	public static readonly RULE_primaryNoNewArray_lfno_arrayAccess = 178;
	public static readonly RULE_primaryNoNewArray_lf_primary = 179;
	public static readonly RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = 180;
	public static readonly RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = 181;
	public static readonly RULE_primaryNoNewArray_lfno_primary = 182;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = 183;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = 184;
	public static readonly RULE_classInstanceCreationExpression = 185;
	public static readonly RULE_classInstanceCreationExpression_lf_primary = 186;
	public static readonly RULE_classInstanceCreationExpression_lfno_primary = 187;
	public static readonly RULE_typeArgumentsOrDiamond = 188;
	public static readonly RULE_fieldAccess = 189;
	public static readonly RULE_fieldAccess_lf_primary = 190;
	public static readonly RULE_fieldAccess_lfno_primary = 191;
	public static readonly RULE_arrayAccess = 192;
	public static readonly RULE_arrayAccess_lf_primary = 193;
	public static readonly RULE_arrayAccess_lfno_primary = 194;
	public static readonly RULE_methodInvocation = 195;
	public static readonly RULE_methodInvocation_lf_primary = 196;
	public static readonly RULE_methodInvocation_lfno_primary = 197;
	public static readonly RULE_argumentList = 198;
	public static readonly RULE_methodReference = 199;
	public static readonly RULE_methodReference_lf_primary = 200;
	public static readonly RULE_methodReference_lfno_primary = 201;
	public static readonly RULE_arrayCreationExpression = 202;
	public static readonly RULE_dimExprs = 203;
	public static readonly RULE_dimExpr = 204;
	public static readonly RULE_constantExpression = 205;
	public static readonly RULE_expression = 206;
	public static readonly RULE_lambdaExpression = 207;
	public static readonly RULE_lambdaParameters = 208;
	public static readonly RULE_inferredFormalParameterList = 209;
	public static readonly RULE_lambdaBody = 210;
	public static readonly RULE_assignmentExpression = 211;
	public static readonly RULE_assignment = 212;
	public static readonly RULE_leftHandSide = 213;
	public static readonly RULE_assignmentOperator = 214;
	public static readonly RULE_conditionalExpression = 215;
	public static readonly RULE_conditionalOrExpression = 216;
	public static readonly RULE_conditionalAndExpression = 217;
	public static readonly RULE_inclusiveOrExpression = 218;
	public static readonly RULE_exclusiveOrExpression = 219;
	public static readonly RULE_andExpression = 220;
	public static readonly RULE_equalityExpression = 221;
	public static readonly RULE_relationalExpression = 222;
	public static readonly RULE_shiftExpression = 223;
	public static readonly RULE_additiveExpression = 224;
	public static readonly RULE_multiplicativeExpression = 225;
	public static readonly RULE_unaryExpression = 226;
	public static readonly RULE_preIncrementExpression = 227;
	public static readonly RULE_preDecrementExpression = 228;
	public static readonly RULE_unaryExpressionNotPlusMinus = 229;
	public static readonly RULE_postfixExpression = 230;
	public static readonly RULE_postIncrementExpression = 231;
	public static readonly RULE_postIncrementExpression_lf_postfixExpression = 232;
	public static readonly RULE_postDecrementExpression = 233;
	public static readonly RULE_postDecrementExpression_lf_postfixExpression = 234;
	public static readonly RULE_castExpression = 235;
	public static readonly RULE_xml_document = 236;
	public static readonly RULE_xml_prolog = 237;
	public static readonly RULE_xml_content = 238;
	public static readonly RULE_xml_element = 239;
	public static readonly RULE_xml_reference = 240;
	public static readonly RULE_xml_attribute = 241;
	public static readonly RULE_xml_chardata = 242;
	public static readonly RULE_xml_misc = 243;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"literal", "primitiveType", "numericType", "integralType", "floatingPointType", 
		"referenceType", "classOrInterfaceType", "classType", "classType_lf_classOrInterfaceType", 
		"classType_lfno_classOrInterfaceType", "interfaceType", "interfaceType_lf_classOrInterfaceType", 
		"interfaceType_lfno_classOrInterfaceType", "typeVariable", "arrayType", 
		"dims", "typeParameter", "typeParameterModifier", "typeBound", "additionalBound", 
		"typeArguments", "typeArgumentList", "typeArgument", "wildcard", "wildcardBounds", 
		"packageName", "typeName", "packageOrTypeName", "expressionName", "methodName", 
		"ambiguousName", "bsCompilationUnit", "packageDeclaration", "packageModifier", 
		"importDeclaration", "singleTypeImportDeclaration", "typeImportOnDemandDeclaration", 
		"singleStaticImportDeclaration", "staticImportOnDemandDeclaration", "typeDeclaration", 
		"classDeclaration", "normalClassDeclaration", "classModifier", "typeParameters", 
		"typeParameterList", "superclass", "superinterfaces", "interfaceTypeList", 
		"classBody", "classBodyDeclaration", "classMemberDeclaration", "fieldDeclaration", 
		"fieldModifier", "variableDeclaratorList", "variableDeclarator", "variableDeclaratorId", 
		"variableInitializer", "unannType", "unannPrimitiveType", "unannReferenceType", 
		"unannClassOrInterfaceType", "unannClassType", "unannClassType_lf_unannClassOrInterfaceType", 
		"unannClassType_lfno_unannClassOrInterfaceType", "unannInterfaceType", 
		"unannInterfaceType_lf_unannClassOrInterfaceType", "unannInterfaceType_lfno_unannClassOrInterfaceType", 
		"unannTypeVariable", "unannArrayType", "methodDeclaration", "methodModifier", 
		"methodHeader", "result", "methodDeclarator", "formalParameterList", "formalParameters", 
		"formalParameter", "variableModifier", "lastFormalParameter", "receiverParameter", 
		"throws_", "exceptionTypeList", "exceptionType", "methodBody", "instanceInitializer", 
		"staticInitializer", "constructorDeclaration", "constructorModifier", 
		"constructorDeclarator", "simpleTypeName", "constructorBody", "explicitConstructorInvocation", 
		"enumDeclaration", "enumBody", "enumConstantList", "enumConstant", "enumConstantModifier", 
		"enumBodyDeclarations", "interfaceDeclaration", "normalInterfaceDeclaration", 
		"interfaceModifier", "extendsInterfaces", "interfaceBody", "interfaceMemberDeclaration", 
		"constantDeclaration", "constantModifier", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeMemberDeclaration", "annotationTypeElementDeclaration", 
		"annotationTypeElementModifier", "defaultValue", "annotation", "normalAnnotation", 
		"elementValuePairList", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"elementValueList", "markerAnnotation", "singleElementAnnotation", "arrayInitializer", 
		"variableInitializerList", "block", "blockStatements", "blockStatement", 
		"localVariableDeclarationStatement", "localVariableDeclaration", "statement", 
		"statementNoShortIf", "statementWithoutTrailingSubstatement", "emptyStatement", 
		"labeledStatement", "labeledStatementNoShortIf", "expressionStatement", 
		"statementExpression", "ifThenStatement", "ifThenElseStatement", "ifThenElseStatementNoShortIf", 
		"assertStatement", "switchStatement", "switchBlock", "switchBlockStatementGroup", 
		"switchLabels", "switchLabel", "enumConstantName", "whileStatement", "whileStatementNoShortIf", 
		"doStatement", "forStatement", "forStatementNoShortIf", "basicForStatement", 
		"basicForStatementNoShortIf", "forInit", "forUpdate", "statementExpressionList", 
		"enhancedForStatement", "enhancedForStatementNoShortIf", "breakStatement", 
		"continueStatement", "returnStatement", "throwStatement", "synchronizedStatement", 
		"tryStatement", "catches", "catchClause", "catchFormalParameter", "catchType", 
		"finally_", "tryWithResourcesStatement", "resourceSpecification", "resourceList", 
		"resource", "primary", "primaryNoNewArray", "primaryNoNewArray_lf_arrayAccess", 
		"primaryNoNewArray_lfno_arrayAccess", "primaryNoNewArray_lf_primary", 
		"primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary", "primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary", 
		"primaryNoNewArray_lfno_primary", "primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary", 
		"primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary", "classInstanceCreationExpression", 
		"classInstanceCreationExpression_lf_primary", "classInstanceCreationExpression_lfno_primary", 
		"typeArgumentsOrDiamond", "fieldAccess", "fieldAccess_lf_primary", "fieldAccess_lfno_primary", 
		"arrayAccess", "arrayAccess_lf_primary", "arrayAccess_lfno_primary", "methodInvocation", 
		"methodInvocation_lf_primary", "methodInvocation_lfno_primary", "argumentList", 
		"methodReference", "methodReference_lf_primary", "methodReference_lfno_primary", 
		"arrayCreationExpression", "dimExprs", "dimExpr", "constantExpression", 
		"expression", "lambdaExpression", "lambdaParameters", "inferredFormalParameterList", 
		"lambdaBody", "assignmentExpression", "assignment", "leftHandSide", "assignmentOperator", 
		"conditionalExpression", "conditionalOrExpression", "conditionalAndExpression", 
		"inclusiveOrExpression", "exclusiveOrExpression", "andExpression", "equalityExpression", 
		"relationalExpression", "shiftExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "preIncrementExpression", "preDecrementExpression", 
		"unaryExpressionNotPlusMinus", "postfixExpression", "postIncrementExpression", 
		"postIncrementExpression_lf_postfixExpression", "postDecrementExpression", 
		"postDecrementExpression_lf_postfixExpression", "castExpression", "xml_document", 
		"xml_prolog", "xml_content", "xml_element", "xml_reference", "xml_attribute", 
		"xml_chardata", "xml_misc",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'/>'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'<![CDATA['", 
		"']]>'", "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", "'case'", 
		"'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'", 
		"'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'", 
		"'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
		"'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'", 
		"'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'", 
		"'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", 
		"'transient'", "'try'", "'void'", "'volatile'", "'while'", undefined, 
		undefined, undefined, undefined, undefined, "'null'", "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "';'", "','", "'.'", undefined, undefined, undefined, 
		"'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", 
		"'++'", "'--'", "'+'", "'-'", "'*'", undefined, "'&'", "'|'", "'^'", "'%'", 
		"'->'", "'::'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", 
		"'%='", "'<<='", "'>>='", "'>>>='", undefined, "'@'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENT", "BS_ELEMENT_START", "DTD", "EntityRef", "CharRef", 
		"SEA_WS", "OPEN", "XMLDeclOpen", "TEXT", "CLOSE", "SPECIAL_CLOSE", "SLASH_CLOSE", 
		"SLASH", "EQUALS", "STRING", "Name", "S", "PI", "BS_ELEMENT_END", "CDATA_START", 
		"CDATA_END", "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", 
		"CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", 
		"ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", 
		"IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", 
		"NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", 
		"STATIC", "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", 
		"THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", "IntegerLiteral", 
		"FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", "StringLiteral", 
		"NullLiteral", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", 
		"SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "ARROW", "COLONCOLON", 
		"ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", 
		"OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
		"URSHIFT_ASSIGN", "Identifier", "AT", "ELLIPSIS", "WS", "JAVA_COMMENT", 
		"LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SPBSParser._LITERAL_NAMES, SPBSParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SPBSParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SPBSParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SPBSParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SPBSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SPBSParser._ATN, this);
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SPBSParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			_la = this._input.LA(1);
			if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SPBSParser.IntegerLiteral - 72)) | (1 << (SPBSParser.FloatingPointLiteral - 72)) | (1 << (SPBSParser.BooleanLiteral - 72)) | (1 << (SPBSParser.CharacterLiteral - 72)) | (1 << (SPBSParser.StringLiteral - 72)) | (1 << (SPBSParser.NullLiteral - 72)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SPBSParser.RULE_primitiveType);
		let _la: number;
		try {
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 490;
					this.annotation();
					}
					}
					this.state = 495;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 496;
				this.numericType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 497;
					this.annotation();
					}
					}
					this.state = 502;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 503;
				this.match(SPBSParser.BOOLEAN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericType(): NumericTypeContext {
		let _localctx: NumericTypeContext = new NumericTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SPBSParser.RULE_numericType);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 506;
				this.integralType();
				}
				break;
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.floatingPointType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integralType(): IntegralTypeContext {
		let _localctx: IntegralTypeContext = new IntegralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SPBSParser.RULE_integralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			_la = this._input.LA(1);
			if (!(_la === SPBSParser.BYTE || _la === SPBSParser.CHAR || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SPBSParser.INT - 48)) | (1 << (SPBSParser.LONG - 48)) | (1 << (SPBSParser.SHORT - 48)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatingPointType(): FloatingPointTypeContext {
		let _localctx: FloatingPointTypeContext = new FloatingPointTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SPBSParser.RULE_floatingPointType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			_la = this._input.LA(1);
			if (!(_la === SPBSParser.DOUBLE || _la === SPBSParser.FLOAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceType(): ReferenceTypeContext {
		let _localctx: ReferenceTypeContext = new ReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SPBSParser.RULE_referenceType);
		try {
			this.state = 517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 514;
				this.classOrInterfaceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 515;
				this.typeVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 516;
				this.arrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SPBSParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 519;
				this.classType_lfno_classOrInterfaceType();
				}
				break;

			case 2:
				{
				this.state = 520;
				this.interfaceType_lfno_classOrInterfaceType();
				}
				break;
			}
			this.state = 527;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 525;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 523;
						this.classType_lf_classOrInterfaceType();
						}
						break;

					case 2:
						{
						this.state = 524;
						this.interfaceType_lf_classOrInterfaceType();
						}
						break;
					}
					}
				}
				this.state = 529;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SPBSParser.RULE_classType);
		let _la: number;
		try {
			this.state = 552;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 530;
					this.annotation();
					}
					}
					this.state = 535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 536;
				this.match(SPBSParser.Identifier);
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 537;
					this.typeArguments();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.classOrInterfaceType();
				this.state = 541;
				this.match(SPBSParser.DOT);
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 542;
					this.annotation();
					}
					}
					this.state = 547;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 548;
				this.match(SPBSParser.Identifier);
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 549;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		let _localctx: ClassType_lf_classOrInterfaceTypeContext = new ClassType_lf_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SPBSParser.RULE_classType_lf_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.match(SPBSParser.DOT);
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 555;
				this.annotation();
				}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 561;
			this.match(SPBSParser.Identifier);
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 562;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		let _localctx: ClassType_lfno_classOrInterfaceTypeContext = new ClassType_lfno_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SPBSParser.RULE_classType_lfno_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 565;
				this.annotation();
				}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
			this.match(SPBSParser.Identifier);
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 572;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let _localctx: InterfaceTypeContext = new InterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SPBSParser.RULE_interfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext {
		let _localctx: InterfaceType_lf_classOrInterfaceTypeContext = new InterfaceType_lf_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SPBSParser.RULE_interfaceType_lf_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.classType_lf_classOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext {
		let _localctx: InterfaceType_lfno_classOrInterfaceTypeContext = new InterfaceType_lfno_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SPBSParser.RULE_interfaceType_lfno_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.classType_lfno_classOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeVariable(): TypeVariableContext {
		let _localctx: TypeVariableContext = new TypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SPBSParser.RULE_typeVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 581;
				this.annotation();
				}
				}
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 587;
			this.match(SPBSParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SPBSParser.RULE_arrayType);
		try {
			this.state = 598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.primitiveType();
				this.state = 590;
				this.dims();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 592;
				this.classOrInterfaceType();
				this.state = 593;
				this.dims();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 595;
				this.typeVariable();
				this.state = 596;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dims(): DimsContext {
		let _localctx: DimsContext = new DimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SPBSParser.RULE_dims);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 600;
				this.annotation();
				}
				}
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 606;
			this.match(SPBSParser.LBRACK);
			this.state = 607;
			this.match(SPBSParser.RBRACK);
			this.state = 618;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SPBSParser.AT) {
						{
						{
						this.state = 608;
						this.annotation();
						}
						}
						this.state = 613;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 614;
					this.match(SPBSParser.LBRACK);
					this.state = 615;
					this.match(SPBSParser.RBRACK);
					}
					}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SPBSParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 621;
				this.typeParameterModifier();
				}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 627;
			this.match(SPBSParser.Identifier);
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.EXTENDS) {
				{
				this.state = 628;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterModifier(): TypeParameterModifierContext {
		let _localctx: TypeParameterModifierContext = new TypeParameterModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SPBSParser.RULE_typeParameterModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SPBSParser.RULE_typeBound);
		let _la: number;
		try {
			this.state = 643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 633;
				this.match(SPBSParser.EXTENDS);
				this.state = 634;
				this.typeVariable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 635;
				this.match(SPBSParser.EXTENDS);
				this.state = 636;
				this.classOrInterfaceType();
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.BITAND) {
					{
					{
					this.state = 637;
					this.additionalBound();
					}
					}
					this.state = 642;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additionalBound(): AdditionalBoundContext {
		let _localctx: AdditionalBoundContext = new AdditionalBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SPBSParser.RULE_additionalBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(SPBSParser.BITAND);
			this.state = 646;
			this.interfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SPBSParser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.match(SPBSParser.LT);
			this.state = 649;
			this.typeArgumentList();
			this.state = 650;
			this.match(SPBSParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let _localctx: TypeArgumentListContext = new TypeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SPBSParser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.typeArgument();
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 653;
				this.match(SPBSParser.COMMA);
				this.state = 654;
				this.typeArgument();
				}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SPBSParser.RULE_typeArgument);
		try {
			this.state = 662;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 660;
				this.referenceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 661;
				this.wildcard();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wildcard(): WildcardContext {
		let _localctx: WildcardContext = new WildcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SPBSParser.RULE_wildcard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 664;
				this.annotation();
				}
				}
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 670;
			this.match(SPBSParser.QUESTION);
			this.state = 672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.EXTENDS || _la === SPBSParser.SUPER) {
				{
				this.state = 671;
				this.wildcardBounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wildcardBounds(): WildcardBoundsContext {
		let _localctx: WildcardBoundsContext = new WildcardBoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SPBSParser.RULE_wildcardBounds);
		try {
			this.state = 678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.EXTENDS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 674;
				this.match(SPBSParser.EXTENDS);
				this.state = 675;
				this.referenceType();
				}
				break;
			case SPBSParser.SUPER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 676;
				this.match(SPBSParser.SUPER);
				this.state = 677;
				this.referenceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public packageName(): PackageNameContext;
	public packageName(_p: number): PackageNameContext;
	// @RuleVersion(0)
	public packageName(_p?: number): PackageNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PackageNameContext = new PackageNameContext(this._ctx, _parentState);
		let _prevctx: PackageNameContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, SPBSParser.RULE_packageName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 681;
			this.match(SPBSParser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 688;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PackageNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_packageName);
					this.state = 683;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 684;
					this.match(SPBSParser.DOT);
					this.state = 685;
					this.match(SPBSParser.Identifier);
					}
					}
				}
				this.state = 690;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SPBSParser.RULE_typeName);
		try {
			this.state = 696;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 691;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 692;
				this.packageOrTypeName(0);
				this.state = 693;
				this.match(SPBSParser.DOT);
				this.state = 694;
				this.match(SPBSParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public packageOrTypeName(): PackageOrTypeNameContext;
	public packageOrTypeName(_p: number): PackageOrTypeNameContext;
	// @RuleVersion(0)
	public packageOrTypeName(_p?: number): PackageOrTypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this._ctx, _parentState);
		let _prevctx: PackageOrTypeNameContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, SPBSParser.RULE_packageOrTypeName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 699;
			this.match(SPBSParser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 706;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PackageOrTypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_packageOrTypeName);
					this.state = 701;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 702;
					this.match(SPBSParser.DOT);
					this.state = 703;
					this.match(SPBSParser.Identifier);
					}
					}
				}
				this.state = 708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionName(): ExpressionNameContext {
		let _localctx: ExpressionNameContext = new ExpressionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SPBSParser.RULE_expressionName);
		try {
			this.state = 714;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 710;
				this.ambiguousName(0);
				this.state = 711;
				this.match(SPBSParser.DOT);
				this.state = 712;
				this.match(SPBSParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SPBSParser.RULE_methodName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(SPBSParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public ambiguousName(): AmbiguousNameContext;
	public ambiguousName(_p: number): AmbiguousNameContext;
	// @RuleVersion(0)
	public ambiguousName(_p?: number): AmbiguousNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AmbiguousNameContext = new AmbiguousNameContext(this._ctx, _parentState);
		let _prevctx: AmbiguousNameContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, SPBSParser.RULE_ambiguousName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 719;
			this.match(SPBSParser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 726;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AmbiguousNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_ambiguousName);
					this.state = 721;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 722;
					this.match(SPBSParser.DOT);
					this.state = 723;
					this.match(SPBSParser.Identifier);
					}
					}
				}
				this.state = 728;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bsCompilationUnit(): BsCompilationUnitContext {
		let _localctx: BsCompilationUnitContext = new BsCompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SPBSParser.RULE_bsCompilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.IMPORT) {
				{
				{
				this.state = 729;
				this.importDeclaration();
				}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.ASSERT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BREAK) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SPBSParser.CONTINUE - 32)) | (1 << (SPBSParser.DO - 32)) | (1 << (SPBSParser.DOUBLE - 32)) | (1 << (SPBSParser.ENUM - 32)) | (1 << (SPBSParser.FINAL - 32)) | (1 << (SPBSParser.FLOAT - 32)) | (1 << (SPBSParser.FOR - 32)) | (1 << (SPBSParser.IF - 32)) | (1 << (SPBSParser.INT - 32)) | (1 << (SPBSParser.LONG - 32)) | (1 << (SPBSParser.NATIVE - 32)) | (1 << (SPBSParser.NEW - 32)) | (1 << (SPBSParser.PRIVATE - 32)) | (1 << (SPBSParser.PROTECTED - 32)) | (1 << (SPBSParser.PUBLIC - 32)) | (1 << (SPBSParser.RETURN - 32)) | (1 << (SPBSParser.SHORT - 32)) | (1 << (SPBSParser.STATIC - 32)) | (1 << (SPBSParser.STRICTFP - 32)) | (1 << (SPBSParser.SUPER - 32)) | (1 << (SPBSParser.SWITCH - 32)) | (1 << (SPBSParser.SYNCHRONIZED - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SPBSParser.THIS - 64)) | (1 << (SPBSParser.THROW - 64)) | (1 << (SPBSParser.TRY - 64)) | (1 << (SPBSParser.VOID - 64)) | (1 << (SPBSParser.WHILE - 64)) | (1 << (SPBSParser.IntegerLiteral - 64)) | (1 << (SPBSParser.FloatingPointLiteral - 64)) | (1 << (SPBSParser.BooleanLiteral - 64)) | (1 << (SPBSParser.CharacterLiteral - 64)) | (1 << (SPBSParser.StringLiteral - 64)) | (1 << (SPBSParser.NullLiteral - 64)) | (1 << (SPBSParser.LPAREN - 64)) | (1 << (SPBSParser.LBRACE - 64)) | (1 << (SPBSParser.SEMI - 64)) | (1 << (SPBSParser.LT - 64)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SPBSParser.INC - 100)) | (1 << (SPBSParser.DEC - 100)) | (1 << (SPBSParser.Identifier - 100)) | (1 << (SPBSParser.AT - 100)))) !== 0)) {
				{
				{
				this.state = 735;
				this.blockStatement();
				}
				}
				this.state = 740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 741;
			this.match(SPBSParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SPBSParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 743;
				this.packageModifier();
				}
				}
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 749;
			this.match(SPBSParser.PACKAGE);
			this.state = 750;
			this.packageName(0);
			this.state = 751;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageModifier(): PackageModifierContext {
		let _localctx: PackageModifierContext = new PackageModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SPBSParser.RULE_packageModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SPBSParser.RULE_importDeclaration);
		try {
			this.state = 759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this.singleTypeImportDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.typeImportOnDemandDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 757;
				this.singleStaticImportDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 758;
				this.staticImportOnDemandDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		let _localctx: SingleTypeImportDeclarationContext = new SingleTypeImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SPBSParser.RULE_singleTypeImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(SPBSParser.IMPORT);
			this.state = 762;
			this.typeName();
			this.state = 763;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		let _localctx: TypeImportOnDemandDeclarationContext = new TypeImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SPBSParser.RULE_typeImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(SPBSParser.IMPORT);
			this.state = 766;
			this.packageOrTypeName(0);
			this.state = 767;
			this.match(SPBSParser.DOT);
			this.state = 768;
			this.match(SPBSParser.MUL);
			this.state = 769;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		let _localctx: SingleStaticImportDeclarationContext = new SingleStaticImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SPBSParser.RULE_singleStaticImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(SPBSParser.IMPORT);
			this.state = 772;
			this.match(SPBSParser.STATIC);
			this.state = 773;
			this.typeName();
			this.state = 774;
			this.match(SPBSParser.DOT);
			this.state = 775;
			this.match(SPBSParser.Identifier);
			this.state = 776;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		let _localctx: StaticImportOnDemandDeclarationContext = new StaticImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SPBSParser.RULE_staticImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.match(SPBSParser.IMPORT);
			this.state = 779;
			this.match(SPBSParser.STATIC);
			this.state = 780;
			this.typeName();
			this.state = 781;
			this.match(SPBSParser.DOT);
			this.state = 782;
			this.match(SPBSParser.MUL);
			this.state = 783;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SPBSParser.RULE_typeDeclaration);
		try {
			this.state = 788;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 785;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 786;
				this.interfaceDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 787;
				this.match(SPBSParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SPBSParser.RULE_classDeclaration);
		try {
			this.state = 792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 790;
				this.normalClassDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 791;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalClassDeclaration(): NormalClassDeclarationContext {
		let _localctx: NormalClassDeclarationContext = new NormalClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SPBSParser.RULE_normalClassDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.ABSTRACT || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SPBSParser.FINAL - 39)) | (1 << (SPBSParser.PRIVATE - 39)) | (1 << (SPBSParser.PROTECTED - 39)) | (1 << (SPBSParser.PUBLIC - 39)) | (1 << (SPBSParser.STATIC - 39)) | (1 << (SPBSParser.STRICTFP - 39)))) !== 0) || _la === SPBSParser.AT) {
				{
				{
				this.state = 794;
				this.classModifier();
				}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 800;
			this.match(SPBSParser.CLASS);
			this.state = 801;
			this.match(SPBSParser.Identifier);
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 802;
				this.typeParameters();
				}
			}

			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.EXTENDS) {
				{
				this.state = 805;
				this.superclass();
				}
			}

			this.state = 809;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.IMPLEMENTS) {
				{
				this.state = 808;
				this.superinterfaces();
				}
			}

			this.state = 811;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classModifier(): ClassModifierContext {
		let _localctx: ClassModifierContext = new ClassModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SPBSParser.RULE_classModifier);
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 813;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 814;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 815;
				this.match(SPBSParser.PROTECTED);
				}
				break;
			case SPBSParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 816;
				this.match(SPBSParser.PRIVATE);
				}
				break;
			case SPBSParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 817;
				this.match(SPBSParser.ABSTRACT);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 818;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 819;
				this.match(SPBSParser.FINAL);
				}
				break;
			case SPBSParser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 820;
				this.match(SPBSParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SPBSParser.RULE_typeParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.match(SPBSParser.LT);
			this.state = 824;
			this.typeParameterList();
			this.state = 825;
			this.match(SPBSParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let _localctx: TypeParameterListContext = new TypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SPBSParser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.typeParameter();
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 828;
				this.match(SPBSParser.COMMA);
				this.state = 829;
				this.typeParameter();
				}
				}
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superclass(): SuperclassContext {
		let _localctx: SuperclassContext = new SuperclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SPBSParser.RULE_superclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.match(SPBSParser.EXTENDS);
			this.state = 836;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superinterfaces(): SuperinterfacesContext {
		let _localctx: SuperinterfacesContext = new SuperinterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SPBSParser.RULE_superinterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.match(SPBSParser.IMPLEMENTS);
			this.state = 839;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceTypeList(): InterfaceTypeListContext {
		let _localctx: InterfaceTypeListContext = new InterfaceTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SPBSParser.RULE_interfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this.interfaceType();
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 842;
				this.match(SPBSParser.COMMA);
				this.state = 843;
				this.interfaceType();
				}
				}
				this.state = 848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SPBSParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.match(SPBSParser.LBRACE);
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.ENUM - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.INTERFACE - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NATIVE - 35)) | (1 << (SPBSParser.PRIVATE - 35)) | (1 << (SPBSParser.PROTECTED - 35)) | (1 << (SPBSParser.PUBLIC - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.STATIC - 35)) | (1 << (SPBSParser.STRICTFP - 35)) | (1 << (SPBSParser.SYNCHRONIZED - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SPBSParser.TRANSIENT - 67)) | (1 << (SPBSParser.VOID - 67)) | (1 << (SPBSParser.VOLATILE - 67)) | (1 << (SPBSParser.LBRACE - 67)) | (1 << (SPBSParser.SEMI - 67)) | (1 << (SPBSParser.LT - 67)))) !== 0) || _la === SPBSParser.Identifier || _la === SPBSParser.AT) {
				{
				{
				this.state = 850;
				this.classBodyDeclaration();
				}
				}
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 856;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SPBSParser.RULE_classBodyDeclaration);
		try {
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 858;
				this.classMemberDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 859;
				this.instanceInitializer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 860;
				this.staticInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 861;
				this.constructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let _localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SPBSParser.RULE_classMemberDeclaration);
		try {
			this.state = 869;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 864;
				this.fieldDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 865;
				this.methodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 866;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 867;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 868;
				this.match(SPBSParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SPBSParser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SPBSParser.FINAL - 39)) | (1 << (SPBSParser.PRIVATE - 39)) | (1 << (SPBSParser.PROTECTED - 39)) | (1 << (SPBSParser.PUBLIC - 39)) | (1 << (SPBSParser.STATIC - 39)) | (1 << (SPBSParser.TRANSIENT - 39)) | (1 << (SPBSParser.VOLATILE - 39)))) !== 0) || _la === SPBSParser.AT) {
				{
				{
				this.state = 871;
				this.fieldModifier();
				}
				}
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 877;
			this.unannType();
			this.state = 878;
			this.variableDeclaratorList();
			this.state = 879;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldModifier(): FieldModifierContext {
		let _localctx: FieldModifierContext = new FieldModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SPBSParser.RULE_fieldModifier);
		try {
			this.state = 889;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 881;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 882;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 883;
				this.match(SPBSParser.PROTECTED);
				}
				break;
			case SPBSParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 884;
				this.match(SPBSParser.PRIVATE);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 885;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.FINAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 886;
				this.match(SPBSParser.FINAL);
				}
				break;
			case SPBSParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 887;
				this.match(SPBSParser.TRANSIENT);
				}
				break;
			case SPBSParser.VOLATILE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 888;
				this.match(SPBSParser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorList(): VariableDeclaratorListContext {
		let _localctx: VariableDeclaratorListContext = new VariableDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SPBSParser.RULE_variableDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 891;
			this.variableDeclarator();
			this.state = 896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 892;
				this.match(SPBSParser.COMMA);
				this.state = 893;
				this.variableDeclarator();
				}
				}
				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SPBSParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.variableDeclaratorId();
			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.ASSIGN) {
				{
				this.state = 900;
				this.match(SPBSParser.ASSIGN);
				this.state = 901;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SPBSParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
			this.match(SPBSParser.Identifier);
			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LBRACK || _la === SPBSParser.AT) {
				{
				this.state = 905;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SPBSParser.RULE_variableInitializer);
		try {
			this.state = 910;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.NEW:
			case SPBSParser.SHORT:
			case SPBSParser.SUPER:
			case SPBSParser.THIS:
			case SPBSParser.VOID:
			case SPBSParser.IntegerLiteral:
			case SPBSParser.FloatingPointLiteral:
			case SPBSParser.BooleanLiteral:
			case SPBSParser.CharacterLiteral:
			case SPBSParser.StringLiteral:
			case SPBSParser.NullLiteral:
			case SPBSParser.LPAREN:
			case SPBSParser.BANG:
			case SPBSParser.TILDE:
			case SPBSParser.INC:
			case SPBSParser.DEC:
			case SPBSParser.ADD:
			case SPBSParser.SUB:
			case SPBSParser.Identifier:
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.expression();
				}
				break;
			case SPBSParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 909;
				this.arrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannType(): UnannTypeContext {
		let _localctx: UnannTypeContext = new UnannTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SPBSParser.RULE_unannType);
		try {
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 912;
				this.unannPrimitiveType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 913;
				this.unannReferenceType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		let _localctx: UnannPrimitiveTypeContext = new UnannPrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SPBSParser.RULE_unannPrimitiveType);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.numericType();
				}
				break;
			case SPBSParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this.match(SPBSParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannReferenceType(): UnannReferenceTypeContext {
		let _localctx: UnannReferenceTypeContext = new UnannReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SPBSParser.RULE_unannReferenceType);
		try {
			this.state = 923;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 920;
				this.unannClassOrInterfaceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 921;
				this.unannTypeVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 922;
				this.unannArrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		let _localctx: UnannClassOrInterfaceTypeContext = new UnannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SPBSParser.RULE_unannClassOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 925;
				this.unannClassType_lfno_unannClassOrInterfaceType();
				}
				break;

			case 2:
				{
				this.state = 926;
				this.unannInterfaceType_lfno_unannClassOrInterfaceType();
				}
				break;
			}
			this.state = 933;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 931;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
					case 1:
						{
						this.state = 929;
						this.unannClassType_lf_unannClassOrInterfaceType();
						}
						break;

					case 2:
						{
						this.state = 930;
						this.unannInterfaceType_lf_unannClassOrInterfaceType();
						}
						break;
					}
					}
				}
				this.state = 935;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassType(): UnannClassTypeContext {
		let _localctx: UnannClassTypeContext = new UnannClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SPBSParser.RULE_unannClassType);
		let _la: number;
		try {
			this.state = 952;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 936;
				this.match(SPBSParser.Identifier);
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 937;
					this.typeArguments();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 940;
				this.unannClassOrInterfaceType();
				this.state = 941;
				this.match(SPBSParser.DOT);
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 942;
					this.annotation();
					}
					}
					this.state = 947;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 948;
				this.match(SPBSParser.Identifier);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 949;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		let _localctx: UnannClassType_lf_unannClassOrInterfaceTypeContext = new UnannClassType_lf_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SPBSParser.RULE_unannClassType_lf_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(SPBSParser.DOT);
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 955;
				this.annotation();
				}
				}
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 961;
			this.match(SPBSParser.Identifier);
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 962;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		let _localctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext = new UnannClassType_lfno_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SPBSParser.RULE_unannClassType_lfno_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this.match(SPBSParser.Identifier);
			this.state = 967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 966;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType(): UnannInterfaceTypeContext {
		let _localctx: UnannInterfaceTypeContext = new UnannInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SPBSParser.RULE_unannInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.unannClassType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext {
		let _localctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lf_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SPBSParser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.unannClassType_lf_unannClassOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext {
		let _localctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SPBSParser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.unannClassType_lfno_unannClassOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannTypeVariable(): UnannTypeVariableContext {
		let _localctx: UnannTypeVariableContext = new UnannTypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SPBSParser.RULE_unannTypeVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 975;
			this.match(SPBSParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannArrayType(): UnannArrayTypeContext {
		let _localctx: UnannArrayTypeContext = new UnannArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SPBSParser.RULE_unannArrayType);
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 977;
				this.unannPrimitiveType();
				this.state = 978;
				this.dims();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 980;
				this.unannClassOrInterfaceType();
				this.state = 981;
				this.dims();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 983;
				this.unannTypeVariable();
				this.state = 984;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SPBSParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.ABSTRACT || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SPBSParser.FINAL - 39)) | (1 << (SPBSParser.NATIVE - 39)) | (1 << (SPBSParser.PRIVATE - 39)) | (1 << (SPBSParser.PROTECTED - 39)) | (1 << (SPBSParser.PUBLIC - 39)) | (1 << (SPBSParser.STATIC - 39)) | (1 << (SPBSParser.STRICTFP - 39)) | (1 << (SPBSParser.SYNCHRONIZED - 39)))) !== 0) || _la === SPBSParser.AT) {
				{
				{
				this.state = 988;
				this.methodModifier();
				}
				}
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 994;
			this.methodHeader();
			this.state = 995;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodModifier(): MethodModifierContext {
		let _localctx: MethodModifierContext = new MethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SPBSParser.RULE_methodModifier);
		try {
			this.state = 1007;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 997;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 998;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 999;
				this.match(SPBSParser.PROTECTED);
				}
				break;
			case SPBSParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1000;
				this.match(SPBSParser.PRIVATE);
				}
				break;
			case SPBSParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1001;
				this.match(SPBSParser.ABSTRACT);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1002;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1003;
				this.match(SPBSParser.FINAL);
				}
				break;
			case SPBSParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1004;
				this.match(SPBSParser.SYNCHRONIZED);
				}
				break;
			case SPBSParser.NATIVE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1005;
				this.match(SPBSParser.NATIVE);
				}
				break;
			case SPBSParser.STRICTFP:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1006;
				this.match(SPBSParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodHeader(): MethodHeaderContext {
		let _localctx: MethodHeaderContext = new MethodHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SPBSParser.RULE_methodHeader);
		let _la: number;
		try {
			this.state = 1026;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.SHORT:
			case SPBSParser.VOID:
			case SPBSParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1009;
				this.result();
				this.state = 1010;
				this.methodDeclarator();
				this.state = 1012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.THROWS) {
					{
					this.state = 1011;
					this.throws_();
					}
				}

				}
				break;
			case SPBSParser.LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1014;
				this.typeParameters();
				this.state = 1018;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 1015;
					this.annotation();
					}
					}
					this.state = 1020;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1021;
				this.result();
				this.state = 1022;
				this.methodDeclarator();
				this.state = 1024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.THROWS) {
					{
					this.state = 1023;
					this.throws_();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SPBSParser.RULE_result);
		try {
			this.state = 1030;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.SHORT:
			case SPBSParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1028;
				this.unannType();
				}
				break;
			case SPBSParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1029;
				this.match(SPBSParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclarator(): MethodDeclaratorContext {
		let _localctx: MethodDeclaratorContext = new MethodDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SPBSParser.RULE_methodDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this.match(SPBSParser.Identifier);
			this.state = 1033;
			this.match(SPBSParser.LPAREN);
			this.state = 1035;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.SHORT - 35)))) !== 0) || _la === SPBSParser.Identifier || _la === SPBSParser.AT) {
				{
				this.state = 1034;
				this.formalParameterList();
				}
			}

			this.state = 1037;
			this.match(SPBSParser.RPAREN);
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LBRACK || _la === SPBSParser.AT) {
				{
				this.state = 1038;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SPBSParser.RULE_formalParameterList);
		try {
			this.state = 1047;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1041;
				this.receiverParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1042;
				this.formalParameters();
				this.state = 1043;
				this.match(SPBSParser.COMMA);
				this.state = 1044;
				this.lastFormalParameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1046;
				this.lastFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SPBSParser.RULE_formalParameters);
		try {
			let _alt: number;
			this.state = 1065;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1049;
				this.formalParameter();
				this.state = 1054;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1050;
						this.match(SPBSParser.COMMA);
						this.state = 1051;
						this.formalParameter();
						}
						}
					}
					this.state = 1056;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1057;
				this.receiverParameter();
				this.state = 1062;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1058;
						this.match(SPBSParser.COMMA);
						this.state = 1059;
						this.formalParameter();
						}
						}
					}
					this.state = 1064;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SPBSParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.FINAL || _la === SPBSParser.AT) {
				{
				{
				this.state = 1067;
				this.variableModifier();
				}
				}
				this.state = 1072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1073;
			this.unannType();
			this.state = 1074;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SPBSParser.RULE_variableModifier);
		try {
			this.state = 1078;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1076;
				this.annotation();
				}
				break;
			case SPBSParser.FINAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1077;
				this.match(SPBSParser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SPBSParser.RULE_lastFormalParameter);
		let _la: number;
		try {
			this.state = 1097;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.FINAL || _la === SPBSParser.AT) {
					{
					{
					this.state = 1080;
					this.variableModifier();
					}
					}
					this.state = 1085;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1086;
				this.unannType();
				this.state = 1090;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 1087;
					this.annotation();
					}
					}
					this.state = 1092;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1093;
				this.match(SPBSParser.ELLIPSIS);
				this.state = 1094;
				this.variableDeclaratorId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1096;
				this.formalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let _localctx: ReceiverParameterContext = new ReceiverParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SPBSParser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 1099;
				this.annotation();
				}
				}
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1105;
			this.unannType();
			this.state = 1108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.Identifier) {
				{
				this.state = 1106;
				this.match(SPBSParser.Identifier);
				this.state = 1107;
				this.match(SPBSParser.DOT);
				}
			}

			this.state = 1110;
			this.match(SPBSParser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throws_(): Throws_Context {
		let _localctx: Throws_Context = new Throws_Context(this._ctx, this.state);
		this.enterRule(_localctx, 160, SPBSParser.RULE_throws_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1112;
			this.match(SPBSParser.THROWS);
			this.state = 1113;
			this.exceptionTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionTypeList(): ExceptionTypeListContext {
		let _localctx: ExceptionTypeListContext = new ExceptionTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SPBSParser.RULE_exceptionTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1115;
			this.exceptionType();
			this.state = 1120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 1116;
				this.match(SPBSParser.COMMA);
				this.state = 1117;
				this.exceptionType();
				}
				}
				this.state = 1122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionType(): ExceptionTypeContext {
		let _localctx: ExceptionTypeContext = new ExceptionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SPBSParser.RULE_exceptionType);
		try {
			this.state = 1125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1123;
				this.classType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1124;
				this.typeVariable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SPBSParser.RULE_methodBody);
		try {
			this.state = 1129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1127;
				this.block();
				}
				break;
			case SPBSParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1128;
				this.match(SPBSParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanceInitializer(): InstanceInitializerContext {
		let _localctx: InstanceInitializerContext = new InstanceInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SPBSParser.RULE_instanceInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticInitializer(): StaticInitializerContext {
		let _localctx: StaticInitializerContext = new StaticInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SPBSParser.RULE_staticInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1133;
			this.match(SPBSParser.STATIC);
			this.state = 1134;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SPBSParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (SPBSParser.PRIVATE - 54)) | (1 << (SPBSParser.PROTECTED - 54)) | (1 << (SPBSParser.PUBLIC - 54)))) !== 0) || _la === SPBSParser.AT) {
				{
				{
				this.state = 1136;
				this.constructorModifier();
				}
				}
				this.state = 1141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1142;
			this.constructorDeclarator();
			this.state = 1144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.THROWS) {
				{
				this.state = 1143;
				this.throws_();
				}
			}

			this.state = 1146;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorModifier(): ConstructorModifierContext {
		let _localctx: ConstructorModifierContext = new ConstructorModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SPBSParser.RULE_constructorModifier);
		try {
			this.state = 1152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1148;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1149;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1150;
				this.match(SPBSParser.PROTECTED);
				}
				break;
			case SPBSParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1151;
				this.match(SPBSParser.PRIVATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclarator(): ConstructorDeclaratorContext {
		let _localctx: ConstructorDeclaratorContext = new ConstructorDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SPBSParser.RULE_constructorDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 1154;
				this.typeParameters();
				}
			}

			this.state = 1157;
			this.simpleTypeName();
			this.state = 1158;
			this.match(SPBSParser.LPAREN);
			this.state = 1160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.SHORT - 35)))) !== 0) || _la === SPBSParser.Identifier || _la === SPBSParser.AT) {
				{
				this.state = 1159;
				this.formalParameterList();
				}
			}

			this.state = 1162;
			this.match(SPBSParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTypeName(): SimpleTypeNameContext {
		let _localctx: SimpleTypeNameContext = new SimpleTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SPBSParser.RULE_simpleTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1164;
			this.match(SPBSParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorBody(): ConstructorBodyContext {
		let _localctx: ConstructorBodyContext = new ConstructorBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SPBSParser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.match(SPBSParser.LBRACE);
			this.state = 1168;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 1167;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 1171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.ASSERT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BREAK) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SPBSParser.CONTINUE - 32)) | (1 << (SPBSParser.DO - 32)) | (1 << (SPBSParser.DOUBLE - 32)) | (1 << (SPBSParser.ENUM - 32)) | (1 << (SPBSParser.FINAL - 32)) | (1 << (SPBSParser.FLOAT - 32)) | (1 << (SPBSParser.FOR - 32)) | (1 << (SPBSParser.IF - 32)) | (1 << (SPBSParser.INT - 32)) | (1 << (SPBSParser.LONG - 32)) | (1 << (SPBSParser.NATIVE - 32)) | (1 << (SPBSParser.NEW - 32)) | (1 << (SPBSParser.PRIVATE - 32)) | (1 << (SPBSParser.PROTECTED - 32)) | (1 << (SPBSParser.PUBLIC - 32)) | (1 << (SPBSParser.RETURN - 32)) | (1 << (SPBSParser.SHORT - 32)) | (1 << (SPBSParser.STATIC - 32)) | (1 << (SPBSParser.STRICTFP - 32)) | (1 << (SPBSParser.SUPER - 32)) | (1 << (SPBSParser.SWITCH - 32)) | (1 << (SPBSParser.SYNCHRONIZED - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SPBSParser.THIS - 64)) | (1 << (SPBSParser.THROW - 64)) | (1 << (SPBSParser.TRY - 64)) | (1 << (SPBSParser.VOID - 64)) | (1 << (SPBSParser.WHILE - 64)) | (1 << (SPBSParser.IntegerLiteral - 64)) | (1 << (SPBSParser.FloatingPointLiteral - 64)) | (1 << (SPBSParser.BooleanLiteral - 64)) | (1 << (SPBSParser.CharacterLiteral - 64)) | (1 << (SPBSParser.StringLiteral - 64)) | (1 << (SPBSParser.NullLiteral - 64)) | (1 << (SPBSParser.LPAREN - 64)) | (1 << (SPBSParser.LBRACE - 64)) | (1 << (SPBSParser.SEMI - 64)) | (1 << (SPBSParser.LT - 64)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SPBSParser.INC - 100)) | (1 << (SPBSParser.DEC - 100)) | (1 << (SPBSParser.Identifier - 100)) | (1 << (SPBSParser.AT - 100)))) !== 0)) {
				{
				this.state = 1170;
				this.blockStatements();
				}
			}

			this.state = 1173;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let _localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SPBSParser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 1221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 1175;
					this.typeArguments();
					}
				}

				this.state = 1178;
				this.match(SPBSParser.THIS);
				this.state = 1179;
				this.match(SPBSParser.LPAREN);
				this.state = 1181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 1180;
					this.argumentList();
					}
				}

				this.state = 1183;
				this.match(SPBSParser.RPAREN);
				this.state = 1184;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 1185;
					this.typeArguments();
					}
				}

				this.state = 1188;
				this.match(SPBSParser.SUPER);
				this.state = 1189;
				this.match(SPBSParser.LPAREN);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 1190;
					this.argumentList();
					}
				}

				this.state = 1193;
				this.match(SPBSParser.RPAREN);
				this.state = 1194;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1195;
				this.expressionName();
				this.state = 1196;
				this.match(SPBSParser.DOT);
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 1197;
					this.typeArguments();
					}
				}

				this.state = 1200;
				this.match(SPBSParser.SUPER);
				this.state = 1201;
				this.match(SPBSParser.LPAREN);
				this.state = 1203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 1202;
					this.argumentList();
					}
				}

				this.state = 1205;
				this.match(SPBSParser.RPAREN);
				this.state = 1206;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1208;
				this.primary();
				this.state = 1209;
				this.match(SPBSParser.DOT);
				this.state = 1211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 1210;
					this.typeArguments();
					}
				}

				this.state = 1213;
				this.match(SPBSParser.SUPER);
				this.state = 1214;
				this.match(SPBSParser.LPAREN);
				this.state = 1216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 1215;
					this.argumentList();
					}
				}

				this.state = 1218;
				this.match(SPBSParser.RPAREN);
				this.state = 1219;
				this.match(SPBSParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, SPBSParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.ABSTRACT || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SPBSParser.FINAL - 39)) | (1 << (SPBSParser.PRIVATE - 39)) | (1 << (SPBSParser.PROTECTED - 39)) | (1 << (SPBSParser.PUBLIC - 39)) | (1 << (SPBSParser.STATIC - 39)) | (1 << (SPBSParser.STRICTFP - 39)))) !== 0) || _la === SPBSParser.AT) {
				{
				{
				this.state = 1223;
				this.classModifier();
				}
				}
				this.state = 1228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1229;
			this.match(SPBSParser.ENUM);
			this.state = 1230;
			this.match(SPBSParser.Identifier);
			this.state = 1232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.IMPLEMENTS) {
				{
				this.state = 1231;
				this.superinterfaces();
				}
			}

			this.state = 1234;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SPBSParser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this.match(SPBSParser.LBRACE);
			this.state = 1238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.Identifier || _la === SPBSParser.AT) {
				{
				this.state = 1237;
				this.enumConstantList();
				}
			}

			this.state = 1241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.COMMA) {
				{
				this.state = 1240;
				this.match(SPBSParser.COMMA);
				}
			}

			this.state = 1244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.SEMI) {
				{
				this.state = 1243;
				this.enumBodyDeclarations();
				}
			}

			this.state = 1246;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantList(): EnumConstantListContext {
		let _localctx: EnumConstantListContext = new EnumConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SPBSParser.RULE_enumConstantList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1248;
			this.enumConstant();
			this.state = 1253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1249;
					this.match(SPBSParser.COMMA);
					this.state = 1250;
					this.enumConstant();
					}
					}
				}
				this.state = 1255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, SPBSParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 1256;
				this.enumConstantModifier();
				}
				}
				this.state = 1261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1262;
			this.match(SPBSParser.Identifier);
			this.state = 1268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LPAREN) {
				{
				this.state = 1263;
				this.match(SPBSParser.LPAREN);
				this.state = 1265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 1264;
					this.argumentList();
					}
				}

				this.state = 1267;
				this.match(SPBSParser.RPAREN);
				}
			}

			this.state = 1271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LBRACE) {
				{
				this.state = 1270;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantModifier(): EnumConstantModifierContext {
		let _localctx: EnumConstantModifierContext = new EnumConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, SPBSParser.RULE_enumConstantModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1273;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SPBSParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1275;
			this.match(SPBSParser.SEMI);
			this.state = 1279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.ENUM - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.INTERFACE - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NATIVE - 35)) | (1 << (SPBSParser.PRIVATE - 35)) | (1 << (SPBSParser.PROTECTED - 35)) | (1 << (SPBSParser.PUBLIC - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.STATIC - 35)) | (1 << (SPBSParser.STRICTFP - 35)) | (1 << (SPBSParser.SYNCHRONIZED - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SPBSParser.TRANSIENT - 67)) | (1 << (SPBSParser.VOID - 67)) | (1 << (SPBSParser.VOLATILE - 67)) | (1 << (SPBSParser.LBRACE - 67)) | (1 << (SPBSParser.SEMI - 67)) | (1 << (SPBSParser.LT - 67)))) !== 0) || _la === SPBSParser.Identifier || _la === SPBSParser.AT) {
				{
				{
				this.state = 1276;
				this.classBodyDeclaration();
				}
				}
				this.state = 1281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SPBSParser.RULE_interfaceDeclaration);
		try {
			this.state = 1284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1282;
				this.normalInterfaceDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1283;
				this.annotationTypeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let _localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SPBSParser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.ABSTRACT || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (SPBSParser.PRIVATE - 54)) | (1 << (SPBSParser.PROTECTED - 54)) | (1 << (SPBSParser.PUBLIC - 54)) | (1 << (SPBSParser.STATIC - 54)) | (1 << (SPBSParser.STRICTFP - 54)))) !== 0) || _la === SPBSParser.AT) {
				{
				{
				this.state = 1286;
				this.interfaceModifier();
				}
				}
				this.state = 1291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1292;
			this.match(SPBSParser.INTERFACE);
			this.state = 1293;
			this.match(SPBSParser.Identifier);
			this.state = 1295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 1294;
				this.typeParameters();
				}
			}

			this.state = 1298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.EXTENDS) {
				{
				this.state = 1297;
				this.extendsInterfaces();
				}
			}

			this.state = 1300;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceModifier(): InterfaceModifierContext {
		let _localctx: InterfaceModifierContext = new InterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SPBSParser.RULE_interfaceModifier);
		try {
			this.state = 1309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1302;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1303;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1304;
				this.match(SPBSParser.PROTECTED);
				}
				break;
			case SPBSParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1305;
				this.match(SPBSParser.PRIVATE);
				}
				break;
			case SPBSParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1306;
				this.match(SPBSParser.ABSTRACT);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1307;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.STRICTFP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1308;
				this.match(SPBSParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendsInterfaces(): ExtendsInterfacesContext {
		let _localctx: ExtendsInterfacesContext = new ExtendsInterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SPBSParser.RULE_extendsInterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1311;
			this.match(SPBSParser.EXTENDS);
			this.state = 1312;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SPBSParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1314;
			this.match(SPBSParser.LBRACE);
			this.state = 1318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SPBSParser.DEFAULT - 33)) | (1 << (SPBSParser.DOUBLE - 33)) | (1 << (SPBSParser.ENUM - 33)) | (1 << (SPBSParser.FINAL - 33)) | (1 << (SPBSParser.FLOAT - 33)) | (1 << (SPBSParser.INT - 33)) | (1 << (SPBSParser.INTERFACE - 33)) | (1 << (SPBSParser.LONG - 33)) | (1 << (SPBSParser.PRIVATE - 33)) | (1 << (SPBSParser.PROTECTED - 33)) | (1 << (SPBSParser.PUBLIC - 33)) | (1 << (SPBSParser.SHORT - 33)) | (1 << (SPBSParser.STATIC - 33)) | (1 << (SPBSParser.STRICTFP - 33)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.SEMI - 69)) | (1 << (SPBSParser.LT - 69)))) !== 0) || _la === SPBSParser.Identifier || _la === SPBSParser.AT) {
				{
				{
				this.state = 1315;
				this.interfaceMemberDeclaration();
				}
				}
				this.state = 1320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1321;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SPBSParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 1328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1323;
				this.constantDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1324;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1325;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1326;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1327;
				this.match(SPBSParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclaration(): ConstantDeclarationContext {
		let _localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SPBSParser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SPBSParser.FINAL - 39)) | (1 << (SPBSParser.PUBLIC - 39)) | (1 << (SPBSParser.STATIC - 39)))) !== 0) || _la === SPBSParser.AT) {
				{
				{
				this.state = 1330;
				this.constantModifier();
				}
				}
				this.state = 1335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1336;
			this.unannType();
			this.state = 1337;
			this.variableDeclaratorList();
			this.state = 1338;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantModifier(): ConstantModifierContext {
		let _localctx: ConstantModifierContext = new ConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, SPBSParser.RULE_constantModifier);
		try {
			this.state = 1344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1340;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1341;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1342;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.FINAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1343;
				this.match(SPBSParser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, SPBSParser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.ABSTRACT || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SPBSParser.DEFAULT - 33)) | (1 << (SPBSParser.PUBLIC - 33)) | (1 << (SPBSParser.STATIC - 33)) | (1 << (SPBSParser.STRICTFP - 33)))) !== 0) || _la === SPBSParser.AT) {
				{
				{
				this.state = 1346;
				this.interfaceMethodModifier();
				}
				}
				this.state = 1351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1352;
			this.methodHeader();
			this.state = 1353;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, SPBSParser.RULE_interfaceMethodModifier);
		try {
			this.state = 1361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1355;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1356;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1357;
				this.match(SPBSParser.ABSTRACT);
				}
				break;
			case SPBSParser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1358;
				this.match(SPBSParser.DEFAULT);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1359;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1360;
				this.match(SPBSParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, SPBSParser.RULE_annotationTypeDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1366;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1363;
					this.interfaceModifier();
					}
					}
				}
				this.state = 1368;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			}
			this.state = 1369;
			this.match(SPBSParser.AT);
			this.state = 1370;
			this.match(SPBSParser.INTERFACE);
			this.state = 1371;
			this.match(SPBSParser.Identifier);
			this.state = 1372;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, SPBSParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1374;
			this.match(SPBSParser.LBRACE);
			this.state = 1378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (SPBSParser.ABSTRACT - 22)) | (1 << (SPBSParser.BOOLEAN - 22)) | (1 << (SPBSParser.BYTE - 22)) | (1 << (SPBSParser.CHAR - 22)) | (1 << (SPBSParser.CLASS - 22)) | (1 << (SPBSParser.DOUBLE - 22)) | (1 << (SPBSParser.ENUM - 22)) | (1 << (SPBSParser.FINAL - 22)) | (1 << (SPBSParser.FLOAT - 22)) | (1 << (SPBSParser.INT - 22)) | (1 << (SPBSParser.INTERFACE - 22)) | (1 << (SPBSParser.LONG - 22)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (SPBSParser.PRIVATE - 54)) | (1 << (SPBSParser.PROTECTED - 54)) | (1 << (SPBSParser.PUBLIC - 54)) | (1 << (SPBSParser.SHORT - 54)) | (1 << (SPBSParser.STATIC - 54)) | (1 << (SPBSParser.STRICTFP - 54)) | (1 << (SPBSParser.SEMI - 54)))) !== 0) || _la === SPBSParser.Identifier || _la === SPBSParser.AT) {
				{
				{
				this.state = 1375;
				this.annotationTypeMemberDeclaration();
				}
				}
				this.state = 1380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1381;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext {
		let _localctx: AnnotationTypeMemberDeclarationContext = new AnnotationTypeMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, SPBSParser.RULE_annotationTypeMemberDeclaration);
		try {
			this.state = 1388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1383;
				this.annotationTypeElementDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1384;
				this.constantDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1385;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1386;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1387;
				this.match(SPBSParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, SPBSParser.RULE_annotationTypeElementDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.ABSTRACT || _la === SPBSParser.PUBLIC || _la === SPBSParser.AT) {
				{
				{
				this.state = 1390;
				this.annotationTypeElementModifier();
				}
				}
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1396;
			this.unannType();
			this.state = 1397;
			this.match(SPBSParser.Identifier);
			this.state = 1398;
			this.match(SPBSParser.LPAREN);
			this.state = 1399;
			this.match(SPBSParser.RPAREN);
			this.state = 1401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LBRACK || _la === SPBSParser.AT) {
				{
				this.state = 1400;
				this.dims();
				}
			}

			this.state = 1404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.DEFAULT) {
				{
				this.state = 1403;
				this.defaultValue();
				}
			}

			this.state = 1406;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext {
		let _localctx: AnnotationTypeElementModifierContext = new AnnotationTypeElementModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, SPBSParser.RULE_annotationTypeElementModifier);
		try {
			this.state = 1411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1408;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1409;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1410;
				this.match(SPBSParser.ABSTRACT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, SPBSParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1413;
			this.match(SPBSParser.DEFAULT);
			this.state = 1414;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, SPBSParser.RULE_annotation);
		try {
			this.state = 1419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1416;
				this.normalAnnotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1417;
				this.markerAnnotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1418;
				this.singleElementAnnotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalAnnotation(): NormalAnnotationContext {
		let _localctx: NormalAnnotationContext = new NormalAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, SPBSParser.RULE_normalAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1421;
			this.match(SPBSParser.AT);
			this.state = 1422;
			this.typeName();
			this.state = 1423;
			this.match(SPBSParser.LPAREN);
			this.state = 1425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.Identifier) {
				{
				this.state = 1424;
				this.elementValuePairList();
				}
			}

			this.state = 1427;
			this.match(SPBSParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairList(): ElementValuePairListContext {
		let _localctx: ElementValuePairListContext = new ElementValuePairListContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, SPBSParser.RULE_elementValuePairList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1429;
			this.elementValuePair();
			this.state = 1434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 1430;
				this.match(SPBSParser.COMMA);
				this.state = 1431;
				this.elementValuePair();
				}
				}
				this.state = 1436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, SPBSParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1437;
			this.match(SPBSParser.Identifier);
			this.state = 1438;
			this.match(SPBSParser.ASSIGN);
			this.state = 1439;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, SPBSParser.RULE_elementValue);
		try {
			this.state = 1444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1441;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1442;
				this.elementValueArrayInitializer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1443;
				this.annotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, SPBSParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1446;
			this.match(SPBSParser.LBRACE);
			this.state = 1448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LBRACE - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
				{
				this.state = 1447;
				this.elementValueList();
				}
			}

			this.state = 1451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.COMMA) {
				{
				this.state = 1450;
				this.match(SPBSParser.COMMA);
				}
			}

			this.state = 1453;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueList(): ElementValueListContext {
		let _localctx: ElementValueListContext = new ElementValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, SPBSParser.RULE_elementValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this.elementValue();
			this.state = 1460;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1456;
					this.match(SPBSParser.COMMA);
					this.state = 1457;
					this.elementValue();
					}
					}
				}
				this.state = 1462;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public markerAnnotation(): MarkerAnnotationContext {
		let _localctx: MarkerAnnotationContext = new MarkerAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, SPBSParser.RULE_markerAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1463;
			this.match(SPBSParser.AT);
			this.state = 1464;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleElementAnnotation(): SingleElementAnnotationContext {
		let _localctx: SingleElementAnnotationContext = new SingleElementAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, SPBSParser.RULE_singleElementAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1466;
			this.match(SPBSParser.AT);
			this.state = 1467;
			this.typeName();
			this.state = 1468;
			this.match(SPBSParser.LPAREN);
			this.state = 1469;
			this.elementValue();
			this.state = 1470;
			this.match(SPBSParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, SPBSParser.RULE_arrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1472;
			this.match(SPBSParser.LBRACE);
			this.state = 1474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LBRACE - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
				{
				this.state = 1473;
				this.variableInitializerList();
				}
			}

			this.state = 1477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.COMMA) {
				{
				this.state = 1476;
				this.match(SPBSParser.COMMA);
				}
			}

			this.state = 1479;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializerList(): VariableInitializerListContext {
		let _localctx: VariableInitializerListContext = new VariableInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, SPBSParser.RULE_variableInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1481;
			this.variableInitializer();
			this.state = 1486;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1482;
					this.match(SPBSParser.COMMA);
					this.state = 1483;
					this.variableInitializer();
					}
					}
				}
				this.state = 1488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, SPBSParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this.match(SPBSParser.LBRACE);
			this.state = 1491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.ASSERT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BREAK) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SPBSParser.CONTINUE - 32)) | (1 << (SPBSParser.DO - 32)) | (1 << (SPBSParser.DOUBLE - 32)) | (1 << (SPBSParser.ENUM - 32)) | (1 << (SPBSParser.FINAL - 32)) | (1 << (SPBSParser.FLOAT - 32)) | (1 << (SPBSParser.FOR - 32)) | (1 << (SPBSParser.IF - 32)) | (1 << (SPBSParser.INT - 32)) | (1 << (SPBSParser.LONG - 32)) | (1 << (SPBSParser.NATIVE - 32)) | (1 << (SPBSParser.NEW - 32)) | (1 << (SPBSParser.PRIVATE - 32)) | (1 << (SPBSParser.PROTECTED - 32)) | (1 << (SPBSParser.PUBLIC - 32)) | (1 << (SPBSParser.RETURN - 32)) | (1 << (SPBSParser.SHORT - 32)) | (1 << (SPBSParser.STATIC - 32)) | (1 << (SPBSParser.STRICTFP - 32)) | (1 << (SPBSParser.SUPER - 32)) | (1 << (SPBSParser.SWITCH - 32)) | (1 << (SPBSParser.SYNCHRONIZED - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SPBSParser.THIS - 64)) | (1 << (SPBSParser.THROW - 64)) | (1 << (SPBSParser.TRY - 64)) | (1 << (SPBSParser.VOID - 64)) | (1 << (SPBSParser.WHILE - 64)) | (1 << (SPBSParser.IntegerLiteral - 64)) | (1 << (SPBSParser.FloatingPointLiteral - 64)) | (1 << (SPBSParser.BooleanLiteral - 64)) | (1 << (SPBSParser.CharacterLiteral - 64)) | (1 << (SPBSParser.StringLiteral - 64)) | (1 << (SPBSParser.NullLiteral - 64)) | (1 << (SPBSParser.LPAREN - 64)) | (1 << (SPBSParser.LBRACE - 64)) | (1 << (SPBSParser.SEMI - 64)) | (1 << (SPBSParser.LT - 64)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SPBSParser.INC - 100)) | (1 << (SPBSParser.DEC - 100)) | (1 << (SPBSParser.Identifier - 100)) | (1 << (SPBSParser.AT - 100)))) !== 0)) {
				{
				this.state = 1490;
				this.blockStatements();
				}
			}

			this.state = 1493;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatements(): BlockStatementsContext {
		let _localctx: BlockStatementsContext = new BlockStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, SPBSParser.RULE_blockStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1495;
				this.blockStatement();
				}
				}
				this.state = 1498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.ASSERT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BREAK) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SPBSParser.CONTINUE - 32)) | (1 << (SPBSParser.DO - 32)) | (1 << (SPBSParser.DOUBLE - 32)) | (1 << (SPBSParser.ENUM - 32)) | (1 << (SPBSParser.FINAL - 32)) | (1 << (SPBSParser.FLOAT - 32)) | (1 << (SPBSParser.FOR - 32)) | (1 << (SPBSParser.IF - 32)) | (1 << (SPBSParser.INT - 32)) | (1 << (SPBSParser.LONG - 32)) | (1 << (SPBSParser.NATIVE - 32)) | (1 << (SPBSParser.NEW - 32)) | (1 << (SPBSParser.PRIVATE - 32)) | (1 << (SPBSParser.PROTECTED - 32)) | (1 << (SPBSParser.PUBLIC - 32)) | (1 << (SPBSParser.RETURN - 32)) | (1 << (SPBSParser.SHORT - 32)) | (1 << (SPBSParser.STATIC - 32)) | (1 << (SPBSParser.STRICTFP - 32)) | (1 << (SPBSParser.SUPER - 32)) | (1 << (SPBSParser.SWITCH - 32)) | (1 << (SPBSParser.SYNCHRONIZED - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SPBSParser.THIS - 64)) | (1 << (SPBSParser.THROW - 64)) | (1 << (SPBSParser.TRY - 64)) | (1 << (SPBSParser.VOID - 64)) | (1 << (SPBSParser.WHILE - 64)) | (1 << (SPBSParser.IntegerLiteral - 64)) | (1 << (SPBSParser.FloatingPointLiteral - 64)) | (1 << (SPBSParser.BooleanLiteral - 64)) | (1 << (SPBSParser.CharacterLiteral - 64)) | (1 << (SPBSParser.StringLiteral - 64)) | (1 << (SPBSParser.NullLiteral - 64)) | (1 << (SPBSParser.LPAREN - 64)) | (1 << (SPBSParser.LBRACE - 64)) | (1 << (SPBSParser.SEMI - 64)) | (1 << (SPBSParser.LT - 64)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SPBSParser.INC - 100)) | (1 << (SPBSParser.DEC - 100)) | (1 << (SPBSParser.Identifier - 100)) | (1 << (SPBSParser.AT - 100)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, SPBSParser.RULE_blockStatement);
		try {
			this.state = 1504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1500;
				this.localVariableDeclarationStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1501;
				this.classDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1502;
				this.statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1503;
				this.methodDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, SPBSParser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this.localVariableDeclaration();
			this.state = 1507;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, SPBSParser.RULE_localVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.FINAL || _la === SPBSParser.AT) {
				{
				{
				this.state = 1509;
				this.variableModifier();
				}
				}
				this.state = 1514;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1515;
			this.unannType();
			this.state = 1516;
			this.variableDeclaratorList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, SPBSParser.RULE_statement);
		try {
			this.state = 1524;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1518;
				this.statementWithoutTrailingSubstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1519;
				this.labeledStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1520;
				this.ifThenStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1521;
				this.ifThenElseStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1522;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1523;
				this.forStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementNoShortIf(): StatementNoShortIfContext {
		let _localctx: StatementNoShortIfContext = new StatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, SPBSParser.RULE_statementNoShortIf);
		try {
			this.state = 1531;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1526;
				this.statementWithoutTrailingSubstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1527;
				this.labeledStatementNoShortIf();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1528;
				this.ifThenElseStatementNoShortIf();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1529;
				this.whileStatementNoShortIf();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1530;
				this.forStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		let _localctx: StatementWithoutTrailingSubstatementContext = new StatementWithoutTrailingSubstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, SPBSParser.RULE_statementWithoutTrailingSubstatement);
		try {
			this.state = 1545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1533;
				this.block();
				}
				break;
			case SPBSParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1534;
				this.emptyStatement();
				}
				break;
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.NEW:
			case SPBSParser.SHORT:
			case SPBSParser.SUPER:
			case SPBSParser.THIS:
			case SPBSParser.VOID:
			case SPBSParser.IntegerLiteral:
			case SPBSParser.FloatingPointLiteral:
			case SPBSParser.BooleanLiteral:
			case SPBSParser.CharacterLiteral:
			case SPBSParser.StringLiteral:
			case SPBSParser.NullLiteral:
			case SPBSParser.LPAREN:
			case SPBSParser.INC:
			case SPBSParser.DEC:
			case SPBSParser.Identifier:
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1535;
				this.expressionStatement();
				}
				break;
			case SPBSParser.ASSERT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1536;
				this.assertStatement();
				}
				break;
			case SPBSParser.SWITCH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1537;
				this.switchStatement();
				}
				break;
			case SPBSParser.DO:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1538;
				this.doStatement();
				}
				break;
			case SPBSParser.BREAK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1539;
				this.breakStatement();
				}
				break;
			case SPBSParser.CONTINUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1540;
				this.continueStatement();
				}
				break;
			case SPBSParser.RETURN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1541;
				this.returnStatement();
				}
				break;
			case SPBSParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1542;
				this.synchronizedStatement();
				}
				break;
			case SPBSParser.THROW:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1543;
				this.throwStatement();
				}
				break;
			case SPBSParser.TRY:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1544;
				this.tryStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, SPBSParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, SPBSParser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1549;
			this.match(SPBSParser.Identifier);
			this.state = 1550;
			this.match(SPBSParser.COLON);
			this.state = 1551;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		let _localctx: LabeledStatementNoShortIfContext = new LabeledStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, SPBSParser.RULE_labeledStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1553;
			this.match(SPBSParser.Identifier);
			this.state = 1554;
			this.match(SPBSParser.COLON);
			this.state = 1555;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, SPBSParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1557;
			this.statementExpression();
			this.state = 1558;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, SPBSParser.RULE_statementExpression);
		try {
			this.state = 1567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1560;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1561;
				this.preIncrementExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1562;
				this.preDecrementExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1563;
				this.postIncrementExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1564;
				this.postDecrementExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1565;
				this.methodInvocation();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1566;
				this.classInstanceCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenStatement(): IfThenStatementContext {
		let _localctx: IfThenStatementContext = new IfThenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, SPBSParser.RULE_ifThenStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1569;
			this.match(SPBSParser.IF);
			this.state = 1570;
			this.match(SPBSParser.LPAREN);
			this.state = 1571;
			this.expression();
			this.state = 1572;
			this.match(SPBSParser.RPAREN);
			this.state = 1573;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatement(): IfThenElseStatementContext {
		let _localctx: IfThenElseStatementContext = new IfThenElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, SPBSParser.RULE_ifThenElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			this.match(SPBSParser.IF);
			this.state = 1576;
			this.match(SPBSParser.LPAREN);
			this.state = 1577;
			this.expression();
			this.state = 1578;
			this.match(SPBSParser.RPAREN);
			this.state = 1579;
			this.statementNoShortIf();
			this.state = 1580;
			this.match(SPBSParser.ELSE);
			this.state = 1581;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		let _localctx: IfThenElseStatementNoShortIfContext = new IfThenElseStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, SPBSParser.RULE_ifThenElseStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1583;
			this.match(SPBSParser.IF);
			this.state = 1584;
			this.match(SPBSParser.LPAREN);
			this.state = 1585;
			this.expression();
			this.state = 1586;
			this.match(SPBSParser.RPAREN);
			this.state = 1587;
			this.statementNoShortIf();
			this.state = 1588;
			this.match(SPBSParser.ELSE);
			this.state = 1589;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, SPBSParser.RULE_assertStatement);
		try {
			this.state = 1601;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1591;
				this.match(SPBSParser.ASSERT);
				this.state = 1592;
				this.expression();
				this.state = 1593;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1595;
				this.match(SPBSParser.ASSERT);
				this.state = 1596;
				this.expression();
				this.state = 1597;
				this.match(SPBSParser.COLON);
				this.state = 1598;
				this.expression();
				this.state = 1599;
				this.match(SPBSParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, SPBSParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1603;
			this.match(SPBSParser.SWITCH);
			this.state = 1604;
			this.match(SPBSParser.LPAREN);
			this.state = 1605;
			this.expression();
			this.state = 1606;
			this.match(SPBSParser.RPAREN);
			this.state = 1607;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlock(): SwitchBlockContext {
		let _localctx: SwitchBlockContext = new SwitchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, SPBSParser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1609;
			this.match(SPBSParser.LBRACE);
			this.state = 1613;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1610;
					this.switchBlockStatementGroup();
					}
					}
				}
				this.state = 1615;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
			}
			this.state = 1619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.CASE || _la === SPBSParser.DEFAULT) {
				{
				{
				this.state = 1616;
				this.switchLabel();
				}
				}
				this.state = 1621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1622;
			this.match(SPBSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, SPBSParser.RULE_switchBlockStatementGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1624;
			this.switchLabels();
			this.state = 1625;
			this.blockStatements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabels(): SwitchLabelsContext {
		let _localctx: SwitchLabelsContext = new SwitchLabelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, SPBSParser.RULE_switchLabels);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			this.switchLabel();
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.CASE || _la === SPBSParser.DEFAULT) {
				{
				{
				this.state = 1628;
				this.switchLabel();
				}
				}
				this.state = 1633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, SPBSParser.RULE_switchLabel);
		try {
			this.state = 1644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1634;
				this.match(SPBSParser.CASE);
				this.state = 1635;
				this.constantExpression();
				this.state = 1636;
				this.match(SPBSParser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1638;
				this.match(SPBSParser.CASE);
				this.state = 1639;
				this.enumConstantName();
				this.state = 1640;
				this.match(SPBSParser.COLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1642;
				this.match(SPBSParser.DEFAULT);
				this.state = 1643;
				this.match(SPBSParser.COLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantName(): EnumConstantNameContext {
		let _localctx: EnumConstantNameContext = new EnumConstantNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, SPBSParser.RULE_enumConstantName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1646;
			this.match(SPBSParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, SPBSParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1648;
			this.match(SPBSParser.WHILE);
			this.state = 1649;
			this.match(SPBSParser.LPAREN);
			this.state = 1650;
			this.expression();
			this.state = 1651;
			this.match(SPBSParser.RPAREN);
			this.state = 1652;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		let _localctx: WhileStatementNoShortIfContext = new WhileStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, SPBSParser.RULE_whileStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1654;
			this.match(SPBSParser.WHILE);
			this.state = 1655;
			this.match(SPBSParser.LPAREN);
			this.state = 1656;
			this.expression();
			this.state = 1657;
			this.match(SPBSParser.RPAREN);
			this.state = 1658;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, SPBSParser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1660;
			this.match(SPBSParser.DO);
			this.state = 1661;
			this.statement();
			this.state = 1662;
			this.match(SPBSParser.WHILE);
			this.state = 1663;
			this.match(SPBSParser.LPAREN);
			this.state = 1664;
			this.expression();
			this.state = 1665;
			this.match(SPBSParser.RPAREN);
			this.state = 1666;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, SPBSParser.RULE_forStatement);
		try {
			this.state = 1670;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1668;
				this.basicForStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1669;
				this.enhancedForStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		let _localctx: ForStatementNoShortIfContext = new ForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, SPBSParser.RULE_forStatementNoShortIf);
		try {
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1672;
				this.basicForStatementNoShortIf();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1673;
				this.enhancedForStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicForStatement(): BasicForStatementContext {
		let _localctx: BasicForStatementContext = new BasicForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, SPBSParser.RULE_basicForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this.match(SPBSParser.FOR);
			this.state = 1677;
			this.match(SPBSParser.LPAREN);
			this.state = 1679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (SPBSParser.BOOLEAN - 24)) | (1 << (SPBSParser.BYTE - 24)) | (1 << (SPBSParser.CHAR - 24)) | (1 << (SPBSParser.DOUBLE - 24)) | (1 << (SPBSParser.FINAL - 24)) | (1 << (SPBSParser.FLOAT - 24)) | (1 << (SPBSParser.INT - 24)) | (1 << (SPBSParser.LONG - 24)) | (1 << (SPBSParser.NEW - 24)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SPBSParser.SHORT - 58)) | (1 << (SPBSParser.SUPER - 58)) | (1 << (SPBSParser.THIS - 58)) | (1 << (SPBSParser.VOID - 58)) | (1 << (SPBSParser.IntegerLiteral - 58)) | (1 << (SPBSParser.FloatingPointLiteral - 58)) | (1 << (SPBSParser.BooleanLiteral - 58)) | (1 << (SPBSParser.CharacterLiteral - 58)) | (1 << (SPBSParser.StringLiteral - 58)) | (1 << (SPBSParser.NullLiteral - 58)) | (1 << (SPBSParser.LPAREN - 58)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SPBSParser.INC - 100)) | (1 << (SPBSParser.DEC - 100)) | (1 << (SPBSParser.Identifier - 100)) | (1 << (SPBSParser.AT - 100)))) !== 0)) {
				{
				this.state = 1678;
				this.forInit();
				}
			}

			this.state = 1681;
			this.match(SPBSParser.SEMI);
			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
				{
				this.state = 1682;
				this.expression();
				}
			}

			this.state = 1685;
			this.match(SPBSParser.SEMI);
			this.state = 1687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (SPBSParser.BOOLEAN - 24)) | (1 << (SPBSParser.BYTE - 24)) | (1 << (SPBSParser.CHAR - 24)) | (1 << (SPBSParser.DOUBLE - 24)) | (1 << (SPBSParser.FLOAT - 24)) | (1 << (SPBSParser.INT - 24)) | (1 << (SPBSParser.LONG - 24)) | (1 << (SPBSParser.NEW - 24)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SPBSParser.SHORT - 58)) | (1 << (SPBSParser.SUPER - 58)) | (1 << (SPBSParser.THIS - 58)) | (1 << (SPBSParser.VOID - 58)) | (1 << (SPBSParser.IntegerLiteral - 58)) | (1 << (SPBSParser.FloatingPointLiteral - 58)) | (1 << (SPBSParser.BooleanLiteral - 58)) | (1 << (SPBSParser.CharacterLiteral - 58)) | (1 << (SPBSParser.StringLiteral - 58)) | (1 << (SPBSParser.NullLiteral - 58)) | (1 << (SPBSParser.LPAREN - 58)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SPBSParser.INC - 100)) | (1 << (SPBSParser.DEC - 100)) | (1 << (SPBSParser.Identifier - 100)) | (1 << (SPBSParser.AT - 100)))) !== 0)) {
				{
				this.state = 1686;
				this.forUpdate();
				}
			}

			this.state = 1689;
			this.match(SPBSParser.RPAREN);
			this.state = 1690;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		let _localctx: BasicForStatementNoShortIfContext = new BasicForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, SPBSParser.RULE_basicForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1692;
			this.match(SPBSParser.FOR);
			this.state = 1693;
			this.match(SPBSParser.LPAREN);
			this.state = 1695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (SPBSParser.BOOLEAN - 24)) | (1 << (SPBSParser.BYTE - 24)) | (1 << (SPBSParser.CHAR - 24)) | (1 << (SPBSParser.DOUBLE - 24)) | (1 << (SPBSParser.FINAL - 24)) | (1 << (SPBSParser.FLOAT - 24)) | (1 << (SPBSParser.INT - 24)) | (1 << (SPBSParser.LONG - 24)) | (1 << (SPBSParser.NEW - 24)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SPBSParser.SHORT - 58)) | (1 << (SPBSParser.SUPER - 58)) | (1 << (SPBSParser.THIS - 58)) | (1 << (SPBSParser.VOID - 58)) | (1 << (SPBSParser.IntegerLiteral - 58)) | (1 << (SPBSParser.FloatingPointLiteral - 58)) | (1 << (SPBSParser.BooleanLiteral - 58)) | (1 << (SPBSParser.CharacterLiteral - 58)) | (1 << (SPBSParser.StringLiteral - 58)) | (1 << (SPBSParser.NullLiteral - 58)) | (1 << (SPBSParser.LPAREN - 58)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SPBSParser.INC - 100)) | (1 << (SPBSParser.DEC - 100)) | (1 << (SPBSParser.Identifier - 100)) | (1 << (SPBSParser.AT - 100)))) !== 0)) {
				{
				this.state = 1694;
				this.forInit();
				}
			}

			this.state = 1697;
			this.match(SPBSParser.SEMI);
			this.state = 1699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
				{
				this.state = 1698;
				this.expression();
				}
			}

			this.state = 1701;
			this.match(SPBSParser.SEMI);
			this.state = 1703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (SPBSParser.BOOLEAN - 24)) | (1 << (SPBSParser.BYTE - 24)) | (1 << (SPBSParser.CHAR - 24)) | (1 << (SPBSParser.DOUBLE - 24)) | (1 << (SPBSParser.FLOAT - 24)) | (1 << (SPBSParser.INT - 24)) | (1 << (SPBSParser.LONG - 24)) | (1 << (SPBSParser.NEW - 24)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SPBSParser.SHORT - 58)) | (1 << (SPBSParser.SUPER - 58)) | (1 << (SPBSParser.THIS - 58)) | (1 << (SPBSParser.VOID - 58)) | (1 << (SPBSParser.IntegerLiteral - 58)) | (1 << (SPBSParser.FloatingPointLiteral - 58)) | (1 << (SPBSParser.BooleanLiteral - 58)) | (1 << (SPBSParser.CharacterLiteral - 58)) | (1 << (SPBSParser.StringLiteral - 58)) | (1 << (SPBSParser.NullLiteral - 58)) | (1 << (SPBSParser.LPAREN - 58)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SPBSParser.INC - 100)) | (1 << (SPBSParser.DEC - 100)) | (1 << (SPBSParser.Identifier - 100)) | (1 << (SPBSParser.AT - 100)))) !== 0)) {
				{
				this.state = 1702;
				this.forUpdate();
				}
			}

			this.state = 1705;
			this.match(SPBSParser.RPAREN);
			this.state = 1706;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, SPBSParser.RULE_forInit);
		try {
			this.state = 1710;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1708;
				this.statementExpressionList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1709;
				this.localVariableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, SPBSParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1712;
			this.statementExpressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpressionList(): StatementExpressionListContext {
		let _localctx: StatementExpressionListContext = new StatementExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, SPBSParser.RULE_statementExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1714;
			this.statementExpression();
			this.state = 1719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 1715;
				this.match(SPBSParser.COMMA);
				this.state = 1716;
				this.statementExpression();
				}
				}
				this.state = 1721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatement(): EnhancedForStatementContext {
		let _localctx: EnhancedForStatementContext = new EnhancedForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, SPBSParser.RULE_enhancedForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1722;
			this.match(SPBSParser.FOR);
			this.state = 1723;
			this.match(SPBSParser.LPAREN);
			this.state = 1727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.FINAL || _la === SPBSParser.AT) {
				{
				{
				this.state = 1724;
				this.variableModifier();
				}
				}
				this.state = 1729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1730;
			this.unannType();
			this.state = 1731;
			this.variableDeclaratorId();
			this.state = 1732;
			this.match(SPBSParser.COLON);
			this.state = 1733;
			this.expression();
			this.state = 1734;
			this.match(SPBSParser.RPAREN);
			this.state = 1735;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		let _localctx: EnhancedForStatementNoShortIfContext = new EnhancedForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, SPBSParser.RULE_enhancedForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1737;
			this.match(SPBSParser.FOR);
			this.state = 1738;
			this.match(SPBSParser.LPAREN);
			this.state = 1742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.FINAL || _la === SPBSParser.AT) {
				{
				{
				this.state = 1739;
				this.variableModifier();
				}
				}
				this.state = 1744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1745;
			this.unannType();
			this.state = 1746;
			this.variableDeclaratorId();
			this.state = 1747;
			this.match(SPBSParser.COLON);
			this.state = 1748;
			this.expression();
			this.state = 1749;
			this.match(SPBSParser.RPAREN);
			this.state = 1750;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, SPBSParser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1752;
			this.match(SPBSParser.BREAK);
			this.state = 1754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.Identifier) {
				{
				this.state = 1753;
				this.match(SPBSParser.Identifier);
				}
			}

			this.state = 1756;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, SPBSParser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1758;
			this.match(SPBSParser.CONTINUE);
			this.state = 1760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.Identifier) {
				{
				this.state = 1759;
				this.match(SPBSParser.Identifier);
				}
			}

			this.state = 1762;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, SPBSParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1764;
			this.match(SPBSParser.RETURN);
			this.state = 1766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
				{
				this.state = 1765;
				this.expression();
				}
			}

			this.state = 1768;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, SPBSParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1770;
			this.match(SPBSParser.THROW);
			this.state = 1771;
			this.expression();
			this.state = 1772;
			this.match(SPBSParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public synchronizedStatement(): SynchronizedStatementContext {
		let _localctx: SynchronizedStatementContext = new SynchronizedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, SPBSParser.RULE_synchronizedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1774;
			this.match(SPBSParser.SYNCHRONIZED);
			this.state = 1775;
			this.match(SPBSParser.LPAREN);
			this.state = 1776;
			this.expression();
			this.state = 1777;
			this.match(SPBSParser.RPAREN);
			this.state = 1778;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, SPBSParser.RULE_tryStatement);
		let _la: number;
		try {
			this.state = 1792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1780;
				this.match(SPBSParser.TRY);
				this.state = 1781;
				this.block();
				this.state = 1782;
				this.catches();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1784;
				this.match(SPBSParser.TRY);
				this.state = 1785;
				this.block();
				this.state = 1787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.CATCH) {
					{
					this.state = 1786;
					this.catches();
					}
				}

				this.state = 1789;
				this.finally_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1791;
				this.tryWithResourcesStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catches(): CatchesContext {
		let _localctx: CatchesContext = new CatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, SPBSParser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1794;
			this.catchClause();
			this.state = 1798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.CATCH) {
				{
				{
				this.state = 1795;
				this.catchClause();
				}
				}
				this.state = 1800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, SPBSParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1801;
			this.match(SPBSParser.CATCH);
			this.state = 1802;
			this.match(SPBSParser.LPAREN);
			this.state = 1803;
			this.catchFormalParameter();
			this.state = 1804;
			this.match(SPBSParser.RPAREN);
			this.state = 1805;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchFormalParameter(): CatchFormalParameterContext {
		let _localctx: CatchFormalParameterContext = new CatchFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, SPBSParser.RULE_catchFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.FINAL || _la === SPBSParser.AT) {
				{
				{
				this.state = 1807;
				this.variableModifier();
				}
				}
				this.state = 1812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1813;
			this.catchType();
			this.state = 1814;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, SPBSParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1816;
			this.unannClassType();
			this.state = 1821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.BITOR) {
				{
				{
				this.state = 1817;
				this.match(SPBSParser.BITOR);
				this.state = 1818;
				this.classType();
				}
				}
				this.state = 1823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finally_(): Finally_Context {
		let _localctx: Finally_Context = new Finally_Context(this._ctx, this.state);
		this.enterRule(_localctx, 340, SPBSParser.RULE_finally_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1824;
			this.match(SPBSParser.FINALLY);
			this.state = 1825;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		let _localctx: TryWithResourcesStatementContext = new TryWithResourcesStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, SPBSParser.RULE_tryWithResourcesStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this.match(SPBSParser.TRY);
			this.state = 1828;
			this.resourceSpecification();
			this.state = 1829;
			this.block();
			this.state = 1831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.CATCH) {
				{
				this.state = 1830;
				this.catches();
				}
			}

			this.state = 1834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.FINALLY) {
				{
				this.state = 1833;
				this.finally_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, SPBSParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1836;
			this.match(SPBSParser.LPAREN);
			this.state = 1837;
			this.resourceList();
			this.state = 1839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.SEMI) {
				{
				this.state = 1838;
				this.match(SPBSParser.SEMI);
				}
			}

			this.state = 1841;
			this.match(SPBSParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceList(): ResourceListContext {
		let _localctx: ResourceListContext = new ResourceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, SPBSParser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1843;
			this.resource();
			this.state = 1848;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1844;
					this.match(SPBSParser.SEMI);
					this.state = 1845;
					this.resource();
					}
					}
				}
				this.state = 1850;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, SPBSParser.RULE_resource);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.FINAL || _la === SPBSParser.AT) {
				{
				{
				this.state = 1851;
				this.variableModifier();
				}
				}
				this.state = 1856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1857;
			this.unannType();
			this.state = 1858;
			this.variableDeclaratorId();
			this.state = 1859;
			this.match(SPBSParser.ASSIGN);
			this.state = 1860;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, SPBSParser.RULE_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				{
				this.state = 1862;
				this.primaryNoNewArray_lfno_primary();
				}
				break;

			case 2:
				{
				this.state = 1863;
				this.arrayCreationExpression();
				}
				break;
			}
			this.state = 1869;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1866;
					this.primaryNoNewArray_lf_primary();
					}
					}
				}
				this.state = 1871;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		let _localctx: PrimaryNoNewArrayContext = new PrimaryNoNewArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, SPBSParser.RULE_primaryNoNewArray);
		let _la: number;
		try {
			this.state = 1901;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1872;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1873;
				this.typeName();
				this.state = 1878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.LBRACK) {
					{
					{
					this.state = 1874;
					this.match(SPBSParser.LBRACK);
					this.state = 1875;
					this.match(SPBSParser.RBRACK);
					}
					}
					this.state = 1880;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1881;
				this.match(SPBSParser.DOT);
				this.state = 1882;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1884;
				this.match(SPBSParser.VOID);
				this.state = 1885;
				this.match(SPBSParser.DOT);
				this.state = 1886;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1887;
				this.match(SPBSParser.THIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1888;
				this.typeName();
				this.state = 1889;
				this.match(SPBSParser.DOT);
				this.state = 1890;
				this.match(SPBSParser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1892;
				this.match(SPBSParser.LPAREN);
				this.state = 1893;
				this.expression();
				this.state = 1894;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1896;
				this.classInstanceCreationExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1897;
				this.fieldAccess();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1898;
				this.arrayAccess();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1899;
				this.methodInvocation();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1900;
				this.methodReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext {
		let _localctx: PrimaryNoNewArray_lf_arrayAccessContext = new PrimaryNoNewArray_lf_arrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, SPBSParser.RULE_primaryNoNewArray_lf_arrayAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext {
		let _localctx: PrimaryNoNewArray_lfno_arrayAccessContext = new PrimaryNoNewArray_lfno_arrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, SPBSParser.RULE_primaryNoNewArray_lfno_arrayAccess);
		let _la: number;
		try {
			this.state = 1933;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1905;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1906;
				this.typeName();
				this.state = 1911;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.LBRACK) {
					{
					{
					this.state = 1907;
					this.match(SPBSParser.LBRACK);
					this.state = 1908;
					this.match(SPBSParser.RBRACK);
					}
					}
					this.state = 1913;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1914;
				this.match(SPBSParser.DOT);
				this.state = 1915;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1917;
				this.match(SPBSParser.VOID);
				this.state = 1918;
				this.match(SPBSParser.DOT);
				this.state = 1919;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1920;
				this.match(SPBSParser.THIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1921;
				this.typeName();
				this.state = 1922;
				this.match(SPBSParser.DOT);
				this.state = 1923;
				this.match(SPBSParser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1925;
				this.match(SPBSParser.LPAREN);
				this.state = 1926;
				this.expression();
				this.state = 1927;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1929;
				this.classInstanceCreationExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1930;
				this.fieldAccess();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1931;
				this.methodInvocation();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1932;
				this.methodReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primaryContext = new PrimaryNoNewArray_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, SPBSParser.RULE_primaryNoNewArray_lf_primary);
		try {
			this.state = 1940;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1935;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1936;
				this.fieldAccess_lf_primary();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1937;
				this.arrayAccess_lf_primary();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1938;
				this.methodInvocation_lf_primary();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1939;
				this.methodReference_lf_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, SPBSParser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, SPBSParser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary);
		try {
			this.state = 1948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1944;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1945;
				this.fieldAccess_lf_primary();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1946;
				this.methodInvocation_lf_primary();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1947;
				this.methodReference_lf_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primaryContext = new PrimaryNoNewArray_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, SPBSParser.RULE_primaryNoNewArray_lfno_primary);
		let _la: number;
		try {
			this.state = 1990;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1950;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1951;
				this.typeName();
				this.state = 1956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.LBRACK) {
					{
					{
					this.state = 1952;
					this.match(SPBSParser.LBRACK);
					this.state = 1953;
					this.match(SPBSParser.RBRACK);
					}
					}
					this.state = 1958;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1959;
				this.match(SPBSParser.DOT);
				this.state = 1960;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1962;
				this.unannPrimitiveType();
				this.state = 1967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.LBRACK) {
					{
					{
					this.state = 1963;
					this.match(SPBSParser.LBRACK);
					this.state = 1964;
					this.match(SPBSParser.RBRACK);
					}
					}
					this.state = 1969;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1970;
				this.match(SPBSParser.DOT);
				this.state = 1971;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1973;
				this.match(SPBSParser.VOID);
				this.state = 1974;
				this.match(SPBSParser.DOT);
				this.state = 1975;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1976;
				this.match(SPBSParser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1977;
				this.typeName();
				this.state = 1978;
				this.match(SPBSParser.DOT);
				this.state = 1979;
				this.match(SPBSParser.THIS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1981;
				this.match(SPBSParser.LPAREN);
				this.state = 1982;
				this.expression();
				this.state = 1983;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1985;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1986;
				this.fieldAccess_lfno_primary();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1987;
				this.arrayAccess_lfno_primary();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1988;
				this.methodInvocation_lfno_primary();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1989;
				this.methodReference_lfno_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, SPBSParser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, SPBSParser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary);
		let _la: number;
		try {
			this.state = 2033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1994;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1995;
				this.typeName();
				this.state = 2000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.LBRACK) {
					{
					{
					this.state = 1996;
					this.match(SPBSParser.LBRACK);
					this.state = 1997;
					this.match(SPBSParser.RBRACK);
					}
					}
					this.state = 2002;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2003;
				this.match(SPBSParser.DOT);
				this.state = 2004;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2006;
				this.unannPrimitiveType();
				this.state = 2011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.LBRACK) {
					{
					{
					this.state = 2007;
					this.match(SPBSParser.LBRACK);
					this.state = 2008;
					this.match(SPBSParser.RBRACK);
					}
					}
					this.state = 2013;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2014;
				this.match(SPBSParser.DOT);
				this.state = 2015;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2017;
				this.match(SPBSParser.VOID);
				this.state = 2018;
				this.match(SPBSParser.DOT);
				this.state = 2019;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2020;
				this.match(SPBSParser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2021;
				this.typeName();
				this.state = 2022;
				this.match(SPBSParser.DOT);
				this.state = 2023;
				this.match(SPBSParser.THIS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2025;
				this.match(SPBSParser.LPAREN);
				this.state = 2026;
				this.expression();
				this.state = 2027;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2029;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2030;
				this.fieldAccess_lfno_primary();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2031;
				this.methodInvocation_lfno_primary();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2032;
				this.methodReference_lfno_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		let _localctx: ClassInstanceCreationExpressionContext = new ClassInstanceCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, SPBSParser.RULE_classInstanceCreationExpression);
		let _la: number;
		try {
			this.state = 2118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2035;
				this.match(SPBSParser.NEW);
				this.state = 2037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2036;
					this.typeArguments();
					}
				}

				this.state = 2042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 2039;
					this.annotation();
					}
					}
					this.state = 2044;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2045;
				this.match(SPBSParser.Identifier);
				this.state = 2056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.DOT) {
					{
					{
					this.state = 2046;
					this.match(SPBSParser.DOT);
					this.state = 2050;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SPBSParser.AT) {
						{
						{
						this.state = 2047;
						this.annotation();
						}
						}
						this.state = 2052;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2053;
					this.match(SPBSParser.Identifier);
					}
					}
					this.state = 2058;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2059;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2062;
				this.match(SPBSParser.LPAREN);
				this.state = 2064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2063;
					this.argumentList();
					}
				}

				this.state = 2066;
				this.match(SPBSParser.RPAREN);
				this.state = 2068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LBRACE) {
					{
					this.state = 2067;
					this.classBody();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2070;
				this.expressionName();
				this.state = 2071;
				this.match(SPBSParser.DOT);
				this.state = 2072;
				this.match(SPBSParser.NEW);
				this.state = 2074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2073;
					this.typeArguments();
					}
				}

				this.state = 2079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 2076;
					this.annotation();
					}
					}
					this.state = 2081;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2082;
				this.match(SPBSParser.Identifier);
				this.state = 2084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2083;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2086;
				this.match(SPBSParser.LPAREN);
				this.state = 2088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2087;
					this.argumentList();
					}
				}

				this.state = 2090;
				this.match(SPBSParser.RPAREN);
				this.state = 2092;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LBRACE) {
					{
					this.state = 2091;
					this.classBody();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2094;
				this.primary();
				this.state = 2095;
				this.match(SPBSParser.DOT);
				this.state = 2096;
				this.match(SPBSParser.NEW);
				this.state = 2098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2097;
					this.typeArguments();
					}
				}

				this.state = 2103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 2100;
					this.annotation();
					}
					}
					this.state = 2105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2106;
				this.match(SPBSParser.Identifier);
				this.state = 2108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2107;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2110;
				this.match(SPBSParser.LPAREN);
				this.state = 2112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2111;
					this.argumentList();
					}
				}

				this.state = 2114;
				this.match(SPBSParser.RPAREN);
				this.state = 2116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LBRACE) {
					{
					this.state = 2115;
					this.classBody();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext {
		let _localctx: ClassInstanceCreationExpression_lf_primaryContext = new ClassInstanceCreationExpression_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, SPBSParser.RULE_classInstanceCreationExpression_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2120;
			this.match(SPBSParser.DOT);
			this.state = 2121;
			this.match(SPBSParser.NEW);
			this.state = 2123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 2122;
				this.typeArguments();
				}
			}

			this.state = 2128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 2125;
				this.annotation();
				}
				}
				this.state = 2130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2131;
			this.match(SPBSParser.Identifier);
			this.state = 2133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 2132;
				this.typeArgumentsOrDiamond();
				}
			}

			this.state = 2135;
			this.match(SPBSParser.LPAREN);
			this.state = 2137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
				{
				this.state = 2136;
				this.argumentList();
				}
			}

			this.state = 2139;
			this.match(SPBSParser.RPAREN);
			this.state = 2141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				{
				this.state = 2140;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext {
		let _localctx: ClassInstanceCreationExpression_lfno_primaryContext = new ClassInstanceCreationExpression_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, SPBSParser.RULE_classInstanceCreationExpression_lfno_primary);
		let _la: number;
		try {
			this.state = 2202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2143;
				this.match(SPBSParser.NEW);
				this.state = 2145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2144;
					this.typeArguments();
					}
				}

				this.state = 2150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 2147;
					this.annotation();
					}
					}
					this.state = 2152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2153;
				this.match(SPBSParser.Identifier);
				this.state = 2164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.DOT) {
					{
					{
					this.state = 2154;
					this.match(SPBSParser.DOT);
					this.state = 2158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SPBSParser.AT) {
						{
						{
						this.state = 2155;
						this.annotation();
						}
						}
						this.state = 2160;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2161;
					this.match(SPBSParser.Identifier);
					}
					}
					this.state = 2166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2167;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2170;
				this.match(SPBSParser.LPAREN);
				this.state = 2172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2171;
					this.argumentList();
					}
				}

				this.state = 2174;
				this.match(SPBSParser.RPAREN);
				this.state = 2176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 2175;
					this.classBody();
					}
					break;
				}
				}
				break;
			case SPBSParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2178;
				this.expressionName();
				this.state = 2179;
				this.match(SPBSParser.DOT);
				this.state = 2180;
				this.match(SPBSParser.NEW);
				this.state = 2182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2181;
					this.typeArguments();
					}
				}

				this.state = 2187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT) {
					{
					{
					this.state = 2184;
					this.annotation();
					}
					}
					this.state = 2189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2190;
				this.match(SPBSParser.Identifier);
				this.state = 2192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2191;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2194;
				this.match(SPBSParser.LPAREN);
				this.state = 2196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2195;
					this.argumentList();
					}
				}

				this.state = 2198;
				this.match(SPBSParser.RPAREN);
				this.state = 2200;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
				case 1:
					{
					this.state = 2199;
					this.classBody();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, SPBSParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2204;
				this.typeArguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2205;
				this.match(SPBSParser.LT);
				this.state = 2206;
				this.match(SPBSParser.GT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAccess(): FieldAccessContext {
		let _localctx: FieldAccessContext = new FieldAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, SPBSParser.RULE_fieldAccess);
		try {
			this.state = 2222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2209;
				this.primary();
				this.state = 2210;
				this.match(SPBSParser.DOT);
				this.state = 2211;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2213;
				this.match(SPBSParser.SUPER);
				this.state = 2214;
				this.match(SPBSParser.DOT);
				this.state = 2215;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2216;
				this.typeName();
				this.state = 2217;
				this.match(SPBSParser.DOT);
				this.state = 2218;
				this.match(SPBSParser.SUPER);
				this.state = 2219;
				this.match(SPBSParser.DOT);
				this.state = 2220;
				this.match(SPBSParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext {
		let _localctx: FieldAccess_lf_primaryContext = new FieldAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, SPBSParser.RULE_fieldAccess_lf_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2224;
			this.match(SPBSParser.DOT);
			this.state = 2225;
			this.match(SPBSParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext {
		let _localctx: FieldAccess_lfno_primaryContext = new FieldAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, SPBSParser.RULE_fieldAccess_lfno_primary);
		try {
			this.state = 2236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2227;
				this.match(SPBSParser.SUPER);
				this.state = 2228;
				this.match(SPBSParser.DOT);
				this.state = 2229;
				this.match(SPBSParser.Identifier);
				}
				break;
			case SPBSParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2230;
				this.typeName();
				this.state = 2231;
				this.match(SPBSParser.DOT);
				this.state = 2232;
				this.match(SPBSParser.SUPER);
				this.state = 2233;
				this.match(SPBSParser.DOT);
				this.state = 2234;
				this.match(SPBSParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, SPBSParser.RULE_arrayAccess);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 2238;
				this.expressionName();
				this.state = 2239;
				this.match(SPBSParser.LBRACK);
				this.state = 2240;
				this.expression();
				this.state = 2241;
				this.match(SPBSParser.RBRACK);
				}
				break;

			case 2:
				{
				this.state = 2243;
				this.primaryNoNewArray_lfno_arrayAccess();
				this.state = 2244;
				this.match(SPBSParser.LBRACK);
				this.state = 2245;
				this.expression();
				this.state = 2246;
				this.match(SPBSParser.RBRACK);
				}
				break;
			}
			this.state = 2257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.LBRACK) {
				{
				{
				this.state = 2250;
				this.primaryNoNewArray_lf_arrayAccess();
				this.state = 2251;
				this.match(SPBSParser.LBRACK);
				this.state = 2252;
				this.expression();
				this.state = 2253;
				this.match(SPBSParser.RBRACK);
				}
				}
				this.state = 2259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext {
		let _localctx: ArrayAccess_lf_primaryContext = new ArrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, SPBSParser.RULE_arrayAccess_lf_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2260;
			this.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary();
			this.state = 2261;
			this.match(SPBSParser.LBRACK);
			this.state = 2262;
			this.expression();
			this.state = 2263;
			this.match(SPBSParser.RBRACK);
			}
			this.state = 2272;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2265;
					this.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary();
					this.state = 2266;
					this.match(SPBSParser.LBRACK);
					this.state = 2267;
					this.expression();
					this.state = 2268;
					this.match(SPBSParser.RBRACK);
					}
					}
				}
				this.state = 2274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext {
		let _localctx: ArrayAccess_lfno_primaryContext = new ArrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, SPBSParser.RULE_arrayAccess_lfno_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2275;
				this.expressionName();
				this.state = 2276;
				this.match(SPBSParser.LBRACK);
				this.state = 2277;
				this.expression();
				this.state = 2278;
				this.match(SPBSParser.RBRACK);
				}
				break;

			case 2:
				{
				this.state = 2280;
				this.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary();
				this.state = 2281;
				this.match(SPBSParser.LBRACK);
				this.state = 2282;
				this.expression();
				this.state = 2283;
				this.match(SPBSParser.RBRACK);
				}
				break;
			}
			this.state = 2294;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2287;
					this.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary();
					this.state = 2288;
					this.match(SPBSParser.LBRACK);
					this.state = 2289;
					this.expression();
					this.state = 2290;
					this.match(SPBSParser.RBRACK);
					}
					}
				}
				this.state = 2296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodInvocation(): MethodInvocationContext {
		let _localctx: MethodInvocationContext = new MethodInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, SPBSParser.RULE_methodInvocation);
		let _la: number;
		try {
			this.state = 2365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2297;
				this.methodName();
				this.state = 2298;
				this.match(SPBSParser.LPAREN);
				this.state = 2300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2299;
					this.argumentList();
					}
				}

				this.state = 2302;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2304;
				this.typeName();
				this.state = 2305;
				this.match(SPBSParser.DOT);
				this.state = 2307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2306;
					this.typeArguments();
					}
				}

				this.state = 2309;
				this.match(SPBSParser.Identifier);
				this.state = 2310;
				this.match(SPBSParser.LPAREN);
				this.state = 2312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2311;
					this.argumentList();
					}
				}

				this.state = 2314;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2316;
				this.expressionName();
				this.state = 2317;
				this.match(SPBSParser.DOT);
				this.state = 2319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2318;
					this.typeArguments();
					}
				}

				this.state = 2321;
				this.match(SPBSParser.Identifier);
				this.state = 2322;
				this.match(SPBSParser.LPAREN);
				this.state = 2324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2323;
					this.argumentList();
					}
				}

				this.state = 2326;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2328;
				this.primary();
				this.state = 2329;
				this.match(SPBSParser.DOT);
				this.state = 2331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2330;
					this.typeArguments();
					}
				}

				this.state = 2333;
				this.match(SPBSParser.Identifier);
				this.state = 2334;
				this.match(SPBSParser.LPAREN);
				this.state = 2336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2335;
					this.argumentList();
					}
				}

				this.state = 2338;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2340;
				this.match(SPBSParser.SUPER);
				this.state = 2341;
				this.match(SPBSParser.DOT);
				this.state = 2343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2342;
					this.typeArguments();
					}
				}

				this.state = 2345;
				this.match(SPBSParser.Identifier);
				this.state = 2346;
				this.match(SPBSParser.LPAREN);
				this.state = 2348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2347;
					this.argumentList();
					}
				}

				this.state = 2350;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2351;
				this.typeName();
				this.state = 2352;
				this.match(SPBSParser.DOT);
				this.state = 2353;
				this.match(SPBSParser.SUPER);
				this.state = 2354;
				this.match(SPBSParser.DOT);
				this.state = 2356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2355;
					this.typeArguments();
					}
				}

				this.state = 2358;
				this.match(SPBSParser.Identifier);
				this.state = 2359;
				this.match(SPBSParser.LPAREN);
				this.state = 2361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2360;
					this.argumentList();
					}
				}

				this.state = 2363;
				this.match(SPBSParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext {
		let _localctx: MethodInvocation_lf_primaryContext = new MethodInvocation_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, SPBSParser.RULE_methodInvocation_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2367;
			this.match(SPBSParser.DOT);
			this.state = 2369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 2368;
				this.typeArguments();
				}
			}

			this.state = 2371;
			this.match(SPBSParser.Identifier);
			this.state = 2372;
			this.match(SPBSParser.LPAREN);
			this.state = 2374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
				{
				this.state = 2373;
				this.argumentList();
				}
			}

			this.state = 2376;
			this.match(SPBSParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext {
		let _localctx: MethodInvocation_lfno_primaryContext = new MethodInvocation_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, SPBSParser.RULE_methodInvocation_lfno_primary);
		let _la: number;
		try {
			this.state = 2434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2378;
				this.methodName();
				this.state = 2379;
				this.match(SPBSParser.LPAREN);
				this.state = 2381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2380;
					this.argumentList();
					}
				}

				this.state = 2383;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2385;
				this.typeName();
				this.state = 2386;
				this.match(SPBSParser.DOT);
				this.state = 2388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2387;
					this.typeArguments();
					}
				}

				this.state = 2390;
				this.match(SPBSParser.Identifier);
				this.state = 2391;
				this.match(SPBSParser.LPAREN);
				this.state = 2393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2392;
					this.argumentList();
					}
				}

				this.state = 2395;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2397;
				this.expressionName();
				this.state = 2398;
				this.match(SPBSParser.DOT);
				this.state = 2400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2399;
					this.typeArguments();
					}
				}

				this.state = 2402;
				this.match(SPBSParser.Identifier);
				this.state = 2403;
				this.match(SPBSParser.LPAREN);
				this.state = 2405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2404;
					this.argumentList();
					}
				}

				this.state = 2407;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2409;
				this.match(SPBSParser.SUPER);
				this.state = 2410;
				this.match(SPBSParser.DOT);
				this.state = 2412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2411;
					this.typeArguments();
					}
				}

				this.state = 2414;
				this.match(SPBSParser.Identifier);
				this.state = 2415;
				this.match(SPBSParser.LPAREN);
				this.state = 2417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2416;
					this.argumentList();
					}
				}

				this.state = 2419;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2420;
				this.typeName();
				this.state = 2421;
				this.match(SPBSParser.DOT);
				this.state = 2422;
				this.match(SPBSParser.SUPER);
				this.state = 2423;
				this.match(SPBSParser.DOT);
				this.state = 2425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2424;
					this.typeArguments();
					}
				}

				this.state = 2427;
				this.match(SPBSParser.Identifier);
				this.state = 2428;
				this.match(SPBSParser.LPAREN);
				this.state = 2430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.IntegerLiteral - 69)) | (1 << (SPBSParser.FloatingPointLiteral - 69)) | (1 << (SPBSParser.BooleanLiteral - 69)) | (1 << (SPBSParser.CharacterLiteral - 69)) | (1 << (SPBSParser.StringLiteral - 69)) | (1 << (SPBSParser.NullLiteral - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)) | (1 << (SPBSParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SPBSParser.DEC - 101)) | (1 << (SPBSParser.ADD - 101)) | (1 << (SPBSParser.SUB - 101)) | (1 << (SPBSParser.Identifier - 101)) | (1 << (SPBSParser.AT - 101)))) !== 0)) {
					{
					this.state = 2429;
					this.argumentList();
					}
				}

				this.state = 2432;
				this.match(SPBSParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, SPBSParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2436;
			this.expression();
			this.state = 2441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 2437;
				this.match(SPBSParser.COMMA);
				this.state = 2438;
				this.expression();
				}
				}
				this.state = 2443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodReference(): MethodReferenceContext {
		let _localctx: MethodReferenceContext = new MethodReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, SPBSParser.RULE_methodReference);
		let _la: number;
		try {
			this.state = 2491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2444;
				this.expressionName();
				this.state = 2445;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2446;
					this.typeArguments();
					}
				}

				this.state = 2449;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2451;
				this.referenceType();
				this.state = 2452;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2453;
					this.typeArguments();
					}
				}

				this.state = 2456;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2458;
				this.primary();
				this.state = 2459;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2460;
					this.typeArguments();
					}
				}

				this.state = 2463;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2465;
				this.match(SPBSParser.SUPER);
				this.state = 2466;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2467;
					this.typeArguments();
					}
				}

				this.state = 2470;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2471;
				this.typeName();
				this.state = 2472;
				this.match(SPBSParser.DOT);
				this.state = 2473;
				this.match(SPBSParser.SUPER);
				this.state = 2474;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2475;
					this.typeArguments();
					}
				}

				this.state = 2478;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2480;
				this.classType();
				this.state = 2481;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2482;
					this.typeArguments();
					}
				}

				this.state = 2485;
				this.match(SPBSParser.NEW);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2487;
				this.arrayType();
				this.state = 2488;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2489;
				this.match(SPBSParser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodReference_lf_primary(): MethodReference_lf_primaryContext {
		let _localctx: MethodReference_lf_primaryContext = new MethodReference_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, SPBSParser.RULE_methodReference_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2493;
			this.match(SPBSParser.COLONCOLON);
			this.state = 2495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 2494;
				this.typeArguments();
				}
			}

			this.state = 2497;
			this.match(SPBSParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext {
		let _localctx: MethodReference_lfno_primaryContext = new MethodReference_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, SPBSParser.RULE_methodReference_lfno_primary);
		let _la: number;
		try {
			this.state = 2539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2499;
				this.expressionName();
				this.state = 2500;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2501;
					this.typeArguments();
					}
				}

				this.state = 2504;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2506;
				this.referenceType();
				this.state = 2507;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2508;
					this.typeArguments();
					}
				}

				this.state = 2511;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2513;
				this.match(SPBSParser.SUPER);
				this.state = 2514;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2515;
					this.typeArguments();
					}
				}

				this.state = 2518;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2519;
				this.typeName();
				this.state = 2520;
				this.match(SPBSParser.DOT);
				this.state = 2521;
				this.match(SPBSParser.SUPER);
				this.state = 2522;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2523;
					this.typeArguments();
					}
				}

				this.state = 2526;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2528;
				this.classType();
				this.state = 2529;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 2530;
					this.typeArguments();
					}
				}

				this.state = 2533;
				this.match(SPBSParser.NEW);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2535;
				this.arrayType();
				this.state = 2536;
				this.match(SPBSParser.COLONCOLON);
				this.state = 2537;
				this.match(SPBSParser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		let _localctx: ArrayCreationExpressionContext = new ArrayCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, SPBSParser.RULE_arrayCreationExpression);
		try {
			this.state = 2563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2541;
				this.match(SPBSParser.NEW);
				this.state = 2542;
				this.primitiveType();
				this.state = 2543;
				this.dimExprs();
				this.state = 2545;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
				case 1:
					{
					this.state = 2544;
					this.dims();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2547;
				this.match(SPBSParser.NEW);
				this.state = 2548;
				this.classOrInterfaceType();
				this.state = 2549;
				this.dimExprs();
				this.state = 2551;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
				case 1:
					{
					this.state = 2550;
					this.dims();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2553;
				this.match(SPBSParser.NEW);
				this.state = 2554;
				this.primitiveType();
				this.state = 2555;
				this.dims();
				this.state = 2556;
				this.arrayInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2558;
				this.match(SPBSParser.NEW);
				this.state = 2559;
				this.classOrInterfaceType();
				this.state = 2560;
				this.dims();
				this.state = 2561;
				this.arrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimExprs(): DimExprsContext {
		let _localctx: DimExprsContext = new DimExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, SPBSParser.RULE_dimExprs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2565;
			this.dimExpr();
			this.state = 2569;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2566;
					this.dimExpr();
					}
					}
				}
				this.state = 2571;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimExpr(): DimExprContext {
		let _localctx: DimExprContext = new DimExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, SPBSParser.RULE_dimExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT) {
				{
				{
				this.state = 2572;
				this.annotation();
				}
				}
				this.state = 2577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2578;
			this.match(SPBSParser.LBRACK);
			this.state = 2579;
			this.expression();
			this.state = 2580;
			this.match(SPBSParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, SPBSParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2582;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, SPBSParser.RULE_expression);
		try {
			this.state = 2586;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2584;
				this.lambdaExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2585;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, SPBSParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2588;
			this.lambdaParameters();
			this.state = 2589;
			this.match(SPBSParser.ARROW);
			this.state = 2590;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, SPBSParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 2602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2592;
				this.match(SPBSParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2593;
				this.match(SPBSParser.LPAREN);
				this.state = 2595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.SHORT - 35)))) !== 0) || _la === SPBSParser.Identifier || _la === SPBSParser.AT) {
					{
					this.state = 2594;
					this.formalParameterList();
					}
				}

				this.state = 2597;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2598;
				this.match(SPBSParser.LPAREN);
				this.state = 2599;
				this.inferredFormalParameterList();
				this.state = 2600;
				this.match(SPBSParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inferredFormalParameterList(): InferredFormalParameterListContext {
		let _localctx: InferredFormalParameterListContext = new InferredFormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, SPBSParser.RULE_inferredFormalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2604;
			this.match(SPBSParser.Identifier);
			this.state = 2609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 2605;
				this.match(SPBSParser.COMMA);
				this.state = 2606;
				this.match(SPBSParser.Identifier);
				}
				}
				this.state = 2611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, SPBSParser.RULE_lambdaBody);
		try {
			this.state = 2614;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.NEW:
			case SPBSParser.SHORT:
			case SPBSParser.SUPER:
			case SPBSParser.THIS:
			case SPBSParser.VOID:
			case SPBSParser.IntegerLiteral:
			case SPBSParser.FloatingPointLiteral:
			case SPBSParser.BooleanLiteral:
			case SPBSParser.CharacterLiteral:
			case SPBSParser.StringLiteral:
			case SPBSParser.NullLiteral:
			case SPBSParser.LPAREN:
			case SPBSParser.BANG:
			case SPBSParser.TILDE:
			case SPBSParser.INC:
			case SPBSParser.DEC:
			case SPBSParser.ADD:
			case SPBSParser.SUB:
			case SPBSParser.Identifier:
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2612;
				this.expression();
				}
				break;
			case SPBSParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2613;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, SPBSParser.RULE_assignmentExpression);
		try {
			this.state = 2618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2616;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2617;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, SPBSParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2620;
			this.leftHandSide();
			this.state = 2621;
			this.assignmentOperator();
			this.state = 2622;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leftHandSide(): LeftHandSideContext {
		let _localctx: LeftHandSideContext = new LeftHandSideContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, SPBSParser.RULE_leftHandSide);
		try {
			this.state = 2627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2624;
				this.expressionName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2625;
				this.fieldAccess();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2626;
				this.arrayAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, SPBSParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2629;
			_la = this._input.LA(1);
			if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SPBSParser.ASSIGN - 87)) | (1 << (SPBSParser.ADD_ASSIGN - 87)) | (1 << (SPBSParser.SUB_ASSIGN - 87)) | (1 << (SPBSParser.MUL_ASSIGN - 87)) | (1 << (SPBSParser.DIV_ASSIGN - 87)) | (1 << (SPBSParser.AND_ASSIGN - 87)) | (1 << (SPBSParser.OR_ASSIGN - 87)) | (1 << (SPBSParser.XOR_ASSIGN - 87)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (SPBSParser.MOD_ASSIGN - 119)) | (1 << (SPBSParser.LSHIFT_ASSIGN - 119)) | (1 << (SPBSParser.RSHIFT_ASSIGN - 119)) | (1 << (SPBSParser.URSHIFT_ASSIGN - 119)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, SPBSParser.RULE_conditionalExpression);
		try {
			this.state = 2638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2631;
				this.conditionalOrExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2632;
				this.conditionalOrExpression(0);
				this.state = 2633;
				this.match(SPBSParser.QUESTION);
				this.state = 2634;
				this.expression();
				this.state = 2635;
				this.match(SPBSParser.COLON);
				this.state = 2636;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public conditionalOrExpression(): ConditionalOrExpressionContext;
	public conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
	// @RuleVersion(0)
	public conditionalOrExpression(_p?: number): ConditionalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalOrExpressionContext = _localctx;
		let _startState: number = 432;
		this.enterRecursionRule(_localctx, 432, SPBSParser.RULE_conditionalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2641;
			this.conditionalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 298, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_conditionalOrExpression);
					this.state = 2643;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2644;
					this.match(SPBSParser.OR);
					this.state = 2645;
					this.conditionalAndExpression(0);
					}
					}
				}
				this.state = 2650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 298, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public conditionalAndExpression(): ConditionalAndExpressionContext;
	public conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
	// @RuleVersion(0)
	public conditionalAndExpression(_p?: number): ConditionalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalAndExpressionContext = _localctx;
		let _startState: number = 434;
		this.enterRecursionRule(_localctx, 434, SPBSParser.RULE_conditionalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2652;
			this.inclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2659;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 299, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_conditionalAndExpression);
					this.state = 2654;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2655;
					this.match(SPBSParser.AND);
					this.state = 2656;
					this.inclusiveOrExpression(0);
					}
					}
				}
				this.state = 2661;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 299, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	// @RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = _localctx;
		let _startState: number = 436;
		this.enterRecursionRule(_localctx, 436, SPBSParser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2663;
			this.exclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2670;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_inclusiveOrExpression);
					this.state = 2665;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2666;
					this.match(SPBSParser.BITOR);
					this.state = 2667;
					this.exclusiveOrExpression(0);
					}
					}
				}
				this.state = 2672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	// @RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = _localctx;
		let _startState: number = 438;
		this.enterRecursionRule(_localctx, 438, SPBSParser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2674;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2681;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_exclusiveOrExpression);
					this.state = 2676;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2677;
					this.match(SPBSParser.CARET);
					this.state = 2678;
					this.andExpression(0);
					}
					}
				}
				this.state = 2683;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 440;
		this.enterRecursionRule(_localctx, 440, SPBSParser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2685;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2692;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 302, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_andExpression);
					this.state = 2687;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2688;
					this.match(SPBSParser.BITAND);
					this.state = 2689;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 2694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 302, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 442;
		this.enterRecursionRule(_localctx, 442, SPBSParser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2696;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2706;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2704;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_equalityExpression);
						this.state = 2698;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2699;
						this.match(SPBSParser.EQUAL);
						this.state = 2700;
						this.relationalExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_equalityExpression);
						this.state = 2701;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2702;
						this.match(SPBSParser.NOTEQUAL);
						this.state = 2703;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 444;
		this.enterRecursionRule(_localctx, 444, SPBSParser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2710;
			this.shiftExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2729;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2727;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_relationalExpression);
						this.state = 2712;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2713;
						this.match(SPBSParser.LT);
						this.state = 2714;
						this.shiftExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_relationalExpression);
						this.state = 2715;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2716;
						this.match(SPBSParser.GT);
						this.state = 2717;
						this.shiftExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_relationalExpression);
						this.state = 2718;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2719;
						this.match(SPBSParser.LE);
						this.state = 2720;
						this.shiftExpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_relationalExpression);
						this.state = 2721;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2722;
						this.match(SPBSParser.GE);
						this.state = 2723;
						this.shiftExpression(0);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_relationalExpression);
						this.state = 2724;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2725;
						this.match(SPBSParser.INSTANCEOF);
						this.state = 2726;
						this.referenceType();
						}
						break;
					}
					}
				}
				this.state = 2731;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = _localctx;
		let _startState: number = 446;
		this.enterRecursionRule(_localctx, 446, SPBSParser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2733;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2750;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2748;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 307, this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_shiftExpression);
						this.state = 2735;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2736;
						this.match(SPBSParser.LT);
						this.state = 2737;
						this.match(SPBSParser.LT);
						this.state = 2738;
						this.additiveExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_shiftExpression);
						this.state = 2739;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2740;
						this.match(SPBSParser.GT);
						this.state = 2741;
						this.match(SPBSParser.GT);
						this.state = 2742;
						this.additiveExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_shiftExpression);
						this.state = 2743;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2744;
						this.match(SPBSParser.GT);
						this.state = 2745;
						this.match(SPBSParser.GT);
						this.state = 2746;
						this.match(SPBSParser.GT);
						this.state = 2747;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2752;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 448;
		this.enterRecursionRule(_localctx, 448, SPBSParser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2754;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2764;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2762;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_additiveExpression);
						this.state = 2756;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2757;
						this.match(SPBSParser.ADD);
						this.state = 2758;
						this.multiplicativeExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_additiveExpression);
						this.state = 2759;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2760;
						this.match(SPBSParser.SUB);
						this.state = 2761;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2766;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 450;
		this.enterRecursionRule(_localctx, 450, SPBSParser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2768;
			this.unaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2781;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2779;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_multiplicativeExpression);
						this.state = 2770;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2771;
						this.match(SPBSParser.MUL);
						this.state = 2772;
						this.unaryExpression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_multiplicativeExpression);
						this.state = 2773;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2774;
						this.match(SPBSParser.DIV);
						this.state = 2775;
						this.unaryExpression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_multiplicativeExpression);
						this.state = 2776;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2777;
						this.match(SPBSParser.MOD);
						this.state = 2778;
						this.unaryExpression();
						}
						break;
					}
					}
				}
				this.state = 2783;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, SPBSParser.RULE_unaryExpression);
		try {
			this.state = 2791;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.INC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2784;
				this.preIncrementExpression();
				}
				break;
			case SPBSParser.DEC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2785;
				this.preDecrementExpression();
				}
				break;
			case SPBSParser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2786;
				this.match(SPBSParser.ADD);
				this.state = 2787;
				this.unaryExpression();
				}
				break;
			case SPBSParser.SUB:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2788;
				this.match(SPBSParser.SUB);
				this.state = 2789;
				this.unaryExpression();
				}
				break;
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.NEW:
			case SPBSParser.SHORT:
			case SPBSParser.SUPER:
			case SPBSParser.THIS:
			case SPBSParser.VOID:
			case SPBSParser.IntegerLiteral:
			case SPBSParser.FloatingPointLiteral:
			case SPBSParser.BooleanLiteral:
			case SPBSParser.CharacterLiteral:
			case SPBSParser.StringLiteral:
			case SPBSParser.NullLiteral:
			case SPBSParser.LPAREN:
			case SPBSParser.BANG:
			case SPBSParser.TILDE:
			case SPBSParser.Identifier:
			case SPBSParser.AT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2790;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preIncrementExpression(): PreIncrementExpressionContext {
		let _localctx: PreIncrementExpressionContext = new PreIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, SPBSParser.RULE_preIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2793;
			this.match(SPBSParser.INC);
			this.state = 2794;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preDecrementExpression(): PreDecrementExpressionContext {
		let _localctx: PreDecrementExpressionContext = new PreDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, SPBSParser.RULE_preDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2796;
			this.match(SPBSParser.DEC);
			this.state = 2797;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		let _localctx: UnaryExpressionNotPlusMinusContext = new UnaryExpressionNotPlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, SPBSParser.RULE_unaryExpressionNotPlusMinus);
		try {
			this.state = 2805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 314, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2799;
				this.postfixExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2800;
				this.match(SPBSParser.TILDE);
				this.state = 2801;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2802;
				this.match(SPBSParser.BANG);
				this.state = 2803;
				this.unaryExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2804;
				this.castExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, SPBSParser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2809;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				{
				this.state = 2807;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 2808;
				this.expressionName();
				}
				break;
			}
			this.state = 2815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2813;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SPBSParser.INC:
						{
						this.state = 2811;
						this.postIncrementExpression_lf_postfixExpression();
						}
						break;
					case SPBSParser.DEC:
						{
						this.state = 2812;
						this.postDecrementExpression_lf_postfixExpression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 2817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postIncrementExpression(): PostIncrementExpressionContext {
		let _localctx: PostIncrementExpressionContext = new PostIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 462, SPBSParser.RULE_postIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2818;
			this.postfixExpression();
			this.state = 2819;
			this.match(SPBSParser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext {
		let _localctx: PostIncrementExpression_lf_postfixExpressionContext = new PostIncrementExpression_lf_postfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, SPBSParser.RULE_postIncrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2821;
			this.match(SPBSParser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postDecrementExpression(): PostDecrementExpressionContext {
		let _localctx: PostDecrementExpressionContext = new PostDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 466, SPBSParser.RULE_postDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2823;
			this.postfixExpression();
			this.state = 2824;
			this.match(SPBSParser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext {
		let _localctx: PostDecrementExpression_lf_postfixExpressionContext = new PostDecrementExpression_lf_postfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, SPBSParser.RULE_postDecrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2826;
			this.match(SPBSParser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, SPBSParser.RULE_castExpression);
		let _la: number;
		try {
			this.state = 2855;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 320, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2828;
				this.match(SPBSParser.LPAREN);
				this.state = 2829;
				this.primitiveType();
				this.state = 2830;
				this.match(SPBSParser.RPAREN);
				this.state = 2831;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2833;
				this.match(SPBSParser.LPAREN);
				this.state = 2834;
				this.referenceType();
				this.state = 2838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.BITAND) {
					{
					{
					this.state = 2835;
					this.additionalBound();
					}
					}
					this.state = 2840;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2841;
				this.match(SPBSParser.RPAREN);
				this.state = 2842;
				this.unaryExpressionNotPlusMinus();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2844;
				this.match(SPBSParser.LPAREN);
				this.state = 2845;
				this.referenceType();
				this.state = 2849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.BITAND) {
					{
					{
					this.state = 2846;
					this.additionalBound();
					}
					}
					this.state = 2851;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2852;
				this.match(SPBSParser.RPAREN);
				this.state = 2853;
				this.lambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xml_document(): Xml_documentContext {
		let _localctx: Xml_documentContext = new Xml_documentContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, SPBSParser.RULE_xml_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2858;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.XMLDeclOpen) {
				{
				this.state = 2857;
				this.xml_prolog();
				}
			}

			this.state = 2863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.COMMENT) | (1 << SPBSParser.SEA_WS) | (1 << SPBSParser.PI))) !== 0)) {
				{
				{
				this.state = 2860;
				this.xml_misc();
				}
				}
				this.state = 2865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2866;
			this.xml_element();
			this.state = 2870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.COMMENT) | (1 << SPBSParser.SEA_WS) | (1 << SPBSParser.PI))) !== 0)) {
				{
				{
				this.state = 2867;
				this.xml_misc();
				}
				}
				this.state = 2872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xml_prolog(): Xml_prologContext {
		let _localctx: Xml_prologContext = new Xml_prologContext(this._ctx, this.state);
		this.enterRule(_localctx, 474, SPBSParser.RULE_xml_prolog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2873;
			this.match(SPBSParser.XMLDeclOpen);
			this.state = 2877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.Name) {
				{
				{
				this.state = 2874;
				this.xml_attribute();
				}
				}
				this.state = 2879;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2880;
			this.match(SPBSParser.SPECIAL_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xml_content(): Xml_contentContext {
		let _localctx: Xml_contentContext = new Xml_contentContext(this._ctx, this.state);
		this.enterRule(_localctx, 476, SPBSParser.RULE_xml_content);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.SEA_WS || _la === SPBSParser.TEXT) {
				{
				this.state = 2882;
				this.xml_chardata();
				}
			}

			this.state = 2896;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2889;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SPBSParser.BS_ELEMENT_START:
					case SPBSParser.OPEN:
						{
						this.state = 2885;
						this.xml_element();
						}
						break;
					case SPBSParser.EntityRef:
					case SPBSParser.CharRef:
						{
						this.state = 2886;
						this.xml_reference();
						}
						break;
					case SPBSParser.PI:
						{
						this.state = 2887;
						this.match(SPBSParser.PI);
						}
						break;
					case SPBSParser.COMMENT:
						{
						this.state = 2888;
						this.match(SPBSParser.COMMENT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2892;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SPBSParser.SEA_WS || _la === SPBSParser.TEXT) {
						{
						this.state = 2891;
						this.xml_chardata();
						}
					}

					}
					}
				}
				this.state = 2898;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xml_element(): Xml_elementContext {
		let _localctx: Xml_elementContext = new Xml_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 478, SPBSParser.RULE_xml_element);
		let _la: number;
		try {
			this.state = 2933;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 331, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2899;
				this.match(SPBSParser.OPEN);
				this.state = 2900;
				this.match(SPBSParser.Name);
				this.state = 2904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.Name) {
					{
					{
					this.state = 2901;
					this.xml_attribute();
					}
					}
					this.state = 2906;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2907;
				this.match(SPBSParser.CLOSE);
				this.state = 2908;
				this.xml_content();
				this.state = 2909;
				this.match(SPBSParser.OPEN);
				this.state = 2910;
				this.match(SPBSParser.SLASH);
				this.state = 2911;
				this.match(SPBSParser.Name);
				this.state = 2912;
				this.match(SPBSParser.CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2914;
				this.match(SPBSParser.OPEN);
				this.state = 2915;
				this.match(SPBSParser.Name);
				this.state = 2919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.Name) {
					{
					{
					this.state = 2916;
					this.xml_attribute();
					}
					}
					this.state = 2921;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2922;
				this.match(SPBSParser.SLASH_CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2923;
				this.match(SPBSParser.BS_ELEMENT_START);
				this.state = 2924;
				this.match(SPBSParser.CDATA_START);
				this.state = 2925;
				this.bsCompilationUnit();
				this.state = 2926;
				this.match(SPBSParser.CDATA_END);
				this.state = 2927;
				this.match(SPBSParser.BS_ELEMENT_END);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2929;
				this.match(SPBSParser.BS_ELEMENT_START);
				this.state = 2930;
				this.bsCompilationUnit();
				this.state = 2931;
				this.match(SPBSParser.BS_ELEMENT_END);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xml_reference(): Xml_referenceContext {
		let _localctx: Xml_referenceContext = new Xml_referenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 480, SPBSParser.RULE_xml_reference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2935;
			_la = this._input.LA(1);
			if (!(_la === SPBSParser.EntityRef || _la === SPBSParser.CharRef)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xml_attribute(): Xml_attributeContext {
		let _localctx: Xml_attributeContext = new Xml_attributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 482, SPBSParser.RULE_xml_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2937;
			this.match(SPBSParser.Name);
			this.state = 2938;
			this.match(SPBSParser.EQUALS);
			this.state = 2939;
			this.match(SPBSParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xml_chardata(): Xml_chardataContext {
		let _localctx: Xml_chardataContext = new Xml_chardataContext(this._ctx, this.state);
		this.enterRule(_localctx, 484, SPBSParser.RULE_xml_chardata);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2941;
			_la = this._input.LA(1);
			if (!(_la === SPBSParser.SEA_WS || _la === SPBSParser.TEXT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xml_misc(): Xml_miscContext {
		let _localctx: Xml_miscContext = new Xml_miscContext(this._ctx, this.state);
		this.enterRule(_localctx, 486, SPBSParser.RULE_xml_misc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2943;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.COMMENT) | (1 << SPBSParser.SEA_WS) | (1 << SPBSParser.PI))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 25:
			return this.packageName_sempred(_localctx as PackageNameContext, predIndex);

		case 27:
			return this.packageOrTypeName_sempred(_localctx as PackageOrTypeNameContext, predIndex);

		case 30:
			return this.ambiguousName_sempred(_localctx as AmbiguousNameContext, predIndex);

		case 216:
			return this.conditionalOrExpression_sempred(_localctx as ConditionalOrExpressionContext, predIndex);

		case 217:
			return this.conditionalAndExpression_sempred(_localctx as ConditionalAndExpressionContext, predIndex);

		case 218:
			return this.inclusiveOrExpression_sempred(_localctx as InclusiveOrExpressionContext, predIndex);

		case 219:
			return this.exclusiveOrExpression_sempred(_localctx as ExclusiveOrExpressionContext, predIndex);

		case 220:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 221:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

		case 222:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

		case 223:
			return this.shiftExpression_sempred(_localctx as ShiftExpressionContext, predIndex);

		case 224:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

		case 225:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);
		}
		return true;
	}
	private packageName_sempred(_localctx: PackageNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private packageOrTypeName_sempred(_localctx: PackageOrTypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private ambiguousName_sempred(_localctx: AmbiguousNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalOrExpression_sempred(_localctx: ConditionalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalAndExpression_sempred(_localctx: ConditionalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(_localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(_localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);

		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(_localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 3);

		case 16:
			return this.precpred(this._ctx, 2);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 2);

		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 3);

		case 21:
			return this.precpred(this._ctx, 2);

		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x82\u0B84\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0" +
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5" +
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA" +
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF" +
		"\x04\xF0\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4" +
		"\x04\xF5\t\xF5\x03\x02\x03\x02\x03\x03\x07\x03\u01EE\n\x03\f\x03\x0E\x03" +
		"\u01F1\v\x03\x03\x03\x03\x03\x07\x03\u01F5\n\x03\f\x03\x0E\x03\u01F8\v" +
		"\x03\x03\x03\x05\x03\u01FB\n\x03\x03\x04\x03\x04\x05\x04\u01FF\n\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07\u0208\n\x07" +
		"\x03\b\x03\b\x05\b\u020C\n\b\x03\b\x03\b\x07\b\u0210\n\b\f\b\x0E\b\u0213" +
		"\v\b\x03\t\x07\t\u0216\n\t\f\t\x0E\t\u0219\v\t\x03\t\x03\t\x05\t\u021D" +
		"\n\t\x03\t\x03\t\x03\t\x07\t\u0222\n\t\f\t\x0E\t\u0225\v\t\x03\t\x03\t" +
		"\x05\t\u0229\n\t\x05\t\u022B\n\t\x03\n\x03\n\x07\n\u022F\n\n\f\n\x0E\n" +
		"\u0232\v\n\x03\n\x03\n\x05\n\u0236\n\n\x03\v\x07\v\u0239\n\v\f\v\x0E\v" +
		"\u023C\v\v\x03\v\x03\v\x05\v\u0240\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0F\x07\x0F\u0249\n\x0F\f\x0F\x0E\x0F\u024C\v\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u0259\n\x10\x03\x11\x07\x11\u025C\n\x11\f\x11\x0E\x11" +
		"\u025F\v\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0264\n\x11\f\x11\x0E\x11" +
		"\u0267\v\x11\x03\x11\x03\x11\x07\x11\u026B\n\x11\f\x11\x0E\x11\u026E\v" +
		"\x11\x03\x12\x07\x12\u0271\n\x12\f\x12\x0E\x12\u0274\v\x12\x03\x12\x03" +
		"\x12\x05\x12\u0278\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\u0281\n\x14\f\x14\x0E\x14\u0284\v\x14\x05\x14\u0286\n" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x07\x17\u0292\n\x17\f\x17\x0E\x17\u0295\v\x17\x03\x18\x03" +
		"\x18\x05\x18\u0299\n\x18\x03\x19\x07\x19\u029C\n\x19\f\x19\x0E\x19\u029F" +
		"\v\x19\x03\x19\x03\x19\x05\x19\u02A3\n\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u02A9\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x07\x1B\u02B1\n\x1B\f\x1B\x0E\x1B\u02B4\v\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u02BB\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x07\x1D\u02C3\n\x1D\f\x1D\x0E\x1D\u02C6\v\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u02CD\n\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x07 \u02D7\n \f \x0E \u02DA\v \x03!\x07!\u02DD" +
		"\n!\f!\x0E!\u02E0\v!\x03!\x07!\u02E3\n!\f!\x0E!\u02E6\v!\x03!\x03!\x03" +
		"\"\x07\"\u02EB\n\"\f\"\x0E\"\u02EE\v\"\x03\"\x03\"\x03\"\x03\"\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x05$\u02FA\n$\x03%\x03%\x03%\x03%\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x05)\u0317\n)\x03*\x03*\x05*\u031B" +
		"\n*\x03+\x07+\u031E\n+\f+\x0E+\u0321\v+\x03+\x03+\x03+\x05+\u0326\n+\x03" +
		"+\x05+\u0329\n+\x03+\x05+\u032C\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03," +
		"\x03,\x03,\x03,\x05,\u0338\n,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x07." +
		"\u0341\n.\f.\x0E.\u0344\v.\x03/\x03/\x03/\x030\x030\x030\x031\x031\x03" +
		"1\x071\u034F\n1\f1\x0E1\u0352\v1\x032\x032\x072\u0356\n2\f2\x0E2\u0359" +
		"\v2\x032\x032\x033\x033\x033\x033\x053\u0361\n3\x034\x034\x034\x034\x03" +
		"4\x054\u0368\n4\x035\x075\u036B\n5\f5\x0E5\u036E\v5\x035\x035\x035\x03" +
		"5\x036\x036\x036\x036\x036\x036\x036\x036\x056\u037C\n6\x037\x037\x03" +
		"7\x077\u0381\n7\f7\x0E7\u0384\v7\x038\x038\x038\x058\u0389\n8\x039\x03" +
		"9\x059\u038D\n9\x03:\x03:\x05:\u0391\n:\x03;\x03;\x05;\u0395\n;\x03<\x03" +
		"<\x05<\u0399\n<\x03=\x03=\x03=\x05=\u039E\n=\x03>\x03>\x05>\u03A2\n>\x03" +
		">\x03>\x07>\u03A6\n>\f>\x0E>\u03A9\v>\x03?\x03?\x05?\u03AD\n?\x03?\x03" +
		"?\x03?\x07?\u03B2\n?\f?\x0E?\u03B5\v?\x03?\x03?\x05?\u03B9\n?\x05?\u03BB" +
		"\n?\x03@\x03@\x07@\u03BF\n@\f@\x0E@\u03C2\v@\x03@\x03@\x05@\u03C6\n@\x03" +
		"A\x03A\x05A\u03CA\nA\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u03DD\nF\x03G\x07G\u03E0\nG" +
		"\fG\x0EG\u03E3\vG\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x05H\u03F2\nH\x03I\x03I\x03I\x05I\u03F7\nI\x03I\x03I\x07I" +
		"\u03FB\nI\fI\x0EI\u03FE\vI\x03I\x03I\x03I\x05I\u0403\nI\x05I\u0405\nI" +
		"\x03J\x03J\x05J\u0409\nJ\x03K\x03K\x03K\x05K\u040E\nK\x03K\x03K\x05K\u0412" +
		"\nK\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u041A\nL\x03M\x03M\x03M\x07M\u041F" +
		"\nM\fM\x0EM\u0422\vM\x03M\x03M\x03M\x07M\u0427\nM\fM\x0EM\u042A\vM\x05" +
		"M\u042C\nM\x03N\x07N\u042F\nN\fN\x0EN\u0432\vN\x03N\x03N\x03N\x03O\x03" +
		"O\x05O\u0439\nO\x03P\x07P\u043C\nP\fP\x0EP\u043F\vP\x03P\x03P\x07P\u0443" +
		"\nP\fP\x0EP\u0446\vP\x03P\x03P\x03P\x03P\x05P\u044C\nP\x03Q\x07Q\u044F" +
		"\nQ\fQ\x0EQ\u0452\vQ\x03Q\x03Q\x03Q\x05Q\u0457\nQ\x03Q\x03Q\x03R\x03R" +
		"\x03R\x03S\x03S\x03S\x07S\u0461\nS\fS\x0ES\u0464\vS\x03T\x03T\x05T\u0468" +
		"\nT\x03U\x03U\x05U\u046C\nU\x03V\x03V\x03W\x03W\x03W\x03X\x07X\u0474\n" +
		"X\fX\x0EX\u0477\vX\x03X\x03X\x05X\u047B\nX\x03X\x03X\x03Y\x03Y\x03Y\x03" +
		"Y\x05Y\u0483\nY\x03Z\x05Z\u0486\nZ\x03Z\x03Z\x03Z\x05Z\u048B\nZ\x03Z\x03" +
		"Z\x03[\x03[\x03\\\x03\\\x05\\\u0493\n\\\x03\\\x05\\\u0496\n\\\x03\\\x03" +
		"\\\x03]\x05]\u049B\n]\x03]\x03]\x03]\x05]\u04A0\n]\x03]\x03]\x03]\x05" +
		"]\u04A5\n]\x03]\x03]\x03]\x05]\u04AA\n]\x03]\x03]\x03]\x03]\x03]\x05]" +
		"\u04B1\n]\x03]\x03]\x03]\x05]\u04B6\n]\x03]\x03]\x03]\x03]\x03]\x03]\x05" +
		"]\u04BE\n]\x03]\x03]\x03]\x05]\u04C3\n]\x03]\x03]\x03]\x05]\u04C8\n]\x03" +
		"^\x07^\u04CB\n^\f^\x0E^\u04CE\v^\x03^\x03^\x03^\x05^\u04D3\n^\x03^\x03" +
		"^\x03_\x03_\x05_\u04D9\n_\x03_\x05_\u04DC\n_\x03_\x05_\u04DF\n_\x03_\x03" +
		"_\x03`\x03`\x03`\x07`\u04E6\n`\f`\x0E`\u04E9\v`\x03a\x07a\u04EC\na\fa" +
		"\x0Ea\u04EF\va\x03a\x03a\x03a\x05a\u04F4\na\x03a\x05a\u04F7\na\x03a\x05" +
		"a\u04FA\na\x03b\x03b\x03c\x03c\x07c\u0500\nc\fc\x0Ec\u0503\vc\x03d\x03" +
		"d\x05d\u0507\nd\x03e\x07e\u050A\ne\fe\x0Ee\u050D\ve\x03e\x03e\x03e\x05" +
		"e\u0512\ne\x03e\x05e\u0515\ne\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03f" +
		"\x03f\x05f\u0520\nf\x03g\x03g\x03g\x03h\x03h\x07h\u0527\nh\fh\x0Eh\u052A" +
		"\vh\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x05i\u0533\ni\x03j\x07j\u0536\n" +
		"j\fj\x0Ej\u0539\vj\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x05k\u0543" +
		"\nk\x03l\x07l\u0546\nl\fl\x0El\u0549\vl\x03l\x03l\x03l\x03m\x03m\x03m" +
		"\x03m\x03m\x03m\x05m\u0554\nm\x03n\x07n\u0557\nn\fn\x0En\u055A\vn\x03" +
		"n\x03n\x03n\x03n\x03n\x03o\x03o\x07o\u0563\no\fo\x0Eo\u0566\vo\x03o\x03" +
		"o\x03p\x03p\x03p\x03p\x03p\x05p\u056F\np\x03q\x07q\u0572\nq\fq\x0Eq\u0575" +
		"\vq\x03q\x03q\x03q\x03q\x03q\x05q\u057C\nq\x03q\x05q\u057F\nq\x03q\x03" +
		"q\x03r\x03r\x03r\x05r\u0586\nr\x03s\x03s\x03s\x03t\x03t\x03t\x05t\u058E" +
		"\nt\x03u\x03u\x03u\x03u\x05u\u0594\nu\x03u\x03u\x03v\x03v\x03v\x07v\u059B" +
		"\nv\fv\x0Ev\u059E\vv\x03w\x03w\x03w\x03w\x03x\x03x\x03x\x05x\u05A7\nx" +
		"\x03y\x03y\x05y\u05AB\ny\x03y\x05y\u05AE\ny\x03y\x03y\x03z\x03z\x03z\x07" +
		"z\u05B5\nz\fz\x0Ez\u05B8\vz\x03{\x03{\x03{\x03|\x03|\x03|\x03|\x03|\x03" +
		"|\x03}\x03}\x05}\u05C5\n}\x03}\x05}\u05C8\n}\x03}\x03}\x03~\x03~\x03~" +
		"\x07~\u05CF\n~\f~\x0E~\u05D2\v~\x03\x7F\x03\x7F\x05\x7F\u05D6\n\x7F\x03" +
		"\x7F\x03\x7F\x03\x80\x06\x80\u05DB\n\x80\r\x80\x0E\x80\u05DC\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x05\x81\u05E3\n\x81\x03\x82\x03\x82\x03\x82\x03\x83" +
		"\x07\x83\u05E9\n\x83\f\x83\x0E\x83\u05EC\v\x83\x03\x83\x03\x83\x03\x83" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u05F7\n\x84\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u05FE\n\x85\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x05\x86\u060C\n\x86\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0622\n\x8B\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D" +
		"\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F" +
		"\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u0644\n\x8F\x03\x90\x03\x90\x03" +
		"\x90\x03\x90\x03\x90\x03\x90\x03\x91\x03\x91\x07\x91\u064E\n\x91\f\x91" +
		"\x0E\x91\u0651\v\x91\x03\x91\x07\x91\u0654\n\x91\f\x91\x0E\x91\u0657\v" +
		"\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x93\x03\x93\x07\x93\u0660" +
		"\n\x93\f\x93\x0E\x93\u0663\v\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u066F\n\x94\x03\x95\x03" +
		"\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x97\x03\x97\x03" +
		"\x97\x03\x97\x03\x97\x03\x97\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03" +
		"\x98\x03\x98\x03\x98\x03\x99\x03\x99\x05\x99\u0689\n\x99\x03\x9A\x03\x9A" +
		"\x05\x9A\u068D\n\x9A\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u0692\n\x9B\x03\x9B" +
		"\x03\x9B\x05\x9B\u0696\n\x9B\x03\x9B\x03\x9B\x05\x9B\u069A\n\x9B\x03\x9B" +
		"\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C\x05\x9C\u06A2\n\x9C\x03\x9C\x03" +
		"\x9C\x05\x9C\u06A6\n\x9C\x03\x9C\x03\x9C\x05\x9C\u06AA\n\x9C\x03\x9C\x03" +
		"\x9C\x03\x9C\x03\x9D\x03\x9D\x05\x9D\u06B1\n\x9D\x03\x9E\x03\x9E\x03\x9F" +
		"\x03\x9F\x03\x9F\x07\x9F\u06B8\n\x9F\f\x9F\x0E\x9F\u06BB\v\x9F\x03\xA0" +
		"\x03\xA0\x03\xA0\x07\xA0\u06C0\n\xA0\f\xA0\x0E\xA0\u06C3\v\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1" +
		"\x07\xA1\u06CF\n\xA1\f\xA1\x0E\xA1\u06D2\v\xA1\x03\xA1\x03\xA1\x03\xA1" +
		"\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x05\xA2\u06DD\n\xA2\x03" +
		"\xA2\x03\xA2\x03\xA3\x03\xA3\x05\xA3\u06E3\n\xA3\x03\xA3\x03\xA3\x03\xA4" +
		"\x03\xA4\x05\xA4\u06E9\n\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA5\x03" +
		"\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03" +
		"\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u06FE\n\xA7\x03\xA7\x03\xA7" +
		"\x03\xA7\x05\xA7\u0703\n\xA7\x03\xA8\x03\xA8\x07\xA8\u0707\n\xA8\f\xA8" +
		"\x0E\xA8\u070A\v\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03" +
		"\xAA\x07\xAA\u0713\n\xAA\f\xAA\x0E\xAA\u0716\v\xAA\x03\xAA\x03\xAA\x03" +
		"\xAA\x03\xAB\x03\xAB\x03\xAB\x07\xAB\u071E\n\xAB\f\xAB\x0E\xAB\u0721\v" +
		"\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u072A" +
		"\n\xAD\x03\xAD\x05\xAD\u072D\n\xAD\x03\xAE\x03\xAE\x03\xAE\x05\xAE\u0732" +
		"\n\xAE\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xAF\x07\xAF\u0739\n\xAF\f\xAF" +
		"\x0E\xAF\u073C\v\xAF\x03\xB0\x07\xB0\u073F\n\xB0\f\xB0\x0E\xB0\u0742\v" +
		"\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x05\xB1\u074B" +
		"\n\xB1\x03\xB1\x07\xB1\u074E\n\xB1\f\xB1\x0E\xB1\u0751\v\xB1\x03\xB2\x03" +
		"\xB2\x03\xB2\x03\xB2\x07\xB2\u0757\n\xB2\f\xB2\x0E\xB2\u075A\v\xB2\x03" +
		"\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03" +
		"\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03" +
		"\xB2\x03\xB2\x05\xB2\u0770\n\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4" +
		"\x03\xB4\x07\xB4\u0778\n\xB4\f\xB4\x0E\xB4\u077B\v\xB4\x03\xB4\x03\xB4" +
		"\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4" +
		"\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x05\xB4" +
		"\u0790\n\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u0797\n\xB5" +
		"\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x05\xB7\u079F\n\xB7\x03" +
		"\xB8\x03\xB8\x03\xB8\x03\xB8\x07\xB8\u07A5\n\xB8\f\xB8\x0E\xB8\u07A8\v" +
		"\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x07\xB8\u07B0\n\xB8" +
		"\f\xB8\x0E\xB8\u07B3\v\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03" +
		"\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03" +
		"\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u07C9\n\xB8\x03\xB9" +
		"\x03\xB9\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x07\xBA\u07D1\n\xBA\f\xBA\x0E" +
		"\xBA\u07D4\v\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x07\xBA" +
		"\u07DC\n\xBA\f\xBA\x0E\xBA\u07DF\v\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA" +
		"\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA" +
		"\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u07F4\n\xBA\x03" +
		"\xBB\x03\xBB\x05\xBB\u07F8\n\xBB\x03\xBB\x07\xBB\u07FB\n\xBB\f\xBB\x0E" +
		"\xBB\u07FE\v\xBB\x03\xBB\x03\xBB\x03\xBB\x07\xBB\u0803\n\xBB\f\xBB\x0E" +
		"\xBB\u0806\v\xBB\x03\xBB\x07\xBB\u0809\n\xBB\f\xBB\x0E\xBB\u080C\v\xBB" +
		"\x03\xBB\x05\xBB\u080F\n\xBB\x03\xBB\x03\xBB\x05\xBB\u0813\n\xBB\x03\xBB" +
		"\x03\xBB\x05\xBB\u0817\n\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x05\xBB\u081D" +
		"\n\xBB\x03\xBB\x07\xBB\u0820\n\xBB\f\xBB\x0E\xBB\u0823\v\xBB\x03\xBB\x03" +
		"\xBB\x05\xBB\u0827\n\xBB\x03\xBB\x03\xBB\x05\xBB\u082B\n\xBB\x03\xBB\x03" +
		"\xBB\x05\xBB\u082F\n\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x05\xBB\u0835" +
		"\n\xBB\x03\xBB\x07\xBB\u0838\n\xBB\f\xBB\x0E\xBB\u083B\v\xBB\x03\xBB\x03" +
		"\xBB\x05\xBB\u083F\n\xBB\x03\xBB\x03\xBB\x05\xBB\u0843\n\xBB\x03\xBB\x03" +
		"\xBB\x05\xBB\u0847\n\xBB\x05\xBB\u0849\n\xBB\x03\xBC\x03\xBC\x03\xBC\x05" +
		"\xBC\u084E\n\xBC\x03\xBC\x07\xBC\u0851\n\xBC\f\xBC\x0E\xBC\u0854\v\xBC" +
		"\x03\xBC\x03\xBC\x05\xBC\u0858\n\xBC\x03\xBC\x03\xBC\x05\xBC\u085C\n\xBC" +
		"\x03\xBC\x03\xBC\x05\xBC\u0860\n\xBC\x03\xBD\x03\xBD\x05\xBD\u0864\n\xBD" +
		"\x03\xBD\x07\xBD\u0867\n\xBD\f\xBD\x0E\xBD\u086A\v\xBD\x03\xBD\x03\xBD" +
		"\x03\xBD\x07\xBD\u086F\n\xBD\f\xBD\x0E\xBD\u0872\v\xBD\x03\xBD\x07\xBD" +
		"\u0875\n\xBD\f\xBD\x0E\xBD\u0878\v\xBD\x03\xBD\x05\xBD\u087B\n\xBD\x03" +
		"\xBD\x03\xBD\x05\xBD\u087F\n\xBD\x03\xBD\x03\xBD\x05\xBD\u0883\n\xBD\x03" +
		"\xBD\x03\xBD\x03\xBD\x03\xBD\x05\xBD\u0889\n\xBD\x03\xBD\x07\xBD\u088C" +
		"\n\xBD\f\xBD\x0E\xBD\u088F\v\xBD\x03\xBD\x03\xBD\x05\xBD\u0893\n\xBD\x03" +
		"\xBD\x03\xBD\x05\xBD\u0897\n\xBD\x03\xBD\x03\xBD\x05\xBD\u089B\n\xBD\x05" +
		"\xBD\u089D\n\xBD\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u08A2\n\xBE\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x05\xBF\u08B1\n\xBF\x03\xC0\x03\xC0\x03\xC0\x03\xC1" +
		"\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x05\xC1" +
		"\u08BF\n\xC1\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03" +
		"\xC2\x03\xC2\x03\xC2\x05\xC2\u08CB\n\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2" +
		"\x03\xC2\x07\xC2\u08D2\n\xC2\f\xC2\x0E\xC2\u08D5\v\xC2\x03\xC3\x03\xC3" +
		"\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x07\xC3" +
		"\u08E1\n\xC3\f\xC3\x0E\xC3\u08E4\v\xC3\x03\xC4\x03\xC4\x03\xC4\x03\xC4" +
		"\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x05\xC4\u08F0\n\xC4\x03" +
		"\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x07\xC4\u08F7\n\xC4\f\xC4\x0E\xC4" +
		"\u08FA\v\xC4\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u08FF\n\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0906\n\xC5\x03\xC5\x03\xC5\x03\xC5\x05" +
		"\xC5\u090B\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0912" +
		"\n\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0917\n\xC5";
	private static readonly _serializedATNSegment1: string =
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u091E\n\xC5\x03\xC5\x03" +
		"\xC5\x03\xC5\x05\xC5\u0923\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x05\xC5\u092A\n\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u092F\n\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0937\n\xC5\x03\xC5\x03" +
		"\xC5\x03\xC5\x05\xC5\u093C\n\xC5\x03\xC5\x03\xC5\x05\xC5\u0940\n\xC5\x03" +
		"\xC6\x03\xC6\x05\xC6\u0944\n\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u0949" +
		"\n\xC6\x03\xC6\x03\xC6\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u0950\n\xC7\x03" +
		"\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u0957\n\xC7\x03\xC7\x03\xC7" +
		"\x03\xC7\x05\xC7\u095C\n\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05" +
		"\xC7\u0963\n\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u0968\n\xC7\x03\xC7\x03" +
		"\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u096F\n\xC7\x03\xC7\x03\xC7\x03\xC7" +
		"\x05\xC7\u0974\n\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05" +
		"\xC7\u097C\n\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u0981\n\xC7\x03\xC7\x03" +
		"\xC7\x05\xC7\u0985\n\xC7\x03\xC8\x03\xC8\x03\xC8\x07\xC8\u098A\n\xC8\f" +
		"\xC8\x0E\xC8\u098D\v\xC8\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u0992\n\xC9\x03" +
		"\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u0999\n\xC9\x03\xC9\x03\xC9" +
		"\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u09A0\n\xC9\x03\xC9\x03\xC9\x03\xC9\x03" +
		"\xC9\x03\xC9\x05\xC9\u09A7\n\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9" +
		"\x03\xC9\x05\xC9\u09AF\n\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05" +
		"\xC9\u09B6\n\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9" +
		"\u09BE\n\xC9\x03\xCA\x03\xCA\x05\xCA\u09C2\n\xCA\x03\xCA\x03\xCA\x03\xCB" +
		"\x03\xCB\x03\xCB\x05\xCB\u09C9\n\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03" +
		"\xCB\x05\xCB\u09D0\n\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x05\xCB" +
		"\u09D7\n\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u09DF" +
		"\n\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u09E6\n\xCB\x03" +
		"\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u09EE\n\xCB\x03\xCC" +
		"\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u09F4\n\xCC\x03\xCC\x03\xCC\x03\xCC\x03" +
		"\xCC\x05\xCC\u09FA\n\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC" +
		"\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u0A06\n\xCC\x03\xCD\x03\xCD\x07" +
		"\xCD\u0A0A\n\xCD\f\xCD\x0E\xCD\u0A0D\v\xCD\x03\xCE\x07\xCE\u0A10\n\xCE" +
		"\f\xCE\x0E\xCE\u0A13\v\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCF\x03" +
		"\xCF\x03\xD0\x03\xD0\x05\xD0\u0A1D\n\xD0\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD2\x03\xD2\x03\xD2\x05\xD2\u0A26\n\xD2\x03\xD2\x03\xD2\x03\xD2\x03" +
		"\xD2\x03\xD2\x05\xD2\u0A2D\n\xD2\x03\xD3\x03\xD3\x03\xD3\x07\xD3\u0A32" +
		"\n\xD3\f\xD3\x0E\xD3\u0A35\v\xD3\x03\xD4\x03\xD4\x05\xD4\u0A39\n\xD4\x03" +
		"\xD5\x03\xD5\x05\xD5\u0A3D\n\xD5\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD7" +
		"\x03\xD7\x03\xD7\x05\xD7\u0A46\n\xD7\x03\xD8\x03\xD8\x03\xD9\x03\xD9\x03" +
		"\xD9\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x05\xD9\u0A51\n\xD9\x03\xDA\x03\xDA" +
		"\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x07\xDA\u0A59\n\xDA\f\xDA\x0E\xDA\u0A5C" +
		"\v\xDA\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x07\xDB\u0A64\n" +
		"\xDB\f\xDB\x0E\xDB\u0A67\v\xDB\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC" +
		"\x03\xDC\x07\xDC\u0A6F\n\xDC\f\xDC\x0E\xDC\u0A72\v\xDC\x03\xDD\x03\xDD" +
		"\x03\xDD\x03\xDD\x03\xDD\x03\xDD\x07\xDD\u0A7A\n\xDD\f\xDD\x0E\xDD\u0A7D" +
		"\v\xDD\x03\xDE\x03\xDE\x03\xDE\x03\xDE\x03\xDE\x03\xDE\x07\xDE\u0A85\n" +
		"\xDE\f\xDE\x0E\xDE\u0A88\v\xDE\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF" +
		"\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x07\xDF\u0A93\n\xDF\f\xDF\x0E\xDF\u0A96" +
		"\v\xDF\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0" +
		"\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0" +
		"\x03\xE0\x07\xE0\u0AAA\n\xE0\f\xE0\x0E\xE0\u0AAD\v\xE0\x03\xE1\x03\xE1" +
		"\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1" +
		"\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x07\xE1\u0ABF\n\xE1\f\xE1\x0E" +
		"\xE1\u0AC2\v\xE1\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2" +
		"\x03\xE2\x03\xE2\x07\xE2\u0ACD\n\xE2\f\xE2\x0E\xE2\u0AD0\v\xE2\x03\xE3" +
		"\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3" +
		"\x03\xE3\x03\xE3\x07\xE3\u0ADE\n\xE3\f\xE3\x0E\xE3\u0AE1\v\xE3\x03\xE4" +
		"\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x05\xE4\u0AEA\n\xE4\x03" +
		"\xE5\x03\xE5\x03\xE5\x03\xE6\x03\xE6\x03\xE6\x03\xE7\x03\xE7\x03\xE7\x03" +
		"\xE7\x03\xE7\x03\xE7\x05\xE7\u0AF8\n\xE7\x03\xE8\x03\xE8\x05\xE8\u0AFC" +
		"\n\xE8\x03\xE8\x03\xE8\x07\xE8\u0B00\n\xE8\f\xE8\x0E\xE8\u0B03\v\xE8\x03" +
		"\xE9\x03\xE9\x03\xE9\x03\xEA\x03\xEA\x03\xEB\x03\xEB\x03\xEB\x03\xEC\x03" +
		"\xEC\x03\xED\x03\xED\x03\xED\x03\xED\x03\xED\x03\xED\x03\xED\x03\xED\x07" +
		"\xED\u0B17\n\xED\f\xED\x0E\xED\u0B1A\v\xED\x03\xED\x03\xED\x03\xED\x03" +
		"\xED\x03\xED\x03\xED\x07\xED\u0B22\n\xED\f\xED\x0E\xED\u0B25\v\xED\x03" +
		"\xED\x03\xED\x03\xED\x05\xED\u0B2A\n\xED\x03\xEE\x05\xEE\u0B2D\n\xEE\x03" +
		"\xEE\x07\xEE\u0B30\n\xEE\f\xEE\x0E\xEE\u0B33\v\xEE\x03\xEE\x03\xEE\x07" +
		"\xEE\u0B37\n\xEE\f\xEE\x0E\xEE\u0B3A\v\xEE\x03\xEF\x03\xEF\x07\xEF\u0B3E" +
		"\n\xEF\f\xEF\x0E\xEF\u0B41\v\xEF\x03\xEF\x03\xEF\x03\xF0\x05\xF0\u0B46" +
		"\n\xF0\x03\xF0\x03\xF0\x03\xF0\x03\xF0\x05\xF0\u0B4C\n\xF0\x03\xF0\x05" +
		"\xF0\u0B4F\n\xF0\x07\xF0\u0B51\n\xF0\f\xF0\x0E\xF0\u0B54\v\xF0\x03\xF1" +
		"\x03\xF1\x03\xF1\x07\xF1\u0B59\n\xF1\f\xF1\x0E\xF1\u0B5C\v\xF1\x03\xF1" +
		"\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1" +
		"\x07\xF1\u0B68\n\xF1\f\xF1\x0E\xF1\u0B6B\v\xF1\x03\xF1\x03\xF1\x03\xF1" +
		"\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x05\xF1" +
		"\u0B78\n\xF1\x03\xF2\x03\xF2\x03\xF3\x03\xF3\x03\xF3\x03\xF3\x03\xF4\x03" +
		"\xF4\x03\xF5\x03\xF5\x03\xF5\x02\x02\x0F48>\u01B2\u01B4\u01B6\u01B8\u01BA" +
		"\u01BC\u01BE\u01C0\u01C2\u01C4\xF6\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
		"\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
		"\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
		"\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
		"\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
		"\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166" +
		"\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174" +
		"\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182" +
		"\x02\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190" +
		"\x02\u0192\x02\u0194\x02\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E" +
		"\x02\u01A0\x02\u01A2\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC" +
		"\x02\u01AE\x02\u01B0\x02\u01B2\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA" +
		"\x02\u01BC\x02\u01BE\x02\u01C0\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8" +
		"\x02\u01CA\x02\u01CC\x02\u01CE\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6" +
		"\x02\u01D8\x02\u01DA\x02\u01DC\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4" +
		"\x02\u01E6\x02\u01E8\x02\x02\t\x03\x02JO\x07\x02\x1C\x1C\x1F\x1F2244<" +
		"<\x04\x02%%++\x04\x02YYr|\x03\x02\x06\x07\x04\x02\b\b\v\v\x05\x02\x03" +
		"\x03\b\b\x14\x14\x02\u0C7C\x02\u01EA\x03\x02\x02\x02\x04\u01FA\x03\x02" +
		"\x02\x02\x06\u01FE\x03\x02\x02\x02\b\u0200\x03\x02\x02\x02\n\u0202\x03" +
		"\x02\x02\x02\f\u0207\x03\x02\x02\x02\x0E\u020B\x03\x02\x02\x02\x10\u022A" +
		"\x03\x02\x02\x02\x12\u022C\x03\x02\x02\x02\x14\u023A\x03\x02\x02\x02\x16" +
		"\u0241\x03\x02\x02\x02\x18\u0243\x03\x02\x02\x02\x1A\u0245\x03\x02\x02" +
		"\x02\x1C\u024A\x03\x02\x02\x02\x1E\u0258\x03\x02\x02\x02 \u025D\x03\x02" +
		"\x02\x02\"\u0272\x03\x02\x02\x02$\u0279\x03\x02\x02\x02&\u0285\x03\x02" +
		"\x02\x02(\u0287\x03\x02\x02\x02*\u028A\x03\x02\x02\x02,\u028E\x03\x02" +
		"\x02\x02.\u0298\x03\x02\x02\x020\u029D\x03\x02\x02\x022\u02A8\x03\x02" +
		"\x02\x024\u02AA\x03\x02\x02\x026\u02BA\x03\x02\x02\x028\u02BC\x03\x02" +
		"\x02\x02:\u02CC\x03\x02\x02\x02<\u02CE\x03\x02\x02\x02>\u02D0\x03\x02" +
		"\x02\x02@\u02DE\x03\x02\x02\x02B\u02EC\x03\x02\x02\x02D\u02F3\x03\x02" +
		"\x02\x02F\u02F9\x03\x02\x02\x02H\u02FB\x03\x02\x02\x02J\u02FF\x03\x02" +
		"\x02\x02L\u0305\x03\x02\x02\x02N\u030C\x03\x02\x02\x02P\u0316\x03\x02" +
		"\x02\x02R\u031A\x03\x02\x02\x02T\u031F\x03\x02\x02\x02V\u0337\x03\x02" +
		"\x02\x02X\u0339\x03\x02\x02\x02Z\u033D\x03\x02\x02\x02\\\u0345\x03\x02" +
		"\x02\x02^\u0348\x03\x02\x02\x02`\u034B\x03\x02\x02\x02b\u0353\x03\x02" +
		"\x02\x02d\u0360\x03\x02\x02\x02f\u0367\x03\x02\x02\x02h\u036C\x03\x02" +
		"\x02\x02j\u037B\x03\x02\x02\x02l\u037D\x03\x02\x02\x02n\u0385\x03\x02" +
		"\x02\x02p\u038A\x03\x02\x02\x02r\u0390\x03\x02\x02\x02t\u0394\x03\x02" +
		"\x02\x02v\u0398\x03\x02\x02\x02x\u039D\x03\x02\x02\x02z\u03A1\x03\x02" +
		"\x02\x02|\u03BA\x03\x02\x02\x02~\u03BC\x03\x02\x02\x02\x80\u03C7\x03\x02" +
		"\x02\x02\x82\u03CB\x03\x02\x02\x02\x84\u03CD\x03\x02\x02\x02\x86\u03CF" +
		"\x03\x02\x02\x02\x88\u03D1\x03\x02\x02\x02\x8A\u03DC\x03\x02\x02\x02\x8C" +
		"\u03E1\x03\x02\x02\x02\x8E\u03F1\x03\x02\x02\x02\x90\u0404\x03\x02\x02" +
		"\x02\x92\u0408\x03\x02\x02\x02\x94\u040A\x03\x02\x02\x02\x96\u0419\x03" +
		"\x02\x02\x02\x98\u042B\x03\x02\x02\x02\x9A\u0430\x03\x02\x02\x02\x9C\u0438" +
		"\x03\x02\x02\x02\x9E\u044B\x03\x02\x02\x02\xA0\u0450\x03\x02\x02\x02\xA2" +
		"\u045A\x03\x02\x02\x02\xA4\u045D\x03\x02\x02\x02\xA6\u0467\x03\x02\x02" +
		"\x02\xA8\u046B\x03\x02\x02\x02\xAA\u046D\x03\x02\x02\x02\xAC\u046F\x03" +
		"\x02\x02\x02\xAE\u0475\x03\x02\x02\x02\xB0\u0482\x03\x02\x02\x02\xB2\u0485" +
		"\x03\x02\x02\x02\xB4\u048E\x03\x02\x02\x02\xB6\u0490\x03\x02\x02\x02\xB8" +
		"\u04C7\x03\x02\x02\x02\xBA\u04CC\x03\x02\x02\x02\xBC\u04D6\x03\x02\x02" +
		"\x02\xBE\u04E2\x03\x02\x02\x02\xC0\u04ED\x03\x02\x02\x02\xC2\u04FB\x03" +
		"\x02\x02\x02\xC4\u04FD\x03\x02\x02\x02\xC6\u0506\x03\x02\x02\x02\xC8\u050B" +
		"\x03\x02\x02\x02\xCA\u051F\x03\x02\x02\x02\xCC\u0521\x03\x02\x02\x02\xCE" +
		"\u0524\x03\x02\x02\x02\xD0\u0532\x03\x02\x02\x02\xD2\u0537\x03\x02\x02" +
		"\x02\xD4\u0542\x03\x02\x02\x02\xD6\u0547\x03\x02\x02\x02\xD8\u0553\x03" +
		"\x02\x02\x02\xDA\u0558\x03\x02\x02\x02\xDC\u0560\x03\x02\x02\x02\xDE\u056E" +
		"\x03\x02\x02\x02\xE0\u0573\x03\x02\x02\x02\xE2\u0585\x03\x02\x02\x02\xE4" +
		"\u0587\x03\x02\x02\x02\xE6\u058D\x03\x02\x02\x02\xE8\u058F\x03\x02\x02" +
		"\x02\xEA\u0597\x03\x02\x02\x02\xEC\u059F\x03\x02\x02\x02\xEE\u05A6\x03" +
		"\x02\x02\x02\xF0\u05A8\x03\x02\x02\x02\xF2\u05B1\x03\x02\x02\x02\xF4\u05B9" +
		"\x03\x02\x02\x02\xF6\u05BC\x03\x02\x02\x02\xF8\u05C2\x03\x02\x02\x02\xFA" +
		"\u05CB\x03\x02\x02\x02\xFC\u05D3\x03\x02\x02\x02\xFE\u05DA\x03\x02\x02" +
		"\x02\u0100\u05E2\x03\x02\x02\x02\u0102\u05E4\x03\x02\x02\x02\u0104\u05EA" +
		"\x03\x02\x02\x02\u0106\u05F6\x03\x02\x02\x02\u0108\u05FD\x03\x02\x02\x02" +
		"\u010A\u060B\x03\x02\x02\x02\u010C\u060D\x03\x02\x02\x02\u010E\u060F\x03" +
		"\x02\x02\x02\u0110\u0613\x03\x02\x02\x02\u0112\u0617\x03\x02\x02\x02\u0114" +
		"\u0621\x03\x02\x02\x02\u0116\u0623\x03\x02\x02\x02\u0118\u0629\x03\x02" +
		"\x02\x02\u011A\u0631\x03\x02\x02\x02\u011C\u0643\x03\x02\x02\x02\u011E" +
		"\u0645\x03\x02\x02\x02\u0120\u064B\x03\x02\x02\x02\u0122\u065A\x03\x02" +
		"\x02\x02\u0124\u065D\x03\x02\x02\x02\u0126\u066E\x03\x02\x02\x02\u0128" +
		"\u0670\x03\x02\x02\x02\u012A\u0672\x03\x02\x02\x02\u012C\u0678\x03\x02" +
		"\x02\x02\u012E\u067E\x03\x02\x02\x02\u0130\u0688\x03\x02\x02\x02\u0132" +
		"\u068C\x03\x02\x02\x02\u0134\u068E\x03\x02\x02\x02\u0136\u069E\x03\x02" +
		"\x02\x02\u0138\u06B0\x03\x02\x02\x02\u013A\u06B2\x03\x02\x02\x02\u013C" +
		"\u06B4\x03\x02\x02\x02\u013E\u06BC\x03\x02\x02\x02\u0140\u06CB\x03\x02" +
		"\x02\x02\u0142\u06DA\x03\x02\x02\x02\u0144\u06E0\x03\x02\x02\x02\u0146" +
		"\u06E6\x03\x02\x02\x02\u0148\u06EC\x03\x02\x02\x02\u014A\u06F0\x03\x02" +
		"\x02\x02\u014C\u0702\x03\x02\x02\x02\u014E\u0704\x03\x02\x02\x02\u0150" +
		"\u070B\x03\x02\x02\x02\u0152\u0714\x03\x02\x02\x02\u0154\u071A\x03\x02" +
		"\x02\x02\u0156\u0722\x03\x02\x02\x02\u0158\u0725\x03\x02\x02\x02\u015A" +
		"\u072E\x03\x02\x02\x02\u015C\u0735\x03\x02\x02\x02\u015E\u0740\x03\x02" +
		"\x02\x02\u0160\u074A\x03\x02\x02\x02\u0162\u076F\x03\x02\x02\x02\u0164" +
		"\u0771\x03\x02\x02\x02\u0166\u078F\x03\x02\x02\x02\u0168\u0796\x03\x02" +
		"\x02\x02\u016A\u0798\x03\x02\x02\x02\u016C\u079E\x03\x02\x02\x02\u016E" +
		"\u07C8\x03\x02\x02\x02\u0170\u07CA\x03\x02\x02\x02\u0172\u07F3\x03\x02" +
		"\x02\x02\u0174\u0848\x03\x02\x02\x02\u0176\u084A\x03\x02\x02\x02\u0178" +
		"\u089C\x03\x02\x02\x02\u017A\u08A1\x03\x02\x02\x02\u017C\u08B0\x03\x02" +
		"\x02\x02\u017E\u08B2\x03\x02\x02\x02\u0180\u08BE\x03\x02\x02\x02\u0182" +
		"\u08CA\x03\x02\x02\x02\u0184\u08D6\x03\x02\x02\x02\u0186\u08EF\x03\x02" +
		"\x02\x02\u0188\u093F\x03\x02\x02\x02\u018A\u0941\x03\x02\x02\x02\u018C" +
		"\u0984\x03\x02\x02\x02\u018E\u0986\x03\x02\x02\x02\u0190\u09BD\x03\x02" +
		"\x02\x02\u0192\u09BF\x03\x02\x02\x02\u0194\u09ED\x03\x02\x02\x02\u0196" +
		"\u0A05\x03\x02\x02\x02\u0198\u0A07\x03\x02\x02\x02\u019A\u0A11\x03\x02" +
		"\x02\x02\u019C\u0A18\x03\x02\x02\x02\u019E\u0A1C\x03\x02\x02\x02\u01A0" +
		"\u0A1E\x03\x02\x02\x02\u01A2\u0A2C\x03\x02\x02\x02\u01A4\u0A2E\x03\x02" +
		"\x02\x02\u01A6\u0A38\x03\x02\x02\x02\u01A8\u0A3C\x03\x02\x02\x02\u01AA" +
		"\u0A3E\x03\x02\x02\x02\u01AC\u0A45\x03\x02\x02\x02\u01AE\u0A47\x03\x02" +
		"\x02\x02\u01B0\u0A50\x03\x02\x02\x02\u01B2\u0A52\x03\x02\x02\x02\u01B4" +
		"\u0A5D\x03\x02\x02\x02\u01B6\u0A68\x03\x02\x02\x02\u01B8\u0A73\x03\x02" +
		"\x02\x02\u01BA\u0A7E\x03\x02\x02\x02\u01BC\u0A89\x03\x02\x02\x02\u01BE" +
		"\u0A97\x03\x02\x02\x02\u01C0\u0AAE\x03\x02\x02\x02\u01C2\u0AC3\x03\x02" +
		"\x02\x02\u01C4\u0AD1\x03\x02\x02\x02\u01C6\u0AE9\x03\x02\x02\x02\u01C8" +
		"\u0AEB\x03\x02\x02\x02\u01CA\u0AEE\x03\x02\x02\x02\u01CC\u0AF7\x03\x02" +
		"\x02\x02\u01CE\u0AFB\x03\x02\x02\x02\u01D0\u0B04\x03\x02\x02\x02\u01D2" +
		"\u0B07\x03\x02\x02\x02\u01D4\u0B09\x03\x02\x02\x02\u01D6\u0B0C\x03\x02" +
		"\x02\x02\u01D8\u0B29\x03\x02\x02\x02\u01DA\u0B2C\x03\x02\x02\x02\u01DC" +
		"\u0B3B\x03\x02\x02\x02\u01DE\u0B45\x03\x02\x02\x02\u01E0\u0B77\x03\x02" +
		"\x02\x02\u01E2\u0B79\x03\x02\x02\x02\u01E4\u0B7B\x03\x02\x02\x02\u01E6" +
		"\u0B7F\x03\x02\x02\x02\u01E8\u0B81\x03\x02\x02\x02\u01EA\u01EB\t\x02\x02" +
		"\x02\u01EB\x03\x03\x02\x02\x02\u01EC\u01EE\x05\xE6t\x02\u01ED\u01EC\x03" +
		"\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF" +
		"\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
		"\x02\x02\u01F2\u01FB\x05\x06\x04\x02\u01F3\u01F5\x05\xE6t\x02\u01F4\u01F3" +
		"\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02" +
		"\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9\x03\x02\x02\x02\u01F8\u01F6\x03" +
		"\x02\x02\x02\u01F9\u01FB\x07\x1A\x02\x02\u01FA\u01EF\x03\x02\x02\x02\u01FA" +
		"\u01F6\x03\x02\x02\x02\u01FB\x05\x03\x02\x02\x02\u01FC\u01FF\x05\b\x05" +
		"\x02\u01FD\u01FF\x05\n\x06\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FD" +
		"\x03\x02\x02\x02\u01FF\x07\x03\x02\x02\x02\u0200\u0201\t\x03\x02\x02\u0201" +
		"\t\x03\x02\x02\x02\u0202\u0203\t\x04\x02\x02\u0203\v\x03\x02\x02\x02\u0204" +
		"\u0208\x05\x0E\b\x02\u0205\u0208\x05\x1C\x0F\x02\u0206\u0208\x05\x1E\x10" +
		"\x02\u0207\u0204\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0206" +
		"\x03\x02\x02\x02\u0208\r\x03\x02\x02\x02\u0209\u020C\x05\x14\v\x02\u020A" +
		"\u020C\x05\x1A\x0E\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020A\x03\x02" +
		"\x02\x02\u020C\u0211\x03\x02\x02\x02\u020D\u0210\x05\x12\n\x02\u020E\u0210" +
		"\x05\x18\r\x02\u020F\u020D\x03\x02\x02\x02\u020F\u020E\x03\x02\x02\x02" +
		"\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0212\x03" +
		"\x02\x02\x02\u0212\x0F\x03\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0214" +
		"\u0216\x05\xE6t\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0219\x03\x02\x02" +
		"\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A" +
		"\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A\u021C\x07}\x02\x02" +
		"\u021B\u021D\x05*\x16\x02\u021C\u021B\x03\x02\x02\x02\u021C\u021D\x03" +
		"\x02\x02\x02\u021D\u022B\x03\x02\x02\x02\u021E\u021F\x05\x0E\b\x02\u021F" +
		"\u0223\x07X\x02\x02\u0220\u0222\x05\xE6t\x02\u0221\u0220\x03\x02\x02\x02" +
		"\u0222\u0225\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0224\x03" +
		"\x02\x02\x02\u0224\u0226\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0226" +
		"\u0228\x07}\x02\x02\u0227\u0229\x05*\x16\x02\u0228\u0227\x03\x02\x02\x02" +
		"\u0228\u0229\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u0217\x03" +
		"\x02\x02\x02\u022A\u021E\x03\x02\x02\x02\u022B\x11\x03\x02\x02\x02\u022C" +
		"\u0230\x07X\x02\x02\u022D\u022F\x05\xE6t\x02\u022E\u022D\x03\x02\x02\x02" +
		"\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230\u0231\x03" +
		"\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0233" +
		"\u0235\x07}\x02\x02\u0234\u0236\x05*\x16\x02\u0235\u0234\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\x13\x03\x02\x02\x02\u0237\u0239\x05" +
		"\xE6t\x02\u0238\u0237\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A" +
		"\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x03\x02" +
		"\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u023F\x07}\x02\x02\u023E\u0240" +
		"\x05*\x16\x02\u023F\u023E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02" +
		"\u0240\x15\x03\x02\x02\x02\u0241\u0242\x05\x10\t\x02\u0242\x17\x03\x02" +
		"\x02\x02\u0243\u0244\x05\x12\n\x02\u0244\x19\x03\x02\x02\x02\u0245\u0246" +
		"\x05\x14\v\x02\u0246\x1B\x03\x02\x02\x02\u0247\u0249\x05\xE6t\x02\u0248" +
		"\u0247\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A\u0248\x03\x02" +
		"\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024D\x03\x02\x02\x02\u024C" +
		"\u024A\x03\x02\x02\x02\u024D\u024E\x07}\x02\x02\u024E\x1D\x03\x02\x02" +
		"\x02\u024F\u0250\x05\x04\x03\x02\u0250\u0251\x05 \x11\x02\u0251\u0259" +
		"\x03\x02\x02\x02\u0252\u0253\x05\x0E\b\x02\u0253\u0254\x05 \x11\x02\u0254" +
		"\u0259\x03\x02\x02\x02\u0255\u0256\x05\x1C\x0F\x02\u0256\u0257\x05 \x11" +
		"\x02\u0257\u0259\x03\x02\x02\x02\u0258\u024F\x03\x02\x02\x02\u0258\u0252" +
		"\x03\x02\x02\x02\u0258\u0255\x03\x02\x02\x02\u0259\x1F\x03\x02\x02\x02" +
		"\u025A\u025C\x05\xE6t\x02\u025B\u025A\x03\x02\x02\x02\u025C\u025F\x03" +
		"\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E" +
		"\u0260\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u0260\u0261\x07T\x02" +
		"\x02\u0261\u026C\x07U\x02\x02\u0262\u0264\x05\xE6t\x02\u0263\u0262\x03" +
		"\x02\x02\x02\u0264\u0267\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265" +
		"\u0266\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0265\x03\x02" +
		"\x02\x02\u0268\u0269\x07T\x02\x02\u0269\u026B\x07U\x02\x02\u026A\u0265" +
		"\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02" +
		"\u026C\u026D\x03\x02\x02\x02\u026D!\x03\x02\x02\x02\u026E\u026C\x03\x02" +
		"\x02\x02\u026F\u0271\x05$\x13\x02\u0270\u026F\x03\x02\x02\x02\u0271\u0274" +
		"\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02" +
		"\u0273\u0275\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u0277\x07" +
		"}\x02\x02\u0276\u0278\x05&\x14\x02\u0277\u0276\x03\x02\x02\x02\u0277\u0278" +
		"\x03\x02\x02\x02\u0278#\x03\x02\x02\x02\u0279\u027A\x05\xE6t\x02\u027A" +
		"%\x03\x02\x02\x02\u027B\u027C\x07(\x02\x02\u027C\u0286\x05\x1C\x0F\x02" +
		"\u027D\u027E\x07(\x02\x02\u027E\u0282\x05\x0E\b\x02\u027F\u0281\x05(\x15" +
		"\x02\u0280\u027F\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02\u0282\u0280" +
		"\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02" +
		"\u0284\u0282\x03\x02\x02\x02\u0285\u027B\x03\x02\x02\x02\u0285\u027D\x03" +
		"\x02\x02\x02\u0286\'\x03\x02\x02\x02\u0287\u0288\x07l\x02\x02\u0288\u0289" +
		"\x05\x16\f\x02\u0289)\x03\x02\x02\x02\u028A\u028B\x07[\x02\x02\u028B\u028C" +
		"\x05,\x17\x02\u028C\u028D\x07Z\x02\x02\u028D+\x03\x02\x02\x02\u028E\u0293" +
		"\x05.\x18\x02\u028F\u0290\x07W\x02\x02\u0290\u0292\x05.\x18\x02\u0291" +
		"\u028F\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02" +
		"\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294-\x03\x02\x02\x02\u0295\u0293" +
		"\x03\x02\x02\x02\u0296\u0299\x05\f\x07\x02\u0297\u0299\x050\x19\x02\u0298" +
		"\u0296\x03\x02\x02\x02\u0298\u0297\x03\x02\x02\x02\u0299/\x03\x02\x02" +
		"\x02\u029A\u029C\x05\xE6t\x02\u029B\u029A\x03\x02\x02\x02\u029C\u029F" +
		"\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02" +
		"\u029E\u02A0\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u02A0\u02A2\x07" +
		"^\x02\x02\u02A1\u02A3\x052\x1A\x02\u02A2\u02A1\x03\x02\x02\x02\u02A2\u02A3" +
		"\x03\x02\x02\x02\u02A31\x03\x02\x02\x02\u02A4\u02A5\x07(\x02\x02\u02A5" +
		"\u02A9\x05\f\x07\x02\u02A6\u02A7\x07?\x02\x02\u02A7\u02A9\x05\f\x07\x02" +
		"\u02A8\u02A4\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A93\x03\x02" +
		"\x02\x02\u02AA\u02AB\b\x1B\x01\x02\u02AB\u02AC\x07}\x02\x02\u02AC\u02B2" +
		"\x03\x02\x02\x02\u02AD\u02AE\f\x03\x02\x02\u02AE\u02AF\x07X\x02\x02\u02AF" +
		"\u02B1\x07}\x02\x02\u02B0\u02AD\x03\x02\x02\x02\u02B1\u02B4\x03\x02\x02" +
		"\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B35\x03" +
		"\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5\u02BB\x07}\x02\x02\u02B6" +
		"\u02B7\x058\x1D\x02\u02B7\u02B8\x07X\x02\x02\u02B8\u02B9\x07}\x02\x02" +
		"\u02B9\u02BB\x03\x02\x02\x02\u02BA\u02B5\x03\x02\x02\x02\u02BA\u02B6\x03" +
		"\x02\x02\x02\u02BB7\x03\x02\x02\x02\u02BC\u02BD\b\x1D\x01\x02\u02BD\u02BE" +
		"\x07}\x02\x02\u02BE\u02C4\x03\x02\x02\x02\u02BF\u02C0\f\x03\x02\x02\u02C0" +
		"\u02C1\x07X\x02\x02\u02C1\u02C3\x07}\x02\x02\u02C2\u02BF\x03\x02\x02\x02" +
		"\u02C3\u02C6\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4\u02C5\x03" +
		"\x02\x02\x02\u02C59\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C7" +
		"\u02CD\x07}\x02\x02\u02C8\u02C9\x05> \x02\u02C9\u02CA\x07X\x02\x02\u02CA" +
		"\u02CB\x07}\x02\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02C7\x03\x02\x02" +
		"\x02\u02CC\u02C8\x03\x02\x02\x02\u02CD;\x03\x02\x02\x02\u02CE\u02CF\x07" +
		"}\x02\x02\u02CF=\x03\x02\x02\x02\u02D0\u02D1\b \x01\x02\u02D1\u02D2\x07" +
		"}\x02\x02\u02D2\u02D8\x03\x02\x02\x02\u02D3\u02D4\f\x03\x02\x02\u02D4" +
		"\u02D5\x07X\x02\x02\u02D5\u02D7\x07}\x02\x02\u02D6\u02D3\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u02D7\u02DA\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D8\u02D9" +
		"\x03\x02\x02\x02\u02D9?\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DB" +
		"\u02DD\x05F$\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD\u02E0\x03\x02\x02\x02" +
		"\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E4\x03" +
		"\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02E3\x05\u0100\x81\x02" +
		"\u02E2\u02E1\x03\x02\x02\x02\u02E3\u02E6\x03\x02\x02\x02\u02E4\u02E2\x03" +
		"\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E7\x03\x02\x02\x02\u02E6" +
		"\u02E4\x03\x02\x02\x02\u02E7\u02E8\x07\x02\x02\x03\u02E8A\x03\x02\x02" +
		"\x02\u02E9\u02EB\x05D#\x02\u02EA\u02E9\x03\x02\x02\x02\u02EB\u02EE\x03" +
		"\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED" +
		"\u02EF\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F0\x077\x02" +
		"\x02\u02F0\u02F1\x054\x1B\x02\u02F1\u02F2\x07V\x02\x02\u02F2C\x03\x02" +
		"\x02\x02\u02F3\u02F4\x05\xE6t\x02\u02F4E\x03\x02\x02\x02\u02F5\u02FA\x05" +
		"H%\x02\u02F6\u02FA\x05J&\x02\u02F7\u02FA\x05L\'\x02\u02F8\u02FA\x05N(" +
		"\x02\u02F9\u02F5\x03\x02\x02\x02\u02F9\u02F6\x03\x02\x02\x02\u02F9\u02F7" +
		"\x03\x02\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02FAG\x03\x02\x02\x02\u02FB" +
		"\u02FC\x070\x02\x02\u02FC\u02FD\x056\x1C\x02\u02FD\u02FE\x07V\x02\x02" +
		"\u02FEI\x03\x02\x02\x02\u02FF\u0300\x070\x02\x02\u0300\u0301\x058\x1D" +
		"\x02\u0301\u0302\x07X\x02\x02\u0302\u0303\x07j\x02\x02\u0303\u0304\x07" +
		"V\x02\x02\u0304K\x03\x02\x02\x02\u0305\u0306\x070\x02\x02\u0306\u0307" +
		"\x07=\x02\x02\u0307\u0308\x056\x1C\x02\u0308\u0309\x07X\x02\x02\u0309" +
		"\u030A\x07}\x02\x02\u030A\u030B\x07V\x02\x02\u030BM\x03\x02\x02\x02\u030C" +
		"\u030D\x070\x02\x02\u030D\u030E\x07=\x02\x02\u030E\u030F\x056\x1C\x02" +
		"\u030F\u0310\x07X\x02\x02\u0310\u0311\x07j\x02\x02\u0311\u0312\x07V\x02" +
		"\x02\u0312O\x03\x02\x02\x02\u0313\u0317\x05R*\x02\u0314\u0317\x05\xC6" +
		"d\x02\u0315\u0317\x07V\x02\x02\u0316\u0313\x03\x02\x02\x02\u0316\u0314" +
		"\x03\x02\x02\x02\u0316\u0315\x03\x02\x02\x02\u0317Q\x03\x02\x02\x02\u0318" +
		"\u031B\x05T+\x02\u0319\u031B\x05\xBA^\x02\u031A\u0318\x03\x02\x02\x02" +
		"\u031A\u0319\x03\x02\x02\x02\u031BS\x03\x02\x02\x02\u031C\u031E\x05V," +
		"\x02\u031D\u031C\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F\u031D" +
		"\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x03\x02\x02\x02" +
		"\u0321\u031F\x03\x02\x02\x02\u0322\u0323\x07 \x02\x02\u0323\u0325\x07" +
		"}\x02\x02\u0324\u0326\x05X-\x02\u0325\u0324\x03\x02\x02\x02\u0325\u0326" +
		"\x03\x02\x02\x02\u0326\u0328\x03\x02\x02\x02\u0327\u0329\x05\\/\x02\u0328" +
		"\u0327\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x03\x02" +
		"\x02\x02\u032A\u032C\x05^0\x02\u032B\u032A\x03\x02\x02\x02\u032B\u032C" +
		"\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u032E\x05b2\x02\u032E" +
		"U\x03\x02\x02\x02\u032F\u0338\x05\xE6t\x02\u0330\u0338\x07:\x02\x02\u0331" +
		"\u0338\x079\x02\x02\u0332\u0338\x078\x02\x02\u0333\u0338\x07\x18\x02\x02" +
		"\u0334\u0338\x07=\x02\x02\u0335\u0338\x07)\x02\x02\u0336\u0338\x07>\x02" +
		"\x02\u0337\u032F\x03\x02\x02\x02\u0337\u0330\x03\x02\x02\x02\u0337\u0331" +
		"\x03\x02\x02\x02\u0337\u0332\x03\x02\x02\x02\u0337\u0333\x03\x02\x02\x02" +
		"\u0337\u0334\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0336\x03" +
		"\x02\x02\x02\u0338W\x03\x02\x02\x02\u0339\u033A\x07[\x02\x02\u033A\u033B" +
		"\x05Z.\x02\u033B\u033C\x07Z\x02\x02\u033CY\x03\x02\x02\x02\u033D\u0342" +
		"\x05\"\x12\x02\u033E\u033F\x07W\x02\x02\u033F\u0341\x05\"\x12\x02\u0340" +
		"\u033E\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02\u0342\u0340\x03\x02" +
		"\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343[\x03\x02\x02\x02\u0344\u0342" +
		"\x03\x02\x02\x02\u0345\u0346\x07(\x02\x02\u0346\u0347\x05\x10\t\x02\u0347" +
		"]\x03\x02\x02\x02\u0348\u0349\x07/\x02\x02\u0349\u034A\x05`1\x02\u034A" +
		"_\x03\x02\x02\x02\u034B\u0350\x05\x16\f\x02\u034C\u034D\x07W\x02\x02\u034D" +
		"\u034F\x05\x16\f\x02\u034E\u034C\x03\x02\x02\x02\u034F\u0352\x03\x02\x02" +
		"\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351a\x03" +
		"\x02\x02\x02\u0352\u0350\x03\x02\x02\x02\u0353\u0357\x07R\x02\x02\u0354" +
		"\u0356\x05d3\x02\u0355\u0354\x03\x02\x02\x02\u0356\u0359\x03\x02\x02\x02" +
		"\u0357\u0355\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035A\x03" +
		"\x02\x02\x02\u0359\u0357\x03\x02\x02\x02\u035A\u035B\x07S\x02\x02\u035B" +
		"c\x03\x02\x02\x02\u035C\u0361\x05f4\x02\u035D\u0361\x05\xAAV\x02\u035E" +
		"\u0361\x05\xACW\x02\u035F\u0361\x05\xAEX\x02\u0360\u035C\x03\x02\x02\x02" +
		"\u0360\u035D\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u035F\x03" +
		"\x02\x02\x02\u0361e\x03\x02\x02\x02\u0362\u0368\x05h5\x02\u0363\u0368" +
		"\x05\x8CG\x02\u0364\u0368\x05R*\x02\u0365\u0368\x05\xC6d\x02\u0366\u0368" +
		"\x07V\x02\x02\u0367\u0362\x03\x02\x02\x02\u0367\u0363\x03\x02\x02\x02" +
		"\u0367\u0364\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367\u0366\x03" +
		"\x02\x02\x02\u0368g\x03\x02\x02\x02\u0369\u036B\x05j6\x02\u036A\u0369" +
		"\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02" +
		"\u036C\u036D\x03\x02\x02\x02\u036D\u036F\x03\x02\x02\x02\u036E\u036C\x03" +
		"\x02\x02\x02\u036F\u0370\x05t;\x02\u0370\u0371\x05l7\x02\u0371\u0372\x07" +
		"V\x02\x02\u0372i\x03\x02\x02\x02\u0373\u037C\x05\xE6t\x02\u0374\u037C" +
		"\x07:\x02\x02\u0375\u037C\x079\x02\x02\u0376\u037C\x078\x02\x02\u0377" +
		"\u037C\x07=\x02\x02\u0378\u037C\x07)\x02\x02\u0379\u037C\x07E\x02\x02" +
		"\u037A\u037C\x07H\x02\x02\u037B\u0373\x03\x02\x02\x02\u037B\u0374\x03" +
		"\x02\x02\x02\u037B\u0375\x03\x02\x02\x02\u037B\u0376\x03\x02\x02\x02\u037B" +
		"\u0377\x03\x02\x02\x02\u037B\u0378\x03\x02\x02\x02\u037B\u0379\x03\x02" +
		"\x02\x02\u037B\u037A\x03\x02\x02\x02\u037Ck\x03\x02\x02\x02\u037D\u0382" +
		"\x05n8\x02\u037E\u037F\x07W\x02\x02\u037F\u0381\x05n8\x02\u0380\u037E" +
		"\x03\x02\x02\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02" +
		"\u0382\u0383\x03\x02\x02\x02\u0383m\x03\x02\x02\x02\u0384\u0382\x03\x02" +
		"\x02\x02\u0385\u0388\x05p9\x02\u0386\u0387\x07Y\x02\x02\u0387\u0389\x05" +
		"r:\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389o" +
		"\x03\x02\x02\x02\u038A\u038C\x07}\x02\x02\u038B\u038D\x05 \x11\x02\u038C" +
		"\u038B\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038Dq\x03\x02\x02" +
		"\x02\u038E\u0391\x05\u019E\xD0\x02\u038F\u0391\x05\xF8}\x02\u0390\u038E" +
		"\x03\x02\x02\x02\u0390\u038F\x03\x02\x02\x02\u0391s\x03\x02\x02\x02\u0392" +
		"\u0395\x05v<\x02\u0393\u0395\x05x=\x02\u0394\u0392\x03\x02\x02\x02\u0394" +
		"\u0393\x03\x02\x02\x02\u0395u\x03\x02\x02\x02\u0396\u0399\x05\x06\x04" +
		"\x02\u0397\u0399\x07\x1A\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397" +
		"\x03\x02\x02\x02\u0399w\x03\x02\x02\x02\u039A\u039E\x05z>\x02\u039B\u039E" +
		"\x05\x88E\x02\u039C\u039E\x05\x8AF\x02\u039D\u039A\x03\x02\x02\x02\u039D" +
		"\u039B\x03\x02\x02\x02\u039D\u039C\x03\x02\x02\x02\u039Ey\x03\x02\x02" +
		"\x02\u039F\u03A2\x05\x80A\x02\u03A0\u03A2\x05\x86D\x02\u03A1\u039F\x03" +
		"\x02\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2\u03A7\x03\x02\x02\x02\u03A3" +
		"\u03A6\x05~@\x02\u03A4\u03A6\x05\x84C\x02\u03A5\u03A3\x03\x02\x02\x02" +
		"\u03A5\u03A4\x03\x02\x02\x02\u03A6\u03A9\x03\x02\x02\x02\u03A7\u03A5\x03" +
		"\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8{\x03\x02\x02\x02\u03A9" +
		"\u03A7\x03\x02\x02\x02\u03AA\u03AC\x07}\x02\x02\u03AB\u03AD\x05*\x16\x02" +
		"\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03BB\x03" +
		"\x02\x02\x02\u03AE\u03AF\x05z>\x02\u03AF\u03B3\x07X\x02\x02\u03B0\u03B2" +
		"\x05\xE6t\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02" +
		"\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x03" +
		"\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03B8\x07}\x02\x02\u03B7" +
		"\u03B9\x05*\x16\x02\u03B8\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02" +
		"\x02\u03B9\u03BB\x03\x02\x02\x02\u03BA\u03AA\x03\x02\x02\x02\u03BA\u03AE" +
		"\x03\x02\x02\x02\u03BB}\x03\x02\x02\x02\u03BC\u03C0\x07X\x02\x02\u03BD" +
		"\u03BF\x05\xE6t\x02\u03BE\u03BD\x03\x02\x02\x02\u03BF\u03C2\x03\x02\x02" +
		"\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C3" +
		"\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C3\u03C5\x07}\x02\x02" +
		"\u03C4\u03C6\x05*\x16\x02\u03C5\u03C4\x03\x02\x02\x02\u03C5\u03C6\x03" +
		"\x02\x02\x02\u03C6\x7F\x03\x02\x02\x02\u03C7\u03C9\x07}\x02\x02\u03C8" +
		"\u03CA\x05*\x16\x02\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02" +
		"\x02\u03CA\x81\x03\x02\x02\x02\u03CB\u03CC\x05|?\x02\u03CC\x83\x03\x02" +
		"\x02\x02\u03CD\u03CE\x05~@\x02\u03CE\x85\x03\x02\x02\x02\u03CF\u03D0\x05" +
		"\x80A\x02\u03D0\x87\x03\x02\x02\x02\u03D1\u03D2\x07}\x02\x02\u03D2\x89" +
		"\x03\x02\x02\x02\u03D3\u03D4\x05v<\x02\u03D4\u03D5\x05 \x11\x02\u03D5" +
		"\u03DD\x03\x02\x02\x02\u03D6\u03D7\x05z>\x02\u03D7\u03D8\x05 \x11\x02" +
		"\u03D8\u03DD\x03\x02\x02\x02\u03D9\u03DA\x05\x88E\x02\u03DA\u03DB\x05" +
		" \x11\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03D3\x03\x02\x02\x02\u03DC" +
		"\u03D6\x03\x02\x02\x02\u03DC\u03D9\x03\x02\x02\x02\u03DD\x8B\x03\x02\x02" +
		"\x02\u03DE\u03E0\x05\x8EH\x02\u03DF\u03DE\x03\x02\x02\x02\u03E0\u03E3" +
		"\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02" +
		"\u03E2\u03E4\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02\u03E4\u03E5\x05" +
		"\x90I\x02\u03E5\u03E6\x05\xA8U\x02\u03E6\x8D\x03\x02\x02\x02\u03E7\u03F2" +
		"\x05\xE6t\x02\u03E8\u03F2\x07:\x02\x02\u03E9\u03F2\x079\x02\x02\u03EA" +
		"\u03F2\x078\x02\x02\u03EB\u03F2\x07\x18\x02\x02\u03EC\u03F2\x07=\x02\x02" +
		"\u03ED\u03F2\x07)\x02\x02\u03EE\u03F2\x07A\x02\x02\u03EF\u03F2\x075\x02" +
		"\x02\u03F0\u03F2\x07>\x02\x02\u03F1\u03E7\x03\x02\x02\x02\u03F1\u03E8" +
		"\x03\x02\x02\x02\u03F1\u03E9\x03\x02\x02\x02\u03F1\u03EA\x03\x02\x02\x02" +
		"\u03F1\u03EB\x03\x02\x02\x02\u03F1\u03EC\x03\x02\x02\x02\u03F1\u03ED\x03" +
		"\x02\x02\x02\u03F1\u03EE\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F1" +
		"\u03F0\x03\x02\x02\x02\u03F2\x8F\x03\x02\x02\x02\u03F3\u03F4\x05\x92J" +
		"\x02\u03F4\u03F6\x05\x94K\x02\u03F5\u03F7\x05\xA2R\x02\u03F6\u03F5\x03" +
		"\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u0405\x03\x02\x02\x02\u03F8" +
		"\u03FC\x05X-\x02\u03F9\u03FB\x05\xE6t\x02\u03FA\u03F9\x03\x02\x02\x02" +
		"\u03FB\u03FE\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FC\u03FD\x03" +
		"\x02\x02\x02\u03FD\u03FF\x03\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FF" +
		"\u0400\x05\x92J\x02\u0400\u0402\x05\x94K\x02\u0401\u0403\x05\xA2R\x02" +
		"\u0402\u0401\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0405\x03" +
		"\x02\x02\x02\u0404\u03F3\x03\x02\x02\x02\u0404\u03F8\x03\x02\x02\x02\u0405" +
		"\x91\x03\x02\x02\x02\u0406\u0409\x05t;\x02\u0407\u0409\x07G\x02\x02\u0408" +
		"\u0406\x03\x02\x02\x02\u0408\u0407\x03\x02\x02\x02\u0409\x93\x03\x02\x02" +
		"\x02\u040A\u040B\x07}\x02\x02\u040B\u040D\x07P\x02\x02\u040C\u040E\x05" +
		"\x96L\x02\u040D\u040C\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E" +
		"\u040F\x03\x02\x02\x02\u040F\u0411\x07Q\x02\x02\u0410\u0412\x05 \x11\x02" +
		"\u0411\u0410\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412\x95\x03" +
		"\x02\x02\x02\u0413\u041A\x05\xA0Q\x02\u0414\u0415\x05\x98M\x02\u0415\u0416" +
		"\x07W\x02\x02\u0416\u0417\x05\x9EP\x02\u0417\u041A\x03\x02\x02\x02\u0418" +
		"\u041A\x05\x9EP\x02\u0419\u0413\x03\x02\x02\x02\u0419\u0414\x03\x02\x02" +
		"\x02\u0419\u0418\x03\x02\x02\x02\u041A\x97\x03\x02\x02\x02\u041B\u0420" +
		"\x05\x9AN\x02\u041C\u041D\x07W\x02\x02\u041D\u041F\x05\x9AN\x02\u041E" +
		"\u041C\x03\x02\x02\x02\u041F\u0422\x03\x02\x02\x02\u0420\u041E\x03\x02" +
		"\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u042C\x03\x02\x02\x02\u0422" +
		"\u0420\x03\x02\x02\x02\u0423\u0428\x05\xA0Q\x02\u0424\u0425\x07W\x02\x02" +
		"\u0425\u0427\x05\x9AN\x02\u0426\u0424\x03\x02\x02\x02\u0427\u042A\x03" +
		"\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429" +
		"\u042C\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042B\u041B\x03\x02" +
		"\x02\x02\u042B\u0423\x03\x02\x02\x02\u042C\x99\x03\x02\x02\x02\u042D\u042F" +
		"\x05\x9CO\x02\u042E\u042D\x03\x02\x02\x02\u042F\u0432\x03\x02\x02\x02" +
		"\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0433\x03" +
		"\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0433\u0434\x05t;\x02\u0434\u0435" +
		"\x05p9\x02\u0435\x9B\x03\x02\x02\x02\u0436\u0439\x05\xE6t\x02\u0437\u0439" +
		"\x07)\x02\x02\u0438\u0436\x03\x02\x02\x02\u0438\u0437\x03\x02\x02\x02" +
		"\u0439\x9D\x03\x02\x02\x02\u043A\u043C\x05\x9CO\x02\u043B\u043A\x03\x02" +
		"\x02\x02\u043C\u043F\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043D" +
		"\u043E\x03\x02\x02\x02\u043E\u0440\x03\x02\x02\x02\u043F\u043D\x03\x02" +
		"\x02\x02\u0440\u0444\x05t;\x02\u0441\u0443\x05\xE6t\x02\u0442\u0441\x03" +
		"\x02\x02\x02\u0443\u0446\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0444" +
		"\u0445\x03\x02\x02\x02\u0445\u0447\x03\x02\x02\x02\u0446\u0444\x03\x02" +
		"\x02\x02\u0447\u0448\x07\x7F\x02\x02\u0448\u0449\x05p9\x02\u0449\u044C" +
		"\x03\x02\x02\x02\u044A\u044C\x05\x9AN\x02\u044B\u043D\x03\x02\x02\x02" +
		"\u044B\u044A\x03\x02\x02\x02\u044C\x9F\x03\x02\x02\x02\u044D\u044F\x05" +
		"\xE6t\x02\u044E\u044D\x03\x02\x02\x02\u044F\u0452\x03\x02\x02\x02\u0450" +
		"\u044E\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0453\x03\x02" +
		"\x02\x02\u0452\u0450\x03\x02\x02\x02\u0453\u0456\x05t;\x02\u0454\u0455" +
		"\x07}\x02\x02\u0455\u0457\x07X\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456" +
		"\u0457\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u0459\x07B\x02" +
		"\x02\u0459\xA1\x03\x02\x02\x02\u045A\u045B\x07D\x02\x02\u045B\u045C\x05" +
		"\xA4S\x02\u045C\xA3\x03\x02\x02\x02\u045D\u0462\x05\xA6T\x02\u045E\u045F" +
		"\x07W\x02\x02\u045F\u0461\x05\xA6T\x02\u0460\u045E\x03\x02\x02\x02\u0461" +
		"\u0464\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02\u0462\u0463\x03\x02" +
		"\x02\x02\u0463\xA5\x03\x02\x02\x02\u0464\u0462\x03\x02\x02\x02\u0465\u0468" +
		"\x05\x10\t\x02\u0466\u0468\x05\x1C\x0F\x02\u0467\u0465\x03\x02\x02\x02" +
		"\u0467\u0466\x03\x02\x02\x02\u0468\xA7\x03\x02\x02\x02\u0469\u046C\x05" +
		"\xFC\x7F\x02\u046A\u046C\x07V\x02\x02\u046B\u0469\x03\x02\x02\x02\u046B" +
		"\u046A\x03\x02\x02\x02\u046C\xA9\x03\x02\x02\x02\u046D\u046E\x05\xFC\x7F" +
		"\x02\u046E\xAB\x03\x02\x02\x02\u046F\u0470\x07=\x02\x02\u0470\u0471\x05" +
		"\xFC\x7F\x02\u0471\xAD\x03\x02\x02\x02\u0472\u0474\x05\xB0Y\x02\u0473" +
		"\u0472\x03\x02\x02\x02\u0474\u0477\x03\x02\x02\x02\u0475\u0473\x03\x02" +
		"\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0478\x03\x02\x02\x02\u0477" +
		"\u0475\x03\x02\x02\x02\u0478\u047A\x05\xB2Z\x02\u0479\u047B\x05\xA2R\x02" +
		"\u047A\u0479\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047C\x03" +
		"\x02\x02\x02\u047C\u047D\x05\xB6\\\x02\u047D\xAF\x03\x02\x02\x02\u047E" +
		"\u0483\x05\xE6t\x02\u047F\u0483\x07:\x02\x02\u0480\u0483\x079\x02\x02" +
		"\u0481\u0483\x078\x02\x02\u0482\u047E\x03\x02\x02\x02\u0482\u047F\x03" +
		"\x02\x02\x02\u0482\u0480\x03\x02\x02\x02\u0482\u0481\x03\x02\x02\x02\u0483" +
		"\xB1\x03\x02\x02\x02\u0484\u0486\x05X-\x02\u0485\u0484\x03\x02\x02\x02" +
		"\u0485\u0486\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0488\x05" +
		"\xB4[\x02\u0488\u048A\x07P\x02\x02\u0489\u048B\x05\x96L\x02\u048A\u0489" +
		"\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02" +
		"\u048C\u048D\x07Q\x02\x02\u048D\xB3\x03\x02\x02\x02\u048E\u048F\x07}\x02" +
		"\x02\u048F\xB5\x03\x02\x02\x02\u0490\u0492\x07R\x02\x02\u0491\u0493\x05" +
		"\xB8]\x02\u0492\u0491\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493" +
		"\u0495\x03\x02\x02\x02\u0494\u0496\x05\xFE\x80\x02\u0495\u0494\x03\x02" +
		"\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497" +
		"\u0498\x07S\x02\x02\u0498\xB7\x03\x02\x02\x02\u0499\u049B\x05*\x16\x02" +
		"\u049A\u0499\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049C\x03" +
		"\x02\x02\x02\u049C\u049D\x07B\x02\x02\u049D\u049F\x07P\x02\x02\u049E\u04A0" +
		"\x05\u018E\xC8\x02\u049F\u049E\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02" +
		"\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04A2\x07Q\x02\x02\u04A2\u04C8" +
		"\x07V\x02\x02\u04A3\u04A5\x05*\x16\x02\u04A4\u04A3\x03\x02\x02\x02\u04A4" +
		"\u04A5\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A7\x07?\x02" +
		"\x02\u04A7\u04A9\x07P\x02\x02\u04A8\u04AA\x05\u018E\xC8\x02\u04A9\u04A8" +
		"\x03\x02\x02\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02" +
		"\u04AB\u04AC\x07Q\x02\x02\u04AC\u04C8\x07V\x02\x02\u04AD\u04AE\x05:\x1E" +
		"\x02\u04AE\u04B0\x07X\x02\x02\u04AF\u04B1\x05*\x16\x02\u04B0\u04AF\x03" +
		"\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2" +
		"\u04B3\x07?\x02\x02\u04B3\u04B5\x07P\x02\x02\u04B4\u04B6\x05\u018E\xC8" +
		"\x02\u04B5\u04B4\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02\u04B6\u04B7" +
		"\x03\x02\x02\x02\u04B7\u04B8\x07Q\x02\x02\u04B8\u04B9\x07V\x02\x02\u04B9" +
		"\u04C8\x03\x02\x02\x02\u04BA\u04BB\x05\u0160\xB1\x02\u04BB\u04BD\x07X" +
		"\x02\x02\u04BC\u04BE\x05*\x16\x02\u04BD\u04BC\x03\x02\x02\x02\u04BD\u04BE" +
		"\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C0\x07?\x02\x02" +
		"\u04C0\u04C2\x07P\x02\x02\u04C1\u04C3\x05\u018E\xC8\x02\u04C2\u04C1\x03" +
		"\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4" +
		"\u04C5\x07Q\x02\x02\u04C5\u04C6\x07V\x02\x02\u04C6\u04C8\x03\x02\x02\x02" +
		"\u04C7\u049A\x03\x02\x02\x02\u04C7\u04A4\x03\x02\x02\x02\u04C7\u04AD\x03" +
		"\x02\x02\x02\u04C7\u04BA\x03\x02\x02\x02\u04C8\xB9\x03\x02\x02\x02\u04C9" +
		"\u04CB\x05V,\x02\u04CA\u04C9\x03\x02\x02\x02\u04CB\u04CE\x03\x02\x02\x02" +
		"\u04CC\u04CA\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04CF\x03" +
		"\x02\x02\x02\u04CE\u04CC\x03\x02\x02\x02\u04CF\u04D0\x07\'\x02\x02\u04D0" +
		"\u04D2\x07}\x02\x02\u04D1\u04D3\x05^0\x02\u04D2\u04D1\x03\x02\x02\x02" +
		"\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D5\x05" +
		"\xBC_\x02\u04D5\xBB\x03\x02\x02\x02\u04D6\u04D8\x07R\x02\x02\u04D7\u04D9" +
		"\x05\xBE`\x02\u04D8\u04D7\x03\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02" +
		"\u04D9\u04DB\x03\x02\x02\x02\u04DA\u04DC\x07W\x02\x02\u04DB\u04DA\x03" +
		"\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DE\x03\x02\x02\x02\u04DD" +
		"\u04DF\x05\xC4c\x02\u04DE\u04DD\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02" +
		"\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u04E1\x07S\x02\x02\u04E1\xBD\x03" +
		"\x02\x02\x02\u04E2\u04E7\x05\xC0a\x02\u04E3\u04E4\x07W\x02\x02\u04E4\u04E6" +
		"\x05\xC0a\x02\u04E5\u04E3\x03\x02\x02\x02\u04E6\u04E9\x03\x02\x02\x02" +
		"\u04E7\u04E5\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8\xBF\x03" +
		"\x02\x02\x02\u04E9\u04E7\x03\x02\x02\x02\u04EA\u04EC\x05\xC2b\x02\u04EB" +
		"\u04EA\x03\x02\x02\x02\u04EC\u04EF\x03\x02\x02\x02\u04ED\u04EB\x03\x02" +
		"\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04F0\x03\x02\x02\x02\u04EF" +
		"\u04ED\x03\x02\x02\x02\u04F0\u04F6\x07}\x02\x02\u04F1\u04F3\x07P\x02\x02" +
		"\u04F2\u04F4\x05\u018E\xC8\x02\u04F3\u04F2\x03\x02\x02\x02\u04F3\u04F4" +
		"\x03\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u04F7\x07Q\x02\x02" +
		"\u04F6\u04F1\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04F9\x03" +
		"\x02\x02\x02\u04F8\u04FA\x05b2\x02\u04F9\u04F8\x03\x02\x02\x02\u04F9\u04FA" +
		"\x03\x02\x02\x02\u04FA\xC1\x03\x02\x02\x02\u04FB\u04FC\x05\xE6t\x02\u04FC" +
		"\xC3\x03\x02\x02\x02\u04FD\u0501\x07V\x02\x02\u04FE\u0500\x05d3\x02\u04FF" +
		"\u04FE\x03\x02\x02\x02\u0500\u0503\x03\x02\x02\x02\u0501\u04FF\x03\x02" +
		"\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\xC5\x03\x02\x02\x02\u0503\u0501" +
		"\x03\x02\x02\x02\u0504\u0507\x05\xC8e\x02\u0505\u0507\x05\xDAn\x02\u0506" +
		"\u0504\x03\x02\x02\x02\u0506\u0505\x03\x02\x02\x02\u0507\xC7\x03\x02\x02" +
		"\x02\u0508\u050A\x05\xCAf\x02\u0509\u0508\x03\x02\x02\x02\u050A\u050D" +
		"\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02" +
		"\u050C\u050E\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02\u050E\u050F\x07" +
		"3\x02\x02\u050F\u0511\x07}\x02\x02\u0510\u0512\x05X-\x02\u0511\u0510\x03" +
		"\x02\x02\x02\u0511\u0512\x03\x02\x02\x02\u0512\u0514\x03\x02\x02\x02\u0513" +
		"\u0515\x05\xCCg\x02\u0514\u0513\x03\x02\x02\x02\u0514\u0515\x03\x02\x02" +
		"\x02\u0515\u0516\x03\x02\x02\x02\u0516\u0517\x05\xCEh\x02\u0517\xC9\x03" +
		"\x02\x02\x02\u0518\u0520\x05\xE6t\x02\u0519\u0520\x07:\x02\x02\u051A\u0520" +
		"\x079\x02\x02\u051B\u0520\x078\x02\x02\u051C\u0520\x07\x18\x02\x02\u051D" +
		"\u0520\x07=\x02\x02\u051E\u0520\x07>\x02\x02\u051F\u0518\x03\x02\x02\x02" +
		"\u051F\u0519\x03\x02\x02\x02\u051F\u051A\x03\x02\x02\x02\u051F\u051B\x03" +
		"\x02\x02\x02\u051F\u051C\x03\x02\x02\x02\u051F\u051D\x03\x02\x02\x02\u051F" +
		"\u051E\x03\x02\x02\x02\u0520\xCB\x03\x02\x02\x02\u0521\u0522\x07(\x02" +
		"\x02\u0522\u0523\x05`1\x02\u0523\xCD\x03\x02\x02\x02\u0524\u0528\x07R" +
		"\x02\x02\u0525\u0527\x05\xD0i\x02\u0526\u0525\x03\x02\x02\x02\u0527\u052A" +
		"\x03\x02\x02\x02\u0528\u0526\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02" +
		"\u0529\u052B\x03\x02\x02\x02\u052A\u0528\x03\x02\x02\x02\u052B\u052C\x07" +
		"S\x02\x02\u052C\xCF\x03\x02\x02\x02\u052D\u0533\x05\xD2j\x02\u052E\u0533" +
		"\x05\xD6l\x02\u052F\u0533\x05R*\x02\u0530\u0533\x05\xC6d\x02\u0531\u0533" +
		"\x07V\x02\x02\u0532\u052D\x03\x02\x02\x02\u0532\u052E\x03\x02\x02\x02" +
		"\u0532\u052F\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0532\u0531\x03" +
		"\x02\x02\x02\u0533\xD1\x03\x02\x02\x02\u0534\u0536\x05\xD4k\x02\u0535" +
		"\u0534\x03\x02\x02\x02\u0536\u0539\x03\x02\x02\x02\u0537\u0535\x03\x02" +
		"\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538\u053A\x03\x02\x02\x02\u0539" +
		"\u0537\x03\x02\x02\x02\u053A\u053B\x05t;\x02\u053B\u053C\x05l7\x02\u053C" +
		"\u053D\x07V\x02\x02\u053D\xD3\x03\x02\x02\x02\u053E\u0543\x05\xE6t\x02" +
		"\u053F\u0543\x07:\x02\x02\u0540\u0543\x07=\x02\x02\u0541\u0543\x07)\x02" +
		"\x02\u0542\u053E\x03\x02\x02\x02\u0542\u053F\x03\x02\x02\x02\u0542\u0540" +
		"\x03\x02\x02\x02\u0542\u0541\x03\x02\x02\x02\u0543\xD5\x03\x02\x02\x02" +
		"\u0544\u0546\x05\xD8m\x02\u0545\u0544\x03\x02\x02\x02\u0546\u0549\x03" +
		"\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0547\u0548\x03\x02\x02\x02\u0548" +
		"\u054A\x03\x02\x02\x02\u0549\u0547\x03\x02\x02\x02\u054A\u054B\x05\x90" +
		"I\x02\u054B\u054C\x05\xA8U\x02\u054C\xD7\x03\x02\x02\x02\u054D\u0554\x05" +
		"\xE6t\x02\u054E\u0554\x07:\x02\x02\u054F\u0554\x07\x18\x02\x02\u0550\u0554" +
		"\x07#\x02\x02\u0551\u0554\x07=\x02\x02\u0552\u0554\x07>\x02\x02\u0553" +
		"\u054D\x03\x02\x02\x02\u0553\u054E\x03\x02\x02\x02\u0553\u054F\x03\x02" +
		"\x02\x02\u0553\u0550\x03\x02\x02\x02\u0553\u0551\x03\x02\x02\x02\u0553" +
		"\u0552\x03\x02\x02\x02\u0554\xD9\x03\x02\x02\x02\u0555\u0557\x05\xCAf" +
		"\x02\u0556\u0555\x03\x02\x02\x02\u0557\u055A\x03\x02\x02\x02\u0558\u0556" +
		"\x03\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\u055B\x03\x02\x02\x02" +
		"\u055A\u0558\x03\x02\x02\x02\u055B\u055C\x07~\x02\x02\u055C\u055D\x07" +
		"3\x02\x02\u055D\u055E\x07}\x02\x02\u055E\u055F\x05\xDCo\x02\u055F\xDB" +
		"\x03\x02\x02\x02\u0560\u0564\x07R\x02\x02\u0561\u0563\x05\xDEp\x02\u0562" +
		"\u0561\x03\x02\x02\x02\u0563\u0566\x03\x02\x02\x02\u0564\u0562\x03\x02" +
		"\x02\x02\u0564\u0565\x03\x02\x02\x02\u0565\u0567\x03\x02\x02\x02\u0566" +
		"\u0564\x03\x02\x02\x02\u0567\u0568\x07S\x02\x02\u0568\xDD\x03\x02\x02" +
		"\x02\u0569\u056F\x05\xE0q\x02\u056A\u056F\x05\xD2j\x02\u056B\u056F\x05" +
		"R*\x02\u056C\u056F\x05\xC6d\x02\u056D\u056F\x07V\x02\x02\u056E\u0569\x03" +
		"\x02\x02\x02\u056E\u056A\x03\x02\x02\x02\u056E\u056B\x03\x02\x02\x02\u056E" +
		"\u056C\x03\x02\x02\x02\u056E\u056D\x03\x02\x02\x02\u056F\xDF\x03\x02\x02" +
		"\x02\u0570\u0572\x05\xE2r\x02\u0571\u0570\x03\x02\x02\x02\u0572\u0575" +
		"\x03\x02\x02\x02\u0573\u0571\x03\x02\x02\x02\u0573\u0574\x03\x02\x02\x02" +
		"\u0574\u0576\x03\x02\x02\x02\u0575\u0573\x03\x02\x02\x02\u0576\u0577\x05" +
		"t;\x02\u0577\u0578\x07}\x02\x02\u0578\u0579\x07P\x02\x02\u0579\u057B\x07" +
		"Q\x02\x02\u057A\u057C\x05 \x11\x02\u057B\u057A\x03\x02\x02\x02\u057B\u057C" +
		"\x03\x02\x02\x02\u057C\u057E\x03\x02\x02\x02\u057D";
	private static readonly _serializedATNSegment3: string =
		"\u057F\x05\xE4s\x02\u057E\u057D\x03\x02\x02\x02\u057E\u057F\x03\x02\x02" +
		"\x02\u057F\u0580\x03\x02\x02\x02\u0580\u0581\x07V\x02\x02\u0581\xE1\x03" +
		"\x02\x02\x02\u0582\u0586\x05\xE6t\x02\u0583\u0586\x07:\x02\x02\u0584\u0586" +
		"\x07\x18\x02\x02\u0585\u0582\x03\x02\x02\x02\u0585\u0583\x03\x02\x02\x02" +
		"\u0585\u0584\x03\x02\x02\x02\u0586\xE3\x03\x02\x02\x02\u0587\u0588\x07" +
		"#\x02\x02\u0588\u0589\x05\xEEx\x02\u0589\xE5\x03\x02\x02\x02\u058A\u058E" +
		"\x05\xE8u\x02\u058B\u058E\x05\xF4{\x02\u058C\u058E\x05\xF6|\x02\u058D" +
		"\u058A\x03\x02\x02\x02\u058D\u058B\x03\x02\x02\x02\u058D\u058C\x03\x02" +
		"\x02\x02\u058E\xE7\x03\x02\x02\x02\u058F\u0590\x07~\x02\x02\u0590\u0591" +
		"\x056\x1C\x02\u0591\u0593\x07P\x02\x02\u0592\u0594\x05\xEAv\x02\u0593" +
		"\u0592\x03\x02\x02\x02\u0593\u0594\x03\x02\x02\x02\u0594\u0595\x03\x02" +
		"\x02\x02\u0595\u0596\x07Q\x02\x02\u0596\xE9\x03\x02\x02\x02\u0597\u059C" +
		"\x05\xECw\x02\u0598\u0599\x07W\x02\x02\u0599\u059B\x05\xECw\x02\u059A" +
		"\u0598\x03\x02\x02\x02\u059B\u059E\x03\x02\x02\x02\u059C\u059A\x03\x02" +
		"\x02\x02\u059C\u059D\x03\x02\x02\x02\u059D\xEB\x03\x02\x02\x02\u059E\u059C" +
		"\x03\x02\x02\x02\u059F\u05A0\x07}\x02\x02\u05A0\u05A1\x07Y\x02\x02\u05A1" +
		"\u05A2\x05\xEEx\x02\u05A2\xED\x03\x02\x02\x02\u05A3\u05A7\x05\u01B0\xD9" +
		"\x02\u05A4\u05A7\x05\xF0y\x02\u05A5\u05A7\x05\xE6t\x02\u05A6\u05A3\x03" +
		"\x02\x02\x02\u05A6\u05A4\x03\x02\x02\x02\u05A6\u05A5\x03\x02\x02\x02\u05A7" +
		"\xEF\x03\x02\x02\x02\u05A8\u05AA\x07R\x02\x02\u05A9\u05AB\x05\xF2z\x02" +
		"\u05AA\u05A9\x03\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AD\x03" +
		"\x02\x02\x02\u05AC\u05AE\x07W\x02\x02\u05AD\u05AC\x03\x02\x02\x02\u05AD" +
		"\u05AE\x03\x02\x02\x02\u05AE\u05AF\x03\x02\x02\x02\u05AF\u05B0\x07S\x02" +
		"\x02\u05B0\xF1\x03\x02\x02\x02\u05B1\u05B6\x05\xEEx\x02\u05B2\u05B3\x07" +
		"W\x02\x02\u05B3\u05B5\x05\xEEx\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5\u05B8" +
		"\x03\x02\x02\x02\u05B6\u05B4\x03\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02" +
		"\u05B7\xF3\x03\x02\x02\x02\u05B8\u05B6\x03\x02\x02\x02\u05B9\u05BA\x07" +
		"~\x02\x02\u05BA\u05BB\x056\x1C\x02\u05BB\xF5\x03\x02\x02\x02\u05BC\u05BD" +
		"\x07~\x02\x02\u05BD\u05BE\x056\x1C\x02\u05BE\u05BF\x07P\x02\x02\u05BF" +
		"\u05C0\x05\xEEx\x02\u05C0\u05C1\x07Q\x02\x02\u05C1\xF7\x03\x02\x02\x02" +
		"\u05C2\u05C4\x07R\x02\x02\u05C3\u05C5\x05\xFA~\x02\u05C4\u05C3\x03\x02" +
		"\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5\u05C7\x03\x02\x02\x02\u05C6" +
		"\u05C8\x07W\x02\x02\u05C7\u05C6\x03\x02\x02\x02\u05C7\u05C8\x03\x02\x02" +
		"\x02\u05C8\u05C9\x03\x02\x02\x02\u05C9\u05CA\x07S\x02\x02\u05CA\xF9\x03" +
		"\x02\x02\x02\u05CB\u05D0\x05r:\x02\u05CC\u05CD\x07W\x02\x02\u05CD\u05CF" +
		"\x05r:\x02\u05CE\u05CC\x03\x02\x02\x02\u05CF\u05D2\x03\x02\x02\x02\u05D0" +
		"\u05CE\x03\x02\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1\xFB\x03\x02\x02" +
		"\x02\u05D2\u05D0\x03\x02\x02\x02\u05D3\u05D5\x07R\x02\x02\u05D4\u05D6" +
		"\x05\xFE\x80\x02\u05D5\u05D4\x03\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02" +
		"\u05D6\u05D7\x03\x02\x02\x02\u05D7\u05D8\x07S\x02\x02\u05D8\xFD\x03\x02" +
		"\x02\x02\u05D9\u05DB\x05\u0100\x81\x02\u05DA\u05D9\x03\x02\x02\x02\u05DB" +
		"\u05DC\x03\x02\x02\x02\u05DC\u05DA\x03\x02\x02\x02\u05DC\u05DD\x03\x02" +
		"\x02\x02\u05DD\xFF\x03\x02\x02\x02\u05DE\u05E3\x05\u0102\x82\x02\u05DF" +
		"\u05E3\x05R*\x02\u05E0\u05E3\x05\u0106\x84\x02\u05E1\u05E3\x05\x8CG\x02" +
		"\u05E2\u05DE\x03\x02\x02\x02\u05E2\u05DF\x03\x02\x02\x02\u05E2\u05E0\x03" +
		"\x02\x02\x02\u05E2\u05E1\x03\x02\x02\x02\u05E3\u0101\x03\x02\x02\x02\u05E4" +
		"\u05E5\x05\u0104\x83\x02\u05E5\u05E6\x07V\x02\x02\u05E6\u0103\x03\x02" +
		"\x02\x02\u05E7\u05E9\x05\x9CO\x02\u05E8\u05E7\x03\x02\x02\x02\u05E9\u05EC" +
		"\x03\x02\x02\x02\u05EA\u05E8\x03\x02\x02\x02\u05EA\u05EB\x03\x02\x02\x02" +
		"\u05EB\u05ED\x03\x02\x02\x02\u05EC\u05EA\x03\x02\x02\x02\u05ED\u05EE\x05" +
		"t;\x02\u05EE\u05EF\x05l7\x02\u05EF\u0105\x03\x02\x02\x02\u05F0\u05F7\x05" +
		"\u010A\x86\x02\u05F1\u05F7\x05\u010E\x88\x02\u05F2\u05F7\x05\u0116\x8C" +
		"\x02\u05F3\u05F7\x05\u0118\x8D\x02\u05F4\u05F7\x05\u012A\x96\x02\u05F5" +
		"\u05F7\x05\u0130\x99\x02\u05F6\u05F0\x03\x02\x02\x02\u05F6\u05F1\x03\x02" +
		"\x02\x02\u05F6\u05F2\x03\x02\x02\x02\u05F6\u05F3\x03\x02\x02\x02\u05F6" +
		"\u05F4\x03\x02\x02\x02\u05F6\u05F5\x03\x02\x02\x02\u05F7\u0107\x03\x02" +
		"\x02\x02\u05F8\u05FE\x05\u010A\x86\x02\u05F9\u05FE\x05\u0110\x89\x02\u05FA" +
		"\u05FE\x05\u011A\x8E\x02\u05FB\u05FE\x05\u012C\x97\x02\u05FC\u05FE\x05" +
		"\u0132\x9A\x02\u05FD\u05F8\x03\x02\x02\x02\u05FD\u05F9\x03\x02\x02\x02" +
		"\u05FD\u05FA\x03\x02\x02\x02\u05FD\u05FB\x03\x02\x02\x02\u05FD\u05FC\x03" +
		"\x02\x02\x02\u05FE\u0109\x03\x02\x02\x02\u05FF\u060C\x05\xFC\x7F\x02\u0600" +
		"\u060C\x05\u010C\x87\x02\u0601\u060C\x05\u0112\x8A\x02\u0602\u060C\x05" +
		"\u011C\x8F\x02\u0603\u060C\x05\u011E\x90\x02\u0604\u060C\x05\u012E\x98" +
		"\x02\u0605\u060C\x05\u0142\xA2\x02\u0606\u060C\x05\u0144\xA3\x02\u0607" +
		"\u060C\x05\u0146\xA4\x02\u0608\u060C\x05\u014A\xA6\x02\u0609\u060C\x05" +
		"\u0148\xA5\x02\u060A\u060C\x05\u014C\xA7\x02\u060B\u05FF\x03\x02\x02\x02" +
		"\u060B\u0600\x03\x02\x02\x02\u060B\u0601\x03\x02\x02\x02\u060B\u0602\x03" +
		"\x02\x02\x02\u060B\u0603\x03\x02\x02\x02\u060B\u0604\x03\x02\x02\x02\u060B" +
		"\u0605\x03\x02\x02\x02\u060B\u0606\x03\x02\x02\x02\u060B\u0607\x03\x02" +
		"\x02\x02\u060B\u0608\x03\x02\x02\x02\u060B\u0609\x03\x02\x02\x02\u060B" +
		"\u060A\x03\x02\x02\x02\u060C\u010B\x03\x02\x02\x02\u060D\u060E\x07V\x02" +
		"\x02\u060E\u010D\x03\x02\x02\x02\u060F\u0610\x07}\x02\x02\u0610\u0611" +
		"\x07_\x02\x02\u0611\u0612\x05\u0106\x84\x02\u0612\u010F\x03\x02\x02\x02" +
		"\u0613\u0614\x07}\x02\x02\u0614\u0615\x07_\x02\x02\u0615\u0616\x05\u0108" +
		"\x85\x02\u0616\u0111\x03\x02\x02\x02\u0617\u0618\x05\u0114\x8B\x02\u0618" +
		"\u0619\x07V\x02\x02\u0619\u0113\x03\x02\x02\x02\u061A\u0622\x05\u01AA" +
		"\xD6\x02\u061B\u0622\x05\u01C8\xE5\x02\u061C\u0622\x05\u01CA\xE6\x02\u061D" +
		"\u0622\x05\u01D0\xE9\x02\u061E\u0622\x05\u01D4\xEB\x02\u061F\u0622\x05" +
		"\u0188\xC5\x02\u0620\u0622\x05\u0174\xBB\x02\u0621\u061A\x03\x02\x02\x02" +
		"\u0621\u061B\x03\x02\x02\x02\u0621\u061C\x03\x02\x02\x02\u0621\u061D\x03" +
		"\x02\x02\x02\u0621\u061E\x03\x02\x02\x02\u0621\u061F\x03\x02\x02\x02\u0621" +
		"\u0620\x03\x02\x02\x02\u0622\u0115\x03\x02\x02\x02\u0623\u0624\x07-\x02" +
		"\x02\u0624\u0625\x07P\x02\x02\u0625\u0626\x05\u019E\xD0\x02\u0626\u0627" +
		"\x07Q\x02\x02\u0627\u0628\x05\u0106\x84\x02\u0628\u0117\x03\x02\x02\x02" +
		"\u0629\u062A\x07-\x02\x02\u062A\u062B\x07P\x02\x02\u062B\u062C\x05\u019E" +
		"\xD0\x02\u062C\u062D\x07Q\x02\x02\u062D\u062E\x05\u0108\x85\x02\u062E" +
		"\u062F\x07&\x02\x02\u062F\u0630\x05\u0106\x84\x02\u0630\u0119\x03\x02" +
		"\x02\x02\u0631\u0632\x07-\x02\x02\u0632\u0633\x07P\x02\x02\u0633\u0634" +
		"\x05\u019E\xD0\x02\u0634\u0635\x07Q\x02\x02\u0635\u0636\x05\u0108\x85" +
		"\x02\u0636\u0637\x07&\x02\x02\u0637\u0638\x05\u0108\x85\x02\u0638\u011B" +
		"\x03\x02\x02\x02\u0639\u063A\x07\x19\x02\x02\u063A\u063B\x05\u019E\xD0" +
		"\x02\u063B\u063C\x07V\x02\x02\u063C\u0644\x03\x02\x02\x02\u063D\u063E" +
		"\x07\x19\x02\x02\u063E\u063F\x05\u019E\xD0\x02\u063F\u0640\x07_\x02\x02" +
		"\u0640\u0641\x05\u019E\xD0\x02\u0641\u0642\x07V\x02\x02\u0642\u0644\x03" +
		"\x02\x02\x02\u0643\u0639\x03\x02\x02\x02\u0643\u063D\x03\x02\x02\x02\u0644" +
		"\u011D\x03\x02\x02\x02\u0645\u0646\x07@\x02\x02\u0646\u0647\x07P\x02\x02" +
		"\u0647\u0648\x05\u019E\xD0\x02\u0648\u0649\x07Q\x02\x02\u0649\u064A\x05" +
		"\u0120\x91\x02\u064A\u011F\x03\x02\x02\x02\u064B\u064F\x07R\x02\x02\u064C" +
		"\u064E\x05\u0122\x92\x02\u064D\u064C\x03\x02\x02\x02\u064E\u0651\x03\x02" +
		"\x02\x02\u064F\u064D\x03\x02\x02\x02\u064F\u0650\x03\x02\x02\x02\u0650" +
		"\u0655\x03\x02\x02\x02\u0651\u064F\x03\x02\x02\x02\u0652\u0654\x05\u0126" +
		"\x94\x02\u0653\u0652\x03\x02\x02\x02\u0654\u0657\x03\x02\x02\x02\u0655" +
		"\u0653\x03\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\u0658\x03\x02" +
		"\x02\x02\u0657\u0655\x03\x02\x02\x02\u0658\u0659\x07S\x02\x02\u0659\u0121" +
		"\x03\x02\x02\x02\u065A\u065B\x05\u0124\x93\x02\u065B\u065C\x05\xFE\x80" +
		"\x02\u065C\u0123\x03\x02\x02\x02\u065D\u0661\x05\u0126\x94\x02\u065E\u0660" +
		"\x05\u0126\x94\x02\u065F\u065E\x03\x02\x02\x02\u0660\u0663\x03\x02\x02" +
		"\x02\u0661\u065F\x03\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\u0125" +
		"\x03\x02\x02\x02\u0663\u0661\x03\x02\x02\x02\u0664\u0665\x07\x1D\x02\x02" +
		"\u0665\u0666\x05\u019C\xCF\x02\u0666\u0667\x07_\x02\x02\u0667\u066F\x03" +
		"\x02\x02\x02\u0668\u0669\x07\x1D\x02\x02\u0669\u066A\x05\u0128\x95\x02" +
		"\u066A\u066B\x07_\x02\x02\u066B\u066F\x03\x02\x02\x02\u066C\u066D\x07" +
		"#\x02\x02\u066D\u066F\x07_\x02\x02\u066E\u0664\x03\x02\x02\x02\u066E\u0668" +
		"\x03\x02\x02\x02\u066E\u066C\x03\x02\x02\x02\u066F\u0127\x03\x02\x02\x02" +
		"\u0670\u0671\x07}\x02\x02\u0671\u0129\x03\x02\x02\x02\u0672\u0673\x07" +
		"I\x02\x02\u0673\u0674\x07P\x02\x02\u0674\u0675\x05\u019E\xD0\x02\u0675" +
		"\u0676\x07Q\x02\x02\u0676\u0677\x05\u0106\x84\x02\u0677\u012B\x03\x02" +
		"\x02\x02\u0678\u0679\x07I\x02\x02\u0679\u067A\x07P\x02\x02\u067A\u067B" +
		"\x05\u019E\xD0\x02\u067B\u067C\x07Q\x02\x02\u067C\u067D\x05\u0108\x85" +
		"\x02\u067D\u012D\x03\x02\x02\x02\u067E\u067F\x07$\x02\x02\u067F\u0680" +
		"\x05\u0106\x84\x02\u0680\u0681\x07I\x02\x02\u0681\u0682\x07P\x02\x02\u0682" +
		"\u0683\x05\u019E\xD0\x02\u0683\u0684\x07Q\x02\x02\u0684\u0685\x07V\x02" +
		"\x02\u0685\u012F\x03\x02\x02\x02\u0686\u0689\x05\u0134\x9B\x02\u0687\u0689" +
		"\x05\u013E\xA0\x02\u0688\u0686\x03\x02\x02\x02\u0688\u0687\x03\x02\x02" +
		"\x02\u0689\u0131\x03\x02\x02\x02\u068A\u068D\x05\u0136\x9C\x02\u068B\u068D" +
		"\x05\u0140\xA1\x02\u068C\u068A\x03\x02\x02\x02\u068C\u068B\x03\x02\x02" +
		"\x02\u068D\u0133\x03\x02\x02\x02\u068E\u068F\x07,\x02\x02\u068F\u0691" +
		"\x07P\x02\x02\u0690\u0692\x05\u0138\x9D\x02\u0691\u0690\x03\x02\x02\x02" +
		"\u0691\u0692\x03\x02\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693\u0695\x07" +
		"V\x02\x02\u0694\u0696\x05\u019E\xD0\x02\u0695\u0694\x03\x02\x02\x02\u0695" +
		"\u0696\x03\x02\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697\u0699\x07V\x02" +
		"\x02\u0698\u069A\x05\u013A\x9E\x02\u0699\u0698\x03\x02\x02\x02\u0699\u069A" +
		"\x03\x02\x02\x02\u069A\u069B\x03\x02\x02\x02\u069B\u069C\x07Q\x02\x02" +
		"\u069C\u069D\x05\u0106\x84\x02\u069D\u0135\x03\x02\x02\x02\u069E\u069F" +
		"\x07,\x02\x02\u069F\u06A1\x07P\x02\x02\u06A0\u06A2\x05\u0138\x9D\x02\u06A1" +
		"\u06A0\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2\u06A3\x03\x02" +
		"\x02\x02\u06A3\u06A5\x07V\x02\x02\u06A4\u06A6\x05\u019E\xD0\x02\u06A5" +
		"\u06A4\x03\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02\u06A6\u06A7\x03\x02" +
		"\x02\x02\u06A7\u06A9\x07V\x02\x02\u06A8\u06AA\x05\u013A\x9E\x02\u06A9" +
		"\u06A8\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AB\x03\x02" +
		"\x02\x02\u06AB\u06AC\x07Q\x02\x02\u06AC\u06AD\x05\u0108\x85\x02\u06AD" +
		"\u0137\x03\x02\x02\x02\u06AE\u06B1\x05\u013C\x9F\x02\u06AF\u06B1\x05\u0104" +
		"\x83\x02\u06B0\u06AE\x03\x02\x02\x02\u06B0\u06AF\x03\x02\x02\x02\u06B1" +
		"\u0139\x03\x02\x02\x02\u06B2\u06B3\x05\u013C\x9F\x02\u06B3\u013B\x03\x02" +
		"\x02\x02\u06B4\u06B9\x05\u0114\x8B\x02\u06B5\u06B6\x07W\x02\x02\u06B6" +
		"\u06B8\x05\u0114\x8B\x02\u06B7\u06B5\x03\x02\x02\x02\u06B8\u06BB\x03\x02" +
		"\x02\x02\u06B9\u06B7\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA" +
		"\u013D\x03\x02\x02\x02\u06BB\u06B9\x03\x02\x02\x02\u06BC\u06BD\x07,\x02" +
		"\x02\u06BD\u06C1\x07P\x02\x02\u06BE\u06C0\x05\x9CO\x02\u06BF\u06BE\x03" +
		"\x02\x02\x02\u06C0\u06C3\x03\x02\x02\x02\u06C1\u06BF\x03\x02\x02\x02\u06C1" +
		"\u06C2\x03\x02\x02\x02\u06C2\u06C4\x03\x02\x02\x02\u06C3\u06C1\x03\x02" +
		"\x02\x02\u06C4\u06C5\x05t;\x02\u06C5\u06C6\x05p9\x02\u06C6\u06C7\x07_" +
		"\x02\x02\u06C7\u06C8\x05\u019E\xD0\x02\u06C8\u06C9\x07Q\x02\x02\u06C9" +
		"\u06CA\x05\u0106\x84\x02\u06CA\u013F\x03\x02\x02\x02\u06CB\u06CC\x07," +
		"\x02\x02\u06CC\u06D0\x07P\x02\x02\u06CD\u06CF\x05\x9CO\x02\u06CE\u06CD" +
		"\x03\x02\x02\x02\u06CF\u06D2\x03\x02\x02\x02\u06D0\u06CE\x03\x02\x02\x02" +
		"\u06D0\u06D1\x03\x02\x02\x02\u06D1\u06D3\x03\x02\x02\x02\u06D2\u06D0\x03" +
		"\x02\x02\x02\u06D3\u06D4\x05t;\x02\u06D4\u06D5\x05p9\x02\u06D5\u06D6\x07" +
		"_\x02\x02\u06D6\u06D7\x05\u019E\xD0\x02\u06D7\u06D8\x07Q\x02\x02\u06D8" +
		"\u06D9\x05\u0108\x85\x02\u06D9\u0141\x03\x02\x02\x02\u06DA\u06DC\x07\x1B" +
		"\x02\x02\u06DB\u06DD\x07}\x02\x02\u06DC\u06DB\x03\x02\x02\x02\u06DC\u06DD" +
		"\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06DF\x07V\x02\x02" +
		"\u06DF\u0143\x03\x02\x02\x02\u06E0\u06E2\x07\"\x02\x02\u06E1\u06E3\x07" +
		"}\x02\x02\u06E2\u06E1\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3" +
		"\u06E4\x03\x02\x02\x02\u06E4\u06E5\x07V\x02\x02\u06E5\u0145\x03\x02\x02" +
		"\x02\u06E6\u06E8\x07;\x02\x02\u06E7\u06E9\x05\u019E\xD0\x02\u06E8\u06E7" +
		"\x03\x02\x02\x02\u06E8\u06E9\x03\x02\x02\x02\u06E9\u06EA\x03\x02\x02\x02" +
		"\u06EA\u06EB\x07V\x02\x02\u06EB\u0147\x03\x02\x02\x02\u06EC\u06ED\x07" +
		"C\x02\x02\u06ED\u06EE\x05\u019E\xD0\x02\u06EE\u06EF\x07V\x02\x02\u06EF" +
		"\u0149\x03\x02\x02\x02\u06F0\u06F1\x07A\x02\x02\u06F1\u06F2\x07P\x02\x02" +
		"\u06F2\u06F3\x05\u019E\xD0\x02\u06F3\u06F4\x07Q\x02\x02\u06F4\u06F5\x05" +
		"\xFC\x7F\x02\u06F5\u014B\x03\x02\x02\x02\u06F6\u06F7\x07F\x02\x02\u06F7" +
		"\u06F8\x05\xFC\x7F\x02\u06F8\u06F9\x05\u014E\xA8\x02\u06F9\u0703\x03\x02" +
		"\x02\x02\u06FA\u06FB\x07F\x02\x02\u06FB\u06FD\x05\xFC\x7F\x02\u06FC\u06FE" +
		"\x05\u014E\xA8\x02\u06FD\u06FC\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02" +
		"\x02\u06FE\u06FF\x03\x02\x02\x02\u06FF\u0700\x05\u0156\xAC\x02\u0700\u0703" +
		"\x03\x02\x02\x02\u0701\u0703\x05\u0158\xAD\x02\u0702\u06F6\x03\x02\x02" +
		"\x02\u0702\u06FA\x03\x02\x02\x02\u0702\u0701\x03\x02\x02\x02\u0703\u014D" +
		"\x03\x02\x02\x02\u0704\u0708\x05\u0150\xA9\x02\u0705\u0707\x05\u0150\xA9" +
		"\x02\u0706\u0705\x03\x02\x02\x02\u0707\u070A\x03\x02\x02\x02\u0708\u0706" +
		"\x03\x02\x02\x02\u0708\u0709\x03\x02\x02\x02\u0709\u014F\x03\x02\x02\x02" +
		"\u070A\u0708\x03\x02\x02\x02\u070B\u070C\x07\x1E\x02\x02\u070C\u070D\x07" +
		"P\x02\x02\u070D\u070E\x05\u0152\xAA\x02\u070E\u070F\x07Q\x02\x02\u070F" +
		"\u0710\x05\xFC\x7F\x02\u0710\u0151\x03\x02\x02\x02\u0711\u0713\x05\x9C" +
		"O\x02\u0712\u0711\x03\x02\x02\x02\u0713\u0716\x03\x02\x02\x02\u0714\u0712" +
		"\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02\u0715\u0717\x03\x02\x02\x02" +
		"\u0716\u0714\x03\x02\x02\x02\u0717\u0718\x05\u0154\xAB\x02\u0718\u0719" +
		"\x05p9\x02\u0719\u0153\x03\x02\x02\x02\u071A\u071F\x05|?\x02\u071B\u071C" +
		"\x07m\x02\x02\u071C\u071E\x05\x10\t\x02\u071D\u071B\x03\x02\x02\x02\u071E" +
		"\u0721\x03\x02\x02\x02\u071F\u071D\x03\x02\x02\x02\u071F\u0720\x03\x02" +
		"\x02\x02\u0720\u0155\x03\x02\x02\x02\u0721\u071F\x03\x02\x02\x02\u0722" +
		"\u0723\x07*\x02\x02\u0723\u0724\x05\xFC\x7F\x02\u0724\u0157\x03\x02\x02" +
		"\x02\u0725\u0726\x07F\x02\x02\u0726\u0727\x05\u015A\xAE\x02\u0727\u0729" +
		"\x05\xFC\x7F\x02\u0728\u072A\x05\u014E\xA8\x02\u0729\u0728\x03\x02\x02" +
		"\x02\u0729\u072A\x03\x02\x02\x02\u072A\u072C\x03\x02\x02\x02\u072B\u072D" +
		"\x05\u0156\xAC\x02\u072C\u072B\x03\x02\x02\x02\u072C\u072D\x03\x02\x02" +
		"\x02\u072D\u0159\x03\x02\x02\x02\u072E\u072F\x07P\x02\x02\u072F\u0731" +
		"\x05\u015C\xAF\x02\u0730\u0732\x07V\x02\x02\u0731\u0730\x03\x02\x02\x02" +
		"\u0731\u0732\x03\x02\x02\x02\u0732\u0733\x03\x02\x02\x02\u0733\u0734\x07" +
		"Q\x02\x02\u0734\u015B\x03\x02\x02\x02\u0735\u073A\x05\u015E\xB0\x02\u0736" +
		"\u0737\x07V\x02\x02\u0737\u0739\x05\u015E\xB0\x02\u0738\u0736\x03\x02" +
		"\x02\x02\u0739\u073C\x03\x02\x02\x02\u073A\u0738\x03\x02\x02\x02\u073A" +
		"\u073B\x03\x02\x02\x02\u073B\u015D\x03\x02\x02\x02\u073C\u073A\x03\x02" +
		"\x02\x02\u073D\u073F\x05\x9CO\x02\u073E\u073D\x03\x02\x02\x02\u073F\u0742" +
		"\x03\x02\x02\x02\u0740\u073E\x03\x02\x02\x02\u0740\u0741\x03\x02\x02\x02" +
		"\u0741\u0743\x03\x02\x02\x02\u0742\u0740\x03\x02\x02\x02\u0743\u0744\x05" +
		"t;\x02\u0744\u0745\x05p9\x02\u0745\u0746\x07Y\x02\x02\u0746\u0747\x05" +
		"\u019E\xD0\x02\u0747\u015F\x03\x02\x02\x02\u0748\u074B\x05\u016E\xB8\x02" +
		"\u0749\u074B\x05\u0196\xCC\x02\u074A\u0748\x03\x02\x02\x02\u074A\u0749" +
		"\x03\x02\x02\x02\u074B\u074F\x03\x02\x02\x02\u074C\u074E\x05\u0168\xB5" +
		"\x02\u074D\u074C\x03\x02\x02\x02\u074E\u0751\x03\x02\x02\x02\u074F\u074D" +
		"\x03\x02\x02\x02\u074F\u0750\x03\x02\x02\x02\u0750\u0161\x03\x02\x02\x02" +
		"\u0751\u074F\x03\x02\x02\x02\u0752\u0770\x05\x02\x02\x02\u0753\u0758\x05" +
		"6\x1C\x02\u0754\u0755\x07T\x02\x02\u0755\u0757\x07U\x02\x02\u0756\u0754" +
		"\x03\x02\x02\x02\u0757\u075A\x03\x02\x02\x02\u0758\u0756\x03\x02\x02\x02" +
		"\u0758\u0759\x03\x02\x02\x02\u0759\u075B\x03\x02\x02\x02\u075A\u0758\x03" +
		"\x02\x02\x02\u075B\u075C\x07X\x02\x02\u075C\u075D\x07 \x02\x02\u075D\u0770" +
		"\x03\x02\x02\x02\u075E\u075F\x07G\x02\x02\u075F\u0760\x07X\x02\x02\u0760" +
		"\u0770\x07 \x02\x02\u0761\u0770\x07B\x02\x02\u0762\u0763\x056\x1C\x02" +
		"\u0763\u0764\x07X\x02\x02\u0764\u0765\x07B\x02\x02\u0765\u0770\x03\x02" +
		"\x02\x02\u0766\u0767\x07P\x02\x02\u0767\u0768\x05\u019E\xD0\x02\u0768" +
		"\u0769\x07Q\x02\x02\u0769\u0770\x03\x02\x02\x02\u076A\u0770\x05\u0174" +
		"\xBB\x02\u076B\u0770\x05\u017C\xBF\x02\u076C\u0770\x05\u0182\xC2\x02\u076D" +
		"\u0770\x05\u0188\xC5\x02\u076E\u0770\x05\u0190\xC9\x02\u076F\u0752\x03" +
		"\x02\x02\x02\u076F\u0753\x03\x02\x02\x02\u076F\u075E\x03\x02\x02\x02\u076F" +
		"\u0761\x03\x02\x02\x02\u076F\u0762\x03\x02\x02\x02\u076F\u0766\x03\x02" +
		"\x02\x02\u076F\u076A\x03\x02\x02\x02\u076F\u076B\x03\x02\x02\x02\u076F" +
		"\u076C\x03\x02\x02\x02\u076F\u076D\x03\x02\x02\x02\u076F\u076E\x03\x02" +
		"\x02\x02\u0770\u0163\x03\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772" +
		"\u0165\x03\x02\x02\x02\u0773\u0790\x05\x02\x02\x02\u0774\u0779\x056\x1C" +
		"\x02\u0775\u0776\x07T\x02\x02\u0776\u0778\x07U\x02\x02\u0777\u0775\x03" +
		"\x02\x02\x02\u0778\u077B\x03\x02\x02\x02\u0779\u0777\x03\x02\x02\x02\u0779" +
		"\u077A\x03\x02\x02\x02\u077A\u077C\x03\x02\x02\x02\u077B\u0779\x03\x02" +
		"\x02\x02\u077C\u077D\x07X\x02\x02\u077D\u077E\x07 \x02\x02\u077E\u0790" +
		"\x03\x02\x02\x02\u077F\u0780\x07G\x02\x02\u0780\u0781\x07X\x02\x02\u0781" +
		"\u0790\x07 \x02\x02\u0782\u0790\x07B\x02\x02\u0783\u0784\x056\x1C\x02" +
		"\u0784\u0785\x07X\x02\x02\u0785\u0786\x07B\x02\x02\u0786\u0790\x03\x02" +
		"\x02\x02\u0787\u0788\x07P\x02\x02\u0788\u0789\x05\u019E\xD0\x02\u0789" +
		"\u078A\x07Q\x02\x02\u078A\u0790\x03\x02\x02\x02\u078B\u0790\x05\u0174" +
		"\xBB\x02\u078C\u0790\x05\u017C\xBF\x02\u078D\u0790\x05\u0188\xC5\x02\u078E" +
		"\u0790\x05\u0190\xC9\x02\u078F\u0773\x03\x02\x02\x02\u078F\u0774\x03\x02" +
		"\x02\x02\u078F\u077F\x03\x02\x02\x02\u078F\u0782\x03\x02\x02\x02\u078F" +
		"\u0783\x03\x02\x02\x02\u078F\u0787\x03\x02\x02\x02\u078F\u078B\x03\x02" +
		"\x02\x02\u078F\u078C\x03\x02\x02\x02\u078F\u078D\x03\x02\x02\x02\u078F" +
		"\u078E\x03\x02\x02\x02\u0790\u0167\x03\x02\x02\x02\u0791\u0797\x05\u0176" +
		"\xBC\x02\u0792\u0797\x05\u017E\xC0\x02\u0793\u0797\x05\u0184\xC3\x02\u0794" +
		"\u0797\x05\u018A\xC6\x02\u0795\u0797\x05\u0192\xCA\x02\u0796\u0791\x03" +
		"\x02\x02\x02\u0796\u0792\x03\x02\x02\x02\u0796\u0793\x03\x02\x02\x02\u0796" +
		"\u0794\x03\x02\x02\x02\u0796\u0795\x03\x02\x02\x02\u0797\u0169\x03\x02" +
		"\x02\x02\u0798\u0799\x03\x02\x02\x02\u0799\u016B\x03\x02\x02\x02\u079A" +
		"\u079F\x05\u0176\xBC\x02\u079B\u079F\x05\u017E\xC0\x02\u079C\u079F\x05" +
		"\u018A\xC6\x02\u079D\u079F\x05\u0192\xCA\x02\u079E\u079A\x03\x02\x02\x02" +
		"\u079E\u079B\x03\x02\x02\x02\u079E\u079C\x03\x02\x02\x02\u079E\u079D\x03" +
		"\x02\x02\x02\u079F\u016D\x03\x02\x02\x02\u07A0\u07C9\x05\x02\x02\x02\u07A1" +
		"\u07A6\x056\x1C\x02\u07A2\u07A3\x07T\x02\x02\u07A3\u07A5\x07U\x02\x02" +
		"\u07A4\u07A2\x03\x02\x02\x02\u07A5\u07A8\x03\x02\x02\x02\u07A6\u07A4\x03" +
		"\x02\x02\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7\u07A9\x03\x02\x02\x02\u07A8" +
		"\u07A6\x03\x02\x02\x02\u07A9\u07AA\x07X\x02\x02\u07AA\u07AB\x07 \x02\x02" +
		"\u07AB\u07C9\x03\x02\x02\x02\u07AC\u07B1\x05v<\x02\u07AD\u07AE\x07T\x02" +
		"\x02\u07AE\u07B0\x07U\x02\x02\u07AF\u07AD\x03\x02\x02\x02\u07B0\u07B3" +
		"\x03\x02\x02\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02" +
		"\u07B2\u07B4\x03\x02\x02\x02\u07B3\u07B1\x03\x02\x02\x02\u07B4\u07B5\x07" +
		"X\x02\x02\u07B5\u07B6\x07 \x02\x02\u07B6\u07C9\x03\x02\x02\x02\u07B7\u07B8" +
		"\x07G\x02\x02\u07B8\u07B9\x07X\x02\x02\u07B9\u07C9\x07 \x02\x02\u07BA" +
		"\u07C9\x07B\x02\x02\u07BB\u07BC\x056\x1C\x02\u07BC\u07BD\x07X\x02\x02" +
		"\u07BD\u07BE\x07B\x02\x02\u07BE\u07C9\x03\x02\x02\x02\u07BF\u07C0\x07" +
		"P\x02\x02\u07C0\u07C1\x05\u019E\xD0\x02\u07C1\u07C2\x07Q\x02\x02\u07C2" +
		"\u07C9\x03\x02\x02\x02\u07C3\u07C9\x05\u0178\xBD\x02\u07C4\u07C9\x05\u0180" +
		"\xC1\x02\u07C5\u07C9\x05\u0186\xC4\x02\u07C6\u07C9\x05\u018C\xC7\x02\u07C7" +
		"\u07C9\x05\u0194\xCB\x02\u07C8\u07A0\x03\x02\x02\x02\u07C8\u07A1\x03\x02" +
		"\x02\x02\u07C8\u07AC\x03\x02\x02\x02\u07C8\u07B7\x03\x02\x02\x02\u07C8" +
		"\u07BA\x03\x02\x02\x02\u07C8\u07BB\x03\x02\x02\x02\u07C8\u07BF\x03\x02" +
		"\x02\x02\u07C8\u07C3\x03\x02\x02\x02\u07C8\u07C4\x03\x02\x02\x02\u07C8" +
		"\u07C5\x03\x02\x02\x02\u07C8\u07C6\x03\x02\x02\x02\u07C8\u07C7\x03\x02" +
		"\x02\x02\u07C9\u016F\x03\x02\x02\x02\u07CA\u07CB\x03\x02\x02\x02\u07CB" +
		"\u0171\x03\x02\x02\x02\u07CC\u07F4\x05\x02\x02\x02\u07CD\u07D2\x056\x1C" +
		"\x02\u07CE\u07CF\x07T\x02\x02\u07CF\u07D1\x07U\x02\x02\u07D0\u07CE\x03" +
		"\x02\x02\x02\u07D1\u07D4\x03\x02\x02\x02\u07D2\u07D0\x03\x02\x02\x02\u07D2" +
		"\u07D3\x03\x02\x02\x02\u07D3\u07D5\x03\x02\x02\x02\u07D4\u07D2\x03\x02" +
		"\x02\x02\u07D5\u07D6\x07X\x02\x02\u07D6\u07D7\x07 \x02\x02\u07D7\u07F4" +
		"\x03\x02\x02\x02\u07D8\u07DD\x05v<\x02\u07D9\u07DA\x07T\x02\x02\u07DA" +
		"\u07DC\x07U\x02\x02\u07DB\u07D9\x03\x02\x02\x02\u07DC\u07DF\x03\x02\x02" +
		"\x02\u07DD\u07DB\x03\x02\x02\x02\u07DD\u07DE\x03\x02\x02\x02\u07DE\u07E0" +
		"\x03\x02\x02\x02\u07DF\u07DD\x03\x02\x02\x02\u07E0\u07E1\x07X\x02\x02" +
		"\u07E1\u07E2\x07 \x02\x02\u07E2\u07F4\x03\x02\x02\x02\u07E3\u07E4\x07" +
		"G\x02\x02\u07E4\u07E5\x07X\x02\x02\u07E5\u07F4\x07 \x02\x02\u07E6\u07F4" +
		"\x07B\x02\x02\u07E7\u07E8\x056\x1C\x02\u07E8\u07E9\x07X\x02\x02\u07E9" +
		"\u07EA\x07B\x02\x02\u07EA\u07F4\x03\x02\x02\x02\u07EB\u07EC\x07P\x02\x02" +
		"\u07EC\u07ED\x05\u019E\xD0\x02\u07ED\u07EE\x07Q\x02\x02\u07EE\u07F4\x03" +
		"\x02\x02\x02\u07EF\u07F4\x05\u0178\xBD\x02\u07F0\u07F4\x05\u0180\xC1\x02" +
		"\u07F1\u07F4\x05\u018C\xC7\x02\u07F2\u07F4\x05\u0194\xCB\x02\u07F3\u07CC" +
		"\x03\x02\x02\x02\u07F3\u07CD\x03\x02\x02\x02\u07F3\u07D8\x03\x02\x02\x02" +
		"\u07F3\u07E3\x03\x02\x02\x02\u07F3\u07E6\x03\x02\x02\x02\u07F3\u07E7\x03" +
		"\x02\x02\x02\u07F3\u07EB\x03\x02\x02\x02\u07F3\u07EF\x03\x02\x02\x02\u07F3" +
		"\u07F0\x03\x02\x02\x02\u07F3\u07F1\x03\x02\x02\x02\u07F3\u07F2\x03\x02" +
		"\x02\x02\u07F4\u0173\x03\x02\x02\x02\u07F5\u07F7\x076\x02\x02\u07F6\u07F8" +
		"\x05*\x16\x02\u07F7\u07F6\x03\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02" +
		"\u07F8\u07FC\x03\x02\x02\x02\u07F9\u07FB\x05\xE6t\x02\u07FA\u07F9\x03" +
		"\x02\x02\x02\u07FB\u07FE\x03\x02\x02\x02\u07FC\u07FA\x03\x02\x02\x02\u07FC" +
		"\u07FD\x03\x02\x02\x02\u07FD\u07FF\x03\x02\x02\x02\u07FE\u07FC\x03\x02" +
		"\x02\x02\u07FF\u080A\x07}\x02\x02\u0800\u0804\x07X\x02\x02\u0801\u0803" +
		"\x05\xE6t\x02\u0802\u0801\x03\x02\x02\x02\u0803\u0806\x03\x02\x02\x02" +
		"\u0804\u0802\x03\x02\x02\x02\u0804\u0805\x03\x02\x02\x02\u0805\u0807\x03" +
		"\x02\x02\x02\u0806\u0804\x03\x02\x02\x02\u0807\u0809\x07}\x02\x02\u0808" +
		"\u0800\x03\x02\x02\x02\u0809\u080C\x03\x02\x02\x02\u080A\u0808\x03\x02" +
		"\x02\x02\u080A\u080B\x03\x02\x02\x02\u080B\u080E\x03\x02\x02\x02\u080C" +
		"\u080A\x03\x02\x02\x02\u080D\u080F\x05\u017A\xBE\x02\u080E\u080D\x03\x02" +
		"\x02\x02\u080E\u080F\x03\x02\x02\x02\u080F\u0810\x03\x02\x02\x02\u0810" +
		"\u0812\x07P\x02\x02\u0811\u0813\x05\u018E\xC8\x02\u0812\u0811\x03\x02" +
		"\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813\u0814\x03\x02\x02\x02\u0814" +
		"\u0816\x07Q\x02\x02\u0815\u0817\x05b2\x02\u0816\u0815\x03\x02\x02\x02" +
		"\u0816\u0817\x03\x02\x02\x02\u0817\u0849\x03\x02\x02\x02\u0818\u0819\x05" +
		":\x1E\x02\u0819\u081A\x07X\x02\x02\u081A\u081C\x076\x02\x02\u081B\u081D" +
		"\x05*\x16\x02\u081C\u081B\x03\x02\x02\x02\u081C\u081D\x03\x02\x02\x02" +
		"\u081D\u0821\x03\x02\x02\x02\u081E\u0820\x05\xE6t\x02\u081F\u081E\x03" +
		"\x02\x02\x02\u0820\u0823\x03\x02\x02\x02\u0821\u081F\x03\x02\x02\x02\u0821" +
		"\u0822\x03\x02\x02\x02\u0822\u0824\x03\x02\x02\x02\u0823\u0821\x03\x02" +
		"\x02\x02\u0824\u0826\x07}\x02\x02\u0825\u0827\x05\u017A\xBE\x02\u0826" +
		"\u0825\x03\x02\x02\x02\u0826\u0827\x03\x02\x02\x02\u0827\u0828\x03\x02" +
		"\x02\x02\u0828\u082A\x07P\x02\x02\u0829\u082B\x05\u018E\xC8\x02\u082A" +
		"\u0829\x03\x02\x02\x02\u082A\u082B\x03\x02\x02\x02\u082B\u082C\x03\x02" +
		"\x02\x02\u082C\u082E\x07Q\x02\x02\u082D\u082F\x05";
	private static readonly _serializedATNSegment4: string =
		"b2\x02\u082E\u082D\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u0849" +
		"\x03\x02\x02\x02\u0830\u0831\x05\u0160\xB1\x02\u0831\u0832\x07X\x02\x02" +
		"\u0832\u0834\x076\x02\x02\u0833\u0835\x05*\x16\x02\u0834\u0833\x03\x02" +
		"\x02\x02\u0834\u0835\x03\x02\x02\x02\u0835\u0839\x03\x02\x02\x02\u0836" +
		"\u0838\x05\xE6t\x02\u0837\u0836\x03\x02\x02\x02\u0838\u083B\x03\x02\x02" +
		"\x02\u0839\u0837\x03\x02\x02\x02\u0839\u083A\x03\x02\x02\x02\u083A\u083C" +
		"\x03\x02\x02\x02\u083B\u0839\x03\x02\x02\x02\u083C\u083E\x07}\x02\x02" +
		"\u083D\u083F\x05\u017A\xBE\x02\u083E\u083D\x03\x02\x02\x02\u083E\u083F" +
		"\x03\x02\x02\x02\u083F\u0840\x03\x02\x02\x02\u0840\u0842\x07P\x02\x02" +
		"\u0841\u0843\x05\u018E\xC8\x02\u0842\u0841\x03\x02\x02\x02\u0842\u0843" +
		"\x03\x02\x02\x02\u0843\u0844\x03\x02\x02\x02\u0844\u0846\x07Q\x02\x02" +
		"\u0845\u0847\x05b2\x02\u0846\u0845\x03\x02\x02\x02\u0846\u0847\x03\x02" +
		"\x02\x02\u0847\u0849\x03\x02\x02\x02\u0848\u07F5\x03\x02\x02\x02\u0848" +
		"\u0818\x03\x02\x02\x02\u0848\u0830\x03\x02\x02\x02\u0849\u0175\x03\x02" +
		"\x02\x02\u084A\u084B\x07X\x02\x02\u084B\u084D\x076\x02\x02\u084C\u084E" +
		"\x05*\x16\x02\u084D\u084C\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02" +
		"\u084E\u0852\x03\x02\x02\x02\u084F\u0851\x05\xE6t\x02\u0850\u084F\x03" +
		"\x02\x02\x02\u0851\u0854\x03\x02\x02\x02\u0852\u0850\x03\x02\x02\x02\u0852" +
		"\u0853\x03\x02\x02\x02\u0853\u0855\x03\x02\x02\x02\u0854\u0852\x03\x02" +
		"\x02\x02\u0855\u0857\x07}\x02\x02\u0856\u0858\x05\u017A\xBE\x02\u0857" +
		"\u0856\x03\x02\x02\x02\u0857\u0858\x03\x02\x02\x02\u0858\u0859\x03\x02" +
		"\x02\x02\u0859\u085B\x07P\x02\x02\u085A\u085C\x05\u018E\xC8\x02\u085B" +
		"\u085A\x03\x02\x02\x02\u085B\u085C\x03\x02\x02\x02\u085C\u085D\x03\x02" +
		"\x02\x02\u085D\u085F\x07Q\x02\x02\u085E\u0860\x05b2\x02\u085F\u085E\x03" +
		"\x02\x02\x02\u085F\u0860\x03\x02\x02\x02\u0860\u0177\x03\x02\x02\x02\u0861" +
		"\u0863\x076\x02\x02\u0862\u0864\x05*\x16\x02\u0863\u0862\x03\x02\x02\x02" +
		"\u0863\u0864\x03\x02\x02\x02\u0864\u0868\x03\x02\x02\x02\u0865\u0867\x05" +
		"\xE6t\x02\u0866\u0865\x03\x02\x02\x02\u0867\u086A\x03\x02\x02\x02\u0868" +
		"\u0866\x03\x02\x02\x02\u0868\u0869\x03\x02\x02\x02\u0869\u086B\x03\x02" +
		"\x02\x02\u086A\u0868\x03\x02\x02\x02\u086B\u0876\x07}\x02\x02\u086C\u0870" +
		"\x07X\x02\x02\u086D\u086F\x05\xE6t\x02\u086E\u086D\x03\x02\x02\x02\u086F" +
		"\u0872\x03\x02\x02\x02\u0870\u086E\x03\x02\x02\x02\u0870\u0871\x03\x02" +
		"\x02\x02\u0871\u0873\x03\x02\x02\x02\u0872\u0870\x03\x02\x02\x02\u0873" +
		"\u0875\x07}\x02\x02\u0874\u086C\x03\x02\x02\x02\u0875\u0878\x03\x02\x02" +
		"\x02\u0876\u0874\x03\x02\x02\x02\u0876\u0877\x03\x02\x02\x02\u0877\u087A" +
		"\x03\x02\x02\x02\u0878\u0876\x03\x02\x02\x02\u0879\u087B\x05\u017A\xBE" +
		"\x02\u087A\u0879\x03\x02\x02\x02\u087A\u087B\x03\x02\x02\x02\u087B\u087C" +
		"\x03\x02\x02\x02\u087C\u087E\x07P\x02\x02\u087D\u087F\x05\u018E\xC8\x02" +
		"\u087E\u087D\x03\x02\x02\x02\u087E\u087F\x03\x02\x02\x02\u087F\u0880\x03" +
		"\x02\x02\x02\u0880\u0882\x07Q\x02\x02\u0881\u0883\x05b2\x02\u0882\u0881" +
		"\x03\x02\x02\x02\u0882\u0883\x03\x02\x02\x02\u0883\u089D\x03\x02\x02\x02" +
		"\u0884\u0885\x05:\x1E\x02\u0885\u0886\x07X\x02\x02\u0886\u0888\x076\x02" +
		"\x02\u0887\u0889\x05*\x16\x02\u0888\u0887\x03\x02\x02\x02\u0888\u0889" +
		"\x03\x02\x02\x02\u0889\u088D\x03\x02\x02\x02\u088A\u088C\x05\xE6t\x02" +
		"\u088B\u088A\x03\x02\x02\x02\u088C\u088F\x03\x02\x02\x02\u088D\u088B\x03" +
		"\x02\x02\x02\u088D\u088E\x03\x02\x02\x02\u088E\u0890\x03\x02\x02\x02\u088F" +
		"\u088D\x03\x02\x02\x02\u0890\u0892\x07}\x02\x02\u0891\u0893\x05\u017A" +
		"\xBE\x02\u0892\u0891\x03\x02\x02\x02\u0892\u0893\x03\x02\x02\x02\u0893" +
		"\u0894\x03\x02\x02\x02\u0894\u0896\x07P\x02\x02\u0895\u0897\x05\u018E" +
		"\xC8\x02\u0896\u0895\x03\x02\x02\x02\u0896\u0897\x03\x02\x02\x02\u0897" +
		"\u0898\x03\x02\x02\x02\u0898\u089A\x07Q\x02\x02\u0899\u089B\x05b2\x02" +
		"\u089A\u0899\x03\x02\x02\x02\u089A\u089B\x03\x02\x02\x02\u089B\u089D\x03" +
		"\x02\x02\x02\u089C\u0861\x03\x02\x02\x02\u089C\u0884\x03\x02\x02\x02\u089D" +
		"\u0179\x03\x02\x02\x02\u089E\u08A2\x05*\x16\x02\u089F\u08A0\x07[\x02\x02" +
		"\u08A0\u08A2\x07Z\x02\x02\u08A1\u089E\x03\x02\x02\x02\u08A1\u089F\x03" +
		"\x02\x02\x02\u08A2\u017B\x03\x02\x02\x02\u08A3\u08A4\x05\u0160\xB1\x02" +
		"\u08A4\u08A5\x07X\x02\x02\u08A5\u08A6\x07}\x02\x02\u08A6\u08B1\x03\x02" +
		"\x02\x02\u08A7\u08A8\x07?\x02\x02\u08A8\u08A9\x07X\x02\x02\u08A9\u08B1" +
		"\x07}\x02\x02\u08AA\u08AB\x056\x1C\x02\u08AB\u08AC\x07X\x02\x02\u08AC" +
		"\u08AD\x07?\x02\x02\u08AD\u08AE\x07X\x02\x02\u08AE\u08AF\x07}\x02\x02" +
		"\u08AF\u08B1\x03\x02\x02\x02\u08B0\u08A3\x03\x02\x02\x02\u08B0\u08A7\x03" +
		"\x02\x02\x02\u08B0\u08AA\x03\x02\x02\x02\u08B1\u017D\x03\x02\x02\x02\u08B2" +
		"\u08B3\x07X\x02\x02\u08B3\u08B4\x07}\x02\x02\u08B4\u017F\x03\x02\x02\x02" +
		"\u08B5\u08B6\x07?\x02\x02\u08B6\u08B7\x07X\x02\x02\u08B7\u08BF\x07}\x02" +
		"\x02\u08B8\u08B9\x056\x1C\x02\u08B9\u08BA\x07X\x02\x02\u08BA\u08BB\x07" +
		"?\x02\x02\u08BB\u08BC\x07X\x02\x02\u08BC\u08BD\x07}\x02\x02\u08BD\u08BF" +
		"\x03\x02\x02\x02\u08BE\u08B5\x03\x02\x02\x02\u08BE\u08B8\x03\x02\x02\x02" +
		"\u08BF\u0181\x03\x02\x02\x02\u08C0\u08C1\x05:\x1E\x02\u08C1\u08C2\x07" +
		"T\x02\x02\u08C2\u08C3\x05\u019E\xD0\x02\u08C3\u08C4\x07U\x02\x02\u08C4" +
		"\u08CB\x03\x02\x02\x02\u08C5\u08C6\x05\u0166\xB4\x02\u08C6\u08C7\x07T" +
		"\x02\x02\u08C7\u08C8\x05\u019E\xD0\x02\u08C8\u08C9\x07U\x02\x02\u08C9" +
		"\u08CB\x03\x02\x02\x02\u08CA\u08C0\x03\x02\x02\x02\u08CA\u08C5\x03\x02" +
		"\x02\x02\u08CB\u08D3\x03\x02\x02\x02\u08CC\u08CD\x05\u0164\xB3\x02\u08CD" +
		"\u08CE\x07T\x02\x02\u08CE\u08CF\x05\u019E\xD0\x02\u08CF\u08D0\x07U\x02" +
		"\x02\u08D0\u08D2\x03\x02\x02\x02\u08D1\u08CC\x03\x02\x02\x02\u08D2\u08D5" +
		"\x03\x02\x02\x02\u08D3\u08D1\x03\x02\x02\x02\u08D3\u08D4\x03\x02\x02\x02" +
		"\u08D4\u0183\x03\x02\x02\x02\u08D5\u08D3\x03\x02\x02\x02\u08D6\u08D7\x05" +
		"\u016C\xB7\x02\u08D7\u08D8\x07T\x02\x02\u08D8\u08D9\x05\u019E\xD0\x02" +
		"\u08D9\u08DA\x07U\x02\x02\u08DA\u08E2\x03\x02\x02\x02\u08DB\u08DC\x05" +
		"\u016A\xB6\x02\u08DC\u08DD\x07T\x02\x02\u08DD\u08DE\x05\u019E\xD0\x02" +
		"\u08DE\u08DF\x07U\x02\x02\u08DF\u08E1\x03\x02\x02\x02\u08E0\u08DB\x03" +
		"\x02\x02\x02\u08E1\u08E4\x03\x02\x02\x02\u08E2\u08E0\x03\x02\x02\x02\u08E2" +
		"\u08E3\x03\x02\x02\x02\u08E3\u0185\x03\x02\x02\x02\u08E4\u08E2\x03\x02" +
		"\x02\x02\u08E5\u08E6\x05:\x1E\x02\u08E6\u08E7\x07T\x02\x02\u08E7\u08E8" +
		"\x05\u019E\xD0\x02\u08E8\u08E9\x07U\x02\x02\u08E9\u08F0\x03\x02\x02\x02" +
		"\u08EA\u08EB\x05\u0172\xBA\x02\u08EB\u08EC\x07T\x02\x02\u08EC\u08ED\x05" +
		"\u019E\xD0\x02\u08ED\u08EE\x07U\x02\x02\u08EE\u08F0\x03\x02\x02\x02\u08EF" +
		"\u08E5\x03\x02\x02\x02\u08EF\u08EA\x03\x02\x02\x02\u08F0\u08F8\x03\x02" +
		"\x02\x02\u08F1\u08F2\x05\u0170\xB9\x02\u08F2\u08F3\x07T\x02\x02\u08F3" +
		"\u08F4\x05\u019E\xD0\x02\u08F4\u08F5\x07U\x02\x02\u08F5\u08F7\x03\x02" +
		"\x02\x02\u08F6\u08F1\x03\x02\x02\x02\u08F7\u08FA\x03\x02\x02\x02\u08F8" +
		"\u08F6\x03\x02\x02\x02\u08F8\u08F9\x03\x02\x02\x02\u08F9\u0187\x03\x02" +
		"\x02\x02\u08FA\u08F8\x03\x02\x02\x02\u08FB\u08FC\x05<\x1F\x02\u08FC\u08FE" +
		"\x07P\x02\x02\u08FD\u08FF\x05\u018E\xC8\x02\u08FE\u08FD\x03\x02\x02\x02" +
		"\u08FE\u08FF\x03\x02\x02\x02\u08FF\u0900\x03\x02\x02\x02\u0900\u0901\x07" +
		"Q\x02\x02\u0901\u0940\x03\x02\x02\x02\u0902\u0903\x056\x1C\x02\u0903\u0905" +
		"\x07X\x02\x02\u0904\u0906\x05*\x16\x02\u0905\u0904\x03\x02\x02\x02\u0905" +
		"\u0906\x03\x02\x02\x02\u0906\u0907\x03\x02\x02\x02\u0907\u0908\x07}\x02" +
		"\x02\u0908\u090A\x07P\x02\x02\u0909\u090B\x05\u018E\xC8\x02\u090A\u0909" +
		"\x03\x02\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u090C\x03\x02\x02\x02" +
		"\u090C\u090D\x07Q\x02\x02\u090D\u0940\x03\x02\x02\x02\u090E\u090F\x05" +
		":\x1E\x02\u090F\u0911\x07X\x02\x02\u0910\u0912\x05*\x16\x02\u0911\u0910" +
		"\x03\x02\x02\x02\u0911\u0912\x03\x02\x02\x02\u0912\u0913\x03\x02\x02\x02" +
		"\u0913\u0914\x07}\x02\x02\u0914\u0916\x07P\x02\x02\u0915\u0917\x05\u018E" +
		"\xC8\x02\u0916\u0915\x03\x02\x02\x02\u0916\u0917\x03\x02\x02\x02\u0917" +
		"\u0918\x03\x02\x02\x02\u0918\u0919\x07Q\x02\x02\u0919\u0940\x03\x02\x02" +
		"\x02\u091A\u091B\x05\u0160\xB1\x02\u091B\u091D\x07X\x02\x02\u091C\u091E" +
		"\x05*\x16\x02\u091D\u091C\x03\x02\x02\x02\u091D\u091E\x03\x02\x02\x02" +
		"\u091E\u091F\x03\x02\x02\x02\u091F\u0920\x07}\x02\x02\u0920\u0922\x07" +
		"P\x02\x02\u0921\u0923\x05\u018E\xC8\x02\u0922\u0921\x03\x02\x02\x02\u0922" +
		"\u0923\x03\x02\x02\x02\u0923\u0924\x03\x02\x02\x02\u0924\u0925\x07Q\x02" +
		"\x02\u0925\u0940\x03\x02\x02\x02\u0926\u0927\x07?\x02\x02\u0927\u0929" +
		"\x07X\x02\x02\u0928\u092A\x05*\x16\x02\u0929\u0928\x03\x02\x02\x02\u0929" +
		"\u092A\x03\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u092C\x07}\x02" +
		"\x02\u092C\u092E\x07P\x02\x02\u092D\u092F\x05\u018E\xC8\x02\u092E\u092D" +
		"\x03\x02\x02\x02\u092E\u092F\x03\x02\x02\x02\u092F\u0930\x03\x02\x02\x02" +
		"\u0930\u0940\x07Q\x02\x02\u0931\u0932\x056\x1C\x02\u0932\u0933\x07X\x02" +
		"\x02\u0933\u0934\x07?\x02\x02\u0934\u0936\x07X\x02\x02\u0935\u0937\x05" +
		"*\x16\x02\u0936\u0935\x03\x02\x02\x02\u0936\u0937\x03\x02\x02\x02\u0937" +
		"\u0938\x03\x02\x02\x02\u0938\u0939\x07}\x02\x02\u0939\u093B\x07P\x02\x02" +
		"\u093A\u093C\x05\u018E\xC8\x02\u093B\u093A\x03\x02\x02\x02\u093B\u093C" +
		"\x03\x02\x02\x02\u093C\u093D\x03\x02\x02\x02\u093D\u093E\x07Q\x02\x02" +
		"\u093E\u0940\x03\x02\x02\x02\u093F\u08FB\x03\x02\x02\x02\u093F\u0902\x03" +
		"\x02\x02\x02\u093F\u090E\x03\x02\x02\x02\u093F\u091A\x03\x02\x02\x02\u093F" +
		"\u0926\x03\x02\x02\x02\u093F\u0931\x03\x02\x02\x02\u0940\u0189\x03\x02" +
		"\x02\x02\u0941\u0943\x07X\x02\x02\u0942\u0944\x05*\x16\x02\u0943\u0942" +
		"\x03\x02\x02\x02\u0943\u0944\x03\x02\x02\x02\u0944\u0945\x03\x02\x02\x02" +
		"\u0945\u0946\x07}\x02\x02\u0946\u0948\x07P\x02\x02\u0947\u0949\x05\u018E" +
		"\xC8\x02\u0948\u0947\x03\x02\x02\x02\u0948\u0949\x03\x02\x02\x02\u0949" +
		"\u094A\x03\x02\x02\x02\u094A\u094B\x07Q\x02\x02\u094B\u018B\x03\x02\x02" +
		"\x02\u094C\u094D\x05<\x1F\x02\u094D\u094F\x07P\x02\x02\u094E\u0950\x05" +
		"\u018E\xC8\x02\u094F\u094E\x03\x02\x02\x02\u094F\u0950\x03\x02\x02\x02" +
		"\u0950\u0951\x03\x02\x02\x02\u0951\u0952\x07Q\x02\x02\u0952\u0985\x03" +
		"\x02\x02\x02\u0953\u0954\x056\x1C\x02\u0954\u0956\x07X\x02\x02\u0955\u0957" +
		"\x05*\x16\x02\u0956\u0955\x03\x02\x02\x02\u0956\u0957\x03\x02\x02\x02" +
		"\u0957\u0958\x03\x02\x02\x02\u0958\u0959\x07}\x02\x02\u0959\u095B\x07" +
		"P\x02\x02\u095A\u095C\x05\u018E\xC8\x02\u095B\u095A\x03\x02\x02\x02\u095B" +
		"\u095C\x03\x02\x02\x02\u095C\u095D\x03\x02\x02\x02\u095D\u095E\x07Q\x02" +
		"\x02\u095E\u0985\x03\x02\x02\x02\u095F\u0960\x05:\x1E\x02\u0960\u0962" +
		"\x07X\x02\x02\u0961\u0963\x05*\x16\x02\u0962\u0961\x03\x02\x02\x02\u0962" +
		"\u0963\x03\x02\x02\x02\u0963\u0964\x03\x02\x02\x02\u0964\u0965\x07}\x02" +
		"\x02\u0965\u0967\x07P\x02\x02\u0966\u0968\x05\u018E\xC8\x02\u0967\u0966" +
		"\x03\x02\x02\x02\u0967\u0968\x03\x02\x02\x02\u0968\u0969\x03\x02\x02\x02" +
		"\u0969\u096A\x07Q\x02\x02\u096A\u0985\x03\x02\x02\x02\u096B\u096C\x07" +
		"?\x02\x02\u096C\u096E\x07X\x02\x02\u096D\u096F\x05*\x16\x02\u096E\u096D" +
		"\x03\x02\x02\x02\u096E\u096F\x03\x02\x02\x02\u096F\u0970\x03\x02\x02\x02" +
		"\u0970\u0971\x07}\x02\x02\u0971\u0973\x07P\x02\x02\u0972\u0974\x05\u018E" +
		"\xC8\x02\u0973\u0972\x03\x02\x02\x02\u0973\u0974\x03\x02\x02\x02\u0974" +
		"\u0975\x03\x02\x02\x02\u0975\u0985\x07Q\x02\x02\u0976\u0977\x056\x1C\x02" +
		"\u0977\u0978\x07X\x02\x02\u0978\u0979\x07?\x02\x02\u0979\u097B\x07X\x02" +
		"\x02\u097A\u097C\x05*\x16\x02\u097B\u097A\x03\x02\x02\x02\u097B\u097C" +
		"\x03\x02\x02\x02\u097C\u097D\x03\x02\x02\x02\u097D\u097E\x07}\x02\x02" +
		"\u097E\u0980\x07P\x02\x02\u097F\u0981\x05\u018E\xC8\x02\u0980\u097F\x03" +
		"\x02\x02\x02\u0980\u0981\x03\x02\x02\x02\u0981\u0982\x03\x02\x02\x02\u0982" +
		"\u0983\x07Q\x02\x02\u0983\u0985\x03\x02\x02\x02\u0984\u094C\x03\x02\x02" +
		"\x02\u0984\u0953\x03\x02\x02\x02\u0984\u095F\x03\x02\x02\x02\u0984\u096B" +
		"\x03\x02\x02\x02\u0984\u0976\x03\x02\x02\x02\u0985\u018D\x03\x02\x02\x02" +
		"\u0986\u098B\x05\u019E\xD0\x02\u0987\u0988\x07W\x02\x02\u0988\u098A\x05" +
		"\u019E\xD0\x02\u0989\u0987\x03\x02\x02\x02\u098A\u098D\x03\x02\x02\x02" +
		"\u098B\u0989\x03\x02\x02\x02\u098B\u098C\x03\x02\x02\x02\u098C\u018F\x03" +
		"\x02\x02\x02\u098D\u098B\x03\x02\x02\x02\u098E\u098F\x05:\x1E\x02\u098F" +
		"\u0991\x07q\x02\x02\u0990\u0992\x05*\x16\x02\u0991\u0990\x03\x02\x02\x02" +
		"\u0991\u0992\x03\x02\x02\x02\u0992\u0993\x03\x02\x02\x02\u0993\u0994\x07" +
		"}\x02\x02\u0994\u09BE\x03\x02\x02\x02\u0995\u0996\x05\f\x07\x02\u0996" +
		"\u0998\x07q\x02\x02\u0997\u0999\x05*\x16\x02\u0998\u0997\x03\x02\x02\x02" +
		"\u0998\u0999\x03\x02\x02\x02\u0999\u099A\x03\x02\x02\x02\u099A\u099B\x07" +
		"}\x02\x02\u099B\u09BE\x03\x02\x02\x02\u099C\u099D\x05\u0160\xB1\x02\u099D" +
		"\u099F\x07q\x02\x02\u099E\u09A0\x05*\x16\x02\u099F\u099E\x03\x02\x02\x02" +
		"\u099F\u09A0\x03\x02\x02\x02\u09A0\u09A1\x03\x02\x02\x02\u09A1\u09A2\x07" +
		"}\x02\x02\u09A2\u09BE\x03\x02\x02\x02\u09A3\u09A4\x07?\x02\x02\u09A4\u09A6" +
		"\x07q\x02\x02\u09A5\u09A7\x05*\x16\x02\u09A6\u09A5\x03\x02\x02\x02\u09A6" +
		"\u09A7\x03\x02\x02\x02\u09A7\u09A8\x03\x02\x02\x02\u09A8\u09BE\x07}\x02" +
		"\x02\u09A9\u09AA\x056\x1C\x02\u09AA\u09AB\x07X\x02\x02\u09AB\u09AC\x07" +
		"?\x02\x02\u09AC\u09AE\x07q\x02\x02\u09AD\u09AF\x05*\x16\x02\u09AE\u09AD" +
		"\x03\x02\x02\x02\u09AE\u09AF\x03\x02\x02\x02\u09AF\u09B0\x03\x02\x02\x02" +
		"\u09B0\u09B1\x07}\x02\x02\u09B1\u09BE\x03\x02\x02\x02\u09B2\u09B3\x05" +
		"\x10\t\x02\u09B3\u09B5\x07q\x02\x02\u09B4\u09B6\x05*\x16\x02\u09B5\u09B4" +
		"\x03\x02\x02\x02\u09B5\u09B6\x03\x02\x02\x02\u09B6\u09B7\x03\x02\x02\x02" +
		"\u09B7\u09B8\x076\x02\x02\u09B8\u09BE\x03\x02\x02\x02\u09B9\u09BA\x05" +
		"\x1E\x10\x02\u09BA\u09BB\x07q\x02\x02\u09BB\u09BC\x076\x02\x02\u09BC\u09BE" +
		"\x03\x02\x02\x02\u09BD\u098E\x03\x02\x02\x02\u09BD\u0995\x03\x02\x02\x02" +
		"\u09BD\u099C\x03\x02\x02\x02\u09BD\u09A3\x03\x02\x02\x02\u09BD\u09A9\x03" +
		"\x02\x02\x02\u09BD\u09B2\x03\x02\x02\x02\u09BD\u09B9\x03\x02\x02\x02\u09BE" +
		"\u0191\x03\x02\x02\x02\u09BF\u09C1\x07q\x02\x02\u09C0\u09C2\x05*\x16\x02" +
		"\u09C1\u09C0\x03\x02\x02\x02\u09C1\u09C2\x03\x02\x02\x02\u09C2\u09C3\x03" +
		"\x02\x02\x02\u09C3\u09C4\x07}\x02\x02\u09C4\u0193\x03\x02\x02\x02\u09C5" +
		"\u09C6\x05:\x1E\x02\u09C6\u09C8\x07q\x02\x02\u09C7\u09C9\x05*\x16\x02" +
		"\u09C8\u09C7\x03\x02\x02\x02\u09C8\u09C9\x03\x02\x02\x02\u09C9\u09CA\x03" +
		"\x02\x02\x02\u09CA\u09CB\x07}\x02\x02\u09CB\u09EE\x03\x02\x02\x02\u09CC" +
		"\u09CD\x05\f\x07\x02\u09CD\u09CF\x07q\x02\x02\u09CE\u09D0\x05*\x16\x02" +
		"\u09CF\u09CE\x03\x02\x02\x02\u09CF\u09D0\x03\x02\x02\x02\u09D0\u09D1\x03" +
		"\x02\x02\x02\u09D1\u09D2\x07}\x02\x02\u09D2\u09EE\x03\x02\x02\x02\u09D3" +
		"\u09D4\x07?\x02\x02\u09D4\u09D6\x07q\x02\x02\u09D5\u09D7\x05*\x16\x02" +
		"\u09D6\u09D5\x03\x02\x02\x02\u09D6\u09D7\x03\x02\x02\x02\u09D7\u09D8\x03" +
		"\x02\x02\x02\u09D8\u09EE\x07}\x02\x02\u09D9\u09DA\x056\x1C\x02\u09DA\u09DB" +
		"\x07X\x02\x02\u09DB\u09DC\x07?\x02\x02\u09DC\u09DE\x07q\x02\x02\u09DD" +
		"\u09DF\x05*\x16\x02\u09DE\u09DD\x03\x02\x02\x02\u09DE\u09DF\x03\x02\x02" +
		"\x02\u09DF\u09E0\x03\x02\x02\x02\u09E0\u09E1\x07}\x02\x02\u09E1\u09EE" +
		"\x03\x02\x02\x02\u09E2\u09E3\x05\x10\t\x02\u09E3\u09E5\x07q\x02\x02\u09E4" +
		"\u09E6\x05*\x16\x02\u09E5\u09E4\x03\x02\x02\x02\u09E5\u09E6\x03\x02\x02" +
		"\x02\u09E6\u09E7\x03\x02\x02\x02\u09E7\u09E8\x076\x02\x02\u09E8\u09EE" +
		"\x03\x02\x02\x02\u09E9\u09EA\x05\x1E\x10\x02\u09EA\u09EB\x07q\x02\x02" +
		"\u09EB\u09EC\x076\x02\x02\u09EC\u09EE\x03\x02\x02\x02\u09ED\u09C5\x03" +
		"\x02\x02\x02\u09ED\u09CC\x03\x02\x02\x02\u09ED\u09D3\x03\x02\x02\x02\u09ED" +
		"\u09D9\x03\x02\x02\x02\u09ED\u09E2\x03\x02\x02\x02\u09ED\u09E9\x03\x02" +
		"\x02\x02\u09EE\u0195\x03\x02\x02\x02\u09EF\u09F0\x076\x02\x02\u09F0\u09F1" +
		"\x05\x04\x03\x02\u09F1\u09F3\x05\u0198\xCD\x02\u09F2\u09F4\x05 \x11\x02" +
		"\u09F3\u09F2\x03\x02\x02\x02\u09F3\u09F4\x03\x02\x02\x02\u09F4\u0A06\x03" +
		"\x02\x02\x02\u09F5\u09F6\x076\x02\x02\u09F6\u09F7\x05\x0E\b\x02\u09F7" +
		"\u09F9\x05\u0198\xCD\x02\u09F8\u09FA\x05 \x11\x02\u09F9\u09F8\x03\x02" +
		"\x02\x02\u09F9\u09FA\x03\x02\x02\x02\u09FA\u0A06\x03\x02\x02\x02\u09FB" +
		"\u09FC\x076\x02\x02\u09FC\u09FD\x05\x04\x03\x02\u09FD\u09FE\x05 \x11\x02" +
		"\u09FE\u09FF\x05\xF8}\x02\u09FF\u0A06\x03\x02\x02\x02\u0A00\u0A01\x07" +
		"6\x02\x02\u0A01\u0A02\x05\x0E\b\x02\u0A02\u0A03\x05 \x11\x02\u0A03\u0A04" +
		"\x05\xF8}\x02\u0A04\u0A06\x03\x02\x02\x02\u0A05\u09EF\x03\x02\x02\x02" +
		"\u0A05\u09F5\x03\x02\x02\x02\u0A05\u09FB\x03\x02\x02\x02\u0A05\u0A00\x03" +
		"\x02\x02\x02\u0A06\u0197\x03\x02\x02\x02\u0A07\u0A0B\x05\u019A\xCE\x02" +
		"\u0A08\u0A0A\x05\u019A\xCE\x02\u0A09\u0A08\x03\x02\x02\x02\u0A0A\u0A0D" +
		"\x03\x02\x02\x02\u0A0B\u0A09\x03\x02\x02\x02\u0A0B\u0A0C\x03\x02\x02\x02" +
		"\u0A0C\u0199\x03\x02\x02\x02\u0A0D\u0A0B\x03\x02\x02\x02\u0A0E\u0A10\x05" +
		"\xE6t\x02\u0A0F\u0A0E\x03\x02\x02\x02\u0A10\u0A13\x03\x02\x02\x02\u0A11" +
		"\u0A0F\x03\x02\x02\x02\u0A11\u0A12\x03\x02\x02\x02\u0A12\u0A14\x03\x02" +
		"\x02\x02\u0A13\u0A11\x03\x02\x02\x02\u0A14\u0A15\x07T\x02\x02\u0A15\u0A16" +
		"\x05\u019E\xD0\x02\u0A16\u0A17\x07U\x02\x02\u0A17\u019B\x03\x02\x02\x02" +
		"\u0A18\u0A19\x05\u019E\xD0\x02\u0A19\u019D\x03\x02\x02\x02\u0A1A\u0A1D" +
		"\x05\u01A0\xD1\x02\u0A1B\u0A1D\x05\u01A8\xD5\x02\u0A1C\u0A1A\x03\x02\x02" +
		"\x02\u0A1C\u0A1B\x03\x02\x02\x02\u0A1D\u019F\x03\x02\x02\x02\u0A1E\u0A1F" +
		"\x05\u01A2\xD2\x02\u0A1F\u0A20\x07p\x02\x02\u0A20\u0A21\x05\u01A6\xD4" +
		"\x02\u0A21\u01A1\x03\x02\x02\x02\u0A22\u0A2D\x07}\x02\x02\u0A23\u0A25" +
		"\x07P\x02\x02\u0A24\u0A26\x05\x96L\x02\u0A25\u0A24\x03\x02\x02\x02\u0A25" +
		"\u0A26\x03\x02\x02\x02\u0A26\u0A27\x03\x02\x02\x02\u0A27\u0A2D\x07Q\x02" +
		"\x02\u0A28\u0A29\x07P\x02\x02\u0A29\u0A2A\x05\u01A4\xD3\x02\u0A2A\u0A2B" +
		"\x07Q\x02\x02\u0A2B\u0A2D\x03\x02\x02\x02\u0A2C\u0A22\x03\x02\x02\x02" +
		"\u0A2C\u0A23\x03\x02\x02\x02\u0A2C\u0A28\x03\x02\x02\x02\u0A2D\u01A3\x03" +
		"\x02\x02\x02\u0A2E\u0A33\x07}\x02\x02\u0A2F\u0A30\x07W\x02\x02\u0A30\u0A32" +
		"\x07}\x02\x02\u0A31\u0A2F\x03\x02\x02\x02\u0A32\u0A35\x03\x02\x02\x02" +
		"\u0A33\u0A31\x03\x02\x02\x02\u0A33\u0A34\x03\x02\x02\x02\u0A34\u01A5\x03" +
		"\x02\x02\x02\u0A35\u0A33\x03\x02\x02\x02\u0A36\u0A39\x05\u019E\xD0\x02" +
		"\u0A37\u0A39\x05\xFC\x7F\x02\u0A38\u0A36\x03\x02\x02\x02\u0A38\u0A37\x03" +
		"\x02\x02\x02\u0A39\u01A7\x03\x02\x02\x02\u0A3A\u0A3D\x05\u01B0\xD9\x02" +
		"\u0A3B\u0A3D\x05\u01AA\xD6\x02\u0A3C\u0A3A\x03\x02\x02\x02\u0A3C\u0A3B" +
		"\x03\x02\x02\x02\u0A3D\u01A9\x03\x02\x02\x02\u0A3E\u0A3F\x05\u01AC\xD7" +
		"\x02\u0A3F\u0A40\x05\u01AE\xD8\x02\u0A40\u0A41\x05\u019E\xD0\x02\u0A41" +
		"\u01AB\x03\x02\x02\x02\u0A42\u0A46\x05:\x1E\x02\u0A43\u0A46\x05\u017C" +
		"\xBF\x02\u0A44\u0A46\x05\u0182\xC2\x02\u0A45\u0A42\x03\x02\x02\x02\u0A45" +
		"\u0A43\x03\x02\x02\x02\u0A45\u0A44\x03\x02\x02\x02\u0A46\u01AD\x03\x02" +
		"\x02\x02\u0A47\u0A48\t\x05\x02\x02\u0A48\u01AF\x03\x02\x02\x02\u0A49\u0A51" +
		"\x05\u01B2\xDA\x02\u0A4A\u0A4B\x05\u01B2\xDA\x02\u0A4B\u0A4C\x07^\x02" +
		"\x02\u0A4C\u0A4D\x05\u019E\xD0\x02\u0A4D\u0A4E\x07_\x02\x02\u0A4E\u0A4F" +
		"\x05\u01B0\xD9\x02\u0A4F\u0A51\x03\x02\x02\x02\u0A50\u0A49\x03\x02\x02" +
		"\x02\u0A50\u0A4A\x03\x02\x02\x02\u0A51\u01B1\x03\x02\x02\x02\u0A52\u0A53" +
		"\b\xDA\x01\x02\u0A53\u0A54\x05\u01B4\xDB\x02\u0A54\u0A5A\x03\x02\x02\x02" +
		"\u0A55\u0A56\f\x03\x02\x02\u0A56\u0A57\x07e\x02\x02\u0A57\u0A59\x05\u01B4" +
		"\xDB\x02\u0A58\u0A55\x03\x02\x02\x02\u0A59\u0A5C\x03\x02\x02\x02\u0A5A" +
		"\u0A58\x03\x02\x02\x02\u0A5A\u0A5B\x03\x02\x02\x02\u0A5B\u01B3\x03\x02" +
		"\x02\x02\u0A5C\u0A5A\x03\x02\x02\x02\u0A5D\u0A5E\b\xDB\x01\x02\u0A5E\u0A5F" +
		"\x05\u01B6\xDC\x02\u0A5F\u0A65\x03\x02\x02\x02\u0A60\u0A61\f\x03\x02\x02" +
		"\u0A61\u0A62\x07d\x02\x02\u0A62\u0A64\x05\u01B6\xDC\x02\u0A63\u0A60\x03" +
		"\x02\x02\x02\u0A64\u0A67\x03\x02\x02\x02\u0A65\u0A63\x03\x02\x02\x02\u0A65" +
		"\u0A66\x03\x02\x02\x02\u0A66\u01B5\x03\x02\x02\x02\u0A67\u0A65\x03\x02" +
		"\x02\x02\u0A68\u0A69\b\xDC\x01\x02\u0A69\u0A6A\x05\u01B8\xDD\x02\u0A6A" +
		"\u0A70\x03\x02\x02\x02\u0A6B\u0A6C\f\x03\x02\x02\u0A6C\u0A6D\x07m\x02" +
		"\x02\u0A6D\u0A6F\x05\u01B8\xDD\x02\u0A6E\u0A6B\x03\x02\x02\x02\u0A6F\u0A72" +
		"\x03\x02\x02\x02\u0A70\u0A6E\x03\x02\x02\x02\u0A70\u0A71\x03\x02\x02\x02" +
		"\u0A71\u01B7\x03\x02\x02\x02\u0A72\u0A70\x03\x02\x02\x02\u0A73\u0A74\b" +
		"\xDD\x01\x02\u0A74\u0A75\x05\u01BA\xDE\x02\u0A75\u0A7B\x03\x02\x02\x02" +
		"\u0A76\u0A77\f\x03\x02\x02\u0A77\u0A78\x07n\x02\x02\u0A78\u0A7A\x05\u01BA" +
		"\xDE\x02\u0A79\u0A76\x03\x02\x02\x02\u0A7A\u0A7D\x03\x02\x02\x02\u0A7B" +
		"\u0A79\x03\x02\x02\x02\u0A7B\u0A7C\x03\x02\x02\x02\u0A7C\u01B9\x03\x02" +
		"\x02\x02\u0A7D\u0A7B\x03\x02\x02\x02\u0A7E\u0A7F\b\xDE\x01\x02\u0A7F\u0A80" +
		"\x05\u01BC\xDF\x02\u0A80\u0A86\x03\x02\x02\x02\u0A81\u0A82\f\x03\x02\x02" +
		"\u0A82\u0A83\x07l\x02\x02\u0A83\u0A85\x05\u01BC\xDF\x02\u0A84\u0A81\x03" +
		"\x02\x02\x02\u0A85\u0A88\x03\x02\x02\x02\u0A86\u0A84\x03\x02\x02\x02\u0A86" +
		"\u0A87\x03\x02\x02\x02\u0A87\u01BB\x03\x02\x02\x02\u0A88\u0A86\x03\x02" +
		"\x02\x02\u0A89\u0A8A\b\xDF\x01\x02\u0A8A\u0A8B\x05\u01BE\xE0\x02\u0A8B" +
		"\u0A94\x03\x02\x02\x02\u0A8C\u0A8D\f\x04\x02\x02\u0A8D\u0A8E\x07`\x02" +
		"\x02\u0A8E\u0A93\x05\u01BE\xE0\x02\u0A8F\u0A90\f\x03\x02\x02\u0A90\u0A91" +
		"\x07c\x02\x02\u0A91\u0A93\x05\u01BE\xE0\x02\u0A92\u0A8C\x03\x02\x02\x02" +
		"\u0A92\u0A8F\x03\x02\x02\x02\u0A93\u0A96\x03\x02\x02\x02\u0A94\u0A92\x03" +
		"\x02\x02\x02\u0A94\u0A95\x03\x02\x02\x02\u0A95\u01BD\x03\x02\x02\x02\u0A96" +
		"\u0A94\x03\x02\x02\x02\u0A97\u0A98\b\xE0\x01\x02\u0A98\u0A99\x05\u01C0" +
		"\xE1\x02\u0A99\u0AAB\x03\x02\x02\x02\u0A9A\u0A9B\f\x07\x02\x02\u0A9B\u0A9C" +
		"\x07[\x02\x02\u0A9C\u0AAA\x05\u01C0\xE1\x02\u0A9D\u0A9E\f\x06\x02\x02" +
		"\u0A9E\u0A9F\x07Z\x02\x02\u0A9F\u0AAA\x05\u01C0\xE1\x02\u0AA0\u0AA1\f" +
		"\x05\x02\x02\u0AA1\u0AA2\x07a\x02\x02\u0AA2\u0AAA\x05\u01C0\xE1\x02\u0AA3" +
		"\u0AA4\f\x04\x02\x02\u0AA4\u0AA5\x07b\x02\x02\u0AA5\u0AAA\x05\u01C0\xE1" +
		"\x02\u0AA6\u0AA7\f\x03\x02\x02\u0AA7\u0AA8\x071\x02\x02\u0AA8\u0AAA\x05" +
		"\f\x07\x02\u0AA9\u0A9A\x03\x02\x02\x02\u0AA9\u0A9D\x03\x02\x02\x02\u0AA9" +
		"\u0AA0\x03\x02\x02\x02\u0AA9\u0AA3\x03\x02\x02\x02\u0AA9\u0AA6\x03\x02" +
		"\x02\x02\u0AAA\u0AAD\x03\x02\x02\x02\u0AAB\u0AA9\x03\x02\x02\x02\u0AAB" +
		"\u0AAC\x03\x02\x02\x02\u0AAC\u01BF\x03\x02\x02\x02\u0AAD\u0AAB\x03\x02" +
		"\x02\x02\u0AAE\u0AAF\b\xE1\x01\x02\u0AAF\u0AB0\x05\u01C2\xE2\x02\u0AB0" +
		"\u0AC0\x03\x02\x02\x02\u0AB1\u0AB2\f\x05\x02\x02\u0AB2\u0AB3\x07[\x02" +
		"\x02\u0AB3\u0AB4\x07[\x02\x02\u0AB4\u0ABF\x05\u01C2\xE2\x02\u0AB5\u0AB6" +
		"\f\x04\x02\x02\u0AB6\u0AB7\x07Z\x02\x02\u0AB7\u0AB8\x07Z\x02\x02\u0AB8" +
		"\u0ABF\x05\u01C2\xE2\x02\u0AB9\u0ABA\f\x03\x02\x02\u0ABA\u0ABB\x07Z\x02" +
		"\x02\u0ABB\u0ABC\x07Z\x02\x02\u0ABC\u0ABD\x07Z\x02\x02\u0ABD\u0ABF\x05" +
		"\u01C2\xE2\x02\u0ABE\u0AB1\x03\x02\x02\x02\u0ABE\u0AB5\x03\x02\x02\x02" +
		"\u0ABE\u0AB9\x03\x02\x02\x02\u0ABF\u0AC2\x03\x02\x02\x02\u0AC0\u0ABE\x03" +
		"\x02\x02\x02\u0AC0\u0AC1\x03\x02\x02\x02\u0AC1\u01C1\x03\x02\x02\x02\u0AC2" +
		"\u0AC0\x03\x02\x02\x02\u0AC3\u0AC4\b\xE2\x01\x02\u0AC4\u0AC5\x05\u01C4" +
		"\xE3\x02\u0AC5\u0ACE\x03\x02\x02\x02\u0AC6\u0AC7\f\x04\x02\x02\u0AC7\u0AC8" +
		"\x07h\x02\x02\u0AC8\u0ACD\x05\u01C4\xE3\x02\u0AC9\u0ACA\f\x03\x02\x02" +
		"\u0ACA\u0ACB\x07i\x02\x02\u0ACB\u0ACD\x05\u01C4\xE3\x02\u0ACC\u0AC6\x03" +
		"\x02\x02\x02\u0ACC\u0AC9\x03\x02\x02\x02\u0ACD\u0AD0\x03\x02\x02\x02\u0ACE" +
		"\u0ACC\x03\x02\x02\x02\u0ACE\u0ACF\x03\x02\x02\x02\u0ACF\u01C3\x03\x02" +
		"\x02\x02\u0AD0\u0ACE\x03\x02\x02\x02\u0AD1\u0AD2\b\xE3\x01\x02\u0AD2\u0AD3" +
		"\x05\u01C6\xE4\x02\u0AD3\u0ADF\x03\x02\x02\x02\u0AD4\u0AD5\f\x05\x02\x02" +
		"\u0AD5\u0AD6\x07j\x02\x02\u0AD6\u0ADE\x05\u01C6\xE4\x02\u0AD7\u0AD8\f" +
		"\x04\x02\x02\u0AD8\u0AD9\x07k\x02\x02\u0AD9\u0ADE\x05\u01C6\xE4\x02\u0ADA" +
		"\u0ADB\f\x03\x02\x02\u0ADB\u0ADC\x07o\x02\x02\u0ADC\u0ADE\x05\u01C6\xE4" +
		"\x02\u0ADD\u0AD4\x03\x02\x02\x02\u0ADD\u0AD7\x03\x02\x02\x02\u0ADD\u0ADA" +
		"\x03\x02\x02\x02\u0ADE\u0AE1\x03\x02\x02\x02\u0ADF\u0ADD\x03\x02\x02\x02" +
		"\u0ADF\u0AE0\x03\x02\x02\x02\u0AE0\u01C5\x03\x02\x02\x02\u0AE1\u0ADF\x03" +
		"\x02\x02\x02\u0AE2\u0AEA\x05\u01C8\xE5\x02\u0AE3\u0AEA\x05\u01CA\xE6\x02" +
		"\u0AE4\u0AE5\x07h\x02\x02\u0AE5\u0AEA\x05\u01C6\xE4\x02\u0AE6\u0AE7\x07" +
		"i\x02\x02\u0AE7\u0AEA\x05\u01C6\xE4\x02\u0AE8\u0AEA\x05\u01CC\xE7\x02" +
		"\u0AE9\u0AE2\x03\x02\x02\x02\u0AE9\u0AE3\x03\x02\x02\x02\u0AE9\u0AE4\x03" +
		"\x02\x02\x02\u0AE9\u0AE6\x03\x02\x02\x02\u0AE9\u0AE8\x03\x02\x02\x02\u0AEA" +
		"\u01C7\x03\x02\x02\x02\u0AEB\u0AEC\x07f\x02";
	private static readonly _serializedATNSegment5: string =
		"\x02\u0AEC\u0AED\x05\u01C6\xE4\x02\u0AED\u01C9\x03\x02\x02\x02\u0AEE\u0AEF" +
		"\x07g\x02\x02\u0AEF\u0AF0\x05\u01C6\xE4\x02\u0AF0\u01CB\x03\x02\x02\x02" +
		"\u0AF1\u0AF8\x05\u01CE\xE8\x02\u0AF2\u0AF3\x07]\x02\x02\u0AF3\u0AF8\x05" +
		"\u01C6\xE4\x02\u0AF4\u0AF5\x07\\\x02\x02\u0AF5\u0AF8\x05\u01C6\xE4\x02" +
		"\u0AF6\u0AF8\x05\u01D8\xED\x02\u0AF7\u0AF1\x03\x02\x02\x02\u0AF7\u0AF2" +
		"\x03\x02\x02\x02\u0AF7\u0AF4\x03\x02\x02\x02\u0AF7\u0AF6\x03\x02\x02\x02" +
		"\u0AF8\u01CD\x03\x02\x02\x02\u0AF9\u0AFC\x05\u0160\xB1\x02\u0AFA\u0AFC" +
		"\x05:\x1E\x02\u0AFB\u0AF9\x03\x02\x02\x02\u0AFB\u0AFA\x03\x02\x02\x02" +
		"\u0AFC\u0B01\x03\x02\x02\x02\u0AFD\u0B00\x05\u01D2\xEA\x02\u0AFE\u0B00" +
		"\x05\u01D6\xEC\x02\u0AFF\u0AFD\x03\x02\x02\x02\u0AFF\u0AFE\x03\x02\x02" +
		"\x02\u0B00\u0B03\x03\x02\x02\x02\u0B01\u0AFF\x03\x02\x02\x02\u0B01\u0B02" +
		"\x03\x02\x02\x02\u0B02\u01CF\x03\x02\x02\x02\u0B03\u0B01\x03\x02\x02\x02" +
		"\u0B04\u0B05\x05\u01CE\xE8\x02\u0B05\u0B06\x07f\x02\x02\u0B06\u01D1\x03" +
		"\x02\x02\x02\u0B07\u0B08\x07f\x02\x02\u0B08\u01D3\x03\x02\x02\x02\u0B09" +
		"\u0B0A\x05\u01CE\xE8\x02\u0B0A\u0B0B\x07g\x02\x02\u0B0B\u01D5\x03\x02" +
		"\x02\x02\u0B0C\u0B0D\x07g\x02\x02\u0B0D\u01D7\x03\x02\x02\x02\u0B0E\u0B0F" +
		"\x07P\x02\x02\u0B0F\u0B10\x05\x04\x03\x02\u0B10\u0B11\x07Q\x02\x02\u0B11" +
		"\u0B12\x05\u01C6\xE4\x02\u0B12\u0B2A\x03\x02\x02\x02\u0B13\u0B14\x07P" +
		"\x02\x02\u0B14\u0B18\x05\f\x07\x02\u0B15\u0B17\x05(\x15\x02\u0B16\u0B15" +
		"\x03\x02\x02\x02\u0B17\u0B1A\x03\x02\x02\x02\u0B18\u0B16\x03\x02\x02\x02" +
		"\u0B18\u0B19\x03\x02\x02\x02\u0B19\u0B1B\x03\x02\x02\x02\u0B1A\u0B18\x03" +
		"\x02\x02\x02\u0B1B\u0B1C\x07Q\x02\x02\u0B1C\u0B1D\x05\u01CC\xE7\x02\u0B1D" +
		"\u0B2A\x03\x02\x02\x02\u0B1E\u0B1F\x07P\x02\x02\u0B1F\u0B23\x05\f\x07" +
		"\x02\u0B20\u0B22\x05(\x15\x02\u0B21\u0B20\x03\x02\x02\x02\u0B22\u0B25" +
		"\x03\x02\x02\x02\u0B23\u0B21\x03\x02\x02\x02\u0B23\u0B24\x03\x02\x02\x02" +
		"\u0B24\u0B26\x03\x02\x02\x02\u0B25\u0B23\x03\x02\x02\x02\u0B26\u0B27\x07" +
		"Q\x02\x02\u0B27\u0B28\x05\u01A0\xD1\x02\u0B28\u0B2A\x03\x02\x02\x02\u0B29" +
		"\u0B0E\x03\x02\x02\x02\u0B29\u0B13\x03\x02\x02\x02\u0B29\u0B1E\x03\x02" +
		"\x02\x02\u0B2A\u01D9\x03\x02\x02\x02\u0B2B\u0B2D\x05\u01DC\xEF\x02\u0B2C" +
		"\u0B2B\x03\x02\x02\x02\u0B2C\u0B2D\x03\x02\x02\x02\u0B2D\u0B31\x03\x02" +
		"\x02\x02\u0B2E\u0B30\x05\u01E8\xF5\x02\u0B2F\u0B2E\x03\x02\x02\x02\u0B30" +
		"\u0B33\x03\x02\x02\x02\u0B31\u0B2F\x03\x02\x02\x02\u0B31\u0B32\x03\x02" +
		"\x02\x02\u0B32\u0B34\x03\x02\x02\x02\u0B33\u0B31\x03\x02\x02\x02\u0B34" +
		"\u0B38\x05\u01E0\xF1\x02\u0B35\u0B37\x05\u01E8\xF5\x02\u0B36\u0B35\x03" +
		"\x02\x02\x02\u0B37\u0B3A\x03\x02\x02\x02\u0B38\u0B36\x03\x02\x02\x02\u0B38" +
		"\u0B39\x03\x02\x02\x02\u0B39\u01DB\x03\x02\x02\x02\u0B3A\u0B38\x03\x02" +
		"\x02\x02\u0B3B\u0B3F\x07\n\x02\x02\u0B3C\u0B3E\x05\u01E4\xF3\x02\u0B3D" +
		"\u0B3C\x03\x02\x02\x02\u0B3E\u0B41\x03\x02\x02\x02\u0B3F\u0B3D\x03\x02" +
		"\x02\x02\u0B3F\u0B40\x03\x02\x02\x02\u0B40\u0B42\x03\x02\x02\x02\u0B41" +
		"\u0B3F\x03\x02\x02\x02\u0B42\u0B43\x07\r\x02\x02\u0B43\u01DD\x03\x02\x02" +
		"\x02\u0B44\u0B46\x05\u01E6\xF4\x02\u0B45\u0B44\x03\x02\x02\x02\u0B45\u0B46" +
		"\x03\x02\x02\x02\u0B46\u0B52\x03\x02\x02\x02\u0B47\u0B4C\x05\u01E0\xF1" +
		"\x02\u0B48\u0B4C\x05\u01E2\xF2\x02\u0B49\u0B4C\x07\x14\x02\x02\u0B4A\u0B4C" +
		"\x07\x03\x02\x02\u0B4B\u0B47\x03\x02\x02\x02\u0B4B\u0B48\x03\x02\x02\x02" +
		"\u0B4B\u0B49\x03\x02\x02\x02\u0B4B\u0B4A\x03\x02\x02\x02\u0B4C\u0B4E\x03" +
		"\x02\x02\x02\u0B4D\u0B4F\x05\u01E6\xF4\x02\u0B4E\u0B4D\x03\x02\x02\x02" +
		"\u0B4E\u0B4F\x03\x02\x02\x02\u0B4F\u0B51\x03\x02\x02\x02\u0B50\u0B4B\x03" +
		"\x02\x02\x02\u0B51\u0B54\x03\x02\x02\x02\u0B52\u0B50\x03\x02\x02\x02\u0B52" +
		"\u0B53\x03\x02\x02\x02\u0B53\u01DF\x03\x02\x02\x02\u0B54\u0B52\x03\x02" +
		"\x02\x02\u0B55\u0B56\x07\t\x02\x02\u0B56\u0B5A\x07\x12\x02\x02\u0B57\u0B59" +
		"\x05\u01E4\xF3\x02\u0B58\u0B57\x03\x02\x02\x02\u0B59\u0B5C\x03\x02\x02" +
		"\x02\u0B5A\u0B58\x03\x02\x02\x02\u0B5A\u0B5B\x03\x02\x02\x02\u0B5B\u0B5D" +
		"\x03\x02\x02\x02\u0B5C\u0B5A\x03\x02\x02\x02\u0B5D\u0B5E\x07\f\x02\x02" +
		"\u0B5E\u0B5F\x05\u01DE\xF0\x02\u0B5F\u0B60\x07\t\x02\x02\u0B60\u0B61\x07" +
		"\x0F\x02\x02\u0B61\u0B62\x07\x12\x02\x02\u0B62\u0B63\x07\f\x02\x02\u0B63" +
		"\u0B78\x03\x02\x02\x02\u0B64\u0B65\x07\t\x02\x02\u0B65\u0B69\x07\x12\x02" +
		"\x02\u0B66\u0B68\x05\u01E4\xF3\x02\u0B67\u0B66\x03\x02\x02\x02\u0B68\u0B6B" +
		"\x03\x02\x02\x02\u0B69\u0B67\x03\x02\x02\x02\u0B69\u0B6A\x03\x02\x02\x02" +
		"\u0B6A\u0B6C\x03\x02\x02\x02\u0B6B\u0B69\x03\x02\x02\x02\u0B6C\u0B78\x07" +
		"\x0E\x02\x02\u0B6D\u0B6E\x07\x04\x02\x02\u0B6E\u0B6F\x07\x16\x02\x02\u0B6F" +
		"\u0B70\x05@!\x02\u0B70\u0B71\x07\x17\x02\x02\u0B71\u0B72\x07\x15\x02\x02" +
		"\u0B72\u0B78\x03\x02\x02\x02\u0B73\u0B74\x07\x04\x02\x02\u0B74\u0B75\x05" +
		"@!\x02\u0B75\u0B76\x07\x15\x02\x02\u0B76\u0B78\x03\x02\x02\x02\u0B77\u0B55" +
		"\x03\x02\x02\x02\u0B77\u0B64\x03\x02\x02\x02\u0B77\u0B6D\x03\x02\x02\x02" +
		"\u0B77\u0B73\x03\x02\x02\x02\u0B78\u01E1\x03\x02\x02\x02\u0B79\u0B7A\t" +
		"\x06\x02\x02\u0B7A\u01E3\x03\x02\x02\x02\u0B7B\u0B7C\x07\x12\x02\x02\u0B7C" +
		"\u0B7D\x07\x10\x02\x02\u0B7D\u0B7E\x07\x11\x02\x02\u0B7E\u01E5\x03\x02" +
		"\x02\x02\u0B7F\u0B80\t\x07\x02\x02\u0B80\u01E7\x03\x02\x02\x02\u0B81\u0B82" +
		"\t\b\x02\x02\u0B82\u01E9\x03\x02\x02\x02\u014E\u01EF\u01F6\u01FA\u01FE" +
		"\u0207\u020B\u020F\u0211\u0217\u021C\u0223\u0228\u022A\u0230\u0235\u023A" +
		"\u023F\u024A\u0258\u025D\u0265\u026C\u0272\u0277\u0282\u0285\u0293\u0298" +
		"\u029D\u02A2\u02A8\u02B2\u02BA\u02C4\u02CC\u02D8\u02DE\u02E4\u02EC\u02F9" +
		"\u0316\u031A\u031F\u0325\u0328\u032B\u0337\u0342\u0350\u0357\u0360\u0367" +
		"\u036C\u037B\u0382\u0388\u038C\u0390\u0394\u0398\u039D\u03A1\u03A5\u03A7" +
		"\u03AC\u03B3\u03B8\u03BA\u03C0\u03C5\u03C9\u03DC\u03E1\u03F1\u03F6\u03FC" +
		"\u0402\u0404\u0408\u040D\u0411\u0419\u0420\u0428\u042B\u0430\u0438\u043D" +
		"\u0444\u044B\u0450\u0456\u0462\u0467\u046B\u0475\u047A\u0482\u0485\u048A" +
		"\u0492\u0495\u049A\u049F\u04A4\u04A9\u04B0\u04B5\u04BD\u04C2\u04C7\u04CC" +
		"\u04D2\u04D8\u04DB\u04DE\u04E7\u04ED\u04F3\u04F6\u04F9\u0501\u0506\u050B" +
		"\u0511\u0514\u051F\u0528\u0532\u0537\u0542\u0547\u0553\u0558\u0564\u056E" +
		"\u0573\u057B\u057E\u0585\u058D\u0593\u059C\u05A6\u05AA\u05AD\u05B6\u05C4" +
		"\u05C7\u05D0\u05D5\u05DC\u05E2\u05EA\u05F6\u05FD\u060B\u0621\u0643\u064F" +
		"\u0655\u0661\u066E\u0688\u068C\u0691\u0695\u0699\u06A1\u06A5\u06A9\u06B0" +
		"\u06B9\u06C1\u06D0\u06DC\u06E2\u06E8\u06FD\u0702\u0708\u0714\u071F\u0729" +
		"\u072C\u0731\u073A\u0740\u074A\u074F\u0758\u076F\u0779\u078F\u0796\u079E" +
		"\u07A6\u07B1\u07C8\u07D2\u07DD\u07F3\u07F7\u07FC\u0804\u080A\u080E\u0812" +
		"\u0816\u081C\u0821\u0826\u082A\u082E\u0834\u0839\u083E\u0842\u0846\u0848" +
		"\u084D\u0852\u0857\u085B\u085F\u0863\u0868\u0870\u0876\u087A\u087E\u0882" +
		"\u0888\u088D\u0892\u0896\u089A\u089C\u08A1\u08B0\u08BE\u08CA\u08D3\u08E2" +
		"\u08EF\u08F8\u08FE\u0905\u090A\u0911\u0916\u091D\u0922\u0929\u092E\u0936" +
		"\u093B\u093F\u0943\u0948\u094F\u0956\u095B\u0962\u0967\u096E\u0973\u097B" +
		"\u0980\u0984\u098B\u0991\u0998\u099F\u09A6\u09AE\u09B5\u09BD\u09C1\u09C8" +
		"\u09CF\u09D6\u09DE\u09E5\u09ED\u09F3\u09F9\u0A05\u0A0B\u0A11\u0A1C\u0A25" +
		"\u0A2C\u0A33\u0A38\u0A3C\u0A45\u0A50\u0A5A\u0A65\u0A70\u0A7B\u0A86\u0A92" +
		"\u0A94\u0AA9\u0AAB\u0ABE\u0AC0\u0ACC\u0ACE\u0ADD\u0ADF\u0AE9\u0AF7\u0AFB" +
		"\u0AFF\u0B01\u0B18\u0B23\u0B29\u0B2C\u0B31\u0B38\u0B3F\u0B45\u0B4B\u0B4E" +
		"\u0B52\u0B5A\u0B69\u0B77";
	public static readonly _serializedATN: string = Utils.join(
		[
			SPBSParser._serializedATNSegment0,
			SPBSParser._serializedATNSegment1,
			SPBSParser._serializedATNSegment2,
			SPBSParser._serializedATNSegment3,
			SPBSParser._serializedATNSegment4,
			SPBSParser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SPBSParser.__ATN) {
			SPBSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SPBSParser._serializedATN));
		}

		return SPBSParser.__ATN;
	}

}

export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FloatingPointLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BooleanLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.StringLiteral, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_literal; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericTypeContext extends ParserRuleContext {
	public integralType(): IntegralTypeContext | undefined {
		return this.tryGetRuleContext(0, IntegralTypeContext);
	}
	public floatingPointType(): FloatingPointTypeContext | undefined {
		return this.tryGetRuleContext(0, FloatingPointTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_numericType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterNumericType) {
			listener.enterNumericType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitNumericType) {
			listener.exitNumericType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitNumericType) {
			return visitor.visitNumericType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegralTypeContext extends ParserRuleContext {
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LONG, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_integralType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterIntegralType) {
			listener.enterIntegralType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitIntegralType) {
			listener.exitIntegralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitIntegralType) {
			return visitor.visitIntegralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointTypeContext extends ParserRuleContext {
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_floatingPointType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFloatingPointType) {
			listener.enterFloatingPointType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFloatingPointType) {
			listener.exitFloatingPointType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFloatingPointType) {
			return visitor.visitFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_referenceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterReferenceType) {
			listener.enterReferenceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitReferenceType) {
			listener.exitReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitReferenceType) {
			return visitor.visitReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
	}
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, InterfaceType_lfno_classOrInterfaceTypeContext);
	}
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext[];
	public classType_lf_classOrInterfaceType(i: number): ClassType_lf_classOrInterfaceTypeContext;
	public classType_lf_classOrInterfaceType(i?: number): ClassType_lf_classOrInterfaceTypeContext | ClassType_lf_classOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassType_lf_classOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, ClassType_lf_classOrInterfaceTypeContext);
		}
	}
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext[];
	public interfaceType_lf_classOrInterfaceType(i: number): InterfaceType_lf_classOrInterfaceTypeContext;
	public interfaceType_lf_classOrInterfaceType(i?: number): InterfaceType_lf_classOrInterfaceTypeContext | InterfaceType_lf_classOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceType_lf_classOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceType_lf_classOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassType) {
			listener.enterClassType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassType) {
			listener.exitClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(SPBSParser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classType_lf_classOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassType_lf_classOrInterfaceType) {
			listener.enterClassType_lf_classOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassType_lf_classOrInterfaceType) {
			listener.exitClassType_lf_classOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassType_lf_classOrInterfaceType) {
			return visitor.visitClassType_lf_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classType_lfno_classOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassType_lfno_classOrInterfaceType) {
			listener.enterClassType_lfno_classOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassType_lfno_classOrInterfaceType) {
			listener.exitClassType_lfno_classOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassType_lfno_classOrInterfaceType) {
			return visitor.visitClassType_lfno_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceType) {
			listener.enterInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceType) {
			listener.exitInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType) {
			return visitor.visitInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassType_lf_classOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceType_lf_classOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceType_lf_classOrInterfaceType) {
			listener.enterInterfaceType_lf_classOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceType_lf_classOrInterfaceType) {
			listener.exitInterfaceType_lf_classOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType_lf_classOrInterfaceType) {
			return visitor.visitInterfaceType_lf_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceType_lfno_classOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceType_lfno_classOrInterfaceType) {
			listener.enterInterfaceType_lfno_classOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceType_lfno_classOrInterfaceType) {
			listener.exitInterfaceType_lfno_classOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType_lfno_classOrInterfaceType) {
			return visitor.visitInterfaceType_lfno_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVariableContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeVariable; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeVariable) {
			listener.enterTypeVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeVariable) {
			listener.exitTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeVariable) {
			return visitor.visitTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimsContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LBRACK);
		} else {
			return this.getToken(SPBSParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_dims; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterDims) {
			listener.enterDims(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitDims) {
			listener.exitDims(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitDims) {
			return visitor.visitDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public typeParameterModifier(): TypeParameterModifierContext[];
	public typeParameterModifier(i: number): TypeParameterModifierContext;
	public typeParameterModifier(i?: number): TypeParameterModifierContext | TypeParameterModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterModifierContext);
		} else {
			return this.getRuleContext(i, TypeParameterModifierContext);
		}
	}
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeParameterModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeParameterModifier) {
			listener.enterTypeParameterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeParameterModifier) {
			listener.exitTypeParameterModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterModifier) {
			return visitor.visitTypeParameterModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(SPBSParser.EXTENDS, 0); }
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeBound; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionalBoundContext extends ParserRuleContext {
	public BITAND(): TerminalNode { return this.getToken(SPBSParser.BITAND, 0); }
	public interfaceType(): InterfaceTypeContext {
		return this.getRuleContext(0, InterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_additionalBound; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAdditionalBound) {
			listener.enterAdditionalBound(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAdditionalBound) {
			listener.exitAdditionalBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAdditionalBound) {
			return visitor.visitAdditionalBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(SPBSParser.LT, 0); }
	public typeArgumentList(): TypeArgumentListContext {
		return this.getRuleContext(0, TypeArgumentListContext);
	}
	public GT(): TerminalNode { return this.getToken(SPBSParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeArgumentList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeArgumentList) {
			listener.enterTypeArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeArgumentList) {
			listener.exitTypeArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentList) {
			return visitor.visitTypeArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public wildcard(): WildcardContext | undefined {
		return this.tryGetRuleContext(0, WildcardContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardContext extends ParserRuleContext {
	public QUESTION(): TerminalNode { return this.getToken(SPBSParser.QUESTION, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public wildcardBounds(): WildcardBoundsContext | undefined {
		return this.tryGetRuleContext(0, WildcardBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_wildcard; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterWildcard) {
			listener.enterWildcard(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitWildcard) {
			listener.exitWildcard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitWildcard) {
			return visitor.visitWildcard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardBoundsContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.EXTENDS, 0); }
	public referenceType(): ReferenceTypeContext {
		return this.getRuleContext(0, ReferenceTypeContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_wildcardBounds; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterWildcardBounds) {
			listener.enterWildcardBounds(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitWildcardBounds) {
			listener.exitWildcardBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitWildcardBounds) {
			return visitor.visitWildcardBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_packageName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPackageName) {
			listener.enterPackageName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPackageName) {
			listener.exitPackageName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPackageName) {
			return visitor.visitPackageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_packageOrTypeName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPackageOrTypeName) {
			listener.enterPackageOrTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPackageOrTypeName) {
			listener.exitPackageOrTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPackageOrTypeName) {
			return visitor.visitPackageOrTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_expressionName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExpressionName) {
			listener.enterExpressionName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExpressionName) {
			listener.exitExpressionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExpressionName) {
			return visitor.visitExpressionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodName) {
			listener.enterMethodName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodName) {
			listener.exitMethodName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_ambiguousName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAmbiguousName) {
			listener.enterAmbiguousName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAmbiguousName) {
			listener.exitAmbiguousName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAmbiguousName) {
			return visitor.visitAmbiguousName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BsCompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SPBSParser.EOF, 0); }
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_bsCompilationUnit; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterBsCompilationUnit) {
			listener.enterBsCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitBsCompilationUnit) {
			listener.exitBsCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitBsCompilationUnit) {
			return visitor.visitBsCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(SPBSParser.PACKAGE, 0); }
	public packageName(): PackageNameContext {
		return this.getRuleContext(0, PackageNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public packageModifier(): PackageModifierContext[];
	public packageModifier(i: number): PackageModifierContext;
	public packageModifier(i?: number): PackageModifierContext | PackageModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageModifierContext);
		} else {
			return this.getRuleContext(i, PackageModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_packageModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPackageModifier) {
			listener.enterPackageModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPackageModifier) {
			listener.exitPackageModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPackageModifier) {
			return visitor.visitPackageModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleTypeImportDeclarationContext);
	}
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeImportOnDemandDeclarationContext);
	}
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleStaticImportDeclarationContext);
	}
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticImportOnDemandDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTypeImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(SPBSParser.IMPORT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_singleTypeImportDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSingleTypeImportDeclaration) {
			listener.enterSingleTypeImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSingleTypeImportDeclaration) {
			listener.exitSingleTypeImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSingleTypeImportDeclaration) {
			return visitor.visitSingleTypeImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeImportOnDemandDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(SPBSParser.IMPORT, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getRuleContext(0, PackageOrTypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(SPBSParser.DOT, 0); }
	public MUL(): TerminalNode { return this.getToken(SPBSParser.MUL, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeImportOnDemandDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeImportOnDemandDeclaration) {
			listener.enterTypeImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeImportOnDemandDeclaration) {
			listener.exitTypeImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeImportOnDemandDeclaration) {
			return visitor.visitTypeImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStaticImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(SPBSParser.IMPORT, 0); }
	public STATIC(): TerminalNode { return this.getToken(SPBSParser.STATIC, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(SPBSParser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_singleStaticImportDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSingleStaticImportDeclaration) {
			listener.enterSingleStaticImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSingleStaticImportDeclaration) {
			listener.exitSingleStaticImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSingleStaticImportDeclaration) {
			return visitor.visitSingleStaticImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticImportOnDemandDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(SPBSParser.IMPORT, 0); }
	public STATIC(): TerminalNode { return this.getToken(SPBSParser.STATIC, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(SPBSParser.DOT, 0); }
	public MUL(): TerminalNode { return this.getToken(SPBSParser.MUL, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_staticImportOnDemandDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterStaticImportOnDemandDeclaration) {
			listener.enterStaticImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitStaticImportOnDemandDeclaration) {
			listener.exitStaticImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitStaticImportOnDemandDeclaration) {
			return visitor.visitStaticImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public normalClassDeclaration(): NormalClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(SPBSParser.CLASS, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public superclass(): SuperclassContext | undefined {
		return this.tryGetRuleContext(0, SuperclassContext);
	}
	public superinterfaces(): SuperinterfacesContext | undefined {
		return this.tryGetRuleContext(0, SuperinterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_normalClassDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterNormalClassDeclaration) {
			listener.enterNormalClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitNormalClassDeclaration) {
			listener.exitNormalClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitNormalClassDeclaration) {
			return visitor.visitNormalClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassModifier) {
			listener.enterClassModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassModifier) {
			listener.exitClassModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassModifier) {
			return visitor.visitClassModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(SPBSParser.LT, 0); }
	public typeParameterList(): TypeParameterListContext {
		return this.getRuleContext(0, TypeParameterListContext);
	}
	public GT(): TerminalNode { return this.getToken(SPBSParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeParameterList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeParameterList) {
			listener.enterTypeParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeParameterList) {
			listener.exitTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterList) {
			return visitor.visitTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperclassContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(SPBSParser.EXTENDS, 0); }
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_superclass; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSuperclass) {
			listener.enterSuperclass(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSuperclass) {
			listener.exitSuperclass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSuperclass) {
			return visitor.visitSuperclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperinterfacesContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(SPBSParser.IMPLEMENTS, 0); }
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_superinterfaces; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSuperinterfaces) {
			listener.enterSuperinterfaces(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSuperinterfaces) {
			listener.exitSuperinterfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSuperinterfaces) {
			return visitor.visitSuperinterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeListContext extends ParserRuleContext {
	public interfaceType(): InterfaceTypeContext[];
	public interfaceType(i: number): InterfaceTypeContext;
	public interfaceType(i?: number): InterfaceTypeContext | InterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceTypeList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceTypeList) {
			listener.enterInterfaceTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceTypeList) {
			listener.exitInterfaceTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceTypeList) {
			return visitor.visitInterfaceTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classBody; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public classMemberDeclaration(): ClassMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassMemberDeclarationContext);
	}
	public instanceInitializer(): InstanceInitializerContext | undefined {
		return this.tryGetRuleContext(0, InstanceInitializerContext);
	}
	public staticInitializer(): StaticInitializerContext | undefined {
		return this.tryGetRuleContext(0, StaticInitializerContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDeclarationContext extends ParserRuleContext {
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classMemberDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassMemberDeclaration) {
			listener.enterClassMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassMemberDeclaration) {
			listener.exitClassMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassMemberDeclaration) {
			return visitor.visitClassMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public fieldModifier(): FieldModifierContext[];
	public fieldModifier(i: number): FieldModifierContext;
	public fieldModifier(i?: number): FieldModifierContext | FieldModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldModifierContext);
		} else {
			return this.getRuleContext(i, FieldModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FINAL, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_fieldModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFieldModifier) {
			listener.enterFieldModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFieldModifier) {
			listener.exitFieldModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFieldModifier) {
			return visitor.visitFieldModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorListContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_variableDeclaratorList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterVariableDeclaratorList) {
			listener.enterVariableDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitVariableDeclaratorList) {
			listener.exitVariableDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorList) {
			return visitor.visitVariableDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public unannReferenceType(): UnannReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannType) {
			listener.enterUnannType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannType) {
			listener.exitUnannType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannType) {
			return visitor.visitUnannType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannPrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannPrimitiveType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannPrimitiveType) {
			listener.enterUnannPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannPrimitiveType) {
			listener.exitUnannPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannPrimitiveType) {
			return visitor.visitUnannPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannReferenceTypeContext extends ParserRuleContext {
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	public unannArrayType(): UnannArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannReferenceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannReferenceType) {
			listener.enterUnannReferenceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannReferenceType) {
			listener.exitUnannReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannReferenceType) {
			return visitor.visitUnannReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
	}
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext);
	}
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext[];
	public unannClassType_lf_unannClassOrInterfaceType(i: number): UnannClassType_lf_unannClassOrInterfaceTypeContext;
	public unannClassType_lf_unannClassOrInterfaceType(i?: number): UnannClassType_lf_unannClassOrInterfaceTypeContext | UnannClassType_lf_unannClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnannClassType_lf_unannClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, UnannClassType_lf_unannClassOrInterfaceTypeContext);
		}
	}
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[];
	public unannInterfaceType_lf_unannClassOrInterfaceType(i: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext;
	public unannInterfaceType_lf_unannClassOrInterfaceType(i?: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext | UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannClassOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannClassOrInterfaceType) {
			listener.enterUnannClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannClassOrInterfaceType) {
			listener.exitUnannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannClassOrInterfaceType) {
			return visitor.visitUnannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannClassType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannClassType) {
			listener.enterUnannClassType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannClassType) {
			listener.exitUnannClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType) {
			return visitor.visitUnannClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(SPBSParser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannClassType_lf_unannClassOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannClassType_lf_unannClassOrInterfaceType) {
			listener.enterUnannClassType_lf_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannClassType_lf_unannClassOrInterfaceType) {
			listener.exitUnannClassType_lf_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType_lf_unannClassOrInterfaceType) {
			return visitor.visitUnannClassType_lf_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannClassType_lfno_unannClassOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannClassType_lfno_unannClassOrInterfaceType) {
			listener.enterUnannClassType_lfno_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannClassType_lfno_unannClassOrInterfaceType) {
			listener.exitUnannClassType_lfno_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType_lfno_unannClassOrInterfaceType) {
			return visitor.visitUnannClassType_lfno_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannInterfaceType) {
			listener.enterUnannInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannInterfaceType) {
			listener.exitUnannInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType) {
			return visitor.visitUnannInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		return this.getRuleContext(0, UnannClassType_lf_unannClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannInterfaceType_lf_unannClassOrInterfaceType) {
			listener.enterUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannInterfaceType_lf_unannClassOrInterfaceType) {
			listener.exitUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType_lf_unannClassOrInterfaceType) {
			return visitor.visitUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		return this.getRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannInterfaceType_lfno_unannClassOrInterfaceType) {
			listener.enterUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannInterfaceType_lfno_unannClassOrInterfaceType) {
			listener.exitUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType_lfno_unannClassOrInterfaceType) {
			return visitor.visitUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeVariableContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannTypeVariable; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannTypeVariable) {
			listener.enterUnannTypeVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannTypeVariable) {
			listener.exitUnannTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannTypeVariable) {
			return visitor.visitUnannTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannArrayTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unannArrayType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnannArrayType) {
			listener.enterUnannArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnannArrayType) {
			listener.exitUnannArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnannArrayType) {
			return visitor.visitUnannArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public methodModifier(): MethodModifierContext[];
	public methodModifier(i: number): MethodModifierContext;
	public methodModifier(i?: number): MethodModifierContext | MethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodModifierContext);
		} else {
			return this.getRuleContext(i, MethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FINAL, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SYNCHRONIZED, 0); }
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NATIVE, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodModifier) {
			listener.enterMethodModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodModifier) {
			listener.exitMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodModifier) {
			return visitor.visitMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodHeaderContext extends ParserRuleContext {
	public result(): ResultContext {
		return this.getRuleContext(0, ResultContext);
	}
	public methodDeclarator(): MethodDeclaratorContext {
		return this.getRuleContext(0, MethodDeclaratorContext);
	}
	public throws_(): Throws_Context | undefined {
		return this.tryGetRuleContext(0, Throws_Context);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodHeader; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodHeader) {
			listener.enterMethodHeader(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodHeader) {
			listener.exitMethodHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodHeader) {
			return visitor.visitMethodHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_result; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodDeclarator; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodDeclarator) {
			listener.enterMethodDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodDeclarator) {
			listener.exitMethodDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclarator) {
			return visitor.visitMethodDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COMMA, 0); }
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FINAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ELLIPSIS, 0); }
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public formalParameter(): FormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_lastFormalParameter; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLastFormalParameter) {
			listener.enterLastFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLastFormalParameter) {
			listener.exitLastFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameter) {
			return visitor.visitLastFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public THIS(): TerminalNode { return this.getToken(SPBSParser.THIS, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.Identifier, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_receiverParameter; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterReceiverParameter) {
			listener.enterReceiverParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitReceiverParameter) {
			listener.exitReceiverParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitReceiverParameter) {
			return visitor.visitReceiverParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Throws_Context extends ParserRuleContext {
	public THROWS(): TerminalNode { return this.getToken(SPBSParser.THROWS, 0); }
	public exceptionTypeList(): ExceptionTypeListContext {
		return this.getRuleContext(0, ExceptionTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_throws_; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterThrows_) {
			listener.enterThrows_(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitThrows_) {
			listener.exitThrows_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitThrows_) {
			return visitor.visitThrows_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeListContext extends ParserRuleContext {
	public exceptionType(): ExceptionTypeContext[];
	public exceptionType(i: number): ExceptionTypeContext;
	public exceptionType(i?: number): ExceptionTypeContext | ExceptionTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExceptionTypeContext);
		} else {
			return this.getRuleContext(i, ExceptionTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_exceptionTypeList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExceptionTypeList) {
			listener.enterExceptionTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExceptionTypeList) {
			listener.exitExceptionTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExceptionTypeList) {
			return visitor.visitExceptionTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_exceptionType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExceptionType) {
			listener.enterExceptionType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExceptionType) {
			listener.exitExceptionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExceptionType) {
			return visitor.visitExceptionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodBody; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceInitializerContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_instanceInitializer; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInstanceInitializer) {
			listener.enterInstanceInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInstanceInitializer) {
			listener.exitInstanceInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInstanceInitializer) {
			return visitor.visitInstanceInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticInitializerContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(SPBSParser.STATIC, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_staticInitializer; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterStaticInitializer) {
			listener.enterStaticInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitStaticInitializer) {
			listener.exitStaticInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitStaticInitializer) {
			return visitor.visitStaticInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public constructorDeclarator(): ConstructorDeclaratorContext {
		return this.getRuleContext(0, ConstructorDeclaratorContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public constructorModifier(): ConstructorModifierContext[];
	public constructorModifier(i: number): ConstructorModifierContext;
	public constructorModifier(i?: number): ConstructorModifierContext | ConstructorModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstructorModifierContext);
		} else {
			return this.getRuleContext(i, ConstructorModifierContext);
		}
	}
	public throws_(): Throws_Context | undefined {
		return this.tryGetRuleContext(0, Throws_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_constructorModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstructorModifier) {
			listener.enterConstructorModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstructorModifier) {
			listener.exitConstructorModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstructorModifier) {
			return visitor.visitConstructorModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclaratorContext extends ParserRuleContext {
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getRuleContext(0, SimpleTypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_constructorDeclarator; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstructorDeclarator) {
			listener.enterConstructorDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstructorDeclarator) {
			listener.exitConstructorDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclarator) {
			return visitor.visitConstructorDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_simpleTypeName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSimpleTypeName) {
			listener.enterSimpleTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSimpleTypeName) {
			listener.exitSimpleTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSimpleTypeName) {
			return visitor.visitSimpleTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitConstructorInvocationContext);
	}
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_constructorBody; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstructorBody) {
			listener.enterConstructorBody(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstructorBody) {
			listener.exitConstructorBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstructorBody) {
			return visitor.visitConstructorBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THIS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_explicitConstructorInvocation; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExplicitConstructorInvocation) {
			listener.enterExplicitConstructorInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExplicitConstructorInvocation) {
			listener.exitExplicitConstructorInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExplicitConstructorInvocation) {
			return visitor.visitExplicitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(SPBSParser.ENUM, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public superinterfaces(): SuperinterfacesContext | undefined {
		return this.tryGetRuleContext(0, SuperinterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public enumConstantList(): EnumConstantListContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enumBody; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantListContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enumConstantList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnumConstantList) {
			listener.enterEnumConstantList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnumConstantList) {
			listener.exitEnumConstantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantList) {
			return visitor.visitEnumConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public enumConstantModifier(): EnumConstantModifierContext[];
	public enumConstantModifier(i: number): EnumConstantModifierContext;
	public enumConstantModifier(i?: number): EnumConstantModifierContext | EnumConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantModifierContext);
		} else {
			return this.getRuleContext(i, EnumConstantModifierContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enumConstantModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnumConstantModifier) {
			listener.enterEnumConstantModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnumConstantModifier) {
			listener.exitEnumConstantModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantModifier) {
			return visitor.visitEnumConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enumBodyDeclarations; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnumBodyDeclarations) {
			listener.enterEnumBodyDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnumBodyDeclarations) {
			listener.exitEnumBodyDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalInterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(SPBSParser.INTERFACE, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public extendsInterfaces(): ExtendsInterfacesContext | undefined {
		return this.tryGetRuleContext(0, ExtendsInterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_normalInterfaceDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterNormalInterfaceDeclaration) {
			listener.enterNormalInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitNormalInterfaceDeclaration) {
			listener.exitNormalInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitNormalInterfaceDeclaration) {
			return visitor.visitNormalInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceModifier) {
			listener.enterInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceModifier) {
			listener.exitInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceModifier) {
			return visitor.visitInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendsInterfacesContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(SPBSParser.EXTENDS, 0); }
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_extendsInterfaces; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExtendsInterfaces) {
			listener.enterExtendsInterfaces(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExtendsInterfaces) {
			listener.exitExtendsInterfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExtendsInterfaces) {
			return visitor.visitExtendsInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext[];
	public interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext;
	public interfaceMemberDeclaration(i?: number): InterfaceMemberDeclarationContext | InterfaceMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceMemberDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceMemberDeclaration) {
			listener.enterInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceMemberDeclaration) {
			listener.exitInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public constantModifier(): ConstantModifierContext[];
	public constantModifier(i: number): ConstantModifierContext;
	public constantModifier(i?: number): ConstantModifierContext | ConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantModifierContext);
		} else {
			return this.getRuleContext(i, ConstantModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_constantDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstantDeclaration) {
			listener.enterConstantDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstantDeclaration) {
			listener.exitConstantDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclaration) {
			return visitor.visitConstantDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FINAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_constantModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstantModifier) {
			listener.enterConstantModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstantModifier) {
			listener.exitConstantModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstantModifier) {
			return visitor.visitConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ABSTRACT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DEFAULT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceMethodModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceMethodModifier) {
			listener.enterInterfaceMethodModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceMethodModifier) {
			listener.exitInterfaceMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(SPBSParser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(SPBSParser.INTERFACE, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationTypeDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationTypeDeclaration) {
			listener.enterAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationTypeDeclaration) {
			listener.exitAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext[];
	public annotationTypeMemberDeclaration(i: number): AnnotationTypeMemberDeclarationContext;
	public annotationTypeMemberDeclaration(i?: number): AnnotationTypeMemberDeclarationContext | AnnotationTypeMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationTypeBody; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationTypeBody) {
			listener.enterAnnotationTypeBody(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationTypeBody) {
			listener.exitAnnotationTypeBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeMemberDeclarationContext extends ParserRuleContext {
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementDeclarationContext);
	}
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationTypeMemberDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationTypeMemberDeclaration) {
			listener.enterAnnotationTypeMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationTypeMemberDeclaration) {
			listener.exitAnnotationTypeMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeMemberDeclaration) {
			return visitor.visitAnnotationTypeMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext[];
	public annotationTypeElementModifier(i: number): AnnotationTypeElementModifierContext;
	public annotationTypeElementModifier(i?: number): AnnotationTypeElementModifierContext | AnnotationTypeElementModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementModifierContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementModifierContext);
		}
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationTypeElementDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationTypeElementDeclaration) {
			listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationTypeElementDeclaration) {
			listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ABSTRACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationTypeElementModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationTypeElementModifier) {
			listener.enterAnnotationTypeElementModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationTypeElementModifier) {
			listener.exitAnnotationTypeElementModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementModifier) {
			return visitor.visitAnnotationTypeElementModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(SPBSParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public normalAnnotation(): NormalAnnotationContext | undefined {
		return this.tryGetRuleContext(0, NormalAnnotationContext);
	}
	public markerAnnotation(): MarkerAnnotationContext | undefined {
		return this.tryGetRuleContext(0, MarkerAnnotationContext);
	}
	public singleElementAnnotation(): SingleElementAnnotationContext | undefined {
		return this.tryGetRuleContext(0, SingleElementAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotation; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(SPBSParser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public elementValuePairList(): ElementValuePairListContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_normalAnnotation; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterNormalAnnotation) {
			listener.enterNormalAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitNormalAnnotation) {
			listener.exitNormalAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitNormalAnnotation) {
			return visitor.visitNormalAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairListContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_elementValuePairList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterElementValuePairList) {
			listener.enterElementValuePairList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitElementValuePairList) {
			listener.exitElementValuePairList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairList) {
			return visitor.visitElementValuePairList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(SPBSParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public elementValueList(): ElementValueListContext | undefined {
		return this.tryGetRuleContext(0, ElementValueListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueListContext extends ParserRuleContext {
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_elementValueList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterElementValueList) {
			listener.enterElementValueList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitElementValueList) {
			listener.exitElementValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitElementValueList) {
			return visitor.visitElementValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MarkerAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(SPBSParser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_markerAnnotation; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMarkerAnnotation) {
			listener.enterMarkerAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMarkerAnnotation) {
			listener.exitMarkerAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMarkerAnnotation) {
			return visitor.visitMarkerAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleElementAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(SPBSParser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_singleElementAnnotation; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSingleElementAnnotation) {
			listener.enterSingleElementAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSingleElementAnnotation) {
			listener.exitSingleElementAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSingleElementAnnotation) {
			return visitor.visitSingleElementAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public variableInitializerList(): VariableInitializerListContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerListContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_variableInitializerList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterVariableInitializerList) {
			listener.enterVariableInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitVariableInitializerList) {
			listener.exitVariableInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializerList) {
			return visitor.visitVariableInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_block; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementsContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_blockStatements; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterBlockStatements) {
			listener.enterBlockStatements(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitBlockStatements) {
			listener.exitBlockStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitBlockStatements) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_localVariableDeclarationStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLocalVariableDeclarationStatement) {
			listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLocalVariableDeclarationStatement) {
			listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public ifThenStatement(): IfThenStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenStatementContext);
	}
	public ifThenElseStatement(): IfThenElseStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_statement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementNoShortIfContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementNoShortIfContext);
	}
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementNoShortIfContext);
	}
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementNoShortIfContext);
	}
	public forStatementNoShortIf(): ForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, ForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_statementNoShortIf; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterStatementNoShortIf) {
			listener.enterStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitStatementNoShortIf) {
			listener.exitStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitStatementNoShortIf) {
			return visitor.visitStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementWithoutTrailingSubstatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public synchronizedStatement(): SynchronizedStatementContext | undefined {
		return this.tryGetRuleContext(0, SynchronizedStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_statementWithoutTrailingSubstatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterStatementWithoutTrailingSubstatement) {
			listener.enterStatementWithoutTrailingSubstatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitStatementWithoutTrailingSubstatement) {
			listener.exitStatementWithoutTrailingSubstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitStatementWithoutTrailingSubstatement) {
			return visitor.visitStatementWithoutTrailingSubstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public COLON(): TerminalNode { return this.getToken(SPBSParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementNoShortIfContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public COLON(): TerminalNode { return this.getToken(SPBSParser.COLON, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_labeledStatementNoShortIf; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLabeledStatementNoShortIf) {
			listener.enterLabeledStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLabeledStatementNoShortIf) {
			listener.exitLabeledStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatementNoShortIf) {
			return visitor.visitLabeledStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public postIncrementExpression(): PostIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostIncrementExpressionContext);
	}
	public postDecrementExpression(): PostDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostDecrementExpressionContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_statementExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterStatementExpression) {
			listener.enterStatementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitStatementExpression) {
			listener.exitStatementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitStatementExpression) {
			return visitor.visitStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SPBSParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_ifThenStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterIfThenStatement) {
			listener.enterIfThenStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitIfThenStatement) {
			listener.exitIfThenStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitIfThenStatement) {
			return visitor.visitIfThenStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SPBSParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public ELSE(): TerminalNode { return this.getToken(SPBSParser.ELSE, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_ifThenElseStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterIfThenElseStatement) {
			listener.enterIfThenElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitIfThenElseStatement) {
			listener.exitIfThenElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatement) {
			return visitor.visitIfThenElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementNoShortIfContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SPBSParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext[];
	public statementNoShortIf(i: number): StatementNoShortIfContext;
	public statementNoShortIf(i?: number): StatementNoShortIfContext | StatementNoShortIfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementNoShortIfContext);
		} else {
			return this.getRuleContext(i, StatementNoShortIfContext);
		}
	}
	public ELSE(): TerminalNode { return this.getToken(SPBSParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_ifThenElseStatementNoShortIf; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterIfThenElseStatementNoShortIf) {
			listener.enterIfThenElseStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitIfThenElseStatementNoShortIf) {
			listener.exitIfThenElseStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatementNoShortIf) {
			return visitor.visitIfThenElseStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(SPBSParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(SPBSParser.SWITCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public switchBlock(): SwitchBlockContext {
		return this.getRuleContext(0, SwitchBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_switchBlock; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSwitchBlock) {
			listener.enterSwitchBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSwitchBlock) {
			listener.exitSwitchBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlock) {
			return visitor.visitSwitchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabels(): SwitchLabelsContext {
		return this.getRuleContext(0, SwitchLabelsContext);
	}
	public blockStatements(): BlockStatementsContext {
		return this.getRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelsContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_switchLabels; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSwitchLabels) {
			listener.enterSwitchLabels(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSwitchLabels) {
			listener.exitSwitchLabels(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabels) {
			return visitor.visitSwitchLabels(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CASE, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(SPBSParser.COLON, 0); }
	public enumConstantName(): EnumConstantNameContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantNameContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enumConstantName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnumConstantName) {
			listener.enterEnumConstantName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnumConstantName) {
			listener.exitEnumConstantName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantName) {
			return visitor.visitEnumConstantName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(SPBSParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementNoShortIfContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(SPBSParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_whileStatementNoShortIf; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterWhileStatementNoShortIf) {
			listener.enterWhileStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitWhileStatementNoShortIf) {
			listener.exitWhileStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitWhileStatementNoShortIf) {
			return visitor.visitWhileStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(SPBSParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(SPBSParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_doStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public basicForStatement(): BasicForStatementContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementContext);
	}
	public enhancedForStatement(): EnhancedForStatementContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementNoShortIfContext extends ParserRuleContext {
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementNoShortIfContext);
	}
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_forStatementNoShortIf; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterForStatementNoShortIf) {
			listener.enterForStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitForStatementNoShortIf) {
			listener.exitForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitForStatementNoShortIf) {
			return visitor.visitForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(SPBSParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.SEMI);
		} else {
			return this.getToken(SPBSParser.SEMI, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_basicForStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterBasicForStatement) {
			listener.enterBasicForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitBasicForStatement) {
			listener.exitBasicForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatement) {
			return visitor.visitBasicForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementNoShortIfContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(SPBSParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.SEMI);
		} else {
			return this.getToken(SPBSParser.SEMI, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_basicForStatementNoShortIf; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterBasicForStatementNoShortIf) {
			listener.enterBasicForStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitBasicForStatementNoShortIf) {
			listener.exitBasicForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatementNoShortIf) {
			return visitor.visitBasicForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionListContext);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_forInit; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext {
		return this.getRuleContext(0, StatementExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionListContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext[];
	public statementExpression(i: number): StatementExpressionContext;
	public statementExpression(i?: number): StatementExpressionContext | StatementExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementExpressionContext);
		} else {
			return this.getRuleContext(i, StatementExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_statementExpressionList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterStatementExpressionList) {
			listener.enterStatementExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitStatementExpressionList) {
			listener.exitStatementExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitStatementExpressionList) {
			return visitor.visitStatementExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(SPBSParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(SPBSParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enhancedForStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnhancedForStatement) {
			listener.enterEnhancedForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnhancedForStatement) {
			listener.exitEnhancedForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatement) {
			return visitor.visitEnhancedForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementNoShortIfContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(SPBSParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(SPBSParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_enhancedForStatementNoShortIf; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnhancedForStatementNoShortIf) {
			listener.enterEnhancedForStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnhancedForStatementNoShortIf) {
			listener.exitEnhancedForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatementNoShortIf) {
			return visitor.visitEnhancedForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(SPBSParser.BREAK, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(SPBSParser.CONTINUE, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(SPBSParser.RETURN, 0); }
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(SPBSParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SynchronizedStatementContext extends ParserRuleContext {
	public SYNCHRONIZED(): TerminalNode { return this.getToken(SPBSParser.SYNCHRONIZED, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_synchronizedStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSynchronizedStatement) {
			listener.enterSynchronizedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSynchronizedStatement) {
			listener.exitSynchronizedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStatement) {
			return visitor.visitSynchronizedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.TRY, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finally_(): Finally_Context | undefined {
		return this.tryGetRuleContext(0, Finally_Context);
	}
	public tryWithResourcesStatement(): TryWithResourcesStatementContext | undefined {
		return this.tryGetRuleContext(0, TryWithResourcesStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_catches; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterCatches) {
			listener.enterCatches(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitCatches) {
			listener.exitCatches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitCatches) {
			return visitor.visitCatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(SPBSParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public catchFormalParameter(): CatchFormalParameterContext {
		return this.getRuleContext(0, CatchFormalParameterContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchFormalParameterContext extends ParserRuleContext {
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_catchFormalParameter; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterCatchFormalParameter) {
			listener.enterCatchFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitCatchFormalParameter) {
			listener.exitCatchFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitCatchFormalParameter) {
			return visitor.visitCatchFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.BITOR);
		} else {
			return this.getToken(SPBSParser.BITOR, i);
		}
	}
	public classType(): ClassTypeContext[];
	public classType(i: number): ClassTypeContext;
	public classType(i?: number): ClassTypeContext | ClassTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassTypeContext);
		} else {
			return this.getRuleContext(i, ClassTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_catchType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Finally_Context extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(SPBSParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_finally_; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFinally_) {
			listener.enterFinally_(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFinally_) {
			listener.exitFinally_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFinally_) {
			return visitor.visitFinally_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryWithResourcesStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(SPBSParser.TRY, 0); }
	public resourceSpecification(): ResourceSpecificationContext {
		return this.getRuleContext(0, ResourceSpecificationContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finally_(): Finally_Context | undefined {
		return this.tryGetRuleContext(0, Finally_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_tryWithResourcesStatement; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTryWithResourcesStatement) {
			listener.enterTryWithResourcesStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTryWithResourcesStatement) {
			listener.exitTryWithResourcesStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTryWithResourcesStatement) {
			return visitor.visitTryWithResourcesStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public resourceList(): ResourceListContext {
		return this.getRuleContext(0, ResourceListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_resourceSpecification; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterResourceSpecification) {
			listener.enterResourceSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitResourceSpecification) {
			listener.exitResourceSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceListContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.SEMI);
		} else {
			return this.getToken(SPBSParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_resourceList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterResourceList) {
			listener.enterResourceList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitResourceList) {
			listener.exitResourceList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitResourceList) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(SPBSParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_resource; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_primaryContext);
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionContext);
	}
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext[];
	public primaryNoNewArray_lf_primary(i: number): PrimaryNoNewArray_lf_primaryContext;
	public primaryNoNewArray_lf_primary(i?: number): PrimaryNoNewArray_lf_primaryContext | PrimaryNoNewArray_lf_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArrayContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LBRACK);
		} else {
			return this.getToken(SPBSParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOID, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THIS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public methodReference(): MethodReferenceContext | undefined {
		return this.tryGetRuleContext(0, MethodReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray) {
			listener.enterPrimaryNoNewArray(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray) {
			listener.exitPrimaryNoNewArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray) {
			return visitor.visitPrimaryNoNewArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_arrayAccessContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray_lf_arrayAccess; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray_lf_arrayAccess) {
			listener.enterPrimaryNoNewArray_lf_arrayAccess(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray_lf_arrayAccess) {
			listener.exitPrimaryNoNewArray_lf_arrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_arrayAccess) {
			return visitor.visitPrimaryNoNewArray_lf_arrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_arrayAccessContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LBRACK);
		} else {
			return this.getToken(SPBSParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOID, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THIS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public methodReference(): MethodReferenceContext | undefined {
		return this.tryGetRuleContext(0, MethodReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray_lfno_arrayAccess; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray_lfno_arrayAccess) {
			listener.enterPrimaryNoNewArray_lfno_arrayAccess(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray_lfno_arrayAccess) {
			listener.exitPrimaryNoNewArray_lfno_arrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_arrayAccess) {
			return visitor.visitPrimaryNoNewArray_lfno_arrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primaryContext extends ParserRuleContext {
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lf_primaryContext);
	}
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccess_lf_primaryContext);
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lf_primaryContext);
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lf_primaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray_lf_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray_lf_primary) {
			listener.enterPrimaryNoNewArray_lf_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray_lf_primary) {
			listener.exitPrimaryNoNewArray_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
			listener.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
			listener.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext extends ParserRuleContext {
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lf_primaryContext);
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lf_primaryContext);
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lf_primaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
			listener.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
			listener.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LBRACK);
		} else {
			return this.getToken(SPBSParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOID, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THIS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lfno_primaryContext);
	}
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccess_lfno_primaryContext);
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lfno_primaryContext);
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lfno_primaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray_lfno_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray_lfno_primary) {
			listener.enterPrimaryNoNewArray_lfno_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray_lfno_primary) {
			listener.exitPrimaryNoNewArray_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
			listener.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
			listener.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LBRACK);
		} else {
			return this.getToken(SPBSParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOID, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THIS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lfno_primaryContext);
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lfno_primaryContext);
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lfno_primaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
			listener.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
			listener.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpressionContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(SPBSParser.NEW, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.Identifier);
		} else {
			return this.getToken(SPBSParser.Identifier, i);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.DOT);
		} else {
			return this.getToken(SPBSParser.DOT, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classInstanceCreationExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassInstanceCreationExpression) {
			listener.enterClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassInstanceCreationExpression) {
			listener.exitClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression) {
			return visitor.visitClassInstanceCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpression_lf_primaryContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(SPBSParser.DOT, 0); }
	public NEW(): TerminalNode { return this.getToken(SPBSParser.NEW, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classInstanceCreationExpression_lf_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassInstanceCreationExpression_lf_primary) {
			listener.enterClassInstanceCreationExpression_lf_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassInstanceCreationExpression_lf_primary) {
			listener.exitClassInstanceCreationExpression_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression_lf_primary) {
			return visitor.visitClassInstanceCreationExpression_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpression_lfno_primaryContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(SPBSParser.NEW, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.Identifier);
		} else {
			return this.getToken(SPBSParser.Identifier, i);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.DOT);
		} else {
			return this.getToken(SPBSParser.DOT, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classInstanceCreationExpression_lfno_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassInstanceCreationExpression_lfno_primary) {
			listener.enterClassInstanceCreationExpression_lfno_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassInstanceCreationExpression_lfno_primary) {
			listener.exitClassInstanceCreationExpression_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression_lfno_primary) {
			return visitor.visitClassInstanceCreationExpression_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccessContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.DOT);
		} else {
			return this.getToken(SPBSParser.DOT, i);
		}
	}
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_fieldAccess; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFieldAccess) {
			listener.enterFieldAccess(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFieldAccess) {
			listener.exitFieldAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess) {
			return visitor.visitFieldAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccess_lf_primaryContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(SPBSParser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_fieldAccess_lf_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFieldAccess_lf_primary) {
			listener.enterFieldAccess_lf_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFieldAccess_lf_primary) {
			listener.exitFieldAccess_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess_lf_primary) {
			return visitor.visitFieldAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccess_lfno_primaryContext extends ParserRuleContext {
	public SUPER(): TerminalNode { return this.getToken(SPBSParser.SUPER, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.DOT);
		} else {
			return this.getToken(SPBSParser.DOT, i);
		}
	}
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_fieldAccess_lfno_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFieldAccess_lfno_primary) {
			listener.enterFieldAccess_lfno_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFieldAccess_lfno_primary) {
			listener.exitFieldAccess_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess_lfno_primary) {
			return visitor.visitFieldAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LBRACK);
		} else {
			return this.getToken(SPBSParser.LBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_arrayAccessContext);
	}
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext[];
	public primaryNoNewArray_lf_arrayAccess(i: number): PrimaryNoNewArray_lf_arrayAccessContext;
	public primaryNoNewArray_lf_arrayAccess(i?: number): PrimaryNoNewArray_lf_arrayAccessContext | PrimaryNoNewArray_lf_arrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_arrayAccessContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_arrayAccessContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_arrayAccess; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArrayAccess) {
			listener.enterArrayAccess(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArrayAccess) {
			listener.exitArrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess) {
			return visitor.visitArrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccess_lf_primaryContext extends ParserRuleContext {
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LBRACK);
		} else {
			return this.getToken(SPBSParser.LBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[];
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext;
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i?: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext | PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_arrayAccess_lf_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArrayAccess_lf_primary) {
			listener.enterArrayAccess_lf_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArrayAccess_lf_primary) {
			listener.exitArrayAccess_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess_lf_primary) {
			return visitor.visitArrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccess_lfno_primaryContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LBRACK);
		} else {
			return this.getToken(SPBSParser.LBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext);
	}
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[];
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext;
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i?: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext | PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_arrayAccess_lfno_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArrayAccess_lfno_primary) {
			listener.enterArrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArrayAccess_lfno_primary) {
			listener.exitArrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess_lfno_primary) {
			return visitor.visitArrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocationContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.DOT);
		} else {
			return this.getToken(SPBSParser.DOT, i);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodInvocation; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodInvocation) {
			listener.enterMethodInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodInvocation) {
			listener.exitMethodInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation) {
			return visitor.visitMethodInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocation_lf_primaryContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(SPBSParser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodInvocation_lf_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodInvocation_lf_primary) {
			listener.enterMethodInvocation_lf_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodInvocation_lf_primary) {
			listener.exitMethodInvocation_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation_lf_primary) {
			return visitor.visitMethodInvocation_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocation_lfno_primaryContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.DOT);
		} else {
			return this.getToken(SPBSParser.DOT, i);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodInvocation_lfno_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodInvocation_lfno_primary) {
			listener.enterMethodInvocation_lfno_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodInvocation_lfno_primary) {
			listener.exitMethodInvocation_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation_lfno_primary) {
			return visitor.visitMethodInvocation_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReferenceContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public COLONCOLON(): TerminalNode { return this.getToken(SPBSParser.COLONCOLON, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NEW, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodReference; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodReference) {
			listener.enterMethodReference(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodReference) {
			listener.exitMethodReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodReference) {
			return visitor.visitMethodReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReference_lf_primaryContext extends ParserRuleContext {
	public COLONCOLON(): TerminalNode { return this.getToken(SPBSParser.COLONCOLON, 0); }
	public Identifier(): TerminalNode { return this.getToken(SPBSParser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodReference_lf_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodReference_lf_primary) {
			listener.enterMethodReference_lf_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodReference_lf_primary) {
			listener.exitMethodReference_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodReference_lf_primary) {
			return visitor.visitMethodReference_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReference_lfno_primaryContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public COLONCOLON(): TerminalNode { return this.getToken(SPBSParser.COLONCOLON, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NEW, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodReference_lfno_primary; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodReference_lfno_primary) {
			listener.enterMethodReference_lfno_primary(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodReference_lfno_primary) {
			listener.exitMethodReference_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodReference_lfno_primary) {
			return visitor.visitMethodReference_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(SPBSParser.NEW, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dimExprs(): DimExprsContext | undefined {
		return this.tryGetRuleContext(0, DimExprsContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_arrayCreationExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArrayCreationExpression) {
			listener.enterArrayCreationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArrayCreationExpression) {
			listener.exitArrayCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpression) {
			return visitor.visitArrayCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprsContext extends ParserRuleContext {
	public dimExpr(): DimExprContext[];
	public dimExpr(i: number): DimExprContext;
	public dimExpr(i?: number): DimExprContext | DimExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimExprContext);
		} else {
			return this.getRuleContext(i, DimExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_dimExprs; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterDimExprs) {
			listener.enterDimExprs(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitDimExprs) {
			listener.exitDimExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitDimExprs) {
			return visitor.visitDimExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(SPBSParser.LBRACK, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(SPBSParser.RBRACK, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_dimExpr; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterDimExpr) {
			listener.enterDimExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitDimExpr) {
			listener.exitDimExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitDimExpr) {
			return visitor.visitDimExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_expression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(SPBSParser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_lambdaExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.Identifier, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public inferredFormalParameterList(): InferredFormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, InferredFormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_lambdaParameters; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLambdaParameters) {
			listener.enterLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLambdaParameters) {
			listener.exitLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InferredFormalParameterListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.Identifier);
		} else {
			return this.getToken(SPBSParser.Identifier, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMA);
		} else {
			return this.getToken(SPBSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_inferredFormalParameterList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInferredFormalParameterList) {
			listener.enterInferredFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInferredFormalParameterList) {
			listener.exitInferredFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInferredFormalParameterList) {
			return visitor.visitInferredFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public leftHandSide(): LeftHandSideContext {
		return this.getRuleContext(0, LeftHandSideContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_assignment; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeftHandSideContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_leftHandSide; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLeftHandSide) {
			listener.enterLeftHandSide(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLeftHandSide) {
			listener.exitLeftHandSide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLeftHandSide) {
			return visitor.visitLeftHandSide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MOD_ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUB_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LSHIFT_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.URSHIFT_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.AND_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.XOR_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.OR_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getRuleContext(0, ConditionalOrExpressionContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.QUESTION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COLON, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getRuleContext(0, ConditionalAndExpressionContext);
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalOrExpressionContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_conditionalOrExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConditionalOrExpression) {
			listener.enterConditionalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConditionalOrExpression) {
			listener.exitConditionalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConditionalOrExpression) {
			return visitor.visitConditionalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getRuleContext(0, InclusiveOrExpressionContext);
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalAndExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_conditionalAndExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConditionalAndExpression) {
			listener.enterConditionalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConditionalAndExpression) {
			listener.exitConditionalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConditionalAndExpression) {
			return visitor.visitConditionalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getRuleContext(0, ExclusiveOrExpressionContext);
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveOrExpressionContext);
	}
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BITOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_inclusiveOrExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveOrExpressionContext);
	}
	public CARET(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CARET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_exclusiveOrExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BITAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_andExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NOTEQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.GT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.GE, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.INSTANCEOF, 0); }
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.LT);
		} else {
			return this.getToken(SPBSParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.GT);
		} else {
			return this.getToken(SPBSParser.GT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ADD, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUB, 0); }
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreIncrementExpressionContext extends ParserRuleContext {
	public INC(): TerminalNode { return this.getToken(SPBSParser.INC, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_preIncrementExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreDecrementExpressionContext extends ParserRuleContext {
	public DEC(): TerminalNode { return this.getToken(SPBSParser.DEC, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_preDecrementExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPreDecrementExpression) {
			listener.enterPreDecrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPreDecrementExpression) {
			listener.exitPreDecrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPreDecrementExpression) {
			return visitor.visitPreDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.TILDE, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BANG, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_unaryExpressionNotPlusMinus; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterUnaryExpressionNotPlusMinus) {
			listener.enterUnaryExpressionNotPlusMinus(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitUnaryExpressionNotPlusMinus) {
			listener.exitUnaryExpressionNotPlusMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpressionNotPlusMinus) {
			return visitor.visitUnaryExpressionNotPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext[];
	public postIncrementExpression_lf_postfixExpression(i: number): PostIncrementExpression_lf_postfixExpressionContext;
	public postIncrementExpression_lf_postfixExpression(i?: number): PostIncrementExpression_lf_postfixExpressionContext | PostIncrementExpression_lf_postfixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostIncrementExpression_lf_postfixExpressionContext);
		} else {
			return this.getRuleContext(i, PostIncrementExpression_lf_postfixExpressionContext);
		}
	}
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext[];
	public postDecrementExpression_lf_postfixExpression(i: number): PostDecrementExpression_lf_postfixExpressionContext;
	public postDecrementExpression_lf_postfixExpression(i?: number): PostDecrementExpression_lf_postfixExpressionContext | PostDecrementExpression_lf_postfixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostDecrementExpression_lf_postfixExpressionContext);
		} else {
			return this.getRuleContext(i, PostDecrementExpression_lf_postfixExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public INC(): TerminalNode { return this.getToken(SPBSParser.INC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_postIncrementExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	public INC(): TerminalNode { return this.getToken(SPBSParser.INC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_postIncrementExpression_lf_postfixExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPostIncrementExpression_lf_postfixExpression) {
			listener.enterPostIncrementExpression_lf_postfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPostIncrementExpression_lf_postfixExpression) {
			listener.exitPostIncrementExpression_lf_postfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression_lf_postfixExpression) {
			return visitor.visitPostIncrementExpression_lf_postfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public DEC(): TerminalNode { return this.getToken(SPBSParser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_postDecrementExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPostDecrementExpression) {
			listener.enterPostDecrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPostDecrementExpression) {
			listener.exitPostDecrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression) {
			return visitor.visitPostDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	public DEC(): TerminalNode { return this.getToken(SPBSParser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_postDecrementExpression_lf_postfixExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterPostDecrementExpression_lf_postfixExpression) {
			listener.enterPostDecrementExpression_lf_postfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitPostDecrementExpression_lf_postfixExpression) {
			listener.exitPostDecrementExpression_lf_postfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression_lf_postfixExpression) {
			return visitor.visitPostDecrementExpression_lf_postfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_castExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xml_documentContext extends ParserRuleContext {
	public xml_element(): Xml_elementContext {
		return this.getRuleContext(0, Xml_elementContext);
	}
	public xml_prolog(): Xml_prologContext | undefined {
		return this.tryGetRuleContext(0, Xml_prologContext);
	}
	public xml_misc(): Xml_miscContext[];
	public xml_misc(i: number): Xml_miscContext;
	public xml_misc(i?: number): Xml_miscContext | Xml_miscContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xml_miscContext);
		} else {
			return this.getRuleContext(i, Xml_miscContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_xml_document; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterXml_document) {
			listener.enterXml_document(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitXml_document) {
			listener.exitXml_document(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitXml_document) {
			return visitor.visitXml_document(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xml_prologContext extends ParserRuleContext {
	public XMLDeclOpen(): TerminalNode { return this.getToken(SPBSParser.XMLDeclOpen, 0); }
	public SPECIAL_CLOSE(): TerminalNode { return this.getToken(SPBSParser.SPECIAL_CLOSE, 0); }
	public xml_attribute(): Xml_attributeContext[];
	public xml_attribute(i: number): Xml_attributeContext;
	public xml_attribute(i?: number): Xml_attributeContext | Xml_attributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xml_attributeContext);
		} else {
			return this.getRuleContext(i, Xml_attributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_xml_prolog; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterXml_prolog) {
			listener.enterXml_prolog(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitXml_prolog) {
			listener.exitXml_prolog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitXml_prolog) {
			return visitor.visitXml_prolog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xml_contentContext extends ParserRuleContext {
	public xml_chardata(): Xml_chardataContext[];
	public xml_chardata(i: number): Xml_chardataContext;
	public xml_chardata(i?: number): Xml_chardataContext | Xml_chardataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xml_chardataContext);
		} else {
			return this.getRuleContext(i, Xml_chardataContext);
		}
	}
	public xml_element(): Xml_elementContext[];
	public xml_element(i: number): Xml_elementContext;
	public xml_element(i?: number): Xml_elementContext | Xml_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xml_elementContext);
		} else {
			return this.getRuleContext(i, Xml_elementContext);
		}
	}
	public xml_reference(): Xml_referenceContext[];
	public xml_reference(i: number): Xml_referenceContext;
	public xml_reference(i?: number): Xml_referenceContext | Xml_referenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xml_referenceContext);
		} else {
			return this.getRuleContext(i, Xml_referenceContext);
		}
	}
	public PI(): TerminalNode[];
	public PI(i: number): TerminalNode;
	public PI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.PI);
		} else {
			return this.getToken(SPBSParser.PI, i);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.COMMENT);
		} else {
			return this.getToken(SPBSParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_xml_content; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterXml_content) {
			listener.enterXml_content(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitXml_content) {
			listener.exitXml_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitXml_content) {
			return visitor.visitXml_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xml_elementContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.OPEN);
		} else {
			return this.getToken(SPBSParser.OPEN, i);
		}
	}
	public Name(): TerminalNode[];
	public Name(i: number): TerminalNode;
	public Name(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.Name);
		} else {
			return this.getToken(SPBSParser.Name, i);
		}
	}
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.CLOSE);
		} else {
			return this.getToken(SPBSParser.CLOSE, i);
		}
	}
	public xml_content(): Xml_contentContext | undefined {
		return this.tryGetRuleContext(0, Xml_contentContext);
	}
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SLASH, 0); }
	public xml_attribute(): Xml_attributeContext[];
	public xml_attribute(i: number): Xml_attributeContext;
	public xml_attribute(i?: number): Xml_attributeContext | Xml_attributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xml_attributeContext);
		} else {
			return this.getRuleContext(i, Xml_attributeContext);
		}
	}
	public SLASH_CLOSE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SLASH_CLOSE, 0); }
	public BS_ELEMENT_START(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BS_ELEMENT_START, 0); }
	public CDATA_START(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CDATA_START, 0); }
	public bsCompilationUnit(): BsCompilationUnitContext | undefined {
		return this.tryGetRuleContext(0, BsCompilationUnitContext);
	}
	public CDATA_END(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CDATA_END, 0); }
	public BS_ELEMENT_END(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BS_ELEMENT_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_xml_element; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterXml_element) {
			listener.enterXml_element(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitXml_element) {
			listener.exitXml_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitXml_element) {
			return visitor.visitXml_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xml_referenceContext extends ParserRuleContext {
	public EntityRef(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.EntityRef, 0); }
	public CharRef(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CharRef, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_xml_reference; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterXml_reference) {
			listener.enterXml_reference(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitXml_reference) {
			listener.exitXml_reference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitXml_reference) {
			return visitor.visitXml_reference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xml_attributeContext extends ParserRuleContext {
	public Name(): TerminalNode { return this.getToken(SPBSParser.Name, 0); }
	public EQUALS(): TerminalNode { return this.getToken(SPBSParser.EQUALS, 0); }
	public STRING(): TerminalNode { return this.getToken(SPBSParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_xml_attribute; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterXml_attribute) {
			listener.enterXml_attribute(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitXml_attribute) {
			listener.exitXml_attribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitXml_attribute) {
			return visitor.visitXml_attribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xml_chardataContext extends ParserRuleContext {
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.TEXT, 0); }
	public SEA_WS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEA_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_xml_chardata; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterXml_chardata) {
			listener.enterXml_chardata(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitXml_chardata) {
			listener.exitXml_chardata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitXml_chardata) {
			return visitor.visitXml_chardata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xml_miscContext extends ParserRuleContext {
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COMMENT, 0); }
	public PI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PI, 0); }
	public SEA_WS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEA_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_xml_misc; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterXml_misc) {
			listener.enterXml_misc(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitXml_misc) {
			listener.exitXml_misc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitXml_misc) {
			return visitor.visitXml_misc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


