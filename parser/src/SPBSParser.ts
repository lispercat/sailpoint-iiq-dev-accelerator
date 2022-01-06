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
	public static readonly XMLName = 16;
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
	public static readonly DECIMAL_LITERAL = 72;
	public static readonly HEX_LITERAL = 73;
	public static readonly OCT_LITERAL = 74;
	public static readonly BINARY_LITERAL = 75;
	public static readonly FLOAT_LITERAL = 76;
	public static readonly HEX_FLOAT_LITERAL = 77;
	public static readonly BOOL_LITERAL = 78;
	public static readonly CHAR_LITERAL = 79;
	public static readonly STRING_LITERAL = 80;
	public static readonly NULL_LITERAL = 81;
	public static readonly LPAREN = 82;
	public static readonly RPAREN = 83;
	public static readonly LBRACE = 84;
	public static readonly RBRACE = 85;
	public static readonly LBRACK = 86;
	public static readonly RBRACK = 87;
	public static readonly SEMI = 88;
	public static readonly COMMA = 89;
	public static readonly DOT = 90;
	public static readonly ASSIGN = 91;
	public static readonly GT = 92;
	public static readonly LT = 93;
	public static readonly BANG = 94;
	public static readonly TILDE = 95;
	public static readonly QUESTION = 96;
	public static readonly COLON = 97;
	public static readonly EQUAL = 98;
	public static readonly LE = 99;
	public static readonly GE = 100;
	public static readonly NOTEQUAL = 101;
	public static readonly AND = 102;
	public static readonly OR = 103;
	public static readonly INC = 104;
	public static readonly DEC = 105;
	public static readonly ADD = 106;
	public static readonly SUB = 107;
	public static readonly MUL = 108;
	public static readonly DIV = 109;
	public static readonly BITAND = 110;
	public static readonly BITOR = 111;
	public static readonly CARET = 112;
	public static readonly MOD = 113;
	public static readonly ADD_ASSIGN = 114;
	public static readonly SUB_ASSIGN = 115;
	public static readonly MUL_ASSIGN = 116;
	public static readonly DIV_ASSIGN = 117;
	public static readonly AND_ASSIGN = 118;
	public static readonly OR_ASSIGN = 119;
	public static readonly XOR_ASSIGN = 120;
	public static readonly MOD_ASSIGN = 121;
	public static readonly LSHIFT_ASSIGN = 122;
	public static readonly RSHIFT_ASSIGN = 123;
	public static readonly URSHIFT_ASSIGN = 124;
	public static readonly ARROW = 125;
	public static readonly COLONCOLON = 126;
	public static readonly AT = 127;
	public static readonly ELLIPSIS = 128;
	public static readonly WS = 129;
	public static readonly JAVA_COMMENT = 130;
	public static readonly LINE_COMMENT = 131;
	public static readonly IDENTIFIER = 132;
	public static readonly RULE_bsCompilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_modifier = 4;
	public static readonly RULE_classOrInterfaceModifier = 5;
	public static readonly RULE_variableModifier = 6;
	public static readonly RULE_classDeclaration = 7;
	public static readonly RULE_typeParameters = 8;
	public static readonly RULE_typeParameter = 9;
	public static readonly RULE_typeBound = 10;
	public static readonly RULE_enumDeclaration = 11;
	public static readonly RULE_enumConstants = 12;
	public static readonly RULE_enumConstant = 13;
	public static readonly RULE_enumBodyDeclarations = 14;
	public static readonly RULE_interfaceDeclaration = 15;
	public static readonly RULE_classBody = 16;
	public static readonly RULE_interfaceBody = 17;
	public static readonly RULE_classBodyDeclaration = 18;
	public static readonly RULE_memberDeclaration = 19;
	public static readonly RULE_methodDeclaration = 20;
	public static readonly RULE_methodBody = 21;
	public static readonly RULE_typeTypeOrVoid = 22;
	public static readonly RULE_genericMethodDeclaration = 23;
	public static readonly RULE_genericConstructorDeclaration = 24;
	public static readonly RULE_constructorDeclaration = 25;
	public static readonly RULE_fieldDeclaration = 26;
	public static readonly RULE_interfaceBodyDeclaration = 27;
	public static readonly RULE_interfaceMemberDeclaration = 28;
	public static readonly RULE_constDeclaration = 29;
	public static readonly RULE_constantDeclarator = 30;
	public static readonly RULE_interfaceMethodDeclaration = 31;
	public static readonly RULE_interfaceMethodModifier = 32;
	public static readonly RULE_genericInterfaceMethodDeclaration = 33;
	public static readonly RULE_variableDeclarators = 34;
	public static readonly RULE_variableDeclarator = 35;
	public static readonly RULE_variableDeclaratorId = 36;
	public static readonly RULE_variableInitializer = 37;
	public static readonly RULE_arrayInitializer = 38;
	public static readonly RULE_classOrInterfaceType = 39;
	public static readonly RULE_typeArgument = 40;
	public static readonly RULE_qualifiedNameList = 41;
	public static readonly RULE_formalParameters = 42;
	public static readonly RULE_formalParameterList = 43;
	public static readonly RULE_formalParameter = 44;
	public static readonly RULE_lastFormalParameter = 45;
	public static readonly RULE_qualifiedName = 46;
	public static readonly RULE_literal = 47;
	public static readonly RULE_integerLiteral = 48;
	public static readonly RULE_floatLiteral = 49;
	public static readonly RULE_altAnnotationQualifiedName = 50;
	public static readonly RULE_annotation = 51;
	public static readonly RULE_elementValuePairs = 52;
	public static readonly RULE_elementValuePair = 53;
	public static readonly RULE_elementValue = 54;
	public static readonly RULE_elementValueArrayInitializer = 55;
	public static readonly RULE_annotationTypeDeclaration = 56;
	public static readonly RULE_annotationTypeBody = 57;
	public static readonly RULE_annotationTypeElementDeclaration = 58;
	public static readonly RULE_annotationTypeElementRest = 59;
	public static readonly RULE_annotationMethodOrConstantRest = 60;
	public static readonly RULE_annotationMethodRest = 61;
	public static readonly RULE_annotationConstantRest = 62;
	public static readonly RULE_defaultValue = 63;
	public static readonly RULE_block = 64;
	public static readonly RULE_blockStatement = 65;
	public static readonly RULE_localVariableDeclaration = 66;
	public static readonly RULE_localTypeDeclaration = 67;
	public static readonly RULE_statement = 68;
	public static readonly RULE_catchClause = 69;
	public static readonly RULE_catchType = 70;
	public static readonly RULE_finallyBlock = 71;
	public static readonly RULE_resourceSpecification = 72;
	public static readonly RULE_resources = 73;
	public static readonly RULE_resource = 74;
	public static readonly RULE_switchBlockStatementGroup = 75;
	public static readonly RULE_switchLabel = 76;
	public static readonly RULE_forControl = 77;
	public static readonly RULE_forInit = 78;
	public static readonly RULE_enhancedForControl = 79;
	public static readonly RULE_parExpression = 80;
	public static readonly RULE_expressionList = 81;
	public static readonly RULE_methodCall = 82;
	public static readonly RULE_expression = 83;
	public static readonly RULE_lambdaExpression = 84;
	public static readonly RULE_lambdaParameters = 85;
	public static readonly RULE_lambdaBody = 86;
	public static readonly RULE_primary = 87;
	public static readonly RULE_classType = 88;
	public static readonly RULE_creator = 89;
	public static readonly RULE_createdName = 90;
	public static readonly RULE_innerCreator = 91;
	public static readonly RULE_arrayCreatorRest = 92;
	public static readonly RULE_classCreatorRest = 93;
	public static readonly RULE_explicitGenericInvocation = 94;
	public static readonly RULE_typeArgumentsOrDiamond = 95;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 96;
	public static readonly RULE_nonWildcardTypeArguments = 97;
	public static readonly RULE_typeList = 98;
	public static readonly RULE_typeType = 99;
	public static readonly RULE_primitiveType = 100;
	public static readonly RULE_typeArguments = 101;
	public static readonly RULE_superSuffix = 102;
	public static readonly RULE_explicitGenericInvocationSuffix = 103;
	public static readonly RULE_arguments = 104;
	public static readonly RULE_xml_document = 105;
	public static readonly RULE_xml_prolog = 106;
	public static readonly RULE_xml_content = 107;
	public static readonly RULE_xml_element = 108;
	public static readonly RULE_xml_reference = 109;
	public static readonly RULE_xml_attribute = 110;
	public static readonly RULE_xml_chardata = 111;
	public static readonly RULE_xml_misc = 112;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bsCompilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
		"typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants", 
		"enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "classBody", 
		"interfaceBody", "classBodyDeclaration", "memberDeclaration", "methodDeclaration", 
		"methodBody", "typeTypeOrVoid", "genericMethodDeclaration", "genericConstructorDeclaration", 
		"constructorDeclaration", "fieldDeclaration", "interfaceBodyDeclaration", 
		"interfaceMemberDeclaration", "constDeclaration", "constantDeclarator", 
		"interfaceMethodDeclaration", "interfaceMethodModifier", "genericInterfaceMethodDeclaration", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"arrayInitializer", "classOrInterfaceType", "typeArgument", "qualifiedNameList", 
		"formalParameters", "formalParameterList", "formalParameter", "lastFormalParameter", 
		"qualifiedName", "literal", "integerLiteral", "floatLiteral", "altAnnotationQualifiedName", 
		"annotation", "elementValuePairs", "elementValuePair", "elementValue", 
		"elementValueArrayInitializer", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeElementDeclaration", "annotationTypeElementRest", "annotationMethodOrConstantRest", 
		"annotationMethodRest", "annotationConstantRest", "defaultValue", "block", 
		"blockStatement", "localVariableDeclaration", "localTypeDeclaration", 
		"statement", "catchClause", "catchType", "finallyBlock", "resourceSpecification", 
		"resources", "resource", "switchBlockStatementGroup", "switchLabel", "forControl", 
		"forInit", "enhancedForControl", "parExpression", "expressionList", "methodCall", 
		"expression", "lambdaExpression", "lambdaParameters", "lambdaBody", "primary", 
		"classType", "creator", "createdName", "innerCreator", "arrayCreatorRest", 
		"classCreatorRest", "explicitGenericInvocation", "typeArgumentsOrDiamond", 
		"nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", "typeList", 
		"typeType", "primitiveType", "typeArguments", "superSuffix", "explicitGenericInvocationSuffix", 
		"arguments", "xml_document", "xml_prolog", "xml_content", "xml_element", 
		"xml_reference", "xml_attribute", "xml_chardata", "xml_misc",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
		"','", "'.'", undefined, undefined, undefined, "'!'", "'~'", "'?'", "':'", 
		"'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", 
		"'-'", "'*'", undefined, "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", 
		"'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'->'", 
		"'::'", "'@'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENT", "BS_ELEMENT_START", "DTD", "EntityRef", "CharRef", 
		"SEA_WS", "OPEN", "XMLDeclOpen", "TEXT", "CLOSE", "SPECIAL_CLOSE", "SLASH_CLOSE", 
		"SLASH", "EQUALS", "STRING", "XMLName", "S", "PI", "BS_ELEMENT_END", "CDATA_START", 
		"CDATA_END", "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", 
		"CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", 
		"ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", 
		"IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", 
		"NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", 
		"STATIC", "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", 
		"THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", "DECIMAL_LITERAL", 
		"HEX_LITERAL", "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
		"BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "NULL_LITERAL", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", 
		"ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE", 
		"GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", 
		"BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
		"DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
		"RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", "AT", "ELLIPSIS", 
		"WS", "JAVA_COMMENT", "LINE_COMMENT", "IDENTIFIER",
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
	public bsCompilationUnit(): BsCompilationUnitContext {
		let _localctx: BsCompilationUnitContext = new BsCompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SPBSParser.RULE_bsCompilationUnit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 226;
					this.importDeclaration();
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.ASSERT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BREAK) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SPBSParser.CONTINUE - 32)) | (1 << (SPBSParser.DO - 32)) | (1 << (SPBSParser.DOUBLE - 32)) | (1 << (SPBSParser.ENUM - 32)) | (1 << (SPBSParser.FINAL - 32)) | (1 << (SPBSParser.FLOAT - 32)) | (1 << (SPBSParser.FOR - 32)) | (1 << (SPBSParser.IF - 32)) | (1 << (SPBSParser.IMPORT - 32)) | (1 << (SPBSParser.INT - 32)) | (1 << (SPBSParser.INTERFACE - 32)) | (1 << (SPBSParser.LONG - 32)) | (1 << (SPBSParser.NATIVE - 32)) | (1 << (SPBSParser.NEW - 32)) | (1 << (SPBSParser.PRIVATE - 32)) | (1 << (SPBSParser.PROTECTED - 32)) | (1 << (SPBSParser.PUBLIC - 32)) | (1 << (SPBSParser.RETURN - 32)) | (1 << (SPBSParser.SHORT - 32)) | (1 << (SPBSParser.STATIC - 32)) | (1 << (SPBSParser.STRICTFP - 32)) | (1 << (SPBSParser.SUPER - 32)) | (1 << (SPBSParser.SWITCH - 32)) | (1 << (SPBSParser.SYNCHRONIZED - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SPBSParser.THIS - 64)) | (1 << (SPBSParser.THROW - 64)) | (1 << (SPBSParser.TRANSIENT - 64)) | (1 << (SPBSParser.TRY - 64)) | (1 << (SPBSParser.VOID - 64)) | (1 << (SPBSParser.VOLATILE - 64)) | (1 << (SPBSParser.WHILE - 64)) | (1 << (SPBSParser.DECIMAL_LITERAL - 64)) | (1 << (SPBSParser.HEX_LITERAL - 64)) | (1 << (SPBSParser.OCT_LITERAL - 64)) | (1 << (SPBSParser.BINARY_LITERAL - 64)) | (1 << (SPBSParser.FLOAT_LITERAL - 64)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 64)) | (1 << (SPBSParser.BOOL_LITERAL - 64)) | (1 << (SPBSParser.CHAR_LITERAL - 64)) | (1 << (SPBSParser.STRING_LITERAL - 64)) | (1 << (SPBSParser.NULL_LITERAL - 64)) | (1 << (SPBSParser.LPAREN - 64)) | (1 << (SPBSParser.LBRACE - 64)) | (1 << (SPBSParser.SEMI - 64)) | (1 << (SPBSParser.LT - 64)) | (1 << (SPBSParser.BANG - 64)) | (1 << (SPBSParser.TILDE - 64)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
				{
				{
				this.state = 232;
				this.blockStatement();
				}
				}
				this.state = 237;
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
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SPBSParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
				{
				{
				this.state = 238;
				this.annotation();
				}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 244;
			this.match(SPBSParser.PACKAGE);
			this.state = 245;
			this.qualifiedName();
			this.state = 246;
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
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SPBSParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(SPBSParser.IMPORT);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.STATIC) {
				{
				this.state = 249;
				this.match(SPBSParser.STATIC);
				}
			}

			this.state = 252;
			this.qualifiedName();
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.DOT) {
				{
				this.state = 253;
				this.match(SPBSParser.DOT);
				this.state = 254;
				this.match(SPBSParser.MUL);
				}
			}

			this.state = 257;
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
		this.enterRule(_localctx, 6, SPBSParser.RULE_typeDeclaration);
		try {
			let _alt: number;
			this.state = 272;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.ABSTRACT:
			case SPBSParser.CLASS:
			case SPBSParser.ENUM:
			case SPBSParser.FINAL:
			case SPBSParser.INTERFACE:
			case SPBSParser.PRIVATE:
			case SPBSParser.PROTECTED:
			case SPBSParser.PUBLIC:
			case SPBSParser.STATIC:
			case SPBSParser.STRICTFP:
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 259;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				this.state = 269;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SPBSParser.CLASS:
					{
					this.state = 265;
					this.classDeclaration();
					}
					break;
				case SPBSParser.ENUM:
					{
					this.state = 266;
					this.enumDeclaration();
					}
					break;
				case SPBSParser.INTERFACE:
					{
					this.state = 267;
					this.interfaceDeclaration();
					}
					break;
				case SPBSParser.AT:
					{
					this.state = 268;
					this.annotationTypeDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case SPBSParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 271;
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
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SPBSParser.RULE_modifier);
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.ABSTRACT:
			case SPBSParser.FINAL:
			case SPBSParser.PRIVATE:
			case SPBSParser.PROTECTED:
			case SPBSParser.PUBLIC:
			case SPBSParser.STATIC:
			case SPBSParser.STRICTFP:
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 274;
				this.classOrInterfaceModifier();
				}
				break;
			case SPBSParser.NATIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 275;
				this.match(SPBSParser.NATIVE);
				}
				break;
			case SPBSParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 276;
				this.match(SPBSParser.SYNCHRONIZED);
				}
				break;
			case SPBSParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 277;
				this.match(SPBSParser.TRANSIENT);
				}
				break;
			case SPBSParser.VOLATILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 278;
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
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SPBSParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 283;
				this.match(SPBSParser.PROTECTED);
				}
				break;
			case SPBSParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 284;
				this.match(SPBSParser.PRIVATE);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 285;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 286;
				this.match(SPBSParser.ABSTRACT);
				}
				break;
			case SPBSParser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 287;
				this.match(SPBSParser.FINAL);
				}
				break;
			case SPBSParser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 288;
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
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SPBSParser.RULE_variableModifier);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.FINAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.match(SPBSParser.FINAL);
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.match(SPBSParser.PROTECTED);
				}
				break;
			case SPBSParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.match(SPBSParser.PRIVATE);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 296;
				this.match(SPBSParser.ABSTRACT);
				}
				break;
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 297;
				this.annotation();
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
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SPBSParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.match(SPBSParser.CLASS);
			this.state = 301;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 302;
				this.typeParameters();
				}
			}

			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.EXTENDS) {
				{
				this.state = 305;
				this.match(SPBSParser.EXTENDS);
				this.state = 306;
				this.typeType();
				}
			}

			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.IMPLEMENTS) {
				{
				this.state = 309;
				this.match(SPBSParser.IMPLEMENTS);
				this.state = 310;
				this.typeList();
				}
			}

			this.state = 313;
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
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SPBSParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(SPBSParser.LT);
			this.state = 316;
			this.typeParameter();
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 317;
				this.match(SPBSParser.COMMA);
				this.state = 318;
				this.typeParameter();
				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 324;
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
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SPBSParser.RULE_typeParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 326;
					this.annotation();
					}
					}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			this.state = 332;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.EXTENDS) {
				{
				this.state = 333;
				this.match(SPBSParser.EXTENDS);
				this.state = 337;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 334;
						this.annotation();
						}
						}
					}
					this.state = 339;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 340;
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
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SPBSParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.typeType();
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.BITAND) {
				{
				{
				this.state = 344;
				this.match(SPBSParser.BITAND);
				this.state = 345;
				this.typeType();
				}
				}
				this.state = 350;
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
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SPBSParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(SPBSParser.ENUM);
			this.state = 352;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.IMPLEMENTS) {
				{
				this.state = 353;
				this.match(SPBSParser.IMPLEMENTS);
				this.state = 354;
				this.typeList();
				}
			}

			this.state = 357;
			this.match(SPBSParser.LBRACE);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
				{
				this.state = 358;
				this.enumConstants();
				}
			}

			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.COMMA) {
				{
				this.state = 361;
				this.match(SPBSParser.COMMA);
				}
			}

			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.SEMI) {
				{
				this.state = 364;
				this.enumBodyDeclarations();
				}
			}

			this.state = 367;
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
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SPBSParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.enumConstant();
			this.state = 374;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 370;
					this.match(SPBSParser.COMMA);
					this.state = 371;
					this.enumConstant();
					}
					}
				}
				this.state = 376;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
		this.enterRule(_localctx, 26, SPBSParser.RULE_enumConstant);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 377;
					this.annotation();
					}
					}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 383;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LPAREN) {
				{
				this.state = 384;
				this.arguments();
				}
			}

			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LBRACE) {
				{
				this.state = 387;
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
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SPBSParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(SPBSParser.SEMI);
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.ENUM - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.INTERFACE - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NATIVE - 35)) | (1 << (SPBSParser.PRIVATE - 35)) | (1 << (SPBSParser.PROTECTED - 35)) | (1 << (SPBSParser.PUBLIC - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.STATIC - 35)) | (1 << (SPBSParser.STRICTFP - 35)) | (1 << (SPBSParser.SYNCHRONIZED - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SPBSParser.TRANSIENT - 67)) | (1 << (SPBSParser.VOID - 67)) | (1 << (SPBSParser.VOLATILE - 67)) | (1 << (SPBSParser.LBRACE - 67)) | (1 << (SPBSParser.SEMI - 67)) | (1 << (SPBSParser.LT - 67)))) !== 0) || _la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
				{
				{
				this.state = 391;
				this.classBodyDeclaration();
				}
				}
				this.state = 396;
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
		this.enterRule(_localctx, 30, SPBSParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(SPBSParser.INTERFACE);
			this.state = 398;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 399;
				this.typeParameters();
				}
			}

			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.EXTENDS) {
				{
				this.state = 402;
				this.match(SPBSParser.EXTENDS);
				this.state = 403;
				this.typeList();
				}
			}

			this.state = 406;
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
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SPBSParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(SPBSParser.LBRACE);
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.ENUM - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.INTERFACE - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NATIVE - 35)) | (1 << (SPBSParser.PRIVATE - 35)) | (1 << (SPBSParser.PROTECTED - 35)) | (1 << (SPBSParser.PUBLIC - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.STATIC - 35)) | (1 << (SPBSParser.STRICTFP - 35)) | (1 << (SPBSParser.SYNCHRONIZED - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SPBSParser.TRANSIENT - 67)) | (1 << (SPBSParser.VOID - 67)) | (1 << (SPBSParser.VOLATILE - 67)) | (1 << (SPBSParser.LBRACE - 67)) | (1 << (SPBSParser.SEMI - 67)) | (1 << (SPBSParser.LT - 67)))) !== 0) || _la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
				{
				{
				this.state = 409;
				this.classBodyDeclaration();
				}
				}
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 415;
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
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SPBSParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(SPBSParser.LBRACE);
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SPBSParser.DEFAULT - 33)) | (1 << (SPBSParser.DOUBLE - 33)) | (1 << (SPBSParser.ENUM - 33)) | (1 << (SPBSParser.FINAL - 33)) | (1 << (SPBSParser.FLOAT - 33)) | (1 << (SPBSParser.INT - 33)) | (1 << (SPBSParser.INTERFACE - 33)) | (1 << (SPBSParser.LONG - 33)) | (1 << (SPBSParser.NATIVE - 33)) | (1 << (SPBSParser.PRIVATE - 33)) | (1 << (SPBSParser.PROTECTED - 33)) | (1 << (SPBSParser.PUBLIC - 33)) | (1 << (SPBSParser.SHORT - 33)) | (1 << (SPBSParser.STATIC - 33)) | (1 << (SPBSParser.STRICTFP - 33)) | (1 << (SPBSParser.SYNCHRONIZED - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SPBSParser.TRANSIENT - 67)) | (1 << (SPBSParser.VOID - 67)) | (1 << (SPBSParser.VOLATILE - 67)) | (1 << (SPBSParser.SEMI - 67)) | (1 << (SPBSParser.LT - 67)))) !== 0) || _la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
				{
				{
				this.state = 418;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 424;
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
		this.enterRule(_localctx, 36, SPBSParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.STATIC) {
					{
					this.state = 427;
					this.match(SPBSParser.STATIC);
					}
				}

				this.state = 430;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 431;
						this.modifier();
						}
						}
					}
					this.state = 436;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 437;
				this.memberDeclaration();
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
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SPBSParser.RULE_memberDeclaration);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 440;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 441;
				this.genericMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 442;
				this.fieldDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 443;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 444;
				this.genericConstructorDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 445;
				this.interfaceDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 446;
				this.annotationTypeDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 447;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 448;
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
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SPBSParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.typeTypeOrVoid();
			this.state = 452;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 453;
			this.formalParameters();
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.LBRACK) {
				{
				{
				this.state = 454;
				this.match(SPBSParser.LBRACK);
				this.state = 455;
				this.match(SPBSParser.RBRACK);
				}
				}
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.THROWS) {
				{
				this.state = 461;
				this.match(SPBSParser.THROWS);
				this.state = 462;
				this.qualifiedNameList();
				}
			}

			this.state = 465;
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
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SPBSParser.RULE_methodBody);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 467;
				this.block();
				}
				break;
			case SPBSParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 468;
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
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		let _localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SPBSParser.RULE_typeTypeOrVoid);
		try {
			this.state = 473;
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
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.typeType();
				}
				break;
			case SPBSParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
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
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SPBSParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.typeParameters();
			this.state = 476;
			this.methodDeclaration();
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
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SPBSParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.typeParameters();
			this.state = 479;
			this.constructorDeclaration();
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
		this.enterRule(_localctx, 50, SPBSParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 482;
			this.formalParameters();
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.THROWS) {
				{
				this.state = 483;
				this.match(SPBSParser.THROWS);
				this.state = 484;
				this.qualifiedNameList();
				}
			}

			this.state = 487;
			_localctx._constructorBody = this.block();
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
		this.enterRule(_localctx, 52, SPBSParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.typeType();
			this.state = 490;
			this.variableDeclarators();
			this.state = 491;
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
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SPBSParser.RULE_interfaceBodyDeclaration);
		try {
			let _alt: number;
			this.state = 501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.ABSTRACT:
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.CLASS:
			case SPBSParser.DEFAULT:
			case SPBSParser.DOUBLE:
			case SPBSParser.ENUM:
			case SPBSParser.FINAL:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.INTERFACE:
			case SPBSParser.LONG:
			case SPBSParser.NATIVE:
			case SPBSParser.PRIVATE:
			case SPBSParser.PROTECTED:
			case SPBSParser.PUBLIC:
			case SPBSParser.SHORT:
			case SPBSParser.STATIC:
			case SPBSParser.STRICTFP:
			case SPBSParser.SYNCHRONIZED:
			case SPBSParser.TRANSIENT:
			case SPBSParser.VOID:
			case SPBSParser.VOLATILE:
			case SPBSParser.LT:
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 496;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 493;
						this.modifier();
						}
						}
					}
					this.state = 498;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				}
				this.state = 499;
				this.interfaceMemberDeclaration();
				}
				break;
			case SPBSParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 500;
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
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SPBSParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 505;
				this.genericInterfaceMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 506;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 507;
				this.annotationTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 508;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 509;
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
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SPBSParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.typeType();
			this.state = 513;
			this.constantDeclarator();
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 514;
				this.match(SPBSParser.COMMA);
				this.state = 515;
				this.constantDeclarator();
				}
				}
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 521;
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
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SPBSParser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.LBRACK) {
				{
				{
				this.state = 524;
				this.match(SPBSParser.LBRACK);
				this.state = 525;
				this.match(SPBSParser.RBRACK);
				}
				}
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 531;
			this.match(SPBSParser.ASSIGN);
			this.state = 532;
			this.variableInitializer();
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
		this.enterRule(_localctx, 62, SPBSParser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 534;
					this.interfaceMethodModifier();
					}
					}
				}
				this.state = 539;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 550;
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
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				{
				this.state = 540;
				this.typeTypeOrVoid();
				}
				break;
			case SPBSParser.LT:
				{
				this.state = 541;
				this.typeParameters();
				this.state = 545;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 542;
						this.annotation();
						}
						}
					}
					this.state = 547;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				this.state = 548;
				this.typeTypeOrVoid();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 552;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 553;
			this.formalParameters();
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.LBRACK) {
				{
				{
				this.state = 554;
				this.match(SPBSParser.LBRACK);
				this.state = 555;
				this.match(SPBSParser.RBRACK);
				}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.THROWS) {
				{
				this.state = 561;
				this.match(SPBSParser.THROWS);
				this.state = 562;
				this.qualifiedNameList();
				}
			}

			this.state = 565;
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
		this.enterRule(_localctx, 64, SPBSParser.RULE_interfaceMethodModifier);
		try {
			this.state = 573;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 567;
				this.annotation();
				}
				break;
			case SPBSParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 568;
				this.match(SPBSParser.PUBLIC);
				}
				break;
			case SPBSParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 569;
				this.match(SPBSParser.ABSTRACT);
				}
				break;
			case SPBSParser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 570;
				this.match(SPBSParser.DEFAULT);
				}
				break;
			case SPBSParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 571;
				this.match(SPBSParser.STATIC);
				}
				break;
			case SPBSParser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 572;
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
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		let _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SPBSParser.RULE_genericInterfaceMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.typeParameters();
			this.state = 576;
			this.interfaceMethodDeclaration();
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
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SPBSParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.variableDeclarator();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 579;
				this.match(SPBSParser.COMMA);
				this.state = 580;
				this.variableDeclarator();
				}
				}
				this.state = 585;
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
		this.enterRule(_localctx, 70, SPBSParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.variableDeclaratorId();
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.ASSIGN) {
				{
				this.state = 587;
				this.match(SPBSParser.ASSIGN);
				this.state = 588;
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
		this.enterRule(_localctx, 72, SPBSParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.LBRACK) {
				{
				{
				this.state = 592;
				this.match(SPBSParser.LBRACK);
				this.state = 593;
				this.match(SPBSParser.RBRACK);
				}
				}
				this.state = 598;
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
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SPBSParser.RULE_variableInitializer);
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this.arrayInitializer();
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
			case SPBSParser.DECIMAL_LITERAL:
			case SPBSParser.HEX_LITERAL:
			case SPBSParser.OCT_LITERAL:
			case SPBSParser.BINARY_LITERAL:
			case SPBSParser.FLOAT_LITERAL:
			case SPBSParser.HEX_FLOAT_LITERAL:
			case SPBSParser.BOOL_LITERAL:
			case SPBSParser.CHAR_LITERAL:
			case SPBSParser.STRING_LITERAL:
			case SPBSParser.NULL_LITERAL:
			case SPBSParser.LPAREN:
			case SPBSParser.LT:
			case SPBSParser.BANG:
			case SPBSParser.TILDE:
			case SPBSParser.INC:
			case SPBSParser.DEC:
			case SPBSParser.ADD:
			case SPBSParser.SUB:
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 600;
				this.expression(0);
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
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SPBSParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.match(SPBSParser.LBRACE);
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LBRACE - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
				{
				this.state = 604;
				this.variableInitializer();
				this.state = 609;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 605;
						this.match(SPBSParser.COMMA);
						this.state = 606;
						this.variableInitializer();
						}
						}
					}
					this.state = 611;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				}
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.COMMA) {
					{
					this.state = 612;
					this.match(SPBSParser.COMMA);
					}
				}

				}
			}

			this.state = 617;
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
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SPBSParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 621;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 620;
				this.typeArguments();
				}
				break;
			}
			this.state = 630;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 623;
					this.match(SPBSParser.DOT);
					this.state = 624;
					this.match(SPBSParser.IDENTIFIER);
					this.state = 626;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
					case 1:
						{
						this.state = 625;
						this.typeArguments();
						}
						break;
					}
					}
					}
				}
				this.state = 632;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
		this.enterRule(_localctx, 80, SPBSParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 645;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 633;
				this.typeType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
					{
					{
					this.state = 634;
					this.annotation();
					}
					}
					this.state = 639;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 640;
				this.match(SPBSParser.QUESTION);
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.EXTENDS || _la === SPBSParser.SUPER) {
					{
					this.state = 641;
					_la = this._input.LA(1);
					if (!(_la === SPBSParser.EXTENDS || _la === SPBSParser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 642;
					this.typeType();
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
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SPBSParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.qualifiedName();
			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 648;
				this.match(SPBSParser.COMMA);
				this.state = 649;
				this.qualifiedName();
				}
				}
				this.state = 654;
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
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SPBSParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this.match(SPBSParser.LPAREN);
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.PRIVATE - 35)) | (1 << (SPBSParser.PROTECTED - 35)) | (1 << (SPBSParser.PUBLIC - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.STATIC - 35)))) !== 0) || _la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
				{
				this.state = 656;
				this.formalParameterList();
				}
			}

			this.state = 659;
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
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SPBSParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 661;
				this.formalParameter();
				this.state = 666;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 662;
						this.match(SPBSParser.COMMA);
						this.state = 663;
						this.formalParameter();
						}
						}
					}
					this.state = 668;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				}
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.COMMA) {
					{
					this.state = 669;
					this.match(SPBSParser.COMMA);
					this.state = 670;
					this.lastFormalParameter();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 673;
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
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SPBSParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 676;
					this.variableModifier();
					}
					}
				}
				this.state = 681;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			this.state = 682;
			this.typeType();
			this.state = 683;
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
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SPBSParser.RULE_lastFormalParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 685;
					this.variableModifier();
					}
					}
				}
				this.state = 690;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			}
			this.state = 691;
			this.typeType();
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
				{
				{
				this.state = 692;
				this.annotation();
				}
				}
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 698;
			this.match(SPBSParser.ELLIPSIS);
			this.state = 699;
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
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SPBSParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 706;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 702;
					this.match(SPBSParser.DOT);
					this.state = 703;
					this.match(SPBSParser.IDENTIFIER);
					}
					}
				}
				this.state = 708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SPBSParser.RULE_literal);
		try {
			this.state = 715;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.DECIMAL_LITERAL:
			case SPBSParser.HEX_LITERAL:
			case SPBSParser.OCT_LITERAL:
			case SPBSParser.BINARY_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.integerLiteral();
				}
				break;
			case SPBSParser.FLOAT_LITERAL:
			case SPBSParser.HEX_FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 710;
				this.floatLiteral();
				}
				break;
			case SPBSParser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 711;
				this.match(SPBSParser.CHAR_LITERAL);
				}
				break;
			case SPBSParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 712;
				this.match(SPBSParser.STRING_LITERAL);
				}
				break;
			case SPBSParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 713;
				this.match(SPBSParser.BOOL_LITERAL);
				}
				break;
			case SPBSParser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 714;
				this.match(SPBSParser.NULL_LITERAL);
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
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SPBSParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			_la = this._input.LA(1);
			if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SPBSParser.DECIMAL_LITERAL - 72)) | (1 << (SPBSParser.HEX_LITERAL - 72)) | (1 << (SPBSParser.OCT_LITERAL - 72)) | (1 << (SPBSParser.BINARY_LITERAL - 72)))) !== 0))) {
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
	public floatLiteral(): FloatLiteralContext {
		let _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SPBSParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			_la = this._input.LA(1);
			if (!(_la === SPBSParser.FLOAT_LITERAL || _la === SPBSParser.HEX_FLOAT_LITERAL)) {
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
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext {
		let _localctx: AltAnnotationQualifiedNameContext = new AltAnnotationQualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SPBSParser.RULE_altAnnotationQualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.IDENTIFIER) {
				{
				{
				this.state = 721;
				this.match(SPBSParser.IDENTIFIER);
				this.state = 722;
				this.match(SPBSParser.DOT);
				}
				}
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 728;
			this.match(SPBSParser.AT);
			this.state = 729;
			this.match(SPBSParser.IDENTIFIER);
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
		this.enterRule(_localctx, 102, SPBSParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 731;
				this.match(SPBSParser.AT);
				this.state = 732;
				this.qualifiedName();
				}
				break;

			case 2:
				{
				this.state = 733;
				this.altAnnotationQualifiedName();
				}
				break;
			}
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LPAREN) {
				{
				this.state = 736;
				this.match(SPBSParser.LPAREN);
				this.state = 739;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 737;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 738;
					this.elementValue();
					}
					break;
				}
				this.state = 741;
				this.match(SPBSParser.RPAREN);
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
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SPBSParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this.elementValuePair();
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 745;
				this.match(SPBSParser.COMMA);
				this.state = 746;
				this.elementValuePair();
				}
				}
				this.state = 751;
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
		this.enterRule(_localctx, 106, SPBSParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 753;
			this.match(SPBSParser.ASSIGN);
			this.state = 754;
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
		this.enterRule(_localctx, 108, SPBSParser.RULE_elementValue);
		try {
			this.state = 759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 756;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 757;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 758;
				this.elementValueArrayInitializer();
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
		this.enterRule(_localctx, 110, SPBSParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(SPBSParser.LBRACE);
			this.state = 770;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LBRACE - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
				{
				this.state = 762;
				this.elementValue();
				this.state = 767;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 763;
						this.match(SPBSParser.COMMA);
						this.state = 764;
						this.elementValue();
						}
						}
					}
					this.state = 769;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				}
				}
			}

			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.COMMA) {
				{
				this.state = 772;
				this.match(SPBSParser.COMMA);
				}
			}

			this.state = 775;
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
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SPBSParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.match(SPBSParser.AT);
			this.state = 778;
			this.match(SPBSParser.INTERFACE);
			this.state = 779;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 780;
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
		this.enterRule(_localctx, 114, SPBSParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.match(SPBSParser.LBRACE);
			this.state = 786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.ENUM - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.INTERFACE - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NATIVE - 35)) | (1 << (SPBSParser.PRIVATE - 35)) | (1 << (SPBSParser.PROTECTED - 35)) | (1 << (SPBSParser.PUBLIC - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.STATIC - 35)) | (1 << (SPBSParser.STRICTFP - 35)) | (1 << (SPBSParser.SYNCHRONIZED - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (SPBSParser.TRANSIENT - 67)) | (1 << (SPBSParser.VOLATILE - 67)) | (1 << (SPBSParser.SEMI - 67)))) !== 0) || _la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
				{
				{
				this.state = 783;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 789;
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
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SPBSParser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 799;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.ABSTRACT:
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.CLASS:
			case SPBSParser.DOUBLE:
			case SPBSParser.ENUM:
			case SPBSParser.FINAL:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.INTERFACE:
			case SPBSParser.LONG:
			case SPBSParser.NATIVE:
			case SPBSParser.PRIVATE:
			case SPBSParser.PROTECTED:
			case SPBSParser.PUBLIC:
			case SPBSParser.SHORT:
			case SPBSParser.STATIC:
			case SPBSParser.STRICTFP:
			case SPBSParser.SYNCHRONIZED:
			case SPBSParser.TRANSIENT:
			case SPBSParser.VOLATILE:
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 794;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 791;
						this.modifier();
						}
						}
					}
					this.state = 796;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				}
				this.state = 797;
				this.annotationTypeElementRest();
				}
				break;
			case SPBSParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 798;
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
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SPBSParser.RULE_annotationTypeElementRest);
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 801;
				this.typeType();
				this.state = 802;
				this.annotationMethodOrConstantRest();
				this.state = 803;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 805;
				this.classDeclaration();
				this.state = 807;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 806;
					this.match(SPBSParser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 809;
				this.interfaceDeclaration();
				this.state = 811;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 810;
					this.match(SPBSParser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 813;
				this.enumDeclaration();
				this.state = 815;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 814;
					this.match(SPBSParser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 817;
				this.annotationTypeDeclaration();
				this.state = 819;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 818;
					this.match(SPBSParser.SEMI);
					}
					break;
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
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SPBSParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 825;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 823;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 824;
				this.annotationConstantRest();
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
	public annotationMethodRest(): AnnotationMethodRestContext {
		let _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SPBSParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 828;
			this.match(SPBSParser.LPAREN);
			this.state = 829;
			this.match(SPBSParser.RPAREN);
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.DEFAULT) {
				{
				this.state = 830;
				this.defaultValue();
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
	public annotationConstantRest(): AnnotationConstantRestContext {
		let _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SPBSParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.variableDeclarators();
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
		this.enterRule(_localctx, 126, SPBSParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.match(SPBSParser.DEFAULT);
			this.state = 836;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SPBSParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.match(SPBSParser.LBRACE);
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.ASSERT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BREAK) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SPBSParser.CONTINUE - 32)) | (1 << (SPBSParser.DO - 32)) | (1 << (SPBSParser.DOUBLE - 32)) | (1 << (SPBSParser.ENUM - 32)) | (1 << (SPBSParser.FINAL - 32)) | (1 << (SPBSParser.FLOAT - 32)) | (1 << (SPBSParser.FOR - 32)) | (1 << (SPBSParser.IF - 32)) | (1 << (SPBSParser.IMPORT - 32)) | (1 << (SPBSParser.INT - 32)) | (1 << (SPBSParser.INTERFACE - 32)) | (1 << (SPBSParser.LONG - 32)) | (1 << (SPBSParser.NATIVE - 32)) | (1 << (SPBSParser.NEW - 32)) | (1 << (SPBSParser.PRIVATE - 32)) | (1 << (SPBSParser.PROTECTED - 32)) | (1 << (SPBSParser.PUBLIC - 32)) | (1 << (SPBSParser.RETURN - 32)) | (1 << (SPBSParser.SHORT - 32)) | (1 << (SPBSParser.STATIC - 32)) | (1 << (SPBSParser.STRICTFP - 32)) | (1 << (SPBSParser.SUPER - 32)) | (1 << (SPBSParser.SWITCH - 32)) | (1 << (SPBSParser.SYNCHRONIZED - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SPBSParser.THIS - 64)) | (1 << (SPBSParser.THROW - 64)) | (1 << (SPBSParser.TRANSIENT - 64)) | (1 << (SPBSParser.TRY - 64)) | (1 << (SPBSParser.VOID - 64)) | (1 << (SPBSParser.VOLATILE - 64)) | (1 << (SPBSParser.WHILE - 64)) | (1 << (SPBSParser.DECIMAL_LITERAL - 64)) | (1 << (SPBSParser.HEX_LITERAL - 64)) | (1 << (SPBSParser.OCT_LITERAL - 64)) | (1 << (SPBSParser.BINARY_LITERAL - 64)) | (1 << (SPBSParser.FLOAT_LITERAL - 64)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 64)) | (1 << (SPBSParser.BOOL_LITERAL - 64)) | (1 << (SPBSParser.CHAR_LITERAL - 64)) | (1 << (SPBSParser.STRING_LITERAL - 64)) | (1 << (SPBSParser.NULL_LITERAL - 64)) | (1 << (SPBSParser.LPAREN - 64)) | (1 << (SPBSParser.LBRACE - 64)) | (1 << (SPBSParser.SEMI - 64)) | (1 << (SPBSParser.LT - 64)) | (1 << (SPBSParser.BANG - 64)) | (1 << (SPBSParser.TILDE - 64)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
				{
				{
				this.state = 839;
				this.blockStatement();
				}
				}
				this.state = 844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 845;
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
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SPBSParser.RULE_blockStatement);
		try {
			let _alt: number;
			this.state = 860;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 847;
				this.localVariableDeclaration();
				this.state = 848;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 850;
				this.importDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 851;
				this.statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 852;
				this.localTypeDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 856;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 853;
						this.modifier();
						}
						}
					}
					this.state = 858;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				}
				this.state = 859;
				this.memberDeclaration();
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
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SPBSParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 862;
					this.variableModifier();
					}
					}
				}
				this.state = 867;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			}
			this.state = 868;
			this.typeType();
			this.state = 869;
			this.variableDeclarators();
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
	public localTypeDeclaration(): LocalTypeDeclarationContext {
		let _localctx: LocalTypeDeclarationContext = new LocalTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SPBSParser.RULE_localTypeDeclaration);
		let _la: number;
		try {
			this.state = 882;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.ABSTRACT:
			case SPBSParser.CLASS:
			case SPBSParser.FINAL:
			case SPBSParser.INTERFACE:
			case SPBSParser.PRIVATE:
			case SPBSParser.PROTECTED:
			case SPBSParser.PUBLIC:
			case SPBSParser.STATIC:
			case SPBSParser.STRICTFP:
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.ABSTRACT || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SPBSParser.FINAL - 39)) | (1 << (SPBSParser.PRIVATE - 39)) | (1 << (SPBSParser.PROTECTED - 39)) | (1 << (SPBSParser.PUBLIC - 39)) | (1 << (SPBSParser.STATIC - 39)) | (1 << (SPBSParser.STRICTFP - 39)))) !== 0) || _la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
					{
					{
					this.state = 871;
					this.classOrInterfaceModifier();
					}
					}
					this.state = 876;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 879;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SPBSParser.CLASS:
					{
					this.state = 877;
					this.classDeclaration();
					}
					break;
				case SPBSParser.INTERFACE:
					{
					this.state = 878;
					this.interfaceDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case SPBSParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 881;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SPBSParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 884;
				_localctx._blockLabel = this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 885;
				this.match(SPBSParser.ASSERT);
				this.state = 886;
				this.expression(0);
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.COLON) {
					{
					this.state = 887;
					this.match(SPBSParser.COLON);
					this.state = 888;
					this.expression(0);
					}
				}

				this.state = 891;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 893;
				this.match(SPBSParser.IF);
				this.state = 894;
				this.parExpression();
				this.state = 895;
				this.statement();
				this.state = 898;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 896;
					this.match(SPBSParser.ELSE);
					this.state = 897;
					this.statement();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 900;
				this.match(SPBSParser.FOR);
				this.state = 901;
				this.match(SPBSParser.LPAREN);
				this.state = 902;
				this.forControl();
				this.state = 903;
				this.match(SPBSParser.RPAREN);
				this.state = 904;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 906;
				this.match(SPBSParser.WHILE);
				this.state = 907;
				this.parExpression();
				this.state = 908;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 910;
				this.match(SPBSParser.DO);
				this.state = 911;
				this.statement();
				this.state = 912;
				this.match(SPBSParser.WHILE);
				this.state = 913;
				this.parExpression();
				this.state = 914;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 916;
				this.match(SPBSParser.TRY);
				this.state = 917;
				this.block();
				this.state = 927;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SPBSParser.CATCH:
					{
					this.state = 919;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 918;
						this.catchClause();
						}
						}
						this.state = 921;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === SPBSParser.CATCH);
					this.state = 924;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SPBSParser.FINALLY) {
						{
						this.state = 923;
						this.finallyBlock();
						}
					}

					}
					break;
				case SPBSParser.FINALLY:
					{
					this.state = 926;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 929;
				this.match(SPBSParser.TRY);
				this.state = 930;
				this.resourceSpecification();
				this.state = 931;
				this.block();
				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.CATCH) {
					{
					{
					this.state = 932;
					this.catchClause();
					}
					}
					this.state = 937;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.FINALLY) {
					{
					this.state = 938;
					this.finallyBlock();
					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 941;
				this.match(SPBSParser.SWITCH);
				this.state = 942;
				this.parExpression();
				this.state = 943;
				this.match(SPBSParser.LBRACE);
				this.state = 947;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 944;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 949;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				}
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.CASE || _la === SPBSParser.DEFAULT) {
					{
					{
					this.state = 950;
					this.switchLabel();
					}
					}
					this.state = 955;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 956;
				this.match(SPBSParser.RBRACE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 958;
				this.match(SPBSParser.SYNCHRONIZED);
				this.state = 959;
				this.parExpression();
				this.state = 960;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 962;
				this.match(SPBSParser.RETURN);
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
					{
					this.state = 963;
					this.expression(0);
					}
				}

				this.state = 966;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 967;
				this.match(SPBSParser.THROW);
				this.state = 968;
				this.expression(0);
				this.state = 969;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 971;
				this.match(SPBSParser.BREAK);
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.IDENTIFIER) {
					{
					this.state = 972;
					this.match(SPBSParser.IDENTIFIER);
					}
				}

				this.state = 975;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 976;
				this.match(SPBSParser.CONTINUE);
				this.state = 978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.IDENTIFIER) {
					{
					this.state = 977;
					this.match(SPBSParser.IDENTIFIER);
					}
				}

				this.state = 980;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 981;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 982;
				_localctx._statementExpression = this.expression(0);
				this.state = 983;
				this.match(SPBSParser.SEMI);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 985;
				_localctx._identifierLabel = this.match(SPBSParser.IDENTIFIER);
				this.state = 986;
				this.match(SPBSParser.COLON);
				this.state = 987;
				this.statement();
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
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SPBSParser.RULE_catchClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			this.match(SPBSParser.CATCH);
			this.state = 991;
			this.match(SPBSParser.LPAREN);
			this.state = 995;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 992;
					this.variableModifier();
					}
					}
				}
				this.state = 997;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 998;
			this.catchType();
			this.state = 999;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 1000;
			this.match(SPBSParser.RPAREN);
			this.state = 1001;
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
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SPBSParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this.qualifiedName();
			this.state = 1008;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.BITOR) {
				{
				{
				this.state = 1004;
				this.match(SPBSParser.BITOR);
				this.state = 1005;
				this.qualifiedName();
				}
				}
				this.state = 1010;
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
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SPBSParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(SPBSParser.FINALLY);
			this.state = 1012;
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
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SPBSParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014;
			this.match(SPBSParser.LPAREN);
			this.state = 1015;
			this.resources();
			this.state = 1017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.SEMI) {
				{
				this.state = 1016;
				this.match(SPBSParser.SEMI);
				}
			}

			this.state = 1019;
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
	public resources(): ResourcesContext {
		let _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SPBSParser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1021;
			this.resource();
			this.state = 1026;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1022;
					this.match(SPBSParser.SEMI);
					this.state = 1023;
					this.resource();
					}
					}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
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
		this.enterRule(_localctx, 148, SPBSParser.RULE_resource);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1029;
					this.variableModifier();
					}
					}
				}
				this.state = 1034;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			}
			this.state = 1035;
			this.classOrInterfaceType();
			this.state = 1036;
			this.variableDeclaratorId();
			this.state = 1037;
			this.match(SPBSParser.ASSIGN);
			this.state = 1038;
			this.expression(0);
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
		this.enterRule(_localctx, 150, SPBSParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1041;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1040;
				this.switchLabel();
				}
				}
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SPBSParser.CASE || _la === SPBSParser.DEFAULT);
			this.state = 1046;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1045;
				this.blockStatement();
				}
				}
				this.state = 1048;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.ASSERT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BREAK) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR) | (1 << SPBSParser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SPBSParser.CONTINUE - 32)) | (1 << (SPBSParser.DO - 32)) | (1 << (SPBSParser.DOUBLE - 32)) | (1 << (SPBSParser.ENUM - 32)) | (1 << (SPBSParser.FINAL - 32)) | (1 << (SPBSParser.FLOAT - 32)) | (1 << (SPBSParser.FOR - 32)) | (1 << (SPBSParser.IF - 32)) | (1 << (SPBSParser.IMPORT - 32)) | (1 << (SPBSParser.INT - 32)) | (1 << (SPBSParser.INTERFACE - 32)) | (1 << (SPBSParser.LONG - 32)) | (1 << (SPBSParser.NATIVE - 32)) | (1 << (SPBSParser.NEW - 32)) | (1 << (SPBSParser.PRIVATE - 32)) | (1 << (SPBSParser.PROTECTED - 32)) | (1 << (SPBSParser.PUBLIC - 32)) | (1 << (SPBSParser.RETURN - 32)) | (1 << (SPBSParser.SHORT - 32)) | (1 << (SPBSParser.STATIC - 32)) | (1 << (SPBSParser.STRICTFP - 32)) | (1 << (SPBSParser.SUPER - 32)) | (1 << (SPBSParser.SWITCH - 32)) | (1 << (SPBSParser.SYNCHRONIZED - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SPBSParser.THIS - 64)) | (1 << (SPBSParser.THROW - 64)) | (1 << (SPBSParser.TRANSIENT - 64)) | (1 << (SPBSParser.TRY - 64)) | (1 << (SPBSParser.VOID - 64)) | (1 << (SPBSParser.VOLATILE - 64)) | (1 << (SPBSParser.WHILE - 64)) | (1 << (SPBSParser.DECIMAL_LITERAL - 64)) | (1 << (SPBSParser.HEX_LITERAL - 64)) | (1 << (SPBSParser.OCT_LITERAL - 64)) | (1 << (SPBSParser.BINARY_LITERAL - 64)) | (1 << (SPBSParser.FLOAT_LITERAL - 64)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 64)) | (1 << (SPBSParser.BOOL_LITERAL - 64)) | (1 << (SPBSParser.CHAR_LITERAL - 64)) | (1 << (SPBSParser.STRING_LITERAL - 64)) | (1 << (SPBSParser.NULL_LITERAL - 64)) | (1 << (SPBSParser.LPAREN - 64)) | (1 << (SPBSParser.LBRACE - 64)) | (1 << (SPBSParser.SEMI - 64)) | (1 << (SPBSParser.LT - 64)) | (1 << (SPBSParser.BANG - 64)) | (1 << (SPBSParser.TILDE - 64)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0));
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
		this.enterRule(_localctx, 152, SPBSParser.RULE_switchLabel);
		try {
			this.state = 1058;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1050;
				this.match(SPBSParser.CASE);
				this.state = 1053;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1051;
					_localctx._constantExpression = this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 1052;
					_localctx._enumConstantName = this.match(SPBSParser.IDENTIFIER);
					}
					break;
				}
				this.state = 1055;
				this.match(SPBSParser.COLON);
				}
				break;
			case SPBSParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1056;
				this.match(SPBSParser.DEFAULT);
				this.state = 1057;
				this.match(SPBSParser.COLON);
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
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SPBSParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1060;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.PRIVATE - 35)) | (1 << (SPBSParser.PROTECTED - 35)) | (1 << (SPBSParser.PUBLIC - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.STATIC - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
					{
					this.state = 1061;
					this.forInit();
					}
				}

				this.state = 1064;
				this.match(SPBSParser.SEMI);
				this.state = 1066;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
					{
					this.state = 1065;
					this.expression(0);
					}
				}

				this.state = 1068;
				this.match(SPBSParser.SEMI);
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
					{
					this.state = 1069;
					_localctx._forUpdate = this.expressionList();
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
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SPBSParser.RULE_forInit);
		try {
			this.state = 1076;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1074;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1075;
				this.expressionList();
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
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SPBSParser.RULE_enhancedForControl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1081;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1078;
					this.variableModifier();
					}
					}
				}
				this.state = 1083;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
			}
			this.state = 1084;
			this.typeType();
			this.state = 1085;
			this.variableDeclaratorId();
			this.state = 1086;
			this.match(SPBSParser.COLON);
			this.state = 1087;
			this.expression(0);
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
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SPBSParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1089;
			this.match(SPBSParser.LPAREN);
			this.state = 1090;
			this.expression(0);
			this.state = 1091;
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
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SPBSParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1093;
			this.expression(0);
			this.state = 1098;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 1094;
				this.match(SPBSParser.COMMA);
				this.state = 1095;
				this.expression(0);
				}
				}
				this.state = 1100;
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
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SPBSParser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 1119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1101;
				this.match(SPBSParser.IDENTIFIER);
				this.state = 1102;
				this.match(SPBSParser.LPAREN);
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
					{
					this.state = 1103;
					this.expressionList();
					}
				}

				this.state = 1106;
				this.match(SPBSParser.RPAREN);
				}
				break;
			case SPBSParser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1107;
				this.match(SPBSParser.THIS);
				this.state = 1108;
				this.match(SPBSParser.LPAREN);
				this.state = 1110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
					{
					this.state = 1109;
					this.expressionList();
					}
				}

				this.state = 1112;
				this.match(SPBSParser.RPAREN);
				}
				break;
			case SPBSParser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1113;
				this.match(SPBSParser.SUPER);
				this.state = 1114;
				this.match(SPBSParser.LPAREN);
				this.state = 1116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
					{
					this.state = 1115;
					this.expressionList();
					}
				}

				this.state = 1118;
				this.match(SPBSParser.RPAREN);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 166;
		this.enterRecursionRule(_localctx, 166, SPBSParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1122;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1123;
				this.methodCall();
				}
				break;

			case 3:
				{
				this.state = 1124;
				this.match(SPBSParser.NEW);
				this.state = 1125;
				this.creator();
				}
				break;

			case 4:
				{
				this.state = 1126;
				this.match(SPBSParser.LPAREN);
				this.state = 1130;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1127;
						this.annotation();
						}
						}
					}
					this.state = 1132;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				}
				this.state = 1133;
				this.typeType();
				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.BITAND) {
					{
					{
					this.state = 1134;
					this.match(SPBSParser.BITAND);
					this.state = 1135;
					this.typeType();
					}
					}
					this.state = 1140;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1141;
				this.match(SPBSParser.RPAREN);
				this.state = 1142;
				this.expression(22);
				}
				break;

			case 5:
				{
				this.state = 1144;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)))) !== 0))) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1145;
				this.expression(20);
				}
				break;

			case 6:
				{
				this.state = 1146;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SPBSParser.BANG || _la === SPBSParser.TILDE)) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1147;
				this.expression(19);
				}
				break;

			case 7:
				{
				this.state = 1148;
				this.lambdaExpression();
				}
				break;

			case 8:
				{
				this.state = 1149;
				this.match(SPBSParser.VOID);
				}
				break;

			case 9:
				{
				this.state = 1150;
				this.typeType();
				this.state = 1151;
				this.match(SPBSParser.COLONCOLON);
				this.state = 1157;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SPBSParser.LT:
				case SPBSParser.IDENTIFIER:
					{
					this.state = 1153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SPBSParser.LT) {
						{
						this.state = 1152;
						this.typeArguments();
						}
					}

					this.state = 1155;
					this.match(SPBSParser.IDENTIFIER);
					}
					break;
				case SPBSParser.NEW:
					{
					this.state = 1156;
					this.match(SPBSParser.NEW);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 10:
				{
				this.state = 1159;
				this.classType();
				this.state = 1160;
				this.match(SPBSParser.COLONCOLON);
				this.state = 1162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 1161;
					this.typeArguments();
					}
				}

				this.state = 1164;
				this.match(SPBSParser.NEW);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1248;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1246;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1168;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1169;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (SPBSParser.MUL - 108)) | (1 << (SPBSParser.DIV - 108)) | (1 << (SPBSParser.MOD - 108)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1170;
						this.expression(19);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1171;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1172;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SPBSParser.ADD || _la === SPBSParser.SUB)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1173;
						this.expression(18);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1174;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1182;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
						case 1:
							{
							this.state = 1175;
							this.match(SPBSParser.LT);
							this.state = 1176;
							this.match(SPBSParser.LT);
							}
							break;

						case 2:
							{
							this.state = 1177;
							this.match(SPBSParser.GT);
							this.state = 1178;
							this.match(SPBSParser.GT);
							this.state = 1179;
							this.match(SPBSParser.GT);
							}
							break;

						case 3:
							{
							this.state = 1180;
							this.match(SPBSParser.GT);
							this.state = 1181;
							this.match(SPBSParser.GT);
							}
							break;
						}
						this.state = 1184;
						this.expression(17);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1185;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1186;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (SPBSParser.GT - 92)) | (1 << (SPBSParser.LT - 92)) | (1 << (SPBSParser.LE - 92)) | (1 << (SPBSParser.GE - 92)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1187;
						this.expression(16);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1188;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1189;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SPBSParser.EQUAL || _la === SPBSParser.NOTEQUAL)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1190;
						this.expression(14);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1191;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1192;
						_localctx._bop = this.match(SPBSParser.BITAND);
						this.state = 1193;
						this.expression(13);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1194;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1195;
						_localctx._bop = this.match(SPBSParser.CARET);
						this.state = 1196;
						this.expression(12);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1197;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1198;
						_localctx._bop = this.match(SPBSParser.BITOR);
						this.state = 1199;
						this.expression(11);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1200;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1201;
						_localctx._bop = this.match(SPBSParser.AND);
						this.state = 1202;
						this.expression(10);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1203;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1204;
						_localctx._bop = this.match(SPBSParser.OR);
						this.state = 1205;
						this.expression(9);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1206;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1207;
						_localctx._bop = this.match(SPBSParser.QUESTION);
						this.state = 1208;
						this.expression(0);
						this.state = 1209;
						this.match(SPBSParser.COLON);
						this.state = 1210;
						this.expression(7);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1212;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1213;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SPBSParser.ASSIGN - 91)) | (1 << (SPBSParser.ADD_ASSIGN - 91)) | (1 << (SPBSParser.SUB_ASSIGN - 91)) | (1 << (SPBSParser.MUL_ASSIGN - 91)) | (1 << (SPBSParser.DIV_ASSIGN - 91)) | (1 << (SPBSParser.AND_ASSIGN - 91)) | (1 << (SPBSParser.OR_ASSIGN - 91)) | (1 << (SPBSParser.XOR_ASSIGN - 91)) | (1 << (SPBSParser.MOD_ASSIGN - 91)) | (1 << (SPBSParser.LSHIFT_ASSIGN - 91)))) !== 0) || _la === SPBSParser.RSHIFT_ASSIGN || _la === SPBSParser.URSHIFT_ASSIGN)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1214;
						this.expression(6);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1215;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 1216;
						_localctx._bop = this.match(SPBSParser.DOT);
						this.state = 1228;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
						case 1:
							{
							this.state = 1217;
							this.match(SPBSParser.IDENTIFIER);
							}
							break;

						case 2:
							{
							this.state = 1218;
							this.methodCall();
							}
							break;

						case 3:
							{
							this.state = 1219;
							this.match(SPBSParser.THIS);
							}
							break;

						case 4:
							{
							this.state = 1220;
							this.match(SPBSParser.NEW);
							this.state = 1222;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === SPBSParser.LT) {
								{
								this.state = 1221;
								this.nonWildcardTypeArguments();
								}
							}

							this.state = 1224;
							this.innerCreator();
							}
							break;

						case 5:
							{
							this.state = 1225;
							this.match(SPBSParser.SUPER);
							this.state = 1226;
							this.superSuffix();
							}
							break;

						case 6:
							{
							this.state = 1227;
							this.explicitGenericInvocation();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1230;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1231;
						this.match(SPBSParser.LBRACK);
						this.state = 1232;
						this.expression(0);
						this.state = 1233;
						this.match(SPBSParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1235;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1236;
						_localctx._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SPBSParser.INC || _la === SPBSParser.DEC)) {
							_localctx._postfix = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1237;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1238;
						_localctx._bop = this.match(SPBSParser.INSTANCEOF);
						this.state = 1239;
						this.typeType();
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SPBSParser.RULE_expression);
						this.state = 1240;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1241;
						this.match(SPBSParser.COLONCOLON);
						this.state = 1243;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SPBSParser.LT) {
							{
							this.state = 1242;
							this.typeArguments();
							}
						}

						this.state = 1245;
						this.match(SPBSParser.IDENTIFIER);
						}
						break;
					}
					}
				}
				this.state = 1250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
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
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SPBSParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1251;
			this.lambdaParameters();
			this.state = 1252;
			this.match(SPBSParser.ARROW);
			this.state = 1253;
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
		this.enterRule(_localctx, 170, SPBSParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 1271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1255;
				this.match(SPBSParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1256;
				this.match(SPBSParser.LPAREN);
				this.state = 1258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.ABSTRACT) | (1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FINAL - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.PRIVATE - 35)) | (1 << (SPBSParser.PROTECTED - 35)) | (1 << (SPBSParser.PUBLIC - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.STATIC - 35)))) !== 0) || _la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
					{
					this.state = 1257;
					this.formalParameterList();
					}
				}

				this.state = 1260;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1261;
				this.match(SPBSParser.LPAREN);
				this.state = 1262;
				this.match(SPBSParser.IDENTIFIER);
				this.state = 1267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.COMMA) {
					{
					{
					this.state = 1263;
					this.match(SPBSParser.COMMA);
					this.state = 1264;
					this.match(SPBSParser.IDENTIFIER);
					}
					}
					this.state = 1269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1270;
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
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SPBSParser.RULE_lambdaBody);
		try {
			this.state = 1275;
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
			case SPBSParser.DECIMAL_LITERAL:
			case SPBSParser.HEX_LITERAL:
			case SPBSParser.OCT_LITERAL:
			case SPBSParser.BINARY_LITERAL:
			case SPBSParser.FLOAT_LITERAL:
			case SPBSParser.HEX_FLOAT_LITERAL:
			case SPBSParser.BOOL_LITERAL:
			case SPBSParser.CHAR_LITERAL:
			case SPBSParser.STRING_LITERAL:
			case SPBSParser.NULL_LITERAL:
			case SPBSParser.LPAREN:
			case SPBSParser.LT:
			case SPBSParser.BANG:
			case SPBSParser.TILDE:
			case SPBSParser.INC:
			case SPBSParser.DEC:
			case SPBSParser.ADD:
			case SPBSParser.SUB:
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1273;
				this.expression(0);
				}
				break;
			case SPBSParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1274;
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
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SPBSParser.RULE_primary);
		try {
			this.state = 1295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1277;
				this.match(SPBSParser.LPAREN);
				this.state = 1278;
				this.expression(0);
				this.state = 1279;
				this.match(SPBSParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1281;
				this.match(SPBSParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1282;
				this.match(SPBSParser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1283;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1284;
				this.match(SPBSParser.IDENTIFIER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1285;
				this.typeTypeOrVoid();
				this.state = 1286;
				this.match(SPBSParser.DOT);
				this.state = 1287;
				this.match(SPBSParser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1289;
				this.nonWildcardTypeArguments();
				this.state = 1293;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SPBSParser.SUPER:
				case SPBSParser.IDENTIFIER:
					{
					this.state = 1290;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case SPBSParser.THIS:
					{
					this.state = 1291;
					this.match(SPBSParser.THIS);
					this.state = 1292;
					this.arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
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
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SPBSParser.RULE_classType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				{
				this.state = 1297;
				this.classOrInterfaceType();
				this.state = 1298;
				this.match(SPBSParser.DOT);
				}
				break;
			}
			this.state = 1305;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1302;
					this.annotation();
					}
					}
				}
				this.state = 1307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			}
			this.state = 1308;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 1310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 1309;
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
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SPBSParser.RULE_creator);
		try {
			this.state = 1321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1312;
				this.nonWildcardTypeArguments();
				this.state = 1313;
				this.createdName();
				this.state = 1314;
				this.classCreatorRest();
				}
				break;
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.SHORT:
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1316;
				this.createdName();
				this.state = 1319;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SPBSParser.LBRACK:
					{
					this.state = 1317;
					this.arrayCreatorRest();
					}
					break;
				case SPBSParser.LPAREN:
					{
					this.state = 1318;
					this.classCreatorRest();
					}
					break;
				default:
					throw new NoViableAltException(this);
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
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SPBSParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1323;
				this.match(SPBSParser.IDENTIFIER);
				this.state = 1325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SPBSParser.LT) {
					{
					this.state = 1324;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.DOT) {
					{
					{
					this.state = 1327;
					this.match(SPBSParser.DOT);
					this.state = 1328;
					this.match(SPBSParser.IDENTIFIER);
					this.state = 1330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SPBSParser.LT) {
						{
						this.state = 1329;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1337;
				this.primitiveType();
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
	public innerCreator(): InnerCreatorContext {
		let _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SPBSParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1340;
			this.match(SPBSParser.IDENTIFIER);
			this.state = 1342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.LT) {
				{
				this.state = 1341;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1344;
			this.classCreatorRest();
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
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, SPBSParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
			this.match(SPBSParser.LBRACK);
			this.state = 1374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.RBRACK:
				{
				this.state = 1347;
				this.match(SPBSParser.RBRACK);
				this.state = 1352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.LBRACK) {
					{
					{
					this.state = 1348;
					this.match(SPBSParser.LBRACK);
					this.state = 1349;
					this.match(SPBSParser.RBRACK);
					}
					}
					this.state = 1354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1355;
				this.arrayInitializer();
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
			case SPBSParser.DECIMAL_LITERAL:
			case SPBSParser.HEX_LITERAL:
			case SPBSParser.OCT_LITERAL:
			case SPBSParser.BINARY_LITERAL:
			case SPBSParser.FLOAT_LITERAL:
			case SPBSParser.HEX_FLOAT_LITERAL:
			case SPBSParser.BOOL_LITERAL:
			case SPBSParser.CHAR_LITERAL:
			case SPBSParser.STRING_LITERAL:
			case SPBSParser.NULL_LITERAL:
			case SPBSParser.LPAREN:
			case SPBSParser.LT:
			case SPBSParser.BANG:
			case SPBSParser.TILDE:
			case SPBSParser.INC:
			case SPBSParser.DEC:
			case SPBSParser.ADD:
			case SPBSParser.SUB:
			case SPBSParser.AT:
			case SPBSParser.IDENTIFIER:
				{
				this.state = 1356;
				this.expression(0);
				this.state = 1357;
				this.match(SPBSParser.RBRACK);
				this.state = 1364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1358;
						this.match(SPBSParser.LBRACK);
						this.state = 1359;
						this.expression(0);
						this.state = 1360;
						this.match(SPBSParser.RBRACK);
						}
						}
					}
					this.state = 1366;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
				}
				this.state = 1371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1367;
						this.match(SPBSParser.LBRACK);
						this.state = 1368;
						this.match(SPBSParser.RBRACK);
						}
						}
					}
					this.state = 1373;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SPBSParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1376;
			this.arguments();
			this.state = 1378;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1377;
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
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SPBSParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1380;
			this.nonWildcardTypeArguments();
			this.state = 1381;
			this.explicitGenericInvocationSuffix();
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
		this.enterRule(_localctx, 190, SPBSParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1383;
				this.match(SPBSParser.LT);
				this.state = 1384;
				this.match(SPBSParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1385;
				this.typeArguments();
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
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		let _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, SPBSParser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1391;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1388;
				this.match(SPBSParser.LT);
				this.state = 1389;
				this.match(SPBSParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1390;
				this.nonWildcardTypeArguments();
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
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SPBSParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this.match(SPBSParser.LT);
			this.state = 1394;
			this.typeList();
			this.state = 1395;
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SPBSParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1397;
			this.typeType();
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 1398;
				this.match(SPBSParser.COMMA);
				this.state = 1399;
				this.typeType();
				}
				}
				this.state = 1404;
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
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SPBSParser.RULE_typeType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1405;
					this.annotation();
					}
					}
				}
				this.state = 1410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			}
			this.state = 1413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.IDENTIFIER:
				{
				this.state = 1411;
				this.classOrInterfaceType();
				}
				break;
			case SPBSParser.BOOLEAN:
			case SPBSParser.BYTE:
			case SPBSParser.CHAR:
			case SPBSParser.DOUBLE:
			case SPBSParser.FLOAT:
			case SPBSParser.INT:
			case SPBSParser.LONG:
			case SPBSParser.SHORT:
				{
				this.state = 1412;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1425;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1418;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SPBSParser.AT || _la === SPBSParser.IDENTIFIER) {
						{
						{
						this.state = 1415;
						this.annotation();
						}
						}
						this.state = 1420;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1421;
					this.match(SPBSParser.LBRACK);
					this.state = 1422;
					this.match(SPBSParser.RBRACK);
					}
					}
				}
				this.state = 1427;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
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
		this.enterRule(_localctx, 200, SPBSParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1428;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.SHORT - 35)))) !== 0))) {
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
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SPBSParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
			this.match(SPBSParser.LT);
			this.state = 1431;
			this.typeArgument();
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.COMMA) {
				{
				{
				this.state = 1432;
				this.match(SPBSParser.COMMA);
				this.state = 1433;
				this.typeArgument();
				}
				}
				this.state = 1438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1439;
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
	public superSuffix(): SuperSuffixContext {
		let _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SPBSParser.RULE_superSuffix);
		try {
			this.state = 1447;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1441;
				this.arguments();
				}
				break;
			case SPBSParser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1442;
				this.match(SPBSParser.DOT);
				this.state = 1443;
				this.match(SPBSParser.IDENTIFIER);
				this.state = 1445;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
				case 1:
					{
					this.state = 1444;
					this.arguments();
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
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SPBSParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SPBSParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1449;
				this.match(SPBSParser.SUPER);
				this.state = 1450;
				this.superSuffix();
				}
				break;
			case SPBSParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1451;
				this.match(SPBSParser.IDENTIFIER);
				this.state = 1452;
				this.arguments();
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SPBSParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this.match(SPBSParser.LPAREN);
			this.state = 1457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.BOOLEAN) | (1 << SPBSParser.BYTE) | (1 << SPBSParser.CHAR))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SPBSParser.DOUBLE - 35)) | (1 << (SPBSParser.FLOAT - 35)) | (1 << (SPBSParser.INT - 35)) | (1 << (SPBSParser.LONG - 35)) | (1 << (SPBSParser.NEW - 35)) | (1 << (SPBSParser.SHORT - 35)) | (1 << (SPBSParser.SUPER - 35)) | (1 << (SPBSParser.THIS - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SPBSParser.VOID - 69)) | (1 << (SPBSParser.DECIMAL_LITERAL - 69)) | (1 << (SPBSParser.HEX_LITERAL - 69)) | (1 << (SPBSParser.OCT_LITERAL - 69)) | (1 << (SPBSParser.BINARY_LITERAL - 69)) | (1 << (SPBSParser.FLOAT_LITERAL - 69)) | (1 << (SPBSParser.HEX_FLOAT_LITERAL - 69)) | (1 << (SPBSParser.BOOL_LITERAL - 69)) | (1 << (SPBSParser.CHAR_LITERAL - 69)) | (1 << (SPBSParser.STRING_LITERAL - 69)) | (1 << (SPBSParser.NULL_LITERAL - 69)) | (1 << (SPBSParser.LPAREN - 69)) | (1 << (SPBSParser.LT - 69)) | (1 << (SPBSParser.BANG - 69)) | (1 << (SPBSParser.TILDE - 69)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SPBSParser.INC - 104)) | (1 << (SPBSParser.DEC - 104)) | (1 << (SPBSParser.ADD - 104)) | (1 << (SPBSParser.SUB - 104)) | (1 << (SPBSParser.AT - 104)) | (1 << (SPBSParser.IDENTIFIER - 104)))) !== 0)) {
				{
				this.state = 1456;
				this.expressionList();
				}
			}

			this.state = 1459;
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
	public xml_document(): Xml_documentContext {
		let _localctx: Xml_documentContext = new Xml_documentContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, SPBSParser.RULE_xml_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.XMLDeclOpen) {
				{
				this.state = 1461;
				this.xml_prolog();
				}
			}

			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.COMMENT) | (1 << SPBSParser.SEA_WS) | (1 << SPBSParser.PI))) !== 0)) {
				{
				{
				this.state = 1464;
				this.xml_misc();
				}
				}
				this.state = 1469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1470;
			this.xml_element();
			this.state = 1474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SPBSParser.COMMENT) | (1 << SPBSParser.SEA_WS) | (1 << SPBSParser.PI))) !== 0)) {
				{
				{
				this.state = 1471;
				this.xml_misc();
				}
				}
				this.state = 1476;
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
		this.enterRule(_localctx, 212, SPBSParser.RULE_xml_prolog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this.match(SPBSParser.XMLDeclOpen);
			this.state = 1481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SPBSParser.XMLName) {
				{
				{
				this.state = 1478;
				this.xml_attribute();
				}
				}
				this.state = 1483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1484;
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
		this.enterRule(_localctx, 214, SPBSParser.RULE_xml_content);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SPBSParser.SEA_WS || _la === SPBSParser.TEXT) {
				{
				this.state = 1486;
				this.xml_chardata();
				}
			}

			this.state = 1500;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1493;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SPBSParser.BS_ELEMENT_START:
					case SPBSParser.OPEN:
						{
						this.state = 1489;
						this.xml_element();
						}
						break;
					case SPBSParser.EntityRef:
					case SPBSParser.CharRef:
						{
						this.state = 1490;
						this.xml_reference();
						}
						break;
					case SPBSParser.PI:
						{
						this.state = 1491;
						this.match(SPBSParser.PI);
						}
						break;
					case SPBSParser.COMMENT:
						{
						this.state = 1492;
						this.match(SPBSParser.COMMENT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1496;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SPBSParser.SEA_WS || _la === SPBSParser.TEXT) {
						{
						this.state = 1495;
						this.xml_chardata();
						}
					}

					}
					}
				}
				this.state = 1502;
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
	public xml_element(): Xml_elementContext {
		let _localctx: Xml_elementContext = new Xml_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, SPBSParser.RULE_xml_element);
		let _la: number;
		try {
			this.state = 1537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1503;
				this.match(SPBSParser.OPEN);
				this.state = 1504;
				this.match(SPBSParser.XMLName);
				this.state = 1508;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.XMLName) {
					{
					{
					this.state = 1505;
					this.xml_attribute();
					}
					}
					this.state = 1510;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1511;
				this.match(SPBSParser.CLOSE);
				this.state = 1512;
				this.xml_content();
				this.state = 1513;
				this.match(SPBSParser.OPEN);
				this.state = 1514;
				this.match(SPBSParser.SLASH);
				this.state = 1515;
				this.match(SPBSParser.XMLName);
				this.state = 1516;
				this.match(SPBSParser.CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1518;
				this.match(SPBSParser.OPEN);
				this.state = 1519;
				this.match(SPBSParser.XMLName);
				this.state = 1523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SPBSParser.XMLName) {
					{
					{
					this.state = 1520;
					this.xml_attribute();
					}
					}
					this.state = 1525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1526;
				this.match(SPBSParser.SLASH_CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1527;
				this.match(SPBSParser.BS_ELEMENT_START);
				this.state = 1528;
				this.match(SPBSParser.CDATA_START);
				this.state = 1529;
				this.bsCompilationUnit();
				this.state = 1530;
				this.match(SPBSParser.CDATA_END);
				this.state = 1531;
				this.match(SPBSParser.BS_ELEMENT_END);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1533;
				this.match(SPBSParser.BS_ELEMENT_START);
				this.state = 1534;
				this.bsCompilationUnit();
				this.state = 1535;
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
		this.enterRule(_localctx, 218, SPBSParser.RULE_xml_reference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1539;
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
		this.enterRule(_localctx, 220, SPBSParser.RULE_xml_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1541;
			this.match(SPBSParser.XMLName);
			this.state = 1542;
			this.match(SPBSParser.EQUALS);
			this.state = 1543;
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
		this.enterRule(_localctx, 222, SPBSParser.RULE_xml_chardata);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1545;
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
		this.enterRule(_localctx, 224, SPBSParser.RULE_xml_misc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
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
		case 83:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 18);

		case 1:
			return this.precpred(this._ctx, 17);

		case 2:
			return this.precpred(this._ctx, 16);

		case 3:
			return this.precpred(this._ctx, 15);

		case 4:
			return this.precpred(this._ctx, 13);

		case 5:
			return this.precpred(this._ctx, 12);

		case 6:
			return this.precpred(this._ctx, 11);

		case 7:
			return this.precpred(this._ctx, 10);

		case 8:
			return this.precpred(this._ctx, 9);

		case 9:
			return this.precpred(this._ctx, 8);

		case 10:
			return this.precpred(this._ctx, 7);

		case 11:
			return this.precpred(this._ctx, 6);

		case 12:
			return this.precpred(this._ctx, 26);

		case 13:
			return this.precpred(this._ctx, 25);

		case 14:
			return this.precpred(this._ctx, 21);

		case 15:
			return this.precpred(this._ctx, 14);

		case 16:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x86\u0610\x04" +
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
		"r\tr\x03\x02\x07\x02\xE6\n\x02\f\x02\x0E\x02\xE9\v\x02\x03\x02\x07\x02" +
		"\xEC\n\x02\f\x02\x0E\x02\xEF\v\x02\x03\x03\x07\x03\xF2\n\x03\f\x03\x0E" +
		"\x03\xF5\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04" +
		"\xFD\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0102\n\x04\x03\x04\x03\x04" +
		"\x03\x05\x07\x05\u0107\n\x05\f\x05\x0E\x05\u010A\v\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\u0110\n\x05\x03\x05\x05\x05\u0113\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u011A\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0124\n\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u012D\n\b\x03\t\x03\t\x03\t" +
		"\x05\t\u0132\n\t\x03\t\x03\t\x05\t\u0136\n\t\x03\t\x03\t\x05\t\u013A\n" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\u0142\n\n\f\n\x0E\n\u0145" +
		"\v\n\x03\n\x03\n\x03\v\x07\v\u014A\n\v\f\v\x0E\v\u014D\v\v\x03\v\x03\v" +
		"\x03\v\x07\v\u0152\n\v\f\v\x0E\v\u0155\v\v\x03\v\x05\v\u0158\n\v\x03\f" +
		"\x03\f\x03\f\x07\f\u015D\n\f\f\f\x0E\f\u0160\v\f\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0166\n\r\x03\r\x03\r\x05\r\u016A\n\r\x03\r\x05\r\u016D\n\r\x03" +
		"\r\x05\r\u0170\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0177\n" +
		"\x0E\f\x0E\x0E\x0E\u017A\v\x0E\x03\x0F\x07\x0F\u017D\n\x0F\f\x0F\x0E\x0F" +
		"\u0180\v\x0F\x03\x0F\x03\x0F\x05\x0F\u0184\n\x0F\x03\x0F\x05\x0F\u0187" +
		"\n\x0F\x03\x10\x03\x10\x07\x10\u018B\n\x10\f\x10\x0E\x10\u018E\v\x10\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\u0193\n\x11\x03\x11\x03\x11\x05\x11\u0197" +
		"\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x07\x12\u019D\n\x12\f\x12\x0E\x12" +
		"\u01A0\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\u01A6\n\x13\f\x13" +
		"\x0E\x13\u01A9\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u01AF\n\x14" +
		"\x03\x14\x03\x14\x07\x14\u01B3\n\x14\f\x14\x0E\x14\u01B6\v\x14\x03\x14" +
		"\x05\x14\u01B9\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u01C4\n\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x07\x16\u01CB\n\x16\f\x16\x0E\x16\u01CE\v\x16\x03\x16\x03\x16" +
		"\x05\x16\u01D2\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u01D8\n\x17" +
		"\x03\x18\x03\x18\x05\x18\u01DC\n\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01E8\n\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x07\x1D\u01F1\n\x1D\f" +
		"\x1D\x0E\x1D\u01F4\v\x1D\x03\x1D\x03\x1D\x05\x1D\u01F8\n\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0201\n\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0207\n\x1F\f\x1F\x0E\x1F\u020A\v\x1F" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u0211\n \f \x0E \u0214\v \x03 \x03" +
		" \x03 \x03!\x07!\u021A\n!\f!\x0E!\u021D\v!\x03!\x03!\x03!\x07!\u0222\n" +
		"!\f!\x0E!\u0225\v!\x03!\x03!\x05!\u0229\n!\x03!\x03!\x03!\x03!\x07!\u022F" +
		"\n!\f!\x0E!\u0232\v!\x03!\x03!\x05!\u0236\n!\x03!\x03!\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u0240\n\"\x03#\x03#\x03#\x03$\x03$\x03$\x07" +
		"$\u0248\n$\f$\x0E$\u024B\v$\x03%\x03%\x03%\x05%\u0250\n%\x03&\x03&\x03" +
		"&\x07&\u0255\n&\f&\x0E&\u0258\v&\x03\'\x03\'\x05\'\u025C\n\'\x03(\x03" +
		"(\x03(\x03(\x07(\u0262\n(\f(\x0E(\u0265\v(\x03(\x05(\u0268\n(\x05(\u026A" +
		"\n(\x03(\x03(\x03)\x03)\x05)\u0270\n)\x03)\x03)\x03)\x05)\u0275\n)\x07" +
		")\u0277\n)\f)\x0E)\u027A\v)\x03*\x03*\x07*\u027E\n*\f*\x0E*\u0281\v*\x03" +
		"*\x03*\x03*\x05*\u0286\n*\x05*\u0288\n*\x03+\x03+\x03+\x07+\u028D\n+\f" +
		"+\x0E+\u0290\v+\x03,\x03,\x05,\u0294\n,\x03,\x03,\x03-\x03-\x03-\x07-" +
		"\u029B\n-\f-\x0E-\u029E\v-\x03-\x03-\x05-\u02A2\n-\x03-\x05-\u02A5\n-" +
		"\x03.\x07.\u02A8\n.\f.\x0E.\u02AB\v.\x03.\x03.\x03.\x03/\x07/\u02B1\n" +
		"/\f/\x0E/\u02B4\v/\x03/\x03/\x07/\u02B8\n/\f/\x0E/\u02BB\v/\x03/\x03/" +
		"\x03/\x030\x030\x030\x070\u02C3\n0\f0\x0E0\u02C6\v0\x031\x031\x031\x03" +
		"1\x031\x031\x051\u02CE\n1\x032\x032\x033\x033\x034\x034\x074\u02D6\n4" +
		"\f4\x0E4\u02D9\v4\x034\x034\x034\x035\x035\x035\x055\u02E1\n5\x035\x03" +
		"5\x035\x055\u02E6\n5\x035\x055\u02E9\n5\x036\x036\x036\x076\u02EE\n6\f" +
		"6\x0E6\u02F1\v6\x037\x037\x037\x037\x038\x038\x038\x058\u02FA\n8\x039" +
		"\x039\x039\x039\x079\u0300\n9\f9\x0E9\u0303\v9\x059\u0305\n9\x039\x05" +
		"9\u0308\n9\x039\x039\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x07;\u0313\n;" +
		"\f;\x0E;\u0316\v;\x03;\x03;\x03<\x07<\u031B\n<\f<\x0E<\u031E\v<\x03<\x03" +
		"<\x05<\u0322\n<\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u032A\n=\x03=\x03=" +
		"\x05=\u032E\n=\x03=\x03=\x05=\u0332\n=\x03=\x03=\x05=\u0336\n=\x05=\u0338" +
		"\n=\x03>\x03>\x05>\u033C\n>\x03?\x03?\x03?\x03?\x05?\u0342\n?\x03@\x03" +
		"@\x03A\x03A\x03A\x03B\x03B\x07B\u034B\nB\fB\x0EB\u034E\vB\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x07C\u0359\nC\fC\x0EC\u035C\vC\x03C\x05" +
		"C\u035F\nC\x03D\x07D\u0362\nD\fD\x0ED\u0365\vD\x03D\x03D\x03D\x03E\x07" +
		"E\u036B\nE\fE\x0EE\u036E\vE\x03E\x03E\x05E\u0372\nE\x03E\x05E\u0375\n" +
		"E\x03F\x03F\x03F\x03F\x03F\x05F\u037C\nF\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x05F\u0385\nF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x06F\u039A\nF\rF\x0EF\u039B" +
		"\x03F\x05F\u039F\nF\x03F\x05F\u03A2\nF\x03F\x03F\x03F\x03F\x07F\u03A8" +
		"\nF\fF\x0EF\u03AB\vF\x03F\x05F\u03AE\nF\x03F\x03F\x03F\x03F\x07F\u03B4" +
		"\nF\fF\x0EF\u03B7\vF\x03F\x07F\u03BA\nF\fF\x0EF\u03BD\vF\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x05F\u03C7\nF\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x05F\u03D0\nF\x03F\x03F\x03F\x05F\u03D5\nF\x03F\x03F\x03F\x03F" +
		"\x03F\x03F\x03F\x03F\x05F\u03DF\nF\x03G\x03G\x03G\x07G\u03E4\nG\fG\x0E" +
		"G\u03E7\vG\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x07H\u03F1\nH\fH\x0E" +
		"H\u03F4\vH\x03I\x03I\x03I\x03J\x03J\x03J\x05J\u03FC\nJ\x03J\x03J\x03K" +
		"\x03K\x03K\x07K\u0403\nK\fK\x0EK\u0406\vK\x03L\x07L\u0409\nL\fL\x0EL\u040C" +
		"\vL\x03L\x03L\x03L\x03L\x03L\x03M\x06M\u0414\nM\rM\x0EM\u0415\x03M\x06" +
		"M\u0419\nM\rM\x0EM\u041A\x03N\x03N\x03N\x05N\u0420\nN\x03N\x03N\x03N\x05" +
		"N\u0425\nN\x03O\x03O\x05O\u0429\nO\x03O\x03O\x05O\u042D\nO\x03O\x03O\x05" +
		"O\u0431\nO\x05O\u0433\nO\x03P\x03P\x05P\u0437\nP\x03Q\x07Q\u043A\nQ\f" +
		"Q\x0EQ\u043D\vQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03S\x03" +
		"S\x03S\x07S\u044B\nS\fS\x0ES\u044E\vS\x03T\x03T\x03T\x05T\u0453\nT\x03" +
		"T\x03T\x03T\x03T\x05T\u0459\nT\x03T\x03T\x03T\x03T\x05T\u045F\nT\x03T" +
		"\x05T\u0462\nT\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x07U\u046B\nU\fU\x0E" +
		"U\u046E\vU\x03U\x03U\x03U\x07U\u0473\nU\fU\x0EU\u0476\vU\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u0484\nU\x03U\x03" +
		"U\x05U\u0488\nU\x03U\x03U\x03U\x05U\u048D\nU\x03U\x03U\x05U\u0491\nU\x03" +
		"U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05" +
		"U\u04A1\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u04C9" +
		"\nU\x03U\x03U\x03U\x03U\x05U\u04CF\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u04DE\nU\x03U\x07U\u04E1\nU\fU\x0E" +
		"U\u04E4\vU\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x05W\u04ED\nW\x03W\x03W" +
		"\x03W\x03W\x03W\x07W\u04F4\nW\fW\x0EW\u04F7\vW\x03W\x05W\u04FA\nW\x03" +
		"X\x03X\x05X\u04FE\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0510\nY\x05Y\u0512\nY\x03Z\x03Z" +
		"\x03Z\x05Z\u0517\nZ\x03Z\x07Z\u051A\nZ\fZ\x0EZ\u051D\vZ\x03Z\x03Z\x05" +
		"Z\u0521\nZ\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u052A\n[\x05[\u052C" +
		"\n[\x03\\\x03\\\x05\\\u0530\n\\\x03\\\x03\\\x03\\\x05\\\u0535\n\\\x07" +
		"\\\u0537\n\\\f\\\x0E\\\u053A\v\\\x03\\\x05\\\u053D\n\\\x03]\x03]\x05]" +
		"\u0541\n]\x03]\x03]\x03^\x03^\x03^\x03^\x07^\u0549\n^\f^\x0E^\u054C\v" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x07^\u0555\n^\f^\x0E^\u0558\v^\x03" +
		"^\x03^\x07^\u055C\n^\f^\x0E^\u055F\v^\x05^\u0561\n^\x03_\x03_\x05_\u0565" +
		"\n_\x03`\x03`\x03`\x03a\x03a\x03a\x05a\u056D\na\x03b\x03b\x03b\x05b\u0572" +
		"\nb\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x07d\u057B\nd\fd\x0Ed\u057E\vd" +
		"\x03e\x07e\u0581\ne\fe\x0Ee\u0584\ve\x03e\x03e\x05e\u0588\ne\x03e\x07" +
		"e\u058B\ne\fe\x0Ee\u058E\ve\x03e\x03e\x07e\u0592\ne\fe\x0Ee\u0595\ve\x03" +
		"f\x03f\x03g\x03g\x03g\x03g\x07g\u059D\ng\fg\x0Eg\u05A0\vg\x03g\x03g\x03" +
		"h\x03h\x03h\x03h\x05h\u05A8\nh\x05h\u05AA\nh\x03i\x03i\x03i\x03i\x05i" +
		"\u05B0\ni\x03j\x03j\x05j\u05B4\nj\x03j\x03j\x03k\x05k\u05B9\nk\x03k\x07" +
		"k\u05BC\nk\fk\x0Ek\u05BF\vk\x03k\x03k\x07k\u05C3\nk\fk\x0Ek\u05C6\vk\x03" +
		"l\x03l\x07l\u05CA\nl\fl\x0El\u05CD\vl\x03l\x03l\x03m\x05m\u05D2\nm\x03" +
		"m\x03m\x03m\x03m\x05m\u05D8\nm\x03m\x05m\u05DB\nm\x07m\u05DD\nm\fm\x0E" +
		"m\u05E0\vm\x03n\x03n\x03n\x07n\u05E5\nn\fn\x0En\u05E8\vn\x03n\x03n\x03" +
		"n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x07n\u05F4\nn\fn\x0En\u05F7\vn\x03" +
		"n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x05n\u0604\nn\x03" +
		"o\x03o\x03p\x03p\x03p\x03p\x03q\x03q\x03r\x03r\x03r\x02\x02\x03\xA8s\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
		"\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
		"\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02" +
		"\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\x02\x11\x04\x02((??\x03\x02J" +
		"M\x03\x02NO\x03\x02jm\x03\x02`a\x04\x02noss\x03\x02lm\x04\x02^_ef\x04" +
		"\x02ddgg\x04\x02]]t~\x03\x02jk\n\x02\x1A\x1A\x1C\x1C\x1F\x1F%%++2244<" +
		"<\x03\x02\x06\x07\x04\x02\b\b\v\v\x05\x02\x03\x03\b\b\x14\x14\x02\u06BF" +
		"\x02\xE7\x03\x02\x02\x02\x04\xF3\x03\x02\x02\x02\x06\xFA\x03\x02\x02\x02" +
		"\b\u0112\x03\x02\x02\x02\n\u0119\x03\x02\x02\x02\f\u0123\x03\x02\x02\x02" +
		"\x0E\u012C\x03\x02\x02\x02\x10\u012E\x03\x02\x02\x02\x12\u013D\x03\x02" +
		"\x02\x02\x14\u014B\x03\x02\x02\x02\x16\u0159\x03\x02\x02\x02\x18\u0161" +
		"\x03\x02\x02\x02\x1A\u0173\x03\x02\x02\x02\x1C\u017E\x03\x02\x02\x02\x1E" +
		"\u0188\x03\x02\x02\x02 \u018F\x03\x02\x02\x02\"\u019A\x03\x02\x02\x02" +
		"$\u01A3\x03\x02\x02\x02&\u01B8\x03\x02\x02\x02(\u01C3\x03\x02\x02\x02" +
		"*\u01C5\x03\x02\x02\x02,\u01D7\x03\x02\x02\x02.\u01DB\x03\x02\x02\x02" +
		"0\u01DD\x03\x02\x02\x022\u01E0\x03\x02\x02\x024\u01E3\x03\x02\x02\x02" +
		"6\u01EB\x03\x02\x02\x028\u01F7\x03\x02\x02\x02:\u0200\x03\x02\x02\x02" +
		"<\u0202\x03\x02\x02\x02>\u020D\x03\x02\x02\x02@\u021B\x03\x02\x02\x02" +
		"B\u023F\x03\x02\x02\x02D\u0241\x03\x02\x02\x02F\u0244\x03\x02\x02\x02" +
		"H\u024C\x03\x02\x02\x02J\u0251\x03\x02\x02\x02L\u025B\x03\x02\x02\x02" +
		"N\u025D\x03\x02\x02\x02P\u026D\x03\x02\x02\x02R\u0287\x03\x02\x02\x02" +
		"T\u0289\x03\x02\x02\x02V\u0291\x03\x02\x02\x02X\u02A4\x03\x02\x02\x02" +
		"Z\u02A9\x03\x02\x02\x02\\\u02B2\x03\x02\x02\x02^\u02BF\x03\x02\x02\x02" +
		"`\u02CD\x03\x02\x02\x02b\u02CF\x03\x02\x02\x02d\u02D1\x03\x02\x02\x02" +
		"f\u02D7\x03\x02\x02\x02h\u02E0\x03\x02\x02\x02j\u02EA\x03\x02\x02\x02" +
		"l\u02F2\x03\x02\x02\x02n\u02F9\x03\x02\x02\x02p\u02FB\x03\x02\x02\x02" +
		"r\u030B\x03\x02\x02\x02t\u0310\x03\x02\x02\x02v\u0321\x03\x02\x02\x02" +
		"x\u0337\x03\x02\x02\x02z\u033B\x03\x02\x02\x02|\u033D\x03\x02\x02\x02" +
		"~\u0343\x03\x02\x02\x02\x80\u0345\x03\x02\x02\x02\x82\u0348\x03\x02\x02" +
		"\x02\x84\u035E\x03\x02\x02\x02\x86\u0363\x03\x02\x02\x02\x88\u0374\x03" +
		"\x02\x02\x02\x8A\u03DE\x03\x02\x02\x02\x8C\u03E0\x03\x02\x02\x02\x8E\u03ED" +
		"\x03\x02\x02\x02\x90\u03F5\x03\x02\x02\x02\x92\u03F8\x03\x02\x02\x02\x94" +
		"\u03FF\x03\x02\x02\x02\x96\u040A\x03\x02\x02\x02\x98\u0413\x03\x02\x02" +
		"\x02\x9A\u0424\x03\x02\x02\x02\x9C\u0432\x03\x02\x02\x02\x9E\u0436\x03" +
		"\x02\x02\x02\xA0\u043B\x03\x02\x02\x02\xA2\u0443\x03\x02\x02\x02\xA4\u0447" +
		"\x03\x02\x02\x02\xA6\u0461\x03\x02\x02\x02\xA8\u0490\x03\x02\x02\x02\xAA" +
		"\u04E5\x03\x02\x02\x02\xAC\u04F9\x03\x02\x02\x02\xAE\u04FD\x03\x02\x02" +
		"\x02\xB0\u0511\x03\x02\x02\x02\xB2\u0516\x03\x02\x02\x02\xB4\u052B\x03" +
		"\x02\x02\x02\xB6\u053C\x03\x02\x02\x02\xB8\u053E\x03\x02\x02\x02\xBA\u0544" +
		"\x03\x02\x02\x02\xBC\u0562\x03\x02\x02\x02\xBE\u0566\x03\x02\x02\x02\xC0" +
		"\u056C\x03\x02\x02\x02\xC2\u0571\x03\x02\x02\x02\xC4\u0573\x03\x02\x02" +
		"\x02\xC6\u0577\x03\x02\x02\x02\xC8\u0582\x03\x02\x02\x02\xCA\u0596\x03" +
		"\x02\x02\x02\xCC\u0598\x03\x02\x02\x02\xCE\u05A9\x03\x02\x02\x02\xD0\u05AF" +
		"\x03\x02\x02\x02\xD2\u05B1\x03\x02\x02\x02\xD4\u05B8\x03\x02\x02\x02\xD6" +
		"\u05C7\x03\x02\x02\x02\xD8\u05D1\x03\x02\x02\x02\xDA\u0603\x03\x02\x02" +
		"\x02\xDC\u0605\x03\x02\x02\x02\xDE\u0607\x03\x02\x02\x02\xE0\u060B\x03" +
		"\x02\x02\x02\xE2\u060D\x03\x02\x02\x02\xE4\xE6\x05\x06\x04\x02\xE5\xE4" +
		"\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8" +
		"\x03\x02\x02\x02\xE8\xED\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEC" +
		"\x05\x84C\x02\xEB\xEA\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB" +
		"\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\x03\x03\x02\x02\x02\xEF\xED" +
		"\x03\x02\x02\x02\xF0\xF2\x05h5\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03" +
		"\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03" +
		"\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF7\x077\x02\x02\xF7\xF8\x05" +
		"^0\x02\xF8\xF9\x07Z\x02\x02\xF9\x05\x03\x02\x02\x02\xFA\xFC\x070\x02\x02" +
		"\xFB\xFD\x07=\x02\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02" +
		"\xFD\xFE\x03\x02\x02\x02\xFE\u0101\x05^0\x02\xFF\u0100\x07\\\x02\x02\u0100" +
		"\u0102\x07n\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x07Z\x02\x02\u0104\x07\x03" +
		"\x02\x02\x02\u0105\u0107\x05\f\x07\x02\u0106\u0105\x03\x02\x02\x02\u0107" +
		"\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02" +
		"\x02\x02\u0109\u010F\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B" +
		"\u0110\x05\x10\t\x02\u010C\u0110\x05\x18\r\x02\u010D\u0110\x05 \x11\x02" +
		"\u010E\u0110\x05r:\x02\u010F\u010B\x03\x02\x02\x02\u010F\u010C\x03\x02" +
		"\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u010E\x03\x02\x02\x02\u0110" +
		"\u0113\x03\x02\x02\x02\u0111\u0113\x07Z\x02\x02\u0112\u0108\x03\x02\x02" +
		"\x02\u0112\u0111\x03\x02\x02\x02\u0113\t\x03\x02\x02\x02\u0114\u011A\x05" +
		"\f\x07\x02\u0115\u011A\x075\x02\x02\u0116\u011A\x07A\x02\x02\u0117\u011A" +
		"\x07E\x02\x02\u0118\u011A\x07H\x02\x02\u0119\u0114\x03\x02\x02\x02\u0119" +
		"\u0115\x03\x02\x02\x02\u0119\u0116\x03\x02\x02\x02\u0119\u0117\x03\x02" +
		"\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A\v\x03\x02\x02\x02\u011B\u0124" +
		"\x05h5\x02\u011C\u0124\x07:\x02\x02\u011D\u0124\x079\x02\x02\u011E\u0124" +
		"\x078\x02\x02\u011F\u0124\x07=\x02\x02\u0120\u0124\x07\x18\x02\x02\u0121" +
		"\u0124\x07)\x02\x02\u0122\u0124\x07>\x02\x02\u0123\u011B\x03\x02\x02\x02" +
		"\u0123\u011C\x03\x02\x02\x02\u0123\u011D\x03\x02\x02\x02\u0123\u011E\x03" +
		"\x02\x02\x02\u0123\u011F\x03\x02\x02\x02\u0123\u0120\x03\x02\x02\x02\u0123" +
		"\u0121\x03\x02\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\r\x03\x02\x02" +
		"\x02\u0125\u012D\x07)\x02\x02\u0126\u012D\x07:\x02\x02\u0127\u012D\x07" +
		"9\x02\x02\u0128\u012D\x078\x02\x02\u0129\u012D\x07=\x02\x02\u012A\u012D" +
		"\x07\x18\x02\x02\u012B\u012D\x05h5\x02\u012C\u0125\x03\x02\x02\x02\u012C" +
		"\u0126\x03\x02\x02\x02\u012C\u0127\x03\x02\x02\x02\u012C\u0128\x03\x02" +
		"\x02\x02\u012C\u0129\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C" +
		"\u012B\x03\x02\x02\x02\u012D\x0F\x03\x02\x02\x02\u012E\u012F\x07 \x02" +
		"\x02\u012F\u0131\x07\x86\x02\x02\u0130\u0132\x05\x12\n";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0135" +
		"\x03\x02\x02\x02\u0133\u0134\x07(\x02\x02\u0134\u0136\x05\xC8e\x02\u0135" +
		"\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0139\x03\x02" +
		"\x02\x02\u0137\u0138\x07/\x02\x02\u0138\u013A\x05\xC6d\x02\u0139\u0137" +
		"\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02" +
		"\u013B\u013C\x05\"\x12\x02\u013C\x11\x03\x02\x02\x02\u013D\u013E\x07_" +
		"\x02\x02\u013E\u0143\x05\x14\v\x02\u013F\u0140\x07[\x02\x02\u0140\u0142" +
		"\x05\x14\v\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02" +
		"\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0146\x03" +
		"\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0147\x07^\x02\x02\u0147" +
		"\x13\x03\x02\x02\x02\u0148\u014A\x05h5\x02\u0149\u0148\x03\x02\x02\x02" +
		"\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03" +
		"\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E" +
		"\u0157\x07\x86\x02\x02\u014F\u0153\x07(\x02\x02\u0150\u0152\x05h5\x02" +
		"\u0151\u0150\x03\x02\x02\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155" +
		"\u0153\x03\x02\x02\x02\u0156\u0158\x05\x16\f\x02\u0157\u014F\x03\x02\x02" +
		"\x02\u0157\u0158\x03\x02\x02\x02\u0158\x15\x03\x02\x02\x02\u0159\u015E" +
		"\x05\xC8e\x02\u015A\u015B\x07p\x02\x02\u015B\u015D\x05\xC8e\x02\u015C" +
		"\u015A\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02" +
		"\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\x17\x03\x02\x02\x02\u0160\u015E" +
		"\x03\x02\x02\x02\u0161\u0162\x07\'\x02\x02\u0162\u0165\x07\x86\x02\x02" +
		"\u0163\u0164\x07/\x02\x02\u0164\u0166\x05\xC6d\x02\u0165\u0163\x03\x02" +
		"\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167" +
		"\u0169\x07V\x02\x02\u0168\u016A\x05\x1A\x0E\x02\u0169\u0168\x03\x02\x02" +
		"\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02\x02\x02\u016B\u016D" +
		"\x07[\x02\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02" +
		"\u016D\u016F\x03\x02\x02\x02\u016E\u0170\x05\x1E\x10\x02\u016F\u016E\x03" +
		"\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171" +
		"\u0172\x07W\x02\x02\u0172\x19\x03\x02\x02\x02\u0173\u0178\x05\x1C\x0F" +
		"\x02\u0174\u0175\x07[\x02\x02\u0175\u0177\x05\x1C\x0F\x02\u0176\u0174" +
		"\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02" +
		"\u0178\u0179\x03\x02\x02\x02\u0179\x1B\x03\x02\x02\x02\u017A\u0178\x03" +
		"\x02\x02\x02\u017B\u017D\x05h5\x02\u017C\u017B\x03\x02\x02\x02\u017D\u0180" +
		"\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02" +
		"\u017F\u0181\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0183\x07" +
		"\x86\x02\x02\u0182\u0184\x05\xD2j\x02\u0183\u0182\x03\x02\x02\x02\u0183" +
		"\u0184\x03\x02\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0187\x05\"\x12" +
		"\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\x1D" +
		"\x03\x02\x02\x02\u0188\u018C\x07Z\x02\x02\u0189\u018B\x05&\x14\x02\u018A" +
		"\u0189\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02" +
		"\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\x1F\x03\x02\x02\x02\u018E\u018C" +
		"\x03\x02\x02\x02\u018F\u0190\x073\x02\x02\u0190\u0192\x07\x86\x02\x02" +
		"\u0191\u0193\x05\x12\n\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03" +
		"\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0195\x07(\x02\x02\u0195" +
		"\u0197\x05\xC6d\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02" +
		"\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x05$\x13\x02\u0199!\x03\x02" +
		"\x02\x02\u019A\u019E\x07V\x02\x02\u019B\u019D\x05&\x14\x02\u019C\u019B" +
		"\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02" +
		"\u019E\u019F\x03\x02\x02\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u019E\x03" +
		"\x02\x02\x02\u01A1\u01A2\x07W\x02\x02\u01A2#\x03\x02\x02\x02\u01A3\u01A7" +
		"\x07V\x02\x02\u01A4\u01A6\x058\x1D\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6" +
		"\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02" +
		"\x02\x02\u01A8\u01AA\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA" +
		"\u01AB\x07W\x02\x02\u01AB%\x03\x02\x02\x02\u01AC\u01B9\x07Z\x02\x02\u01AD" +
		"\u01AF\x07=\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02" +
		"\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B9\x05\x82B\x02\u01B1\u01B3" +
		"\x05\n\x06\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02" +
		"\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B7\x03" +
		"\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01B9\x05(\x15\x02\u01B8" +
		"\u01AC\x03\x02\x02\x02\u01B8\u01AE\x03\x02\x02\x02\u01B8\u01B4\x03\x02" +
		"\x02\x02\u01B9\'\x03\x02\x02\x02\u01BA\u01C4\x05*\x16\x02\u01BB\u01C4" +
		"\x050\x19\x02\u01BC\u01C4\x056\x1C\x02\u01BD\u01C4\x054\x1B\x02\u01BE" +
		"\u01C4\x052\x1A\x02\u01BF\u01C4\x05 \x11\x02\u01C0\u01C4\x05r:\x02\u01C1" +
		"\u01C4\x05\x10\t\x02\u01C2\u01C4\x05\x18\r\x02\u01C3\u01BA\x03\x02\x02" +
		"\x02\u01C3\u01BB\x03\x02\x02\x02\u01C3\u01BC\x03\x02\x02\x02\u01C3\u01BD" +
		"\x03\x02\x02\x02\u01C3\u01BE\x03\x02\x02\x02\u01C3\u01BF\x03\x02\x02\x02" +
		"\u01C3\u01C0\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C2\x03" +
		"\x02\x02\x02\u01C4)\x03\x02\x02\x02\u01C5\u01C6\x05.\x18\x02\u01C6\u01C7" +
		"\x07\x86\x02\x02\u01C7\u01CC\x05V,\x02\u01C8\u01C9\x07X\x02\x02\u01C9" +
		"\u01CB\x07Y\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02" +
		"\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01D1" +
		"\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CF\u01D0\x07D\x02\x02" +
		"\u01D0\u01D2\x05T+\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02" +
		"\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\x05,\x17\x02\u01D4+\x03" +
		"\x02\x02\x02\u01D5\u01D8\x05\x82B\x02\u01D6\u01D8\x07Z\x02\x02\u01D7\u01D5" +
		"\x03\x02\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8-\x03\x02\x02\x02\u01D9" +
		"\u01DC\x05\xC8e\x02\u01DA\u01DC\x07G\x02\x02\u01DB\u01D9\x03\x02\x02\x02" +
		"\u01DB\u01DA\x03\x02\x02\x02\u01DC/\x03\x02\x02\x02\u01DD\u01DE\x05\x12" +
		"\n\x02\u01DE\u01DF\x05*\x16\x02\u01DF1\x03\x02\x02\x02\u01E0\u01E1\x05" +
		"\x12\n\x02\u01E1\u01E2\x054\x1B\x02\u01E23\x03\x02\x02\x02\u01E3\u01E4" +
		"\x07\x86\x02\x02\u01E4\u01E7\x05V,\x02\u01E5\u01E6\x07D\x02\x02\u01E6" +
		"\u01E8\x05T+\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02" +
		"\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x05\x82B\x02\u01EA5\x03\x02\x02" +
		"\x02\u01EB\u01EC\x05\xC8e\x02\u01EC\u01ED\x05F$\x02\u01ED\u01EE\x07Z\x02" +
		"\x02\u01EE7\x03\x02\x02\x02\u01EF\u01F1\x05\n\x06\x02\u01F0\u01EF\x03" +
		"\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2" +
		"\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4\u01F2\x03\x02" +
		"\x02\x02\u01F5\u01F8\x05:\x1E\x02\u01F6\u01F8\x07Z\x02\x02\u01F7\u01F2" +
		"\x03\x02\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F89\x03\x02\x02\x02\u01F9" +
		"\u0201\x05<\x1F\x02\u01FA\u0201\x05@!\x02\u01FB\u0201\x05D#\x02\u01FC" +
		"\u0201\x05 \x11\x02\u01FD\u0201\x05r:\x02\u01FE\u0201\x05\x10\t\x02\u01FF" +
		"\u0201\x05\x18\r\x02\u0200\u01F9\x03\x02\x02\x02\u0200\u01FA\x03\x02\x02" +
		"\x02\u0200\u01FB\x03\x02\x02\x02\u0200\u01FC\x03\x02\x02\x02\u0200\u01FD" +
		"\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u01FF\x03\x02\x02\x02" +
		"\u0201;\x03\x02\x02\x02\u0202\u0203\x05\xC8e\x02\u0203\u0208\x05> \x02" +
		"\u0204\u0205\x07[\x02\x02\u0205\u0207\x05> \x02\u0206\u0204\x03\x02\x02" +
		"\x02\u0207\u020A\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0209" +
		"\x03\x02\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02" +
		"\u020B\u020C\x07Z\x02\x02\u020C=\x03\x02\x02\x02\u020D\u0212\x07\x86\x02" +
		"\x02\u020E\u020F\x07X\x02\x02\u020F\u0211\x07Y\x02\x02\u0210\u020E\x03" +
		"\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212" +
		"\u0213\x03\x02\x02\x02\u0213\u0215\x03\x02\x02\x02\u0214\u0212\x03\x02" +
		"\x02\x02\u0215\u0216\x07]\x02\x02\u0216\u0217\x05L\'\x02\u0217?\x03\x02" +
		"\x02\x02\u0218\u021A\x05B\"\x02\u0219\u0218\x03\x02\x02\x02\u021A\u021D" +
		"\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02" +
		"\u021C\u0228\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021E\u0229\x05" +
		".\x18\x02\u021F\u0223\x05\x12\n\x02\u0220\u0222\x05h5\x02\u0221\u0220" +
		"\x03\x02\x02\x02\u0222\u0225\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02" +
		"\u0223\u0224\x03\x02\x02\x02\u0224\u0226\x03\x02\x02\x02\u0225\u0223\x03" +
		"\x02\x02\x02\u0226\u0227\x05.\x18\x02\u0227\u0229\x03\x02\x02\x02\u0228" +
		"\u021E\x03\x02\x02\x02\u0228\u021F\x03\x02\x02\x02\u0229\u022A\x03\x02" +
		"\x02\x02\u022A\u022B\x07\x86\x02\x02\u022B\u0230\x05V,\x02\u022C\u022D" +
		"\x07X\x02\x02\u022D\u022F\x07Y\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F" +
		"\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230\u0231\x03\x02" +
		"\x02\x02\u0231\u0235\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0233" +
		"\u0234\x07D\x02\x02\u0234\u0236\x05T+\x02\u0235\u0233\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x05" +
		",\x17\x02\u0238A\x03\x02\x02\x02\u0239\u0240\x05h5\x02\u023A\u0240\x07" +
		":\x02\x02\u023B\u0240\x07\x18\x02\x02\u023C\u0240\x07#\x02\x02\u023D\u0240" +
		"\x07=\x02\x02\u023E\u0240\x07>\x02\x02\u023F\u0239\x03\x02\x02\x02\u023F" +
		"\u023A\x03\x02\x02\x02\u023F\u023B\x03\x02\x02\x02\u023F\u023C\x03\x02" +
		"\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240" +
		"C\x03\x02\x02\x02\u0241\u0242\x05\x12\n\x02\u0242\u0243\x05@!\x02\u0243" +
		"E\x03\x02\x02\x02\u0244\u0249\x05H%\x02\u0245\u0246\x07[\x02\x02\u0246" +
		"\u0248\x05H%\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02" +
		"\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024AG\x03\x02" +
		"\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C\u024F\x05J&\x02\u024D\u024E" +
		"\x07]\x02\x02\u024E\u0250\x05L\'\x02\u024F\u024D\x03\x02\x02\x02\u024F" +
		"\u0250\x03\x02\x02\x02\u0250I\x03\x02\x02\x02\u0251\u0256\x07\x86\x02" +
		"\x02\u0252\u0253\x07X\x02\x02\u0253\u0255\x07Y\x02\x02\u0254\u0252\x03" +
		"\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256" +
		"\u0257\x03\x02\x02\x02\u0257K\x03\x02\x02\x02\u0258\u0256\x03\x02\x02" +
		"\x02\u0259\u025C\x05N(\x02\u025A\u025C\x05\xA8U\x02\u025B\u0259\x03\x02" +
		"\x02\x02\u025B\u025A\x03\x02\x02\x02\u025CM\x03\x02\x02\x02\u025D\u0269" +
		"\x07V\x02\x02\u025E\u0263\x05L\'\x02\u025F\u0260\x07[\x02\x02\u0260\u0262" +
		"\x05L\'\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263" +
		"\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0267\x03\x02" +
		"\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u0268\x07[\x02\x02\u0267\u0266" +
		"\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u026A\x03\x02\x02\x02" +
		"\u0269\u025E\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026B\x03" +
		"\x02\x02\x02\u026B\u026C\x07W\x02\x02\u026CO\x03\x02\x02\x02\u026D\u026F" +
		"\x07\x86\x02\x02\u026E\u0270\x05\xCCg\x02\u026F\u026E\x03\x02\x02\x02" +
		"\u026F\u0270\x03\x02\x02\x02\u0270\u0278\x03\x02\x02\x02\u0271\u0272\x07" +
		"\\\x02\x02\u0272\u0274\x07\x86\x02\x02\u0273\u0275\x05\xCCg\x02\u0274" +
		"\u0273\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0277\x03\x02" +
		"\x02\x02\u0276\u0271\x03\x02\x02\x02\u0277\u027A\x03\x02\x02\x02\u0278" +
		"\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279Q\x03\x02\x02" +
		"\x02\u027A\u0278\x03\x02\x02\x02\u027B\u0288\x05\xC8e\x02\u027C\u027E" +
		"\x05h5\x02\u027D\u027C\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F" +
		"\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0282\x03\x02" +
		"\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282\u0285\x07b\x02\x02\u0283\u0284" +
		"\t\x02\x02\x02\u0284\u0286\x05\xC8e\x02\u0285\u0283\x03\x02\x02\x02\u0285" +
		"\u0286\x03\x02\x02\x02\u0286\u0288\x03\x02\x02\x02\u0287\u027B\x03\x02" +
		"\x02\x02\u0287\u027F\x03\x02\x02\x02\u0288S\x03\x02\x02\x02\u0289\u028E" +
		"\x05^0\x02\u028A\u028B\x07[\x02\x02\u028B\u028D\x05^0\x02\u028C\u028A" +
		"\x03\x02\x02\x02\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02" +
		"\u028E\u028F\x03\x02\x02\x02\u028FU\x03\x02\x02\x02\u0290\u028E\x03\x02" +
		"\x02\x02\u0291\u0293\x07T\x02\x02\u0292\u0294\x05X-\x02\u0293\u0292\x03" +
		"\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295" +
		"\u0296\x07U\x02\x02\u0296W\x03\x02\x02\x02\u0297\u029C\x05Z.\x02\u0298" +
		"\u0299\x07[\x02\x02\u0299\u029B\x05Z.\x02\u029A\u0298\x03\x02\x02\x02" +
		"\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03" +
		"\x02\x02\x02\u029D\u02A1\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F" +
		"\u02A0\x07[\x02\x02\u02A0\u02A2\x05\\/\x02\u02A1\u029F\x03\x02\x02\x02" +
		"\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A5\x05" +
		"\\/\x02\u02A4\u0297\x03\x02\x02\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5" +
		"Y\x03\x02\x02\x02\u02A6\u02A8\x05\x0E\b\x02\u02A7\u02A6\x03\x02\x02\x02" +
		"\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03" +
		"\x02\x02\x02\u02AA\u02AC\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AC" +
		"\u02AD\x05\xC8e\x02\u02AD\u02AE\x05J&\x02\u02AE[\x03\x02\x02\x02\u02AF" +
		"\u02B1\x05\x0E\b\x02\u02B0\u02AF\x03\x02\x02\x02\u02B1\u02B4\x03\x02\x02" +
		"\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B5" +
		"\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5\u02B9\x05\xC8e\x02" +
		"\u02B6\u02B8\x05h5\x02\u02B7\u02B6\x03\x02\x02\x02\u02B8\u02BB\x03\x02" +
		"\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA" +
		"\u02BC\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BC\u02BD\x07\x82" +
		"\x02\x02\u02BD\u02BE\x05J&\x02\u02BE]\x03\x02\x02\x02\u02BF\u02C4\x07" +
		"\x86\x02\x02\u02C0\u02C1\x07\\\x02\x02\u02C1\u02C3\x07\x86\x02\x02\u02C2" +
		"\u02C0\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4\u02C2\x03\x02" +
		"\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5_\x03\x02\x02\x02\u02C6\u02C4" +
		"\x03\x02\x02\x02\u02C7\u02CE\x05b2\x02\u02C8\u02CE\x05d3\x02\u02C9\u02CE" +
		"\x07Q\x02\x02\u02CA\u02CE\x07R\x02\x02\u02CB\u02CE\x07P\x02\x02\u02CC" +
		"\u02CE\x07S\x02\x02\u02CD\u02C7\x03\x02\x02\x02\u02CD\u02C8\x03\x02\x02" +
		"\x02\u02CD\u02C9\x03\x02\x02\x02\u02CD\u02CA\x03\x02\x02\x02\u02CD\u02CB" +
		"\x03\x02\x02\x02\u02CD\u02CC\x03\x02\x02\x02\u02CEa\x03\x02\x02\x02\u02CF" +
		"\u02D0\t\x03\x02\x02\u02D0c\x03\x02\x02\x02\u02D1\u02D2\t\x04\x02\x02" +
		"\u02D2e\x03\x02\x02\x02\u02D3\u02D4\x07\x86\x02\x02\u02D4\u02D6\x07\\" +
		"\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D9\x03\x02\x02\x02\u02D7" +
		"\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DA\x03\x02" +
		"\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02DB\x07\x81\x02\x02\u02DB" +
		"\u02DC\x07\x86\x02\x02\u02DCg\x03\x02\x02\x02\u02DD\u02DE\x07\x81\x02" +
		"\x02\u02DE\u02E1\x05^0\x02\u02DF\u02E1\x05f4\x02\u02E0\u02DD\x03\x02\x02" +
		"\x02\u02E0\u02DF\x03\x02\x02\x02\u02E1\u02E8\x03\x02\x02\x02\u02E2\u02E5" +
		"\x07T\x02\x02\u02E3\u02E6\x05j6\x02\u02E4\u02E6\x05n8\x02\u02E5\u02E3" +
		"\x03\x02\x02\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02" +
		"\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E9\x07U\x02\x02\u02E8\u02E2\x03" +
		"\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9i\x03\x02\x02\x02\u02EA" +
		"\u02EF\x05l7\x02\u02EB\u02EC\x07[\x02\x02\u02EC\u02EE\x05l7\x02\u02ED" +
		"\u02EB\x03\x02\x02\x02\u02EE\u02F1\x03\x02\x02\x02\u02EF\u02ED\x03\x02" +
		"\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0k\x03\x02\x02\x02\u02F1\u02EF" +
		"\x03\x02\x02\x02\u02F2\u02F3\x07\x86\x02\x02\u02F3\u02F4\x07]\x02\x02" +
		"\u02F4\u02F5\x05n8\x02\u02F5m\x03\x02\x02\x02\u02F6\u02FA\x05\xA8U\x02" +
		"\u02F7\u02FA\x05h5\x02\u02F8\u02FA\x05p9\x02\u02F9\u02F6\x03\x02\x02\x02" +
		"\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02FAo\x03\x02" +
		"\x02\x02\u02FB\u0304\x07V\x02\x02\u02FC\u0301\x05n8\x02\u02FD\u02FE\x07" +
		"[\x02\x02\u02FE\u0300\x05n8\x02\u02FF\u02FD\x03\x02\x02\x02\u0300\u0303" +
		"\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02" +
		"\u0302\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0304\u02FC\x03" +
		"\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x03\x02\x02\x02\u0306" +
		"\u0308\x07[\x02\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02" +
		"\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030A\x07W\x02\x02\u030Aq\x03\x02" +
		"\x02\x02\u030B\u030C\x07\x81\x02\x02\u030C\u030D\x073\x02\x02\u030D\u030E" +
		"\x07\x86\x02\x02\u030E\u030F\x05t;\x02\u030Fs\x03\x02\x02\x02\u0310\u0314" +
		"\x07V\x02\x02\u0311\u0313\x05v<\x02\u0312\u0311\x03\x02\x02\x02\u0313" +
		"\u0316\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02" +
		"\x02\x02\u0315\u0317\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317" +
		"\u0318\x07W\x02\x02\u0318u\x03\x02\x02\x02\u0319\u031B\x05\n\x06\x02\u031A" +
		"\u0319\x03\x02\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02" +
		"\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031F\x03\x02\x02\x02\u031E" +
		"\u031C\x03\x02\x02\x02\u031F\u0322\x05x=\x02\u0320\u0322\x07Z\x02\x02" +
		"\u0321\u031C\x03\x02\x02\x02\u0321\u0320\x03\x02\x02\x02\u0322w\x03\x02" +
		"\x02\x02\u0323\u0324\x05\xC8e\x02\u0324\u0325\x05z>\x02\u0325\u0326\x07" +
		"Z\x02\x02\u0326\u0338\x03\x02\x02\x02\u0327\u0329\x05\x10\t\x02\u0328" +
		"\u032A\x07Z\x02\x02\u0329\u0328\x03\x02\x02\x02\u0329\u032A\x03\x02\x02" +
		"\x02\u032A\u0338\x03\x02\x02\x02\u032B\u032D\x05 \x11\x02\u032C\u032E" +
		"\x07Z\x02\x02\u032D\u032C\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02" +
		"\u032E\u0338\x03\x02\x02\x02\u032F\u0331\x05\x18\r\x02\u0330\u0332\x07" +
		"Z\x02\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332" +
		"\u0338\x03\x02\x02\x02\u0333\u0335\x05r:\x02\u0334\u0336\x07Z\x02\x02" +
		"\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0338\x03" +
		"\x02\x02\x02\u0337\u0323\x03\x02\x02\x02\u0337\u0327\x03\x02\x02\x02\u0337" +
		"\u032B\x03\x02\x02\x02\u0337\u032F\x03\x02\x02\x02\u0337\u0333\x03\x02" +
		"\x02\x02\u0338y\x03\x02\x02\x02\u0339\u033C\x05|?\x02\u033A\u033C\x05" +
		"~@\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033A\x03\x02\x02\x02\u033C{" +
		"\x03\x02\x02\x02\u033D\u033E\x07\x86\x02\x02\u033E\u033F\x07T\x02\x02" +
		"\u033F\u0341\x07U\x02\x02\u0340\u0342\x05\x80A\x02\u0341\u0340\x03\x02" +
		"\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342}\x03\x02\x02\x02\u0343\u0344" +
		"\x05F$\x02\u0344\x7F\x03\x02\x02\x02\u0345\u0346\x07#\x02\x02\u0346\u0347" +
		"\x05n8\x02\u0347\x81\x03\x02\x02\x02\u0348\u034C\x07V\x02\x02\u0349\u034B" +
		"\x05\x84C\x02\u034A\u0349\x03\x02\x02\x02\u034B\u034E\x03\x02\x02\x02" +
		"\u034C\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034F\x03" +
		"\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034F\u0350\x07W\x02\x02\u0350" +
		"\x83\x03\x02\x02\x02\u0351\u0352\x05\x86D\x02\u0352\u0353\x07Z\x02\x02" +
		"\u0353\u035F\x03\x02\x02\x02\u0354\u035F\x05\x06\x04\x02\u0355\u035F\x05" +
		"\x8AF\x02\u0356\u035F\x05\x88E\x02\u0357\u0359\x05\n\x06\x02\u0358\u0357" +
		"\x03\x02\x02\x02\u0359\u035C\x03\x02\x02\x02\u035A\u0358\x03\x02\x02\x02" +
		"\u035A\u035B\x03\x02\x02\x02\u035B\u035D\x03\x02\x02\x02\u035C\u035A\x03" +
		"\x02\x02\x02\u035D\u035F\x05(\x15\x02\u035E\u0351\x03\x02\x02\x02\u035E" +
		"\u0354\x03\x02\x02\x02\u035E\u0355\x03\x02\x02\x02\u035E\u0356\x03\x02" +
		"\x02\x02\u035E\u035A\x03\x02\x02\x02\u035F\x85\x03\x02\x02\x02\u0360\u0362" +
		"\x05\x0E\b\x02\u0361\u0360\x03\x02\x02\x02\u0362\u0365\x03\x02\x02\x02" +
		"\u0363\u0361\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0366\x03" +
		"\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0366\u0367\x05\xC8e\x02\u0367" +
		"\u0368\x05F$\x02\u0368\x87\x03\x02\x02\x02\u0369\u036B\x05\f\x07\x02\u036A" +
		"\u0369\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02\u036C\u036A\x03\x02" +
		"\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u0371\x03\x02\x02\x02\u036E" +
		"\u036C\x03\x02\x02\x02\u036F\u0372\x05\x10\t\x02\u0370\u0372\x05 \x11" +
		"\x02\u0371\u036F\x03\x02\x02\x02\u0371\u0370\x03\x02\x02\x02\u0372\u0375" +
		"\x03\x02\x02\x02\u0373\u0375\x07Z\x02\x02\u0374\u036C\x03\x02\x02\x02" +
		"\u0374\u0373\x03\x02\x02\x02\u0375\x89\x03\x02\x02\x02\u0376\u03DF\x05" +
		"\x82B\x02\u0377\u0378\x07\x19\x02\x02\u0378\u037B\x05\xA8U\x02\u0379\u037A" +
		"\x07c\x02\x02\u037A\u037C\x05\xA8U\x02\u037B\u0379\x03\x02\x02\x02\u037B" +
		"\u037C\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037E\x07Z\x02" +
		"\x02\u037E\u03DF\x03\x02\x02\x02\u037F\u0380\x07-\x02\x02\u0380\u0381" +
		"\x05\xA2R\x02\u0381\u0384\x05\x8AF\x02\u0382\u0383\x07&\x02\x02\u0383" +
		"\u0385\x05\x8AF\x02\u0384\u0382\x03\x02\x02\x02\u0384\u0385\x03\x02\x02" +
		"\x02\u0385\u03DF\x03\x02\x02\x02\u0386\u0387\x07,\x02\x02\u0387\u0388" +
		"\x07T\x02\x02\u0388\u0389\x05\x9CO\x02\u0389\u038A\x07U\x02\x02\u038A" +
		"\u038B\x05\x8AF\x02\u038B\u03DF\x03\x02\x02\x02\u038C\u038D\x07I\x02\x02" +
		"\u038D\u038E\x05\xA2R\x02\u038E\u038F\x05\x8AF\x02\u038F\u03DF\x03\x02" +
		"\x02\x02\u0390\u0391\x07$\x02\x02\u0391\u0392\x05\x8AF\x02\u0392\u0393" +
		"\x07I\x02\x02\u0393\u0394\x05\xA2R\x02\u0394\u0395\x07Z\x02\x02\u0395" +
		"\u03DF\x03\x02\x02\x02\u0396\u0397\x07F\x02\x02\u0397\u03A1\x05\x82B\x02" +
		"\u0398\u039A\x05\x8CG\x02\u0399\u0398\x03\x02\x02\x02\u039A\u039B\x03" +
		"\x02\x02\x02\u039B\u0399\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C" +
		"\u039E\x03\x02\x02\x02\u039D\u039F\x05\x90I\x02\u039E\u039D\x03\x02\x02" +
		"\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u03A2" +
		"\x05\x90I\x02\u03A1\u0399\x03\x02\x02\x02\u03A1\u03A0\x03\x02\x02\x02" +
		"\u03A2\u03DF\x03\x02\x02\x02\u03A3\u03A4\x07F\x02\x02\u03A4\u03A5\x05" +
		"\x92J\x02\u03A5\u03A9\x05\x82B\x02\u03A6\u03A8\x05\x8CG\x02\u03A7\u03A6" +
		"\x03\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02" +
		"\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AD\x03\x02\x02\x02\u03AB\u03A9\x03" +
		"\x02\x02\x02\u03AC\u03AE\x05\x90I\x02\u03AD\u03AC\x03\x02\x02\x02\u03AD" +
		"\u03AE\x03\x02\x02\x02\u03AE\u03DF\x03\x02\x02\x02\u03AF\u03B0\x07@\x02" +
		"\x02\u03B0\u03B1\x05\xA2R\x02\u03B1\u03B5\x07V\x02\x02\u03B2\u03B4\x05" +
		"\x98M\x02\u03B3\u03B2\x03\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5" +
		"\u03B3\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03BB\x03\x02" +
		"\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03BA\x05\x9AN\x02\u03B9\u03B8" +
		"\x03\x02\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02" +
		"\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x03\x02\x02\x02\u03BD\u03BB\x03" +
		"\x02\x02\x02\u03BE\u03BF\x07W\x02\x02\u03BF\u03DF\x03\x02\x02\x02\u03C0" +
		"\u03C1\x07A\x02\x02\u03C1\u03C2\x05\xA2R\x02\u03C2\u03C3\x05\x82B\x02" +
		"\u03C3\u03DF\x03\x02\x02\x02\u03C4\u03C6\x07;\x02\x02\u03C5\u03C7\x05" +
		"\xA8U\x02\u03C6\u03C5\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7" +
		"\u03C8\x03\x02\x02\x02\u03C8\u03DF\x07Z\x02\x02\u03C9\u03CA\x07C\x02\x02" +
		"\u03CA\u03CB\x05\xA8U\x02\u03CB\u03CC\x07Z\x02\x02\u03CC\u03DF\x03\x02" +
		"\x02\x02\u03CD\u03CF\x07\x1B\x02\x02\u03CE\u03D0\x07\x86\x02\x02\u03CF" +
		"\u03CE\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D1\x03\x02" +
		"\x02\x02\u03D1\u03DF\x07Z\x02\x02\u03D2\u03D4\x07\"\x02\x02\u03D3\u03D5" +
		"\x07\x86\x02\x02\u03D4\u03D3\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02" +
		"\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03DF\x07Z\x02\x02\u03D7\u03DF\x07" +
		"Z\x02\x02\u03D8\u03D9\x05\xA8U\x02\u03D9\u03DA\x07Z\x02\x02\u03DA\u03DF" +
		"\x03\x02\x02\x02\u03DB\u03DC\x07\x86\x02\x02\u03DC\u03DD\x07c\x02\x02" +
		"\u03DD\u03DF\x05\x8AF\x02\u03DE\u0376\x03\x02\x02\x02\u03DE\u0377\x03" +
		"\x02\x02\x02\u03DE\u037F\x03\x02\x02\x02\u03DE\u0386\x03\x02\x02\x02\u03DE" +
		"\u038C\x03\x02\x02\x02\u03DE\u0390\x03\x02\x02\x02\u03DE\u0396\x03\x02" +
		"\x02\x02\u03DE\u03A3\x03\x02\x02\x02\u03DE\u03AF\x03\x02\x02\x02\u03DE" +
		"\u03C0\x03\x02\x02\x02\u03DE\u03C4\x03\x02\x02\x02\u03DE\u03C9\x03\x02" +
		"\x02\x02\u03DE\u03CD\x03\x02\x02\x02\u03DE\u03D2\x03\x02\x02\x02\u03DE" +
		"\u03D7\x03\x02\x02\x02\u03DE\u03D8\x03\x02\x02\x02\u03DE\u03DB\x03\x02" +
		"\x02\x02\u03DF";
	private static readonly _serializedATNSegment2: string =
		"\x8B\x03\x02\x02\x02\u03E0\u03E1\x07\x1E\x02\x02\u03E1\u03E5\x07T\x02" +
		"\x02\u03E2\u03E4\x05\x0E\b\x02\u03E3\u03E2\x03\x02\x02\x02\u03E4\u03E7" +
		"\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02" +
		"\u03E6\u03E8\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8\u03E9\x05" +
		"\x8EH\x02\u03E9\u03EA\x07\x86\x02\x02\u03EA\u03EB\x07U\x02\x02\u03EB\u03EC" +
		"\x05\x82B\x02\u03EC\x8D\x03\x02\x02\x02\u03ED\u03F2\x05^0\x02\u03EE\u03EF" +
		"\x07q\x02\x02\u03EF\u03F1\x05^0\x02\u03F0\u03EE\x03\x02\x02\x02\u03F1" +
		"\u03F4\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02" +
		"\x02\x02\u03F3\x8F\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5\u03F6" +
		"\x07*\x02\x02\u03F6\u03F7\x05\x82B\x02\u03F7\x91\x03\x02\x02\x02\u03F8" +
		"\u03F9\x07T\x02\x02\u03F9\u03FB\x05\x94K\x02\u03FA\u03FC\x07Z\x02\x02" +
		"\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FD\x03" +
		"\x02\x02\x02\u03FD\u03FE\x07U\x02\x02\u03FE\x93\x03\x02\x02\x02\u03FF" +
		"\u0404\x05\x96L\x02\u0400\u0401\x07Z\x02\x02\u0401\u0403\x05\x96L\x02" +
		"\u0402\u0400\x03\x02\x02\x02\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03" +
		"\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\x95\x03\x02\x02\x02\u0406" +
		"\u0404\x03\x02\x02\x02\u0407\u0409\x05\x0E\b\x02\u0408\u0407\x03\x02\x02" +
		"\x02\u0409\u040C\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A\u040B" +
		"\x03\x02\x02\x02\u040B\u040D\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02" +
		"\u040D\u040E\x05P)\x02\u040E\u040F\x05J&\x02\u040F\u0410\x07]\x02\x02" +
		"\u0410\u0411\x05\xA8U\x02\u0411\x97\x03\x02\x02\x02\u0412\u0414\x05\x9A" +
		"N\x02\u0413\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0413" +
		"\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0418\x03\x02\x02\x02" +
		"\u0417\u0419\x05\x84C\x02\u0418\u0417\x03\x02\x02\x02\u0419\u041A\x03" +
		"\x02\x02\x02\u041A\u0418\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B" +
		"\x99\x03\x02\x02\x02\u041C\u041F\x07\x1D\x02\x02\u041D\u0420\x05\xA8U" +
		"\x02\u041E\u0420\x07\x86\x02\x02\u041F\u041D\x03\x02\x02\x02\u041F\u041E" +
		"\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0425\x07c\x02\x02" +
		"\u0422\u0423\x07#\x02\x02\u0423\u0425\x07c\x02\x02\u0424\u041C\x03\x02" +
		"\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425\x9B\x03\x02\x02\x02\u0426\u0433" +
		"\x05\xA0Q\x02\u0427\u0429\x05\x9EP\x02\u0428\u0427\x03\x02\x02\x02\u0428" +
		"\u0429\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042C\x07Z\x02" +
		"\x02\u042B\u042D\x05\xA8U\x02\u042C\u042B\x03\x02\x02\x02\u042C\u042D" +
		"\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E\u0430\x07Z\x02\x02" +
		"\u042F\u0431\x05\xA4S\x02\u0430\u042F\x03\x02\x02\x02\u0430\u0431\x03" +
		"\x02\x02\x02\u0431\u0433\x03\x02\x02\x02\u0432\u0426\x03\x02\x02\x02\u0432" +
		"\u0428\x03\x02\x02\x02\u0433\x9D\x03\x02\x02\x02\u0434\u0437\x05\x86D" +
		"\x02\u0435\u0437\x05\xA4S\x02\u0436\u0434\x03\x02\x02\x02\u0436\u0435" +
		"\x03\x02\x02\x02\u0437\x9F\x03\x02\x02\x02\u0438\u043A\x05\x0E\b\x02\u0439" +
		"\u0438\x03\x02\x02\x02\u043A\u043D\x03\x02\x02\x02\u043B\u0439\x03\x02" +
		"\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043E\x03\x02\x02\x02\u043D" +
		"\u043B\x03\x02\x02\x02\u043E\u043F\x05\xC8e\x02\u043F\u0440\x05J&\x02" +
		"\u0440\u0441\x07c\x02\x02\u0441\u0442\x05\xA8U\x02\u0442\xA1\x03\x02\x02" +
		"\x02\u0443\u0444\x07T\x02\x02\u0444\u0445\x05\xA8U\x02\u0445\u0446\x07" +
		"U\x02\x02\u0446\xA3\x03\x02\x02\x02\u0447\u044C\x05\xA8U\x02\u0448\u0449" +
		"\x07[\x02\x02\u0449\u044B\x05\xA8U\x02\u044A\u0448\x03\x02\x02\x02\u044B" +
		"\u044E\x03\x02\x02\x02\u044C\u044A\x03\x02\x02\x02\u044C\u044D\x03\x02" +
		"\x02\x02\u044D\xA5\x03\x02\x02\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0450" +
		"\x07\x86\x02\x02\u0450\u0452\x07T\x02\x02\u0451\u0453\x05\xA4S\x02\u0452" +
		"\u0451\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0454\x03\x02" +
		"\x02\x02\u0454\u0462\x07U\x02\x02\u0455\u0456\x07B\x02\x02\u0456\u0458" +
		"\x07T\x02\x02\u0457\u0459\x05\xA4S\x02\u0458\u0457\x03\x02\x02\x02\u0458" +
		"\u0459\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u0462\x07U\x02" +
		"\x02\u045B\u045C\x07?\x02\x02\u045C\u045E\x07T\x02\x02\u045D\u045F\x05" +
		"\xA4S\x02\u045E\u045D\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F" +
		"\u0460\x03\x02\x02\x02\u0460\u0462\x07U\x02\x02\u0461\u044F\x03\x02\x02" +
		"\x02\u0461\u0455\x03\x02\x02\x02\u0461\u045B\x03\x02\x02\x02\u0462\xA7" +
		"\x03\x02\x02\x02\u0463\u0464\bU\x01\x02\u0464\u0491\x05\xB0Y\x02\u0465" +
		"\u0491\x05\xA6T\x02\u0466\u0467\x076\x02\x02\u0467\u0491\x05\xB4[\x02" +
		"\u0468\u046C\x07T\x02\x02\u0469\u046B\x05h5\x02\u046A\u0469\x03\x02\x02" +
		"\x02\u046B\u046E\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D" +
		"\x03\x02\x02\x02\u046D\u046F\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02" +
		"\u046F\u0474\x05\xC8e\x02\u0470\u0471\x07p\x02\x02\u0471\u0473\x05\xC8" +
		"e\x02\u0472\u0470\x03\x02\x02\x02\u0473\u0476\x03\x02\x02\x02\u0474\u0472" +
		"\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0477\x03\x02\x02\x02" +
		"\u0476\u0474\x03\x02\x02\x02\u0477\u0478\x07U\x02\x02\u0478\u0479\x05" +
		"\xA8U\x18\u0479\u0491\x03\x02\x02\x02\u047A\u047B\t\x05\x02\x02\u047B" +
		"\u0491\x05\xA8U\x16\u047C\u047D\t\x06\x02\x02\u047D\u0491\x05\xA8U\x15" +
		"\u047E\u0491\x05\xAAV\x02\u047F\u0491\x07G\x02\x02\u0480\u0481\x05\xC8" +
		"e\x02\u0481\u0487\x07\x80\x02\x02\u0482\u0484\x05\xCCg\x02\u0483\u0482" +
		"\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02" +
		"\u0485\u0488\x07\x86\x02\x02\u0486\u0488\x076\x02\x02\u0487\u0483\x03" +
		"\x02\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488\u0491\x03\x02\x02\x02\u0489" +
		"\u048A\x05\xB2Z\x02\u048A\u048C\x07\x80\x02\x02\u048B\u048D\x05\xCCg\x02" +
		"\u048C\u048B\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\u048E\x03" +
		"\x02\x02\x02\u048E\u048F\x076\x02\x02\u048F\u0491\x03\x02\x02\x02\u0490" +
		"\u0463\x03\x02\x02\x02\u0490\u0465\x03\x02\x02\x02\u0490\u0466\x03\x02" +
		"\x02\x02\u0490\u0468\x03\x02\x02\x02\u0490\u047A\x03\x02\x02\x02\u0490" +
		"\u047C\x03\x02\x02\x02\u0490\u047E\x03\x02\x02\x02\u0490\u047F\x03\x02" +
		"\x02\x02\u0490\u0480\x03\x02\x02\x02\u0490\u0489\x03\x02\x02\x02\u0491" +
		"\u04E2\x03\x02\x02\x02\u0492\u0493\f\x14\x02\x02\u0493\u0494\t\x07\x02" +
		"\x02\u0494\u04E1\x05\xA8U\x15\u0495\u0496\f\x13\x02\x02\u0496\u0497\t" +
		"\b\x02\x02\u0497\u04E1\x05\xA8U\x14\u0498\u04A0\f\x12\x02\x02\u0499\u049A" +
		"\x07_\x02\x02\u049A\u04A1\x07_\x02\x02\u049B\u049C\x07^\x02\x02\u049C" +
		"\u049D\x07^\x02\x02\u049D\u04A1\x07^\x02\x02\u049E\u049F\x07^\x02\x02" +
		"\u049F\u04A1\x07^\x02\x02\u04A0\u0499\x03\x02\x02\x02\u04A0\u049B\x03" +
		"\x02\x02\x02\u04A0\u049E\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2" +
		"\u04E1\x05\xA8U\x13\u04A3\u04A4\f\x11\x02\x02\u04A4\u04A5\t\t\x02\x02" +
		"\u04A5\u04E1\x05\xA8U\x12\u04A6\u04A7\f\x0F\x02\x02\u04A7\u04A8\t\n\x02" +
		"\x02\u04A8\u04E1\x05\xA8U\x10\u04A9\u04AA\f\x0E\x02\x02\u04AA\u04AB\x07" +
		"p\x02\x02\u04AB\u04E1\x05\xA8U\x0F\u04AC\u04AD\f\r\x02\x02\u04AD\u04AE" +
		"\x07r\x02\x02\u04AE\u04E1\x05\xA8U\x0E\u04AF\u04B0\f\f\x02\x02\u04B0\u04B1" +
		"\x07q\x02\x02\u04B1\u04E1\x05\xA8U\r\u04B2\u04B3\f\v\x02\x02\u04B3\u04B4" +
		"\x07h\x02\x02\u04B4\u04E1\x05\xA8U\f\u04B5\u04B6\f\n\x02\x02\u04B6\u04B7" +
		"\x07i\x02\x02\u04B7\u04E1\x05\xA8U\v\u04B8\u04B9\f\t\x02\x02\u04B9\u04BA" +
		"\x07b\x02\x02\u04BA\u04BB\x05\xA8U\x02\u04BB\u04BC\x07c\x02\x02\u04BC" +
		"\u04BD\x05\xA8U\t\u04BD\u04E1\x03\x02\x02\x02\u04BE\u04BF\f\b\x02\x02" +
		"\u04BF\u04C0\t\v\x02\x02\u04C0\u04E1\x05\xA8U\b\u04C1\u04C2\f\x1C\x02" +
		"\x02\u04C2\u04CE\x07\\\x02\x02\u04C3\u04CF\x07\x86\x02\x02\u04C4\u04CF" +
		"\x05\xA6T\x02\u04C5\u04CF\x07B\x02\x02\u04C6\u04C8\x076\x02\x02\u04C7" +
		"\u04C9\x05\xC4c\x02\u04C8\u04C7\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02" +
		"\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CF\x05\xB8]\x02\u04CB\u04CC" +
		"\x07?\x02\x02\u04CC\u04CF\x05\xCEh\x02\u04CD\u04CF\x05\xBE`\x02\u04CE" +
		"\u04C3\x03\x02\x02\x02\u04CE\u04C4\x03\x02\x02\x02\u04CE\u04C5\x03\x02" +
		"\x02\x02\u04CE\u04C6\x03\x02\x02\x02\u04CE\u04CB\x03\x02\x02\x02\u04CE" +
		"\u04CD\x03\x02\x02\x02\u04CF\u04E1\x03\x02\x02\x02\u04D0\u04D1\f\x1B\x02" +
		"\x02\u04D1\u04D2\x07X\x02\x02\u04D2\u04D3\x05\xA8U\x02\u04D3\u04D4\x07" +
		"Y\x02\x02\u04D4\u04E1\x03\x02\x02\x02\u04D5\u04D6\f\x17\x02\x02\u04D6" +
		"\u04E1\t\f\x02\x02\u04D7\u04D8\f\x10\x02\x02\u04D8\u04D9\x071\x02\x02" +
		"\u04D9\u04E1\x05\xC8e\x02\u04DA\u04DB\f\x05\x02\x02\u04DB\u04DD\x07\x80" +
		"\x02\x02\u04DC\u04DE\x05\xCCg\x02\u04DD\u04DC\x03\x02\x02\x02\u04DD\u04DE" +
		"\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E1\x07\x86\x02\x02" +
		"\u04E0\u0492\x03\x02\x02\x02\u04E0\u0495\x03\x02\x02\x02\u04E0\u0498\x03" +
		"\x02\x02\x02\u04E0\u04A3\x03\x02\x02\x02\u04E0\u04A6\x03\x02\x02\x02\u04E0" +
		"\u04A9\x03\x02\x02\x02\u04E0\u04AC\x03\x02\x02\x02\u04E0\u04AF\x03\x02" +
		"\x02\x02\u04E0\u04B2\x03\x02\x02\x02\u04E0\u04B5\x03\x02\x02\x02\u04E0" +
		"\u04B8\x03\x02\x02\x02\u04E0\u04BE\x03\x02\x02\x02\u04E0\u04C1\x03\x02" +
		"\x02\x02\u04E0\u04D0\x03\x02\x02\x02\u04E0\u04D5\x03\x02\x02\x02\u04E0" +
		"\u04D7\x03\x02\x02\x02\u04E0\u04DA\x03\x02\x02\x02\u04E1\u04E4\x03\x02" +
		"\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3" +
		"\xA9\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02\x02\u04E5\u04E6\x05\xACW" +
		"\x02\u04E6\u04E7\x07\x7F\x02\x02\u04E7\u04E8\x05\xAEX\x02\u04E8\xAB\x03" +
		"\x02\x02\x02\u04E9\u04FA\x07\x86\x02\x02\u04EA\u04EC\x07T\x02\x02\u04EB" +
		"\u04ED\x05X-\x02\u04EC\u04EB\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02" +
		"\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04FA\x07U\x02\x02\u04EF\u04F0\x07" +
		"T\x02\x02\u04F0\u04F5\x07\x86\x02\x02\u04F1\u04F2\x07[\x02\x02\u04F2\u04F4" +
		"\x07\x86\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04F7\x03\x02\x02\x02" +
		"\u04F5\u04F3\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04F8\x03" +
		"\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F8\u04FA\x07U\x02\x02\u04F9" +
		"\u04E9\x03\x02\x02\x02\u04F9\u04EA\x03\x02\x02\x02\u04F9\u04EF\x03\x02" +
		"\x02\x02\u04FA\xAD\x03\x02\x02\x02\u04FB\u04FE\x05\xA8U\x02\u04FC\u04FE" +
		"\x05\x82B\x02\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FC\x03\x02\x02\x02" +
		"\u04FE\xAF\x03\x02\x02\x02\u04FF\u0500\x07T\x02\x02\u0500\u0501\x05\xA8" +
		"U\x02\u0501\u0502\x07U\x02\x02\u0502\u0512\x03\x02\x02\x02\u0503\u0512" +
		"\x07B\x02\x02\u0504\u0512\x07?\x02\x02\u0505\u0512\x05`1\x02\u0506\u0512" +
		"\x07\x86\x02\x02\u0507\u0508\x05.\x18\x02\u0508\u0509\x07\\\x02\x02\u0509" +
		"\u050A\x07 \x02\x02\u050A\u0512\x03\x02\x02\x02\u050B\u050F\x05\xC4c\x02" +
		"\u050C\u0510\x05\xD0i\x02\u050D\u050E\x07B\x02\x02\u050E\u0510\x05\xD2" +
		"j\x02\u050F\u050C\x03\x02\x02\x02\u050F\u050D\x03\x02\x02\x02\u0510\u0512" +
		"\x03\x02\x02\x02\u0511\u04FF\x03\x02\x02\x02\u0511\u0503\x03\x02\x02\x02" +
		"\u0511\u0504\x03\x02\x02\x02\u0511\u0505\x03\x02\x02\x02\u0511\u0506\x03" +
		"\x02\x02\x02\u0511\u0507\x03\x02\x02\x02\u0511\u050B\x03\x02\x02\x02\u0512" +
		"\xB1\x03\x02\x02\x02\u0513\u0514\x05P)\x02\u0514\u0515\x07\\\x02\x02\u0515" +
		"\u0517\x03\x02\x02\x02\u0516\u0513\x03\x02\x02\x02\u0516\u0517\x03\x02" +
		"\x02\x02\u0517\u051B\x03\x02\x02\x02\u0518\u051A\x05h5\x02\u0519\u0518" +
		"\x03\x02\x02\x02\u051A\u051D\x03\x02\x02\x02\u051B\u0519\x03\x02\x02\x02" +
		"\u051B\u051C\x03\x02\x02\x02\u051C\u051E\x03\x02\x02\x02\u051D\u051B\x03" +
		"\x02\x02\x02\u051E\u0520\x07\x86\x02\x02\u051F\u0521\x05\xCCg\x02\u0520" +
		"\u051F\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02\u0521\xB3\x03\x02\x02" +
		"\x02\u0522\u0523\x05\xC4c\x02\u0523\u0524\x05\xB6\\\x02\u0524\u0525\x05" +
		"\xBC_\x02\u0525\u052C\x03\x02\x02\x02\u0526\u0529\x05\xB6\\\x02\u0527" +
		"\u052A\x05\xBA^\x02\u0528\u052A\x05\xBC_\x02\u0529\u0527\x03\x02\x02\x02" +
		"\u0529\u0528\x03\x02\x02\x02\u052A\u052C\x03\x02\x02\x02\u052B\u0522\x03" +
		"\x02\x02\x02\u052B\u0526\x03\x02\x02\x02\u052C\xB5\x03\x02\x02\x02\u052D" +
		"\u052F\x07\x86\x02\x02\u052E\u0530\x05\xC0a\x02\u052F\u052E\x03\x02\x02" +
		"\x02\u052F\u0530\x03\x02\x02\x02\u0530\u0538\x03\x02\x02\x02\u0531\u0532" +
		"\x07\\\x02\x02\u0532\u0534\x07\x86\x02\x02\u0533\u0535\x05\xC0a\x02\u0534" +
		"\u0533\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0537\x03\x02" +
		"\x02\x02\u0536\u0531\x03\x02\x02\x02\u0537\u053A\x03\x02\x02\x02\u0538" +
		"\u0536\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053D\x03\x02" +
		"\x02\x02\u053A\u0538\x03\x02\x02\x02\u053B\u053D\x05\xCAf\x02\u053C\u052D" +
		"\x03\x02\x02\x02\u053C\u053B\x03\x02\x02\x02\u053D\xB7\x03\x02\x02\x02" +
		"\u053E\u0540\x07\x86\x02\x02\u053F\u0541\x05\xC2b\x02\u0540\u053F\x03" +
		"\x02\x02\x02\u0540\u0541\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542" +
		"\u0543\x05\xBC_\x02\u0543\xB9\x03\x02\x02\x02\u0544\u0560\x07X\x02\x02" +
		"\u0545\u054A\x07Y\x02\x02\u0546\u0547\x07X\x02\x02\u0547\u0549\x07Y\x02" +
		"\x02\u0548\u0546\x03\x02\x02\x02\u0549\u054C\x03\x02\x02\x02\u054A\u0548" +
		"\x03\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B\u054D\x03\x02\x02\x02" +
		"\u054C\u054A\x03\x02\x02\x02\u054D\u0561\x05N(\x02\u054E\u054F\x05\xA8" +
		"U\x02\u054F\u0556\x07Y\x02\x02\u0550\u0551\x07X\x02\x02\u0551\u0552\x05" +
		"\xA8U\x02\u0552\u0553\x07Y\x02\x02\u0553\u0555\x03\x02\x02\x02\u0554\u0550" +
		"\x03\x02\x02\x02\u0555\u0558\x03\x02\x02\x02\u0556\u0554\x03\x02\x02\x02" +
		"\u0556\u0557\x03\x02\x02\x02\u0557\u055D\x03\x02\x02\x02\u0558\u0556\x03" +
		"\x02\x02\x02\u0559\u055A\x07X\x02\x02\u055A\u055C\x07Y\x02\x02\u055B\u0559" +
		"\x03\x02\x02\x02\u055C\u055F\x03\x02\x02\x02\u055D\u055B\x03\x02\x02\x02" +
		"\u055D\u055E\x03\x02\x02\x02\u055E\u0561\x03\x02\x02\x02\u055F\u055D\x03" +
		"\x02\x02\x02\u0560\u0545\x03\x02\x02\x02\u0560\u054E\x03\x02\x02\x02\u0561" +
		"\xBB\x03\x02\x02\x02\u0562\u0564\x05\xD2j\x02\u0563\u0565\x05\"\x12\x02" +
		"\u0564\u0563\x03\x02\x02\x02\u0564\u0565\x03\x02\x02\x02\u0565\xBD\x03" +
		"\x02\x02\x02\u0566\u0567\x05\xC4c\x02\u0567\u0568\x05\xD0i\x02\u0568\xBF" +
		"\x03\x02\x02\x02\u0569\u056A\x07_\x02\x02\u056A\u056D\x07^\x02\x02\u056B" +
		"\u056D\x05\xCCg\x02\u056C\u0569\x03\x02\x02\x02\u056C\u056B\x03\x02\x02" +
		"\x02\u056D\xC1\x03\x02\x02\x02\u056E\u056F\x07_\x02\x02\u056F\u0572\x07" +
		"^\x02\x02\u0570\u0572\x05\xC4c\x02\u0571\u056E\x03\x02\x02\x02\u0571\u0570" +
		"\x03\x02\x02\x02\u0572\xC3\x03\x02\x02\x02\u0573\u0574\x07_\x02\x02\u0574" +
		"\u0575\x05\xC6d\x02\u0575\u0576\x07^\x02\x02\u0576\xC5\x03\x02\x02\x02" +
		"\u0577\u057C\x05\xC8e\x02\u0578\u0579\x07[\x02\x02\u0579\u057B\x05\xC8" +
		"e\x02\u057A\u0578\x03\x02\x02\x02\u057B\u057E\x03\x02\x02\x02\u057C\u057A" +
		"\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D\xC7\x03\x02\x02\x02" +
		"\u057E\u057C\x03\x02\x02\x02\u057F\u0581\x05h5\x02\u0580\u057F\x03\x02" +
		"\x02\x02\u0581\u0584\x03\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0582" +
		"\u0583\x03\x02\x02\x02\u0583\u0587\x03\x02\x02\x02\u0584\u0582\x03\x02" +
		"\x02\x02\u0585\u0588\x05P)\x02\u0586\u0588\x05\xCAf\x02\u0587\u0585\x03" +
		"\x02\x02\x02\u0587\u0586\x03\x02\x02\x02\u0588\u0593\x03\x02\x02\x02\u0589" +
		"\u058B\x05h5\x02\u058A\u0589\x03\x02\x02\x02\u058B\u058E\x03\x02\x02\x02" +
		"\u058C\u058A\x03\x02\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\u058F\x03" +
		"\x02\x02\x02\u058E\u058C\x03\x02\x02\x02\u058F\u0590\x07X\x02\x02\u0590" +
		"\u0592\x07Y\x02\x02\u0591\u058C\x03\x02\x02\x02\u0592\u0595\x03\x02\x02" +
		"\x02\u0593\u0591\x03\x02\x02\x02\u0593\u0594\x03\x02\x02\x02\u0594\xC9" +
		"\x03\x02\x02\x02\u0595\u0593\x03\x02\x02\x02\u0596\u0597\t\r\x02\x02\u0597" +
		"\xCB\x03\x02\x02\x02\u0598\u0599\x07_\x02\x02\u0599\u059E\x05R*\x02\u059A" +
		"\u059B\x07[\x02\x02\u059B\u059D\x05R*\x02\u059C\u059A\x03\x02\x02\x02" +
		"\u059D\u05A0\x03\x02\x02\x02\u059E\u059C\x03\x02\x02\x02\u059E\u059F\x03" +
		"\x02\x02\x02\u059F\u05A1\x03\x02\x02\x02\u05A0\u059E\x03\x02\x02\x02\u05A1" +
		"\u05A2\x07^\x02\x02\u05A2\xCD\x03\x02\x02\x02\u05A3\u05AA\x05\xD2j\x02" +
		"\u05A4\u05A5\x07\\\x02\x02\u05A5\u05A7\x07\x86\x02\x02\u05A6\u05A8\x05" +
		"\xD2j\x02\u05A7\u05A6\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8" +
		"\u05AA\x03\x02\x02\x02\u05A9\u05A3\x03\x02\x02\x02\u05A9\u05A4\x03\x02" +
		"\x02\x02\u05AA\xCF\x03\x02\x02\x02\u05AB\u05AC\x07?\x02\x02\u05AC\u05B0" +
		"\x05\xCEh\x02\u05AD\u05AE\x07\x86\x02\x02\u05AE\u05B0\x05\xD2j\x02\u05AF" +
		"\u05AB\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05B0\xD1\x03\x02\x02" +
		"\x02\u05B1\u05B3\x07T\x02\x02\u05B2\u05B4\x05\xA4S\x02\u05B3\u05B2\x03" +
		"\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\u05B5\x03\x02\x02\x02\u05B5" +
		"\u05B6\x07U\x02\x02\u05B6\xD3\x03\x02\x02\x02\u05B7\u05B9\x05\xD6l\x02" +
		"\u05B8\u05B7\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9\u05BD\x03" +
		"\x02\x02\x02\u05BA\u05BC\x05\xE2r\x02\u05BB\u05BA\x03\x02\x02\x02\u05BC" +
		"\u05BF\x03\x02\x02\x02\u05BD\u05BB\x03\x02\x02\x02\u05BD\u05BE\x03\x02" +
		"\x02\x02\u05BE\u05C0\x03\x02\x02\x02\u05BF\u05BD\x03\x02\x02\x02\u05C0" +
		"\u05C4\x05\xDAn\x02\u05C1\u05C3\x05\xE2r\x02\u05C2\u05C1\x03\x02\x02\x02" +
		"\u05C3\u05C6\x03\x02\x02\x02\u05C4\u05C2\x03\x02\x02\x02\u05C4\u05C5\x03" +
		"\x02\x02\x02\u05C5\xD5\x03\x02\x02\x02\u05C6\u05C4\x03\x02\x02\x02\u05C7" +
		"\u05CB\x07\n\x02\x02\u05C8\u05CA\x05\xDEp\x02\u05C9\u05C8\x03\x02\x02" +
		"\x02\u05CA\u05CD\x03\x02\x02\x02\u05CB\u05C9\x03\x02\x02\x02\u05CB\u05CC" +
		"\x03\x02\x02\x02\u05CC\u05CE\x03\x02\x02\x02\u05CD\u05CB\x03\x02\x02\x02" +
		"\u05CE\u05CF\x07\r\x02\x02\u05CF\xD7\x03\x02\x02\x02\u05D0\u05D2\x05\xE0" +
		"q\x02\u05D1\u05D0\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02\u05D2\u05DE" +
		"\x03\x02\x02\x02\u05D3\u05D8\x05\xDAn\x02\u05D4\u05D8\x05\xDCo\x02\u05D5" +
		"\u05D8\x07\x14\x02\x02\u05D6\u05D8\x07\x03\x02\x02\u05D7\u05D3\x03\x02" +
		"\x02\x02\u05D7\u05D4\x03\x02\x02\x02\u05D7\u05D5\x03\x02\x02\x02\u05D7" +
		"\u05D6\x03\x02\x02\x02\u05D8\u05DA\x03\x02\x02\x02\u05D9\u05DB\x05\xE0" +
		"q\x02\u05DA\u05D9\x03\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02\u05DB\u05DD" +
		"\x03\x02\x02\x02\u05DC\u05D7\x03\x02\x02\x02\u05DD\u05E0\x03\x02\x02\x02" +
		"\u05DE\u05DC\x03\x02\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF\xD9\x03" +
		"\x02\x02\x02\u05E0\u05DE\x03\x02\x02\x02\u05E1\u05E2\x07\t\x02\x02\u05E2" +
		"\u05E6\x07\x12\x02\x02\u05E3\u05E5\x05\xDEp\x02\u05E4\u05E3\x03\x02\x02" +
		"\x02\u05E5\u05E8\x03\x02\x02\x02\u05E6\u05E4\x03\x02\x02\x02\u05E6\u05E7" +
		"\x03\x02\x02\x02\u05E7\u05E9\x03\x02\x02\x02\u05E8\u05E6\x03\x02\x02\x02" +
		"\u05E9\u05EA\x07\f\x02\x02\u05EA\u05EB\x05\xD8m\x02\u05EB\u05EC\x07\t" +
		"\x02\x02\u05EC\u05ED\x07\x0F\x02\x02\u05ED\u05EE\x07\x12\x02\x02\u05EE" +
		"\u05EF\x07\f\x02\x02\u05EF\u0604\x03\x02\x02\x02\u05F0\u05F1\x07\t\x02" +
		"\x02\u05F1\u05F5\x07\x12\x02\x02\u05F2\u05F4\x05\xDEp\x02\u05F3\u05F2" +
		"\x03\x02\x02\x02\u05F4\u05F7\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02\x02" +
		"\u05F5\u05F6\x03\x02\x02\x02\u05F6\u05F8\x03\x02\x02\x02\u05F7\u05F5\x03" +
		"\x02\x02\x02\u05F8\u0604\x07\x0E\x02\x02\u05F9\u05FA\x07\x04\x02\x02\u05FA" +
		"\u05FB\x07\x16\x02\x02\u05FB\u05FC\x05\x02\x02\x02\u05FC\u05FD\x07\x17" +
		"\x02\x02\u05FD\u05FE\x07\x15\x02\x02\u05FE\u0604\x03\x02\x02\x02\u05FF" +
		"\u0600\x07\x04\x02\x02\u0600\u0601\x05\x02\x02\x02\u0601\u0602\x07\x15" +
		"\x02\x02\u0602\u0604\x03\x02\x02\x02\u0603\u05E1\x03\x02\x02\x02\u0603" +
		"\u05F0\x03\x02\x02\x02\u0603\u05F9\x03\x02\x02\x02\u0603\u05FF\x03\x02" +
		"\x02\x02\u0604\xDB\x03\x02\x02\x02\u0605\u0606\t\x0E\x02\x02\u0606\xDD" +
		"\x03\x02\x02\x02\u0607\u0608\x07\x12\x02\x02\u0608\u0609\x07\x10\x02\x02" +
		"\u0609\u060A\x07\x11\x02\x02\u060A\xDF\x03\x02\x02\x02\u060B\u060C\t\x0F" +
		"\x02\x02\u060C\xE1\x03\x02\x02\x02\u060D\u060E\t\x10\x02\x02\u060E\xE3" +
		"\x03\x02\x02\x02\xC0\xE7\xED\xF3\xFC\u0101\u0108\u010F\u0112\u0119\u0123" +
		"\u012C\u0131\u0135\u0139\u0143\u014B\u0153\u0157\u015E\u0165\u0169\u016C" +
		"\u016F\u0178\u017E\u0183\u0186\u018C\u0192\u0196\u019E\u01A7\u01AE\u01B4" +
		"\u01B8\u01C3\u01CC\u01D1\u01D7\u01DB\u01E7\u01F2\u01F7\u0200\u0208\u0212" +
		"\u021B\u0223\u0228\u0230\u0235\u023F\u0249\u024F\u0256\u025B\u0263\u0267" +
		"\u0269\u026F\u0274\u0278\u027F\u0285\u0287\u028E\u0293\u029C\u02A1\u02A4" +
		"\u02A9\u02B2\u02B9\u02C4\u02CD\u02D7\u02E0\u02E5\u02E8\u02EF\u02F9\u0301" +
		"\u0304\u0307\u0314\u031C\u0321\u0329\u032D\u0331\u0335\u0337\u033B\u0341" +
		"\u034C\u035A\u035E\u0363\u036C\u0371\u0374\u037B\u0384\u039B\u039E\u03A1" +
		"\u03A9\u03AD\u03B5\u03BB\u03C6\u03CF\u03D4\u03DE\u03E5\u03F2\u03FB\u0404" +
		"\u040A\u0415\u041A\u041F\u0424\u0428\u042C\u0430\u0432\u0436\u043B\u044C" +
		"\u0452\u0458\u045E\u0461\u046C\u0474\u0483\u0487\u048C\u0490\u04A0\u04C8" +
		"\u04CE\u04DD\u04E0\u04E2\u04EC\u04F5\u04F9\u04FD\u050F\u0511\u0516\u051B" +
		"\u0520\u0529\u052B\u052F\u0534\u0538\u053C\u0540\u054A\u0556\u055D\u0560" +
		"\u0564\u056C\u0571\u057C\u0582\u0587\u058C\u0593\u059E\u05A7\u05A9\u05AF" +
		"\u05B3\u05B8\u05BD\u05C4\u05CB\u05D1\u05D7\u05DA\u05DE\u05E6\u05F5\u0603";
	public static readonly _serializedATN: string = Utils.join(
		[
			SPBSParser._serializedATNSegment0,
			SPBSParser._serializedATNSegment1,
			SPBSParser._serializedATNSegment2,
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

export class BsCompilationUnitContext extends ParserRuleContext {
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
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


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(SPBSParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MUL, 0); }
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


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
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


export class ModifierContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_modifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classOrInterfaceModifier; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FINAL, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ABSTRACT, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
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


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(SPBSParser.CLASS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.EXTENDS, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
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


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(SPBSParser.LT, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(SPBSParser.GT, 0); }
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


export class TypeParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.EXTENDS, 0); }
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


export class TypeBoundContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.BITAND);
		} else {
			return this.getToken(SPBSParser.BITAND, i);
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


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(SPBSParser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
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


export class EnumConstantsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SPBSParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
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
	public INTERFACE(): TerminalNode { return this.getToken(SPBSParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.EXTENDS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
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


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
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


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
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


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
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
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
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


export class TypeTypeOrVoidContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeTypeOrVoid; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeTypeOrVoid) {
			listener.enterTypeTypeOrVoid(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeTypeOrVoid) {
			listener.exitTypeTypeOrVoid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeTypeOrVoid) {
			return visitor.visitTypeTypeOrVoid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_genericMethodDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterGenericMethodDeclaration) {
			listener.enterGenericMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitGenericMethodDeclaration) {
			listener.exitGenericMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitGenericMethodDeclaration) {
			return visitor.visitGenericMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_genericConstructorDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterGenericConstructorDeclaration) {
			listener.enterGenericConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitGenericConstructorDeclaration) {
			listener.exitGenericConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitGenericConstructorDeclaration) {
			return visitor.visitGenericConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody!: BlockContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
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


export class FieldDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
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


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_interfaceBodyDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInterfaceBodyDeclaration) {
			listener.enterInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInterfaceBodyDeclaration) {
			listener.exitInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBodyDeclaration) {
			return visitor.visitInterfaceBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
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


export class ConstDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(SPBSParser.SEMI, 0); }
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
	public get ruleIndex(): number { return SPBSParser.RULE_constDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstDeclaration) {
			listener.enterConstDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstDeclaration) {
			listener.exitConstDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstDeclaration) {
			return visitor.visitConstDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(SPBSParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
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
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.RBRACK);
		} else {
			return this.getToken(SPBSParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_constantDeclarator; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterConstantDeclarator) {
			listener.enterConstantDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitConstantDeclarator) {
			listener.exitConstantDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclarator) {
			return visitor.visitConstantDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
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
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
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


export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getRuleContext(0, InterfaceMethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_genericInterfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterGenericInterfaceMethodDeclaration) {
			listener.enterGenericInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitGenericInterfaceMethodDeclaration) {
			listener.exitGenericInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitGenericInterfaceMethodDeclaration) {
			return visitor.visitGenericInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SPBSParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
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
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
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
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
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


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.IDENTIFIER);
		} else {
			return this.getToken(SPBSParser.IDENTIFIER, i);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
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


export class TypeArgumentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.QUESTION, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
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


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
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
	public get ruleIndex(): number { return SPBSParser.RULE_qualifiedNameList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterQualifiedNameList) {
			listener.enterQualifiedNameList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitQualifiedNameList) {
			listener.exitQualifiedNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitQualifiedNameList) {
			return visitor.visitQualifiedNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
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


export class FormalParameterListContext extends ParserRuleContext {
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


export class FormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
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


export class LastFormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public ELLIPSIS(): TerminalNode { return this.getToken(SPBSParser.ELLIPSIS, 0); }
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


export class QualifiedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.IDENTIFIER);
		} else {
			return this.getToken(SPBSParser.IDENTIFIER, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BOOL_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NULL_LITERAL, 0); }
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


export class IntegerLiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DECIMAL_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.HEX_LITERAL, 0); }
	public OCT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.OCT_LITERAL, 0); }
	public BINARY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BINARY_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FLOAT_LITERAL, 0); }
	public HEX_FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.HEX_FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_floatLiteral; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFloatLiteral) {
			listener.exitFloatLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFloatLiteral) {
			return visitor.visitFloatLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AltAnnotationQualifiedNameContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(SPBSParser.AT, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.IDENTIFIER);
		} else {
			return this.getToken(SPBSParser.IDENTIFIER, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_altAnnotationQualifiedName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAltAnnotationQualifiedName) {
			listener.enterAltAnnotationQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAltAnnotationQualifiedName) {
			listener.exitAltAnnotationQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAltAnnotationQualifiedName) {
			return visitor.visitAltAnnotationQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.AT, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, AltAnnotationQualifiedNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
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


export class ElementValuePairsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SPBSParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
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


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(SPBSParser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(SPBSParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
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
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
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


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
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


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationTypeElementRest; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationTypeElementRest) {
			listener.enterAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationTypeElementRest) {
			listener.exitAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementRest) {
			return visitor.visitAnnotationTypeElementRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationMethodOrConstantRest; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationMethodOrConstantRest) {
			listener.enterAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationMethodOrConstantRest) {
			listener.exitAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodOrConstantRest) {
			return visitor.visitAnnotationMethodOrConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationMethodRest; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationMethodRest) {
			listener.enterAnnotationMethodRest(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationMethodRest) {
			listener.exitAnnotationMethodRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodRest) {
			return visitor.visitAnnotationMethodRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_annotationConstantRest; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterAnnotationConstantRest) {
			listener.enterAnnotationConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitAnnotationConstantRest) {
			listener.exitAnnotationConstantRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitAnnotationConstantRest) {
			return visitor.visitAnnotationConstantRest(this);
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


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SPBSParser.RBRACE, 0); }
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


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	public importDeclaration(): ImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ImportDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public localTypeDeclaration(): LocalTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
	}
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
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


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
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


export class LocalTypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_localTypeDeclaration; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterLocalTypeDeclaration) {
			listener.enterLocalTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitLocalTypeDeclaration) {
			listener.exitLocalTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitLocalTypeDeclaration) {
			return visitor.visitLocalTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _blockLabel!: BlockContext;
	public _statementExpression!: ExpressionContext;
	public _identifierLabel!: Token;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COLON, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IF, 0); }
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FOR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DO, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.TRY, 0); }
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public resourceSpecification(): ResourceSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ResourceSpecificationContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SWITCH, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RBRACE, 0); }
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
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SYNCHRONIZED, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RETURN, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IDENTIFIER, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CONTINUE, 0); }
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


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(SPBSParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
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


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(SPBSParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public resources(): ResourcesContext {
		return this.getRuleContext(0, ResourcesContext);
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


export class ResourcesContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SPBSParser.RULE_resources; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterResources) {
			listener.enterResources(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitResources) {
			listener.exitResources(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitResources) {
			return visitor.visitResources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeContext);
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


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
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


export class SwitchLabelContext extends ParserRuleContext {
	public _constantExpression!: ExpressionContext;
	public _enumConstantName!: Token;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(SPBSParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IDENTIFIER, 0); }
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


export class ForControlContext extends ParserRuleContext {
	public _forUpdate!: ExpressionListContext;
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
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
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_forControl; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
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


export class EnhancedForControlContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(SPBSParser.COLON, 0); }
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
	public get ruleIndex(): number { return SPBSParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SPBSParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _prefix!: Token;
	public _bop!: Token;
	public _postfix!: Token;
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
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
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IDENTIFIER, 0); }
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THIS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NEW, 0); }
	public innerCreator(): InnerCreatorContext | undefined {
		return this.tryGetRuleContext(0, InnerCreatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RBRACK, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.BITAND);
		} else {
			return this.getToken(SPBSParser.BITAND, i);
		}
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUB, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MOD, 0); }
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
	public LE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.GE, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.INSTANCEOF, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.NOTEQUAL, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CARET, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.OR, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.QUESTION, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.MOD_ASSIGN, 0); }
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.VOID, 0); }
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.COLONCOLON, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
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
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.IDENTIFIER);
		} else {
			return this.getToken(SPBSParser.IDENTIFIER, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
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


export class PrimaryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.RPAREN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IDENTIFIER, 0); }
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CLASS, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
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


