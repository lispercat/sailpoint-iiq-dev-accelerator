// Generated from beanshell_grammar/SPBSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LiteralContext } from "./SPBSParser";
import { PrimitiveTypeContext } from "./SPBSParser";
import { NumericTypeContext } from "./SPBSParser";
import { IntegralTypeContext } from "./SPBSParser";
import { FloatingPointTypeContext } from "./SPBSParser";
import { ReferenceTypeContext } from "./SPBSParser";
import { ClassOrInterfaceTypeContext } from "./SPBSParser";
import { ClassTypeContext } from "./SPBSParser";
import { ClassType_lf_classOrInterfaceTypeContext } from "./SPBSParser";
import { ClassType_lfno_classOrInterfaceTypeContext } from "./SPBSParser";
import { InterfaceTypeContext } from "./SPBSParser";
import { InterfaceType_lf_classOrInterfaceTypeContext } from "./SPBSParser";
import { InterfaceType_lfno_classOrInterfaceTypeContext } from "./SPBSParser";
import { TypeVariableContext } from "./SPBSParser";
import { ArrayTypeContext } from "./SPBSParser";
import { DimsContext } from "./SPBSParser";
import { TypeParameterContext } from "./SPBSParser";
import { TypeParameterModifierContext } from "./SPBSParser";
import { TypeBoundContext } from "./SPBSParser";
import { AdditionalBoundContext } from "./SPBSParser";
import { TypeArgumentsContext } from "./SPBSParser";
import { TypeArgumentListContext } from "./SPBSParser";
import { TypeArgumentContext } from "./SPBSParser";
import { WildcardContext } from "./SPBSParser";
import { WildcardBoundsContext } from "./SPBSParser";
import { PackageNameContext } from "./SPBSParser";
import { TypeNameContext } from "./SPBSParser";
import { PackageOrTypeNameContext } from "./SPBSParser";
import { ExpressionNameContext } from "./SPBSParser";
import { MethodNameContext } from "./SPBSParser";
import { AmbiguousNameContext } from "./SPBSParser";
import { BsCompilationUnitContext } from "./SPBSParser";
import { PackageDeclarationContext } from "./SPBSParser";
import { PackageModifierContext } from "./SPBSParser";
import { ImportDeclarationContext } from "./SPBSParser";
import { SingleTypeImportDeclarationContext } from "./SPBSParser";
import { TypeImportOnDemandDeclarationContext } from "./SPBSParser";
import { SingleStaticImportDeclarationContext } from "./SPBSParser";
import { StaticImportOnDemandDeclarationContext } from "./SPBSParser";
import { TypeDeclarationContext } from "./SPBSParser";
import { ClassDeclarationContext } from "./SPBSParser";
import { NormalClassDeclarationContext } from "./SPBSParser";
import { ClassModifierContext } from "./SPBSParser";
import { TypeParametersContext } from "./SPBSParser";
import { TypeParameterListContext } from "./SPBSParser";
import { SuperclassContext } from "./SPBSParser";
import { SuperinterfacesContext } from "./SPBSParser";
import { InterfaceTypeListContext } from "./SPBSParser";
import { ClassBodyContext } from "./SPBSParser";
import { ClassBodyDeclarationContext } from "./SPBSParser";
import { ClassMemberDeclarationContext } from "./SPBSParser";
import { FieldDeclarationContext } from "./SPBSParser";
import { FieldModifierContext } from "./SPBSParser";
import { VariableDeclaratorListContext } from "./SPBSParser";
import { VariableDeclaratorContext } from "./SPBSParser";
import { VariableDeclaratorIdContext } from "./SPBSParser";
import { VariableInitializerContext } from "./SPBSParser";
import { UnannTypeContext } from "./SPBSParser";
import { UnannPrimitiveTypeContext } from "./SPBSParser";
import { UnannReferenceTypeContext } from "./SPBSParser";
import { UnannClassOrInterfaceTypeContext } from "./SPBSParser";
import { UnannClassTypeContext } from "./SPBSParser";
import { UnannClassType_lf_unannClassOrInterfaceTypeContext } from "./SPBSParser";
import { UnannClassType_lfno_unannClassOrInterfaceTypeContext } from "./SPBSParser";
import { UnannInterfaceTypeContext } from "./SPBSParser";
import { UnannInterfaceType_lf_unannClassOrInterfaceTypeContext } from "./SPBSParser";
import { UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext } from "./SPBSParser";
import { UnannTypeVariableContext } from "./SPBSParser";
import { UnannArrayTypeContext } from "./SPBSParser";
import { MethodDeclarationContext } from "./SPBSParser";
import { MethodModifierContext } from "./SPBSParser";
import { MethodHeaderContext } from "./SPBSParser";
import { ResultContext } from "./SPBSParser";
import { MethodDeclaratorContext } from "./SPBSParser";
import { FormalParameterListContext } from "./SPBSParser";
import { FormalParametersContext } from "./SPBSParser";
import { FormalParameterContext } from "./SPBSParser";
import { VariableModifierContext } from "./SPBSParser";
import { LastFormalParameterContext } from "./SPBSParser";
import { ReceiverParameterContext } from "./SPBSParser";
import { Throws_Context } from "./SPBSParser";
import { ExceptionTypeListContext } from "./SPBSParser";
import { ExceptionTypeContext } from "./SPBSParser";
import { MethodBodyContext } from "./SPBSParser";
import { InstanceInitializerContext } from "./SPBSParser";
import { StaticInitializerContext } from "./SPBSParser";
import { ConstructorDeclarationContext } from "./SPBSParser";
import { ConstructorModifierContext } from "./SPBSParser";
import { ConstructorDeclaratorContext } from "./SPBSParser";
import { SimpleTypeNameContext } from "./SPBSParser";
import { ConstructorBodyContext } from "./SPBSParser";
import { ExplicitConstructorInvocationContext } from "./SPBSParser";
import { EnumDeclarationContext } from "./SPBSParser";
import { EnumBodyContext } from "./SPBSParser";
import { EnumConstantListContext } from "./SPBSParser";
import { EnumConstantContext } from "./SPBSParser";
import { EnumConstantModifierContext } from "./SPBSParser";
import { EnumBodyDeclarationsContext } from "./SPBSParser";
import { InterfaceDeclarationContext } from "./SPBSParser";
import { NormalInterfaceDeclarationContext } from "./SPBSParser";
import { InterfaceModifierContext } from "./SPBSParser";
import { ExtendsInterfacesContext } from "./SPBSParser";
import { InterfaceBodyContext } from "./SPBSParser";
import { InterfaceMemberDeclarationContext } from "./SPBSParser";
import { ConstantDeclarationContext } from "./SPBSParser";
import { ConstantModifierContext } from "./SPBSParser";
import { InterfaceMethodDeclarationContext } from "./SPBSParser";
import { InterfaceMethodModifierContext } from "./SPBSParser";
import { AnnotationTypeDeclarationContext } from "./SPBSParser";
import { AnnotationTypeBodyContext } from "./SPBSParser";
import { AnnotationTypeMemberDeclarationContext } from "./SPBSParser";
import { AnnotationTypeElementDeclarationContext } from "./SPBSParser";
import { AnnotationTypeElementModifierContext } from "./SPBSParser";
import { DefaultValueContext } from "./SPBSParser";
import { AnnotationContext } from "./SPBSParser";
import { NormalAnnotationContext } from "./SPBSParser";
import { ElementValuePairListContext } from "./SPBSParser";
import { ElementValuePairContext } from "./SPBSParser";
import { ElementValueContext } from "./SPBSParser";
import { ElementValueArrayInitializerContext } from "./SPBSParser";
import { ElementValueListContext } from "./SPBSParser";
import { MarkerAnnotationContext } from "./SPBSParser";
import { SingleElementAnnotationContext } from "./SPBSParser";
import { ArrayInitializerContext } from "./SPBSParser";
import { VariableInitializerListContext } from "./SPBSParser";
import { BlockContext } from "./SPBSParser";
import { BlockStatementsContext } from "./SPBSParser";
import { BlockStatementContext } from "./SPBSParser";
import { LocalVariableDeclarationStatementContext } from "./SPBSParser";
import { LocalVariableDeclarationContext } from "./SPBSParser";
import { StatementContext } from "./SPBSParser";
import { StatementNoShortIfContext } from "./SPBSParser";
import { StatementWithoutTrailingSubstatementContext } from "./SPBSParser";
import { EmptyStatementContext } from "./SPBSParser";
import { LabeledStatementContext } from "./SPBSParser";
import { LabeledStatementNoShortIfContext } from "./SPBSParser";
import { ExpressionStatementContext } from "./SPBSParser";
import { StatementExpressionContext } from "./SPBSParser";
import { IfThenStatementContext } from "./SPBSParser";
import { IfThenElseStatementContext } from "./SPBSParser";
import { IfThenElseStatementNoShortIfContext } from "./SPBSParser";
import { AssertStatementContext } from "./SPBSParser";
import { SwitchStatementContext } from "./SPBSParser";
import { SwitchBlockContext } from "./SPBSParser";
import { SwitchBlockStatementGroupContext } from "./SPBSParser";
import { SwitchLabelsContext } from "./SPBSParser";
import { SwitchLabelContext } from "./SPBSParser";
import { EnumConstantNameContext } from "./SPBSParser";
import { WhileStatementContext } from "./SPBSParser";
import { WhileStatementNoShortIfContext } from "./SPBSParser";
import { DoStatementContext } from "./SPBSParser";
import { ForStatementContext } from "./SPBSParser";
import { ForStatementNoShortIfContext } from "./SPBSParser";
import { BasicForStatementContext } from "./SPBSParser";
import { BasicForStatementNoShortIfContext } from "./SPBSParser";
import { ForInitContext } from "./SPBSParser";
import { ForUpdateContext } from "./SPBSParser";
import { StatementExpressionListContext } from "./SPBSParser";
import { EnhancedForStatementContext } from "./SPBSParser";
import { EnhancedForStatementNoShortIfContext } from "./SPBSParser";
import { BreakStatementContext } from "./SPBSParser";
import { ContinueStatementContext } from "./SPBSParser";
import { ReturnStatementContext } from "./SPBSParser";
import { ThrowStatementContext } from "./SPBSParser";
import { SynchronizedStatementContext } from "./SPBSParser";
import { TryStatementContext } from "./SPBSParser";
import { CatchesContext } from "./SPBSParser";
import { CatchClauseContext } from "./SPBSParser";
import { CatchFormalParameterContext } from "./SPBSParser";
import { CatchTypeContext } from "./SPBSParser";
import { Finally_Context } from "./SPBSParser";
import { TryWithResourcesStatementContext } from "./SPBSParser";
import { ResourceSpecificationContext } from "./SPBSParser";
import { ResourceListContext } from "./SPBSParser";
import { ResourceContext } from "./SPBSParser";
import { PrimaryContext } from "./SPBSParser";
import { PrimaryNoNewArrayContext } from "./SPBSParser";
import { PrimaryNoNewArray_lf_arrayAccessContext } from "./SPBSParser";
import { PrimaryNoNewArray_lfno_arrayAccessContext } from "./SPBSParser";
import { PrimaryNoNewArray_lf_primaryContext } from "./SPBSParser";
import { PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext } from "./SPBSParser";
import { PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext } from "./SPBSParser";
import { PrimaryNoNewArray_lfno_primaryContext } from "./SPBSParser";
import { PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext } from "./SPBSParser";
import { PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext } from "./SPBSParser";
import { ClassInstanceCreationExpressionContext } from "./SPBSParser";
import { ClassInstanceCreationExpression_lf_primaryContext } from "./SPBSParser";
import { ClassInstanceCreationExpression_lfno_primaryContext } from "./SPBSParser";
import { TypeArgumentsOrDiamondContext } from "./SPBSParser";
import { FieldAccessContext } from "./SPBSParser";
import { FieldAccess_lf_primaryContext } from "./SPBSParser";
import { FieldAccess_lfno_primaryContext } from "./SPBSParser";
import { ArrayAccessContext } from "./SPBSParser";
import { ArrayAccess_lf_primaryContext } from "./SPBSParser";
import { ArrayAccess_lfno_primaryContext } from "./SPBSParser";
import { MethodInvocationContext } from "./SPBSParser";
import { MethodInvocation_lf_primaryContext } from "./SPBSParser";
import { MethodInvocation_lfno_primaryContext } from "./SPBSParser";
import { ArgumentListContext } from "./SPBSParser";
import { MethodReferenceContext } from "./SPBSParser";
import { MethodReference_lf_primaryContext } from "./SPBSParser";
import { MethodReference_lfno_primaryContext } from "./SPBSParser";
import { ArrayCreationExpressionContext } from "./SPBSParser";
import { DimExprsContext } from "./SPBSParser";
import { DimExprContext } from "./SPBSParser";
import { ConstantExpressionContext } from "./SPBSParser";
import { ExpressionContext } from "./SPBSParser";
import { LambdaExpressionContext } from "./SPBSParser";
import { LambdaParametersContext } from "./SPBSParser";
import { InferredFormalParameterListContext } from "./SPBSParser";
import { LambdaBodyContext } from "./SPBSParser";
import { AssignmentExpressionContext } from "./SPBSParser";
import { AssignmentContext } from "./SPBSParser";
import { LeftHandSideContext } from "./SPBSParser";
import { AssignmentOperatorContext } from "./SPBSParser";
import { ConditionalExpressionContext } from "./SPBSParser";
import { ConditionalOrExpressionContext } from "./SPBSParser";
import { ConditionalAndExpressionContext } from "./SPBSParser";
import { InclusiveOrExpressionContext } from "./SPBSParser";
import { ExclusiveOrExpressionContext } from "./SPBSParser";
import { AndExpressionContext } from "./SPBSParser";
import { EqualityExpressionContext } from "./SPBSParser";
import { RelationalExpressionContext } from "./SPBSParser";
import { ShiftExpressionContext } from "./SPBSParser";
import { AdditiveExpressionContext } from "./SPBSParser";
import { MultiplicativeExpressionContext } from "./SPBSParser";
import { UnaryExpressionContext } from "./SPBSParser";
import { PreIncrementExpressionContext } from "./SPBSParser";
import { PreDecrementExpressionContext } from "./SPBSParser";
import { UnaryExpressionNotPlusMinusContext } from "./SPBSParser";
import { PostfixExpressionContext } from "./SPBSParser";
import { PostIncrementExpressionContext } from "./SPBSParser";
import { PostIncrementExpression_lf_postfixExpressionContext } from "./SPBSParser";
import { PostDecrementExpressionContext } from "./SPBSParser";
import { PostDecrementExpression_lf_postfixExpressionContext } from "./SPBSParser";
import { CastExpressionContext } from "./SPBSParser";
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
	 * Visit a parse tree produced by `SPBSParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.numericType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericType?: (ctx: NumericTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.integralType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegralType?: (ctx: IntegralTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.floatingPointType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPointType?: (ctx: FloatingPointTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.referenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceType?: (ctx: ReferenceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType?: (ctx: ClassTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType_lf_classOrInterfaceType?: (ctx: ClassType_lf_classOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType_lfno_classOrInterfaceType?: (ctx: ClassType_lfno_classOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceType?: (ctx: InterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceType_lf_classOrInterfaceType?: (ctx: InterfaceType_lf_classOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceType_lfno_classOrInterfaceType?: (ctx: InterfaceType_lfno_classOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVariable?: (ctx: TypeVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.dims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDims?: (ctx: DimsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeParameterModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterModifier?: (ctx: TypeParameterModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.additionalBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalBound?: (ctx: AdditionalBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentList?: (ctx: TypeArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.wildcard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcard?: (ctx: WildcardContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.wildcardBounds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardBounds?: (ctx: WildcardBoundsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.packageName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageName?: (ctx: PackageNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.packageOrTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.expressionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionName?: (ctx: ExpressionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.ambiguousName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousName?: (ctx: AmbiguousNameContext) => Result;

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
	 * Visit a parse tree produced by `SPBSParser.packageModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageModifier?: (ctx: PackageModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.singleTypeImportDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTypeImportDeclaration?: (ctx: SingleTypeImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeImportOnDemandDeclaration?: (ctx: TypeImportOnDemandDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.singleStaticImportDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStaticImportDeclaration?: (ctx: SingleStaticImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.staticImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticImportOnDemandDeclaration?: (ctx: StaticImportOnDemandDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.normalClassDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassModifier?: (ctx: ClassModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterList?: (ctx: TypeParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.superclass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclass?: (ctx: SuperclassContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.superinterfaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperinterfaces?: (ctx: SuperinterfacesContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceTypeList?: (ctx: InterfaceTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.fieldModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldModifier?: (ctx: FieldModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.variableDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorList?: (ctx: VariableDeclaratorListContext) => Result;

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
	 * Visit a parse tree produced by `SPBSParser.unannType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannType?: (ctx: UnannTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannPrimitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannPrimitiveType?: (ctx: UnannPrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannReferenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannReferenceType?: (ctx: UnannReferenceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassOrInterfaceType?: (ctx: UnannClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannClassType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassType?: (ctx: UnannClassTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannClassType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassType_lf_unannClassOrInterfaceType?: (ctx: UnannClassType_lf_unannClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannClassType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassType_lfno_unannClassOrInterfaceType?: (ctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannInterfaceType?: (ctx: UnannInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannInterfaceType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannInterfaceType_lf_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannInterfaceType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannInterfaceType_lfno_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannTypeVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannTypeVariable?: (ctx: UnannTypeVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unannArrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannArrayType?: (ctx: UnannArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodModifier?: (ctx: MethodModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodHeader?: (ctx: MethodHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclarator?: (ctx: MethodDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastFormalParameter?: (ctx: LastFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.receiverParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiverParameter?: (ctx: ReceiverParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.throws_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrows_?: (ctx: Throws_Context) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.exceptionTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionTypeList?: (ctx: ExceptionTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.exceptionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionType?: (ctx: ExceptionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.instanceInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceInitializer?: (ctx: InstanceInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.staticInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticInitializer?: (ctx: StaticInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constructorModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorModifier?: (ctx: ConstructorModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constructorDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclarator?: (ctx: ConstructorDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.simpleTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTypeName?: (ctx: SimpleTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constructorBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumConstantList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantList?: (ctx: EnumConstantListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumConstantModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantModifier?: (ctx: EnumConstantModifierContext) => Result;

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
	 * Visit a parse tree produced by `SPBSParser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceModifier?: (ctx: InterfaceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.extendsInterfaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendsInterfaces?: (ctx: ExtendsInterfacesContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constantModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantModifier?: (ctx: ConstantModifierContext) => Result;

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
	 * Visit a parse tree produced by `SPBSParser.annotationTypeMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeMemberDeclaration?: (ctx: AnnotationTypeMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotationTypeElementModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementModifier?: (ctx: AnnotationTypeElementModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.normalAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalAnnotation?: (ctx: NormalAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.elementValuePairList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairList?: (ctx: ElementValuePairListContext) => Result;

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
	 * Visit a parse tree produced by `SPBSParser.elementValueList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueList?: (ctx: ElementValueListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.markerAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMarkerAnnotation?: (ctx: MarkerAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.singleElementAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleElementAnnotation?: (ctx: SingleElementAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.variableInitializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializerList?: (ctx: VariableInitializerListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.blockStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatements?: (ctx: BlockStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.statementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementNoShortIf?: (ctx: StatementNoShortIfContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.statementWithoutTrailingSubstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementWithoutTrailingSubstatement?: (ctx: StatementWithoutTrailingSubstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.labeledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.labeledStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatementNoShortIf?: (ctx: LabeledStatementNoShortIfContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.ifThenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenStatement?: (ctx: IfThenStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.ifThenElseStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStatementNoShortIf?: (ctx: IfThenElseStatementNoShortIfContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.switchBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlock?: (ctx: SwitchBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.switchLabels`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabels?: (ctx: SwitchLabelsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enumConstantName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.whileStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatementNoShortIf?: (ctx: WhileStatementNoShortIfContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.forStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatementNoShortIf?: (ctx: ForStatementNoShortIfContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.basicForStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicForStatement?: (ctx: BasicForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.basicForStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicForStatementNoShortIf?: (ctx: BasicForStatementNoShortIfContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.statementExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpressionList?: (ctx: StatementExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enhancedForStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForStatement?: (ctx: EnhancedForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.enhancedForStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForStatementNoShortIf?: (ctx: EnhancedForStatementNoShortIfContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.synchronizedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronizedStatement?: (ctx: SynchronizedStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.catches`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatches?: (ctx: CatchesContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.catchFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchFormalParameter?: (ctx: CatchFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.finally_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinally_?: (ctx: Finally_Context) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.tryWithResourcesStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryWithResourcesStatement?: (ctx: TryWithResourcesStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.resourceSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray?: (ctx: PrimaryNoNewArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray_lf_arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lf_arrayAccess?: (ctx: PrimaryNoNewArray_lf_arrayAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lfno_arrayAccess?: (ctx: PrimaryNoNewArray_lfno_arrayAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lf_primary?: (ctx: PrimaryNoNewArray_lf_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classInstanceCreationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassInstanceCreationExpression?: (ctx: ClassInstanceCreationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classInstanceCreationExpression_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassInstanceCreationExpression_lf_primary?: (ctx: ClassInstanceCreationExpression_lf_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.classInstanceCreationExpression_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassInstanceCreationExpression_lfno_primary?: (ctx: ClassInstanceCreationExpression_lfno_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.fieldAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAccess?: (ctx: FieldAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.fieldAccess_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAccess_lf_primary?: (ctx: FieldAccess_lf_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.fieldAccess_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAccess_lfno_primary?: (ctx: FieldAccess_lfno_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess?: (ctx: ArrayAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess_lf_primary?: (ctx: ArrayAccess_lf_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess_lfno_primary?: (ctx: ArrayAccess_lfno_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocation?: (ctx: MethodInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodInvocation_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocation_lf_primary?: (ctx: MethodInvocation_lf_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodInvocation_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocation_lfno_primary?: (ctx: MethodInvocation_lfno_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodReference?: (ctx: MethodReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodReference_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodReference_lf_primary?: (ctx: MethodReference_lf_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.methodReference_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodReference_lfno_primary?: (ctx: MethodReference_lfno_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.arrayCreationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.dimExprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimExprs?: (ctx: DimExprsContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.dimExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimExpr?: (ctx: DimExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

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
	 * Visit a parse tree produced by `SPBSParser.inferredFormalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInferredFormalParameterList?: (ctx: InferredFormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.leftHandSide`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftHandSide?: (ctx: LeftHandSideContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.preIncrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.preDecrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.unaryExpressionNotPlusMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.postIncrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.postIncrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression_lf_postfixExpression?: (ctx: PostIncrementExpression_lf_postfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.postDecrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.postDecrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecrementExpression_lf_postfixExpression?: (ctx: PostDecrementExpression_lf_postfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SPBSParser.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

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

