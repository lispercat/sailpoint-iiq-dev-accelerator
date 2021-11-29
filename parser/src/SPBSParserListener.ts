// Generated from beanshell_grammar/SPBSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SPBSParser`.
 */
export interface SPBSParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SPBSParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.numericType`.
	 * @param ctx the parse tree
	 */
	enterNumericType?: (ctx: NumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.numericType`.
	 * @param ctx the parse tree
	 */
	exitNumericType?: (ctx: NumericTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.integralType`.
	 * @param ctx the parse tree
	 */
	enterIntegralType?: (ctx: IntegralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.integralType`.
	 * @param ctx the parse tree
	 */
	exitIntegralType?: (ctx: IntegralTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	enterFloatingPointType?: (ctx: FloatingPointTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	exitFloatingPointType?: (ctx: FloatingPointTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.referenceType`.
	 * @param ctx the parse tree
	 */
	enterReferenceType?: (ctx: ReferenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.referenceType`.
	 * @param ctx the parse tree
	 */
	exitReferenceType?: (ctx: ReferenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classType`.
	 * @param ctx the parse tree
	 */
	enterClassType?: (ctx: ClassTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classType`.
	 * @param ctx the parse tree
	 */
	exitClassType?: (ctx: ClassTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassType_lf_classOrInterfaceType?: (ctx: ClassType_lf_classOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassType_lf_classOrInterfaceType?: (ctx: ClassType_lf_classOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassType_lfno_classOrInterfaceType?: (ctx: ClassType_lfno_classOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassType_lfno_classOrInterfaceType?: (ctx: ClassType_lfno_classOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceType`.
	 * @param ctx the parse tree
	 */
	enterInterfaceType?: (ctx: InterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceType`.
	 * @param ctx the parse tree
	 */
	exitInterfaceType?: (ctx: InterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterInterfaceType_lf_classOrInterfaceType?: (ctx: InterfaceType_lf_classOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitInterfaceType_lf_classOrInterfaceType?: (ctx: InterfaceType_lf_classOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterInterfaceType_lfno_classOrInterfaceType?: (ctx: InterfaceType_lfno_classOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitInterfaceType_lfno_classOrInterfaceType?: (ctx: InterfaceType_lfno_classOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeVariable`.
	 * @param ctx the parse tree
	 */
	enterTypeVariable?: (ctx: TypeVariableContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeVariable`.
	 * @param ctx the parse tree
	 */
	exitTypeVariable?: (ctx: TypeVariableContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.dims`.
	 * @param ctx the parse tree
	 */
	enterDims?: (ctx: DimsContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.dims`.
	 * @param ctx the parse tree
	 */
	exitDims?: (ctx: DimsContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeParameterModifier`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterModifier?: (ctx: TypeParameterModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeParameterModifier`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterModifier?: (ctx: TypeParameterModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.additionalBound`.
	 * @param ctx the parse tree
	 */
	enterAdditionalBound?: (ctx: AdditionalBoundContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.additionalBound`.
	 * @param ctx the parse tree
	 */
	exitAdditionalBound?: (ctx: AdditionalBoundContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentList?: (ctx: TypeArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.wildcard`.
	 * @param ctx the parse tree
	 */
	enterWildcard?: (ctx: WildcardContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.wildcard`.
	 * @param ctx the parse tree
	 */
	exitWildcard?: (ctx: WildcardContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.wildcardBounds`.
	 * @param ctx the parse tree
	 */
	enterWildcardBounds?: (ctx: WildcardBoundsContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.wildcardBounds`.
	 * @param ctx the parse tree
	 */
	exitWildcardBounds?: (ctx: WildcardBoundsContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.packageName`.
	 * @param ctx the parse tree
	 */
	enterPackageName?: (ctx: PackageNameContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.packageName`.
	 * @param ctx the parse tree
	 */
	exitPackageName?: (ctx: PackageNameContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.packageOrTypeName`.
	 * @param ctx the parse tree
	 */
	enterPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.packageOrTypeName`.
	 * @param ctx the parse tree
	 */
	exitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.expressionName`.
	 * @param ctx the parse tree
	 */
	enterExpressionName?: (ctx: ExpressionNameContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.expressionName`.
	 * @param ctx the parse tree
	 */
	exitExpressionName?: (ctx: ExpressionNameContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodName`.
	 * @param ctx the parse tree
	 */
	enterMethodName?: (ctx: MethodNameContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodName`.
	 * @param ctx the parse tree
	 */
	exitMethodName?: (ctx: MethodNameContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.ambiguousName`.
	 * @param ctx the parse tree
	 */
	enterAmbiguousName?: (ctx: AmbiguousNameContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.ambiguousName`.
	 * @param ctx the parse tree
	 */
	exitAmbiguousName?: (ctx: AmbiguousNameContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.bsCompilationUnit`.
	 * @param ctx the parse tree
	 */
	enterBsCompilationUnit?: (ctx: BsCompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.bsCompilationUnit`.
	 * @param ctx the parse tree
	 */
	exitBsCompilationUnit?: (ctx: BsCompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.packageModifier`.
	 * @param ctx the parse tree
	 */
	enterPackageModifier?: (ctx: PackageModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.packageModifier`.
	 * @param ctx the parse tree
	 */
	exitPackageModifier?: (ctx: PackageModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.singleTypeImportDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSingleTypeImportDeclaration?: (ctx: SingleTypeImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.singleTypeImportDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSingleTypeImportDeclaration?: (ctx: SingleTypeImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeImportOnDemandDeclaration?: (ctx: TypeImportOnDemandDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeImportOnDemandDeclaration?: (ctx: TypeImportOnDemandDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.singleStaticImportDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSingleStaticImportDeclaration?: (ctx: SingleStaticImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.singleStaticImportDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSingleStaticImportDeclaration?: (ctx: SingleStaticImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.staticImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticImportOnDemandDeclaration?: (ctx: StaticImportOnDemandDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.staticImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticImportOnDemandDeclaration?: (ctx: StaticImportOnDemandDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.normalClassDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.normalClassDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classModifier`.
	 * @param ctx the parse tree
	 */
	enterClassModifier?: (ctx: ClassModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classModifier`.
	 * @param ctx the parse tree
	 */
	exitClassModifier?: (ctx: ClassModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterList?: (ctx: TypeParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterList?: (ctx: TypeParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.superclass`.
	 * @param ctx the parse tree
	 */
	enterSuperclass?: (ctx: SuperclassContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.superclass`.
	 * @param ctx the parse tree
	 */
	exitSuperclass?: (ctx: SuperclassContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.superinterfaces`.
	 * @param ctx the parse tree
	 */
	enterSuperinterfaces?: (ctx: SuperinterfacesContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.superinterfaces`.
	 * @param ctx the parse tree
	 */
	exitSuperinterfaces?: (ctx: SuperinterfacesContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceTypeList`.
	 * @param ctx the parse tree
	 */
	enterInterfaceTypeList?: (ctx: InterfaceTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceTypeList`.
	 * @param ctx the parse tree
	 */
	exitInterfaceTypeList?: (ctx: InterfaceTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.fieldModifier`.
	 * @param ctx the parse tree
	 */
	enterFieldModifier?: (ctx: FieldModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.fieldModifier`.
	 * @param ctx the parse tree
	 */
	exitFieldModifier?: (ctx: FieldModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.variableDeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorList?: (ctx: VariableDeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.variableDeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorList?: (ctx: VariableDeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannType`.
	 * @param ctx the parse tree
	 */
	enterUnannType?: (ctx: UnannTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannType`.
	 * @param ctx the parse tree
	 */
	exitUnannType?: (ctx: UnannTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannPrimitiveType`.
	 * @param ctx the parse tree
	 */
	enterUnannPrimitiveType?: (ctx: UnannPrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannPrimitiveType`.
	 * @param ctx the parse tree
	 */
	exitUnannPrimitiveType?: (ctx: UnannPrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannReferenceType`.
	 * @param ctx the parse tree
	 */
	enterUnannReferenceType?: (ctx: UnannReferenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannReferenceType`.
	 * @param ctx the parse tree
	 */
	exitUnannReferenceType?: (ctx: UnannReferenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannClassOrInterfaceType?: (ctx: UnannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannClassOrInterfaceType?: (ctx: UnannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannClassType`.
	 * @param ctx the parse tree
	 */
	enterUnannClassType?: (ctx: UnannClassTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannClassType`.
	 * @param ctx the parse tree
	 */
	exitUnannClassType?: (ctx: UnannClassTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannClassType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannClassType_lf_unannClassOrInterfaceType?: (ctx: UnannClassType_lf_unannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannClassType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannClassType_lf_unannClassOrInterfaceType?: (ctx: UnannClassType_lf_unannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannClassType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannClassType_lfno_unannClassOrInterfaceType?: (ctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannClassType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannClassType_lfno_unannClassOrInterfaceType?: (ctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannInterfaceType?: (ctx: UnannInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannInterfaceType?: (ctx: UnannInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannInterfaceType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannInterfaceType_lf_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannInterfaceType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannInterfaceType_lf_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannInterfaceType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterUnannInterfaceType_lfno_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannInterfaceType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitUnannInterfaceType_lfno_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannTypeVariable`.
	 * @param ctx the parse tree
	 */
	enterUnannTypeVariable?: (ctx: UnannTypeVariableContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannTypeVariable`.
	 * @param ctx the parse tree
	 */
	exitUnannTypeVariable?: (ctx: UnannTypeVariableContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unannArrayType`.
	 * @param ctx the parse tree
	 */
	enterUnannArrayType?: (ctx: UnannArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unannArrayType`.
	 * @param ctx the parse tree
	 */
	exitUnannArrayType?: (ctx: UnannArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodModifier`.
	 * @param ctx the parse tree
	 */
	enterMethodModifier?: (ctx: MethodModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodModifier`.
	 * @param ctx the parse tree
	 */
	exitMethodModifier?: (ctx: MethodModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodHeader`.
	 * @param ctx the parse tree
	 */
	enterMethodHeader?: (ctx: MethodHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodHeader`.
	 * @param ctx the parse tree
	 */
	exitMethodHeader?: (ctx: MethodHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.result`.
	 * @param ctx the parse tree
	 */
	enterResult?: (ctx: ResultContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.result`.
	 * @param ctx the parse tree
	 */
	exitResult?: (ctx: ResultContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodDeclarator`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclarator?: (ctx: MethodDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodDeclarator`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclarator?: (ctx: MethodDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterLastFormalParameter?: (ctx: LastFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitLastFormalParameter?: (ctx: LastFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.receiverParameter`.
	 * @param ctx the parse tree
	 */
	enterReceiverParameter?: (ctx: ReceiverParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.receiverParameter`.
	 * @param ctx the parse tree
	 */
	exitReceiverParameter?: (ctx: ReceiverParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.throws_`.
	 * @param ctx the parse tree
	 */
	enterThrows_?: (ctx: Throws_Context) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.throws_`.
	 * @param ctx the parse tree
	 */
	exitThrows_?: (ctx: Throws_Context) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.exceptionTypeList`.
	 * @param ctx the parse tree
	 */
	enterExceptionTypeList?: (ctx: ExceptionTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.exceptionTypeList`.
	 * @param ctx the parse tree
	 */
	exitExceptionTypeList?: (ctx: ExceptionTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.exceptionType`.
	 * @param ctx the parse tree
	 */
	enterExceptionType?: (ctx: ExceptionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.exceptionType`.
	 * @param ctx the parse tree
	 */
	exitExceptionType?: (ctx: ExceptionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.instanceInitializer`.
	 * @param ctx the parse tree
	 */
	enterInstanceInitializer?: (ctx: InstanceInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.instanceInitializer`.
	 * @param ctx the parse tree
	 */
	exitInstanceInitializer?: (ctx: InstanceInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.staticInitializer`.
	 * @param ctx the parse tree
	 */
	enterStaticInitializer?: (ctx: StaticInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.staticInitializer`.
	 * @param ctx the parse tree
	 */
	exitStaticInitializer?: (ctx: StaticInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.constructorModifier`.
	 * @param ctx the parse tree
	 */
	enterConstructorModifier?: (ctx: ConstructorModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.constructorModifier`.
	 * @param ctx the parse tree
	 */
	exitConstructorModifier?: (ctx: ConstructorModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.constructorDeclarator`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclarator?: (ctx: ConstructorDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.constructorDeclarator`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclarator?: (ctx: ConstructorDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.simpleTypeName`.
	 * @param ctx the parse tree
	 */
	enterSimpleTypeName?: (ctx: SimpleTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.simpleTypeName`.
	 * @param ctx the parse tree
	 */
	exitSimpleTypeName?: (ctx: SimpleTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.constructorBody`.
	 * @param ctx the parse tree
	 */
	enterConstructorBody?: (ctx: ConstructorBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.constructorBody`.
	 * @param ctx the parse tree
	 */
	exitConstructorBody?: (ctx: ConstructorBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 */
	enterExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 */
	exitExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enumConstantList`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantList?: (ctx: EnumConstantListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enumConstantList`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantList?: (ctx: EnumConstantListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enumConstantModifier`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantModifier?: (ctx: EnumConstantModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enumConstantModifier`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantModifier?: (ctx: EnumConstantModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	enterEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	exitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterInterfaceModifier?: (ctx: InterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitInterfaceModifier?: (ctx: InterfaceModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.extendsInterfaces`.
	 * @param ctx the parse tree
	 */
	enterExtendsInterfaces?: (ctx: ExtendsInterfacesContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.extendsInterfaces`.
	 * @param ctx the parse tree
	 */
	exitExtendsInterfaces?: (ctx: ExtendsInterfacesContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.constantModifier`.
	 * @param ctx the parse tree
	 */
	enterConstantModifier?: (ctx: ConstantModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.constantModifier`.
	 * @param ctx the parse tree
	 */
	exitConstantModifier?: (ctx: ConstantModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.annotationTypeMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeMemberDeclaration?: (ctx: AnnotationTypeMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.annotationTypeMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeMemberDeclaration?: (ctx: AnnotationTypeMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.annotationTypeElementModifier`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementModifier?: (ctx: AnnotationTypeElementModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.annotationTypeElementModifier`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementModifier?: (ctx: AnnotationTypeElementModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.normalAnnotation`.
	 * @param ctx the parse tree
	 */
	enterNormalAnnotation?: (ctx: NormalAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.normalAnnotation`.
	 * @param ctx the parse tree
	 */
	exitNormalAnnotation?: (ctx: NormalAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.elementValuePairList`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairList?: (ctx: ElementValuePairListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.elementValuePairList`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairList?: (ctx: ElementValuePairListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.elementValueList`.
	 * @param ctx the parse tree
	 */
	enterElementValueList?: (ctx: ElementValueListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.elementValueList`.
	 * @param ctx the parse tree
	 */
	exitElementValueList?: (ctx: ElementValueListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.markerAnnotation`.
	 * @param ctx the parse tree
	 */
	enterMarkerAnnotation?: (ctx: MarkerAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.markerAnnotation`.
	 * @param ctx the parse tree
	 */
	exitMarkerAnnotation?: (ctx: MarkerAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.singleElementAnnotation`.
	 * @param ctx the parse tree
	 */
	enterSingleElementAnnotation?: (ctx: SingleElementAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.singleElementAnnotation`.
	 * @param ctx the parse tree
	 */
	exitSingleElementAnnotation?: (ctx: SingleElementAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.variableInitializerList`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializerList?: (ctx: VariableInitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.variableInitializerList`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializerList?: (ctx: VariableInitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.blockStatements`.
	 * @param ctx the parse tree
	 */
	enterBlockStatements?: (ctx: BlockStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.blockStatements`.
	 * @param ctx the parse tree
	 */
	exitBlockStatements?: (ctx: BlockStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.statementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterStatementNoShortIf?: (ctx: StatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.statementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitStatementNoShortIf?: (ctx: StatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.statementWithoutTrailingSubstatement`.
	 * @param ctx the parse tree
	 */
	enterStatementWithoutTrailingSubstatement?: (ctx: StatementWithoutTrailingSubstatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.statementWithoutTrailingSubstatement`.
	 * @param ctx the parse tree
	 */
	exitStatementWithoutTrailingSubstatement?: (ctx: StatementWithoutTrailingSubstatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	enterLabeledStatement?: (ctx: LabeledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	exitLabeledStatement?: (ctx: LabeledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.labeledStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterLabeledStatementNoShortIf?: (ctx: LabeledStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.labeledStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitLabeledStatementNoShortIf?: (ctx: LabeledStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpression?: (ctx: StatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.ifThenStatement`.
	 * @param ctx the parse tree
	 */
	enterIfThenStatement?: (ctx: IfThenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.ifThenStatement`.
	 * @param ctx the parse tree
	 */
	exitIfThenStatement?: (ctx: IfThenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 */
	enterIfThenElseStatement?: (ctx: IfThenElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 */
	exitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.ifThenElseStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterIfThenElseStatementNoShortIf?: (ctx: IfThenElseStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.ifThenElseStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitIfThenElseStatementNoShortIf?: (ctx: IfThenElseStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	enterAssertStatement?: (ctx: AssertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	exitAssertStatement?: (ctx: AssertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.switchBlock`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlock?: (ctx: SwitchBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.switchBlock`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlock?: (ctx: SwitchBlockContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.switchLabels`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabels?: (ctx: SwitchLabelsContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.switchLabels`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabels?: (ctx: SwitchLabelsContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantName?: (ctx: EnumConstantNameContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantName?: (ctx: EnumConstantNameContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.whileStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterWhileStatementNoShortIf?: (ctx: WhileStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.whileStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitWhileStatementNoShortIf?: (ctx: WhileStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.forStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterForStatementNoShortIf?: (ctx: ForStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.forStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitForStatementNoShortIf?: (ctx: ForStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.basicForStatement`.
	 * @param ctx the parse tree
	 */
	enterBasicForStatement?: (ctx: BasicForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.basicForStatement`.
	 * @param ctx the parse tree
	 */
	exitBasicForStatement?: (ctx: BasicForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.basicForStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterBasicForStatementNoShortIf?: (ctx: BasicForStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.basicForStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitBasicForStatementNoShortIf?: (ctx: BasicForStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.statementExpressionList`.
	 * @param ctx the parse tree
	 */
	enterStatementExpressionList?: (ctx: StatementExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.statementExpressionList`.
	 * @param ctx the parse tree
	 */
	exitStatementExpressionList?: (ctx: StatementExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enhancedForStatement`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForStatement?: (ctx: EnhancedForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enhancedForStatement`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForStatement?: (ctx: EnhancedForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.enhancedForStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForStatementNoShortIf?: (ctx: EnhancedForStatementNoShortIfContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.enhancedForStatementNoShortIf`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForStatementNoShortIf?: (ctx: EnhancedForStatementNoShortIfContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.synchronizedStatement`.
	 * @param ctx the parse tree
	 */
	enterSynchronizedStatement?: (ctx: SynchronizedStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.synchronizedStatement`.
	 * @param ctx the parse tree
	 */
	exitSynchronizedStatement?: (ctx: SynchronizedStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.catches`.
	 * @param ctx the parse tree
	 */
	enterCatches?: (ctx: CatchesContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.catches`.
	 * @param ctx the parse tree
	 */
	exitCatches?: (ctx: CatchesContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.catchFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterCatchFormalParameter?: (ctx: CatchFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.catchFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitCatchFormalParameter?: (ctx: CatchFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.finally_`.
	 * @param ctx the parse tree
	 */
	enterFinally_?: (ctx: Finally_Context) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.finally_`.
	 * @param ctx the parse tree
	 */
	exitFinally_?: (ctx: Finally_Context) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.tryWithResourcesStatement`.
	 * @param ctx the parse tree
	 */
	enterTryWithResourcesStatement?: (ctx: TryWithResourcesStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.tryWithResourcesStatement`.
	 * @param ctx the parse tree
	 */
	exitTryWithResourcesStatement?: (ctx: TryWithResourcesStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	enterResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	exitResourceSpecification?: (ctx: ResourceSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.resourceList`.
	 * @param ctx the parse tree
	 */
	enterResourceList?: (ctx: ResourceListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.resourceList`.
	 * @param ctx the parse tree
	 */
	exitResourceList?: (ctx: ResourceListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray?: (ctx: PrimaryNoNewArrayContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray?: (ctx: PrimaryNoNewArrayContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray_lf_arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lf_arrayAccess?: (ctx: PrimaryNoNewArray_lf_arrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray_lf_arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lf_arrayAccess?: (ctx: PrimaryNoNewArray_lf_arrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lfno_arrayAccess?: (ctx: PrimaryNoNewArray_lfno_arrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lfno_arrayAccess?: (ctx: PrimaryNoNewArray_lfno_arrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lf_primary?: (ctx: PrimaryNoNewArray_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lf_primary?: (ctx: PrimaryNoNewArray_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classInstanceCreationExpression`.
	 * @param ctx the parse tree
	 */
	enterClassInstanceCreationExpression?: (ctx: ClassInstanceCreationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classInstanceCreationExpression`.
	 * @param ctx the parse tree
	 */
	exitClassInstanceCreationExpression?: (ctx: ClassInstanceCreationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classInstanceCreationExpression_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterClassInstanceCreationExpression_lf_primary?: (ctx: ClassInstanceCreationExpression_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classInstanceCreationExpression_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitClassInstanceCreationExpression_lf_primary?: (ctx: ClassInstanceCreationExpression_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.classInstanceCreationExpression_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterClassInstanceCreationExpression_lfno_primary?: (ctx: ClassInstanceCreationExpression_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.classInstanceCreationExpression_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitClassInstanceCreationExpression_lfno_primary?: (ctx: ClassInstanceCreationExpression_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.fieldAccess`.
	 * @param ctx the parse tree
	 */
	enterFieldAccess?: (ctx: FieldAccessContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.fieldAccess`.
	 * @param ctx the parse tree
	 */
	exitFieldAccess?: (ctx: FieldAccessContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.fieldAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterFieldAccess_lf_primary?: (ctx: FieldAccess_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.fieldAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitFieldAccess_lf_primary?: (ctx: FieldAccess_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.fieldAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterFieldAccess_lfno_primary?: (ctx: FieldAccess_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.fieldAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitFieldAccess_lfno_primary?: (ctx: FieldAccess_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess?: (ctx: ArrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess?: (ctx: ArrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess_lf_primary?: (ctx: ArrayAccess_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess_lf_primary?: (ctx: ArrayAccess_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess_lfno_primary?: (ctx: ArrayAccess_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess_lfno_primary?: (ctx: ArrayAccess_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodInvocation`.
	 * @param ctx the parse tree
	 */
	enterMethodInvocation?: (ctx: MethodInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodInvocation`.
	 * @param ctx the parse tree
	 */
	exitMethodInvocation?: (ctx: MethodInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodInvocation_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterMethodInvocation_lf_primary?: (ctx: MethodInvocation_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodInvocation_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitMethodInvocation_lf_primary?: (ctx: MethodInvocation_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodInvocation_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterMethodInvocation_lfno_primary?: (ctx: MethodInvocation_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodInvocation_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitMethodInvocation_lfno_primary?: (ctx: MethodInvocation_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodReference`.
	 * @param ctx the parse tree
	 */
	enterMethodReference?: (ctx: MethodReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodReference`.
	 * @param ctx the parse tree
	 */
	exitMethodReference?: (ctx: MethodReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodReference_lf_primary`.
	 * @param ctx the parse tree
	 */
	enterMethodReference_lf_primary?: (ctx: MethodReference_lf_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodReference_lf_primary`.
	 * @param ctx the parse tree
	 */
	exitMethodReference_lf_primary?: (ctx: MethodReference_lf_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.methodReference_lfno_primary`.
	 * @param ctx the parse tree
	 */
	enterMethodReference_lfno_primary?: (ctx: MethodReference_lfno_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.methodReference_lfno_primary`.
	 * @param ctx the parse tree
	 */
	exitMethodReference_lfno_primary?: (ctx: MethodReference_lfno_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.arrayCreationExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.arrayCreationExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.dimExprs`.
	 * @param ctx the parse tree
	 */
	enterDimExprs?: (ctx: DimExprsContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.dimExprs`.
	 * @param ctx the parse tree
	 */
	exitDimExprs?: (ctx: DimExprsContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.dimExpr`.
	 * @param ctx the parse tree
	 */
	enterDimExpr?: (ctx: DimExprContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.dimExpr`.
	 * @param ctx the parse tree
	 */
	exitDimExpr?: (ctx: DimExprContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameters?: (ctx: LambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameters?: (ctx: LambdaParametersContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.inferredFormalParameterList`.
	 * @param ctx the parse tree
	 */
	enterInferredFormalParameterList?: (ctx: InferredFormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.inferredFormalParameterList`.
	 * @param ctx the parse tree
	 */
	exitInferredFormalParameterList?: (ctx: InferredFormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	enterLambdaBody?: (ctx: LambdaBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	exitLambdaBody?: (ctx: LambdaBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.leftHandSide`.
	 * @param ctx the parse tree
	 */
	enterLeftHandSide?: (ctx: LeftHandSideContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.leftHandSide`.
	 * @param ctx the parse tree
	 */
	exitLeftHandSide?: (ctx: LeftHandSideContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.preIncrementExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.preIncrementExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.preDecrementExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.preDecrementExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.unaryExpressionNotPlusMinus`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.unaryExpressionNotPlusMinus`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.postIncrementExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.postIncrementExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.postIncrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression_lf_postfixExpression?: (ctx: PostIncrementExpression_lf_postfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.postIncrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression_lf_postfixExpression?: (ctx: PostIncrementExpression_lf_postfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.postDecrementExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.postDecrementExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.postDecrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecrementExpression_lf_postfixExpression?: (ctx: PostDecrementExpression_lf_postfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.postDecrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecrementExpression_lf_postfixExpression?: (ctx: PostDecrementExpression_lf_postfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.xml_document`.
	 * @param ctx the parse tree
	 */
	enterXml_document?: (ctx: Xml_documentContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.xml_document`.
	 * @param ctx the parse tree
	 */
	exitXml_document?: (ctx: Xml_documentContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.xml_prolog`.
	 * @param ctx the parse tree
	 */
	enterXml_prolog?: (ctx: Xml_prologContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.xml_prolog`.
	 * @param ctx the parse tree
	 */
	exitXml_prolog?: (ctx: Xml_prologContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.xml_content`.
	 * @param ctx the parse tree
	 */
	enterXml_content?: (ctx: Xml_contentContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.xml_content`.
	 * @param ctx the parse tree
	 */
	exitXml_content?: (ctx: Xml_contentContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.xml_element`.
	 * @param ctx the parse tree
	 */
	enterXml_element?: (ctx: Xml_elementContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.xml_element`.
	 * @param ctx the parse tree
	 */
	exitXml_element?: (ctx: Xml_elementContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.xml_reference`.
	 * @param ctx the parse tree
	 */
	enterXml_reference?: (ctx: Xml_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.xml_reference`.
	 * @param ctx the parse tree
	 */
	exitXml_reference?: (ctx: Xml_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.xml_attribute`.
	 * @param ctx the parse tree
	 */
	enterXml_attribute?: (ctx: Xml_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.xml_attribute`.
	 * @param ctx the parse tree
	 */
	exitXml_attribute?: (ctx: Xml_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.xml_chardata`.
	 * @param ctx the parse tree
	 */
	enterXml_chardata?: (ctx: Xml_chardataContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.xml_chardata`.
	 * @param ctx the parse tree
	 */
	exitXml_chardata?: (ctx: Xml_chardataContext) => void;

	/**
	 * Enter a parse tree produced by `SPBSParser.xml_misc`.
	 * @param ctx the parse tree
	 */
	enterXml_misc?: (ctx: Xml_miscContext) => void;
	/**
	 * Exit a parse tree produced by `SPBSParser.xml_misc`.
	 * @param ctx the parse tree
	 */
	exitXml_misc?: (ctx: Xml_miscContext) => void;
}

