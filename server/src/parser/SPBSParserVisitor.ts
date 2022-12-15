// Generated from beanshell_grammar/SPBSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BsCompilationUnitContext } from "./SPBSParser";
import { PackageDeclarationContext } from "./SPBSParser";
import { ImportDeclarationContext } from "./SPBSParser";
import { TypeDeclarationContext } from "./SPBSParser";
import { ModifierContext } from "./SPBSParser";
import { ClassOrInterfaceModifierContext } from "./SPBSParser";
import { VariableModifierContext } from "./SPBSParser";
import { ClassDeclarationContext } from "./SPBSParser";
import { TypeParametersContext } from "./SPBSParser";
import { TypeParameterContext } from "./SPBSParser";
import { TypeBoundContext } from "./SPBSParser";
import { EnumDeclarationContext } from "./SPBSParser";
import { EnumConstantsContext } from "./SPBSParser";
import { EnumConstantContext } from "./SPBSParser";
import { EnumBodyDeclarationsContext } from "./SPBSParser";
import { InterfaceDeclarationContext } from "./SPBSParser";
import { ClassBodyContext } from "./SPBSParser";
import { InterfaceBodyContext } from "./SPBSParser";
import { ClassBodyDeclarationContext } from "./SPBSParser";
import { MemberDeclarationContext } from "./SPBSParser";
import { MethodDeclarationContext } from "./SPBSParser";
import { MethodBodyContext } from "./SPBSParser";
import { TypeTypeOrVoidContext } from "./SPBSParser";
import { GenericMethodDeclarationContext } from "./SPBSParser";
import { GenericConstructorDeclarationContext } from "./SPBSParser";
import { ConstructorDeclarationContext } from "./SPBSParser";
import { FieldDeclarationContext } from "./SPBSParser";
import { InterfaceBodyDeclarationContext } from "./SPBSParser";
import { InterfaceMemberDeclarationContext } from "./SPBSParser";
import { ConstDeclarationContext } from "./SPBSParser";
import { ConstantDeclaratorContext } from "./SPBSParser";
import { InterfaceMethodDeclarationContext } from "./SPBSParser";
import { InterfaceMethodModifierContext } from "./SPBSParser";
import { GenericInterfaceMethodDeclarationContext } from "./SPBSParser";
import { VariableDeclaratorsContext } from "./SPBSParser";
import { VariableDeclaratorContext } from "./SPBSParser";
import { VariableDeclaratorIdContext } from "./SPBSParser";
import { VariableInitializerContext } from "./SPBSParser";
import { ArrayInitializerContext } from "./SPBSParser";
import { ClassOrInterfaceTypeContext } from "./SPBSParser";
import { TypeArgumentContext } from "./SPBSParser";
import { QualifiedNameListContext } from "./SPBSParser";
import { FormalParametersContext } from "./SPBSParser";
import { FormalParameterListContext } from "./SPBSParser";
import { FormalParameterContext } from "./SPBSParser";
import { LastFormalParameterContext } from "./SPBSParser";
import { QualifiedNameContext } from "./SPBSParser";
import { LiteralContext } from "./SPBSParser";
import { IntegerLiteralContext } from "./SPBSParser";
import { FloatLiteralContext } from "./SPBSParser";
import { AltAnnotationQualifiedNameContext } from "./SPBSParser";
import { AnnotationContext } from "./SPBSParser";
import { ElementValuePairsContext } from "./SPBSParser";
import { ElementValuePairContext } from "./SPBSParser";
import { ElementValueContext } from "./SPBSParser";
import { ElementValueArrayInitializerContext } from "./SPBSParser";
import { AnnotationTypeDeclarationContext } from "./SPBSParser";
import { AnnotationTypeBodyContext } from "./SPBSParser";
import { AnnotationTypeElementDeclarationContext } from "./SPBSParser";
import { AnnotationTypeElementRestContext } from "./SPBSParser";
import { AnnotationMethodOrConstantRestContext } from "./SPBSParser";
import { AnnotationMethodRestContext } from "./SPBSParser";
import { AnnotationConstantRestContext } from "./SPBSParser";
import { DefaultValueContext } from "./SPBSParser";
import { BlockContext } from "./SPBSParser";
import { BlockStatementContext } from "./SPBSParser";
import { LocalVariableDeclarationContext } from "./SPBSParser";
import { LocalTypeDeclarationContext } from "./SPBSParser";
import { StatementContext } from "./SPBSParser";
import { CatchClauseContext } from "./SPBSParser";
import { CatchTypeContext } from "./SPBSParser";
import { FinallyBlockContext } from "./SPBSParser";
import { ResourceSpecificationContext } from "./SPBSParser";
import { ResourcesContext } from "./SPBSParser";
import { ResourceContext } from "./SPBSParser";
import { SwitchBlockStatementGroupContext } from "./SPBSParser";
import { SwitchLabelContext } from "./SPBSParser";
import { ForControlContext } from "./SPBSParser";
import { ForInitContext } from "./SPBSParser";
import { EnhancedForControlContext } from "./SPBSParser";
import { ParExpressionContext } from "./SPBSParser";
import { ExpressionListContext } from "./SPBSParser";
import { MethodCallContext } from "./SPBSParser";
import { ExpressionContext } from "./SPBSParser";
import { LambdaExpressionContext } from "./SPBSParser";
import { LambdaParametersContext } from "./SPBSParser";
import { LambdaBodyContext } from "./SPBSParser";
import { PrimaryContext } from "./SPBSParser";
import { ClassTypeContext } from "./SPBSParser";
import { CreatorContext } from "./SPBSParser";
import { CreatedNameContext } from "./SPBSParser";
import { InnerCreatorContext } from "./SPBSParser";
import { ArrayCreatorRestContext } from "./SPBSParser";
import { ClassCreatorRestContext } from "./SPBSParser";
import { ExplicitGenericInvocationContext } from "./SPBSParser";
import { TypeArgumentsOrDiamondContext } from "./SPBSParser";
import { NonWildcardTypeArgumentsOrDiamondContext } from "./SPBSParser";
import { NonWildcardTypeArgumentsContext } from "./SPBSParser";
import { TypeListContext } from "./SPBSParser";
import { TypeTypeContext } from "./SPBSParser";
import { PrimitiveTypeContext } from "./SPBSParser";
import { TypeArgumentsContext } from "./SPBSParser";
import { SuperSuffixContext } from "./SPBSParser";
import { ExplicitGenericInvocationSuffixContext } from "./SPBSParser";
import { ArgumentsContext } from "./SPBSParser";
import { Xml_documentContext } from "./SPBSParser";
import { Xml_prologContext } from "./SPBSParser";
import { Xml_contentContext } from "./SPBSParser";
import { Xml_elementContext } from "./SPBSParser";
import { Xml_referenceContext } from "./SPBSParser";
import { Xml_attributeContext } from "./SPBSParser";
import { Xml_chardataContext } from "./SPBSParser";
import { Xml_miscContext } from "./SPBSParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SPBSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SPBSParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SPBSParser.bsCompilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBsCompilationUnit?: (ctx: BsCompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeTypeOrVoid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTypeOrVoid?: (ctx: TypeTypeOrVoidContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDeclaration?: (ctx: ConstDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constantDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastFormalParameter?: (ctx: LastFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.altAnnotationQualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAltAnnotationQualifiedName?: (ctx: AltAnnotationQualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.localTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTypeDeclaration?: (ctx: LocalTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.resourceSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.lambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameters?: (ctx: LambdaParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType?: (ctx: ClassTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.innerCreator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerCreator?: (ctx: InnerCreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeType?: (ctx: TypeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.superSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperSuffix?: (ctx: SuperSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.xml_document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_document?: (ctx: Xml_documentContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.xml_prolog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_prolog?: (ctx: Xml_prologContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.xml_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_content?: (ctx: Xml_contentContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.xml_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_element?: (ctx: Xml_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.xml_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_reference?: (ctx: Xml_referenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.xml_attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_attribute?: (ctx: Xml_attributeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.xml_chardata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_chardata?: (ctx: Xml_chardataContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.xml_misc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_misc?: (ctx: Xml_miscContext) => Result;
}