export class ClassTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
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
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
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


export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_creator; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.IDENTIFIER);
		} else {
			return this.getToken(SPBSParser.IDENTIFIER, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
	public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsOrDiamondContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
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
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_createdName; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SPBSParser.IDENTIFIER, 0); }
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_innerCreator; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterInnerCreator) {
			listener.enterInnerCreator(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitInnerCreator) {
			listener.exitInnerCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitInnerCreator) {
			return visitor.visitInnerCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
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
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_explicitGenericInvocation; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExplicitGenericInvocation) {
			listener.enterExplicitGenericInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExplicitGenericInvocation) {
			listener.exitExplicitGenericInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocation) {
			return visitor.visitExplicitGenericInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
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


export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.GT, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterNonWildcardTypeArgumentsOrDiamond) {
			listener.enterNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitNonWildcardTypeArgumentsOrDiamond) {
			listener.exitNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
			return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(SPBSParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(SPBSParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
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
	public get ruleIndex(): number { return SPBSParser.RULE_typeList; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_typeType; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterTypeType) {
			listener.enterTypeType(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitTypeType) {
			listener.exitTypeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitTypeType) {
			return visitor.visitTypeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BOOLEAN, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.CHAR, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.LONG, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOUBLE, 0); }
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


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(SPBSParser.LT, 0); }
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(SPBSParser.GT, 0); }
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


export class SuperSuffixContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_superSuffix; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterSuperSuffix) {
			listener.enterSuperSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitSuperSuffix) {
			listener.exitSuperSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitSuperSuffix) {
			return visitor.visitSuperSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SPBSParser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_explicitGenericInvocationSuffix; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterExplicitGenericInvocationSuffix) {
			listener.enterExplicitGenericInvocationSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitExplicitGenericInvocationSuffix) {
			listener.exitExplicitGenericInvocationSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocationSuffix) {
			return visitor.visitExplicitGenericInvocationSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SPBSParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SPBSParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SPBSParser.RULE_arguments; }
	// @Override
	public enterRule(listener: SPBSParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SPBSParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SPBSParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
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
	public XMLName(): TerminalNode[];
	public XMLName(i: number): TerminalNode;
	public XMLName(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SPBSParser.XMLName);
		} else {
			return this.getToken(SPBSParser.XMLName, i);
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
	public XMLName(): TerminalNode { return this.getToken(SPBSParser.XMLName, 0); }
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


