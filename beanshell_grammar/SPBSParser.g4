/*
 [The "BSD licence"]
 Copyright (c) 2013 Terence Parr
 All rights reserved.
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
    derived from this software without specific prior written permission.
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
parser grammar SPBSParser;
options { tokenVocab=SPBSLexer; }

//Java parser declarations
literal
  :	IntegerLiteral
  |	FloatingPointLiteral
  |	BooleanLiteral
  |	CharacterLiteral
  |	StringLiteral
  |	NullLiteral
  ;

/*
 * Productions from §4 (Types, Values, and Variables)
 */

primitiveType
  :	annotation* numericType
  |	annotation* 'boolean'
  ;

numericType
  :	integralType
  |	floatingPointType
  ;

integralType
  :	'byte'
  |	'short'
  |	'int'
  |	'long'
  |	'char'
  ;

floatingPointType
  :	'float'
  |	'double'
  ;

referenceType
  :	classOrInterfaceType
  |	typeVariable
  |	arrayType
  ;

classOrInterfaceType
  :	(	classType_lfno_classOrInterfaceType
    |	interfaceType_lfno_classOrInterfaceType
    )
    (	classType_lf_classOrInterfaceType
    |	interfaceType_lf_classOrInterfaceType
    )*
  ;

classType
  :	annotation* Identifier typeArguments?
  |	classOrInterfaceType '.' annotation* Identifier typeArguments?
  ;

classType_lf_classOrInterfaceType
  :	'.' annotation* Identifier typeArguments?
  ;

classType_lfno_classOrInterfaceType
  :	annotation* Identifier typeArguments?
  ;

interfaceType
  :	classType
  ;

interfaceType_lf_classOrInterfaceType
  :	classType_lf_classOrInterfaceType
  ;

interfaceType_lfno_classOrInterfaceType
  :	classType_lfno_classOrInterfaceType
  ;

typeVariable
  :	annotation* Identifier
  ;

arrayType
  :	primitiveType dims
  |	classOrInterfaceType dims
  |	typeVariable dims
  ;

dims
  :	annotation* '[' ']' (annotation* '[' ']')*
  ;

typeParameter
  :	typeParameterModifier* Identifier typeBound?
  ;

typeParameterModifier
  :	annotation
  ;

typeBound
  :	'extends' typeVariable
  |	'extends' classOrInterfaceType additionalBound*
  ;

additionalBound
  :	'&' interfaceType
  ;

typeArguments
  :	LT typeArgumentList GT
  ;

typeArgumentList
  :	typeArgument (',' typeArgument)*
  ;

typeArgument
  :	referenceType
  |	wildcard
  ;

wildcard
  :	annotation* '?' wildcardBounds?
  ;

wildcardBounds
  :	'extends' referenceType
  |	'super' referenceType
  ;

/*
 * Productions from §6 (Names)
 */

packageName
  :	Identifier
  |	packageName '.' Identifier
  ;

typeName
  :	Identifier
  |	packageOrTypeName '.' Identifier
  ;

packageOrTypeName
  :	Identifier
  |	packageOrTypeName '.' Identifier
  ;

expressionName
  :	Identifier
  |	ambiguousName '.' Identifier
  ;

methodName
  :	Identifier
  ;

ambiguousName
  :	Identifier
  |	ambiguousName '.' Identifier
  ;

/*
 * Productions from §7 (Packages)
 */

bsCompilationUnit
  :	importDeclaration* blockStatement*  EOF
  ;

packageDeclaration
  :	packageModifier* 'package' packageName ';'
  ;

packageModifier
  :	annotation
  ;

importDeclaration
  :	singleTypeImportDeclaration
  |	typeImportOnDemandDeclaration
  |	singleStaticImportDeclaration
  |	staticImportOnDemandDeclaration
  ;

singleTypeImportDeclaration
  :	'import' typeName ';'
  ;

typeImportOnDemandDeclaration
  :	'import' packageOrTypeName '.' '*' ';'
  ;

singleStaticImportDeclaration
  :	'import' 'static' typeName '.' Identifier ';'
  ;

staticImportOnDemandDeclaration
  :	'import' 'static' typeName '.' '*' ';'
  ;

typeDeclaration
  :	classDeclaration
  |	interfaceDeclaration
  |	';'
  ;

/*
 * Productions from §8 (Classes)
 */

classDeclaration
  :	normalClassDeclaration
  |	enumDeclaration
  ;

normalClassDeclaration
  :	classModifier* 'class' Identifier typeParameters? superclass? superinterfaces? classBody
  ;

classModifier
  :	annotation
  |	'public'
  |	'protected'
  |	'private'
  |	'abstract'
  |	'static'
  |	'final'
  |	'strictfp'
  ;

typeParameters
  :	LT typeParameterList GT
  ;

typeParameterList
  :	typeParameter (',' typeParameter)*
  ;

superclass
  :	'extends' classType
  ;

superinterfaces
  :	'implements' interfaceTypeList
  ;

interfaceTypeList
  :	interfaceType (',' interfaceType)*
  ;

classBody
  :	'{' classBodyDeclaration* '}'
  ;

classBodyDeclaration
  :	classMemberDeclaration
  |	instanceInitializer
  |	staticInitializer
  |	constructorDeclaration
  ;

classMemberDeclaration
  :	fieldDeclaration
  |	methodDeclaration
  |	classDeclaration
  |	interfaceDeclaration
  |	';'
  ;

fieldDeclaration
  :	fieldModifier* unannType variableDeclaratorList ';'
  ;

fieldModifier
  :	annotation
  |	'public'
  |	'protected'
  |	'private'
  |	'static'
  |	'final'
  |	'transient'
  |	'volatile'
  ;

variableDeclaratorList
  :	variableDeclarator (',' variableDeclarator)*
  ;

variableDeclarator
  :	variableDeclaratorId (ASSIGN variableInitializer)?
  ;

variableDeclaratorId
  :	Identifier dims?
  ;

variableInitializer
  :	expression
  |	arrayInitializer
  ;

unannType
  :	unannPrimitiveType
  |	unannReferenceType
  ;

unannPrimitiveType
  :	numericType
  |	'boolean'
  ;

unannReferenceType
  :	unannClassOrInterfaceType
  |	unannTypeVariable
  |	unannArrayType
  ;

unannClassOrInterfaceType
  :	(	unannClassType_lfno_unannClassOrInterfaceType
    |	unannInterfaceType_lfno_unannClassOrInterfaceType
    )
    (	unannClassType_lf_unannClassOrInterfaceType
    |	unannInterfaceType_lf_unannClassOrInterfaceType
    )*
  ;

unannClassType
  :	Identifier typeArguments?
  |	unannClassOrInterfaceType '.' annotation* Identifier typeArguments?
  ;

unannClassType_lf_unannClassOrInterfaceType
  :	'.' annotation* Identifier typeArguments?
  ;

unannClassType_lfno_unannClassOrInterfaceType
  :	Identifier typeArguments?
  ;

unannInterfaceType
  :	unannClassType
  ;

unannInterfaceType_lf_unannClassOrInterfaceType
  :	unannClassType_lf_unannClassOrInterfaceType
  ;

unannInterfaceType_lfno_unannClassOrInterfaceType
  :	unannClassType_lfno_unannClassOrInterfaceType
  ;

unannTypeVariable
  :	Identifier
  ;

unannArrayType
  :	unannPrimitiveType dims
  |	unannClassOrInterfaceType dims
  |	unannTypeVariable dims
  ;

methodDeclaration
  :	methodModifier* methodHeader methodBody
  ;

methodModifier
  :	annotation
  |	'public'
  |	'protected'
  |	'private'
  |	'abstract'
  |	'static'
  |	'final'
  |	'synchronized'
  |	'native'
  |	'strictfp'
  ;

methodHeader
  :	result methodDeclarator throws_?
  |	typeParameters annotation* result methodDeclarator throws_?
  ;

result
  :	unannType
  |	'void'
  ;

methodDeclarator
  :	Identifier '(' formalParameterList? ')' dims?
  ;

formalParameterList
  :	receiverParameter
  |	formalParameters ',' lastFormalParameter
  |	lastFormalParameter
  ;

formalParameters
  :	formalParameter (',' formalParameter)*
  |	receiverParameter (',' formalParameter)*
  ;

formalParameter
  :	variableModifier* unannType variableDeclaratorId
  ;

variableModifier
  :	annotation
  |	'final'
  ;

lastFormalParameter
  :	variableModifier* unannType annotation* '...' variableDeclaratorId
  |	formalParameter
  ;

receiverParameter
  :	annotation* unannType (Identifier '.')? 'this'
  ;

throws_
  :	'throws' exceptionTypeList
  ;

exceptionTypeList
  :	exceptionType (',' exceptionType)*
  ;

exceptionType
  :	classType
  |	typeVariable
  ;

methodBody
  :	block
  |	';'
  ;

instanceInitializer
  :	block
  ;

staticInitializer
  :	'static' block
  ;

constructorDeclaration
  :	constructorModifier* constructorDeclarator throws_? constructorBody
  ;

constructorModifier
  :	annotation
  |	'public'
  |	'protected'
  |	'private'
  ;

constructorDeclarator
  :	typeParameters? simpleTypeName '(' formalParameterList? ')'
  ;

simpleTypeName
  :	Identifier
  ;

constructorBody
  :	'{' explicitConstructorInvocation? blockStatements? '}'
  ;

explicitConstructorInvocation
  :	typeArguments? 'this' '(' argumentList? ')' ';'
  |	typeArguments? 'super' '(' argumentList? ')' ';'
  |	expressionName '.' typeArguments? 'super' '(' argumentList? ')' ';'
  |	primary '.' typeArguments? 'super' '(' argumentList? ')' ';'
  ;

enumDeclaration
  :	classModifier* 'enum' Identifier superinterfaces? enumBody
  ;

enumBody
  :	'{' enumConstantList? ','? enumBodyDeclarations? '}'
  ;

enumConstantList
  :	enumConstant (',' enumConstant)*
  ;

enumConstant
  :	enumConstantModifier* Identifier ('(' argumentList? ')')? classBody?
  ;

enumConstantModifier
  :	annotation
  ;

enumBodyDeclarations
  :	';' classBodyDeclaration*
  ;

/*
 * Productions from §9 (Interfaces)
 */

interfaceDeclaration
  :	normalInterfaceDeclaration
  |	annotationTypeDeclaration
  ;

normalInterfaceDeclaration
  :	interfaceModifier* 'interface' Identifier typeParameters? extendsInterfaces? interfaceBody
  ;

interfaceModifier
  :	annotation
  |	'public'
  |	'protected'
  |	'private'
  |	'abstract'
  |	'static'
  |	'strictfp'
  ;

extendsInterfaces
  :	'extends' interfaceTypeList
  ;

interfaceBody
  :	'{' interfaceMemberDeclaration* '}'
  ;

interfaceMemberDeclaration
  :	constantDeclaration
  |	interfaceMethodDeclaration
  |	classDeclaration
  |	interfaceDeclaration
  |	';'
  ;

constantDeclaration
  :	constantModifier* unannType variableDeclaratorList ';'
  ;

constantModifier
  :	annotation
  |	'public'
  |	'static'
  |	'final'
  ;

interfaceMethodDeclaration
  :	interfaceMethodModifier* methodHeader methodBody
  ;

interfaceMethodModifier
  :	annotation
  |	'public'
  |	'abstract'
  |	'default'
  |	'static'
  |	'strictfp'
  ;

annotationTypeDeclaration
  :	interfaceModifier* '@' 'interface' Identifier annotationTypeBody
  ;

annotationTypeBody
  :	'{' annotationTypeMemberDeclaration* '}'
  ;

annotationTypeMemberDeclaration
  :	annotationTypeElementDeclaration
  |	constantDeclaration
  |	classDeclaration
  |	interfaceDeclaration
  |	';'
  ;

annotationTypeElementDeclaration
  :	annotationTypeElementModifier* unannType Identifier '(' ')' dims? defaultValue? ';'
  ;

annotationTypeElementModifier
  :	annotation
  |	'public'
  |	'abstract'
  ;

defaultValue
  :	'default' elementValue
  ;

annotation
  :	normalAnnotation
  |	markerAnnotation
  |	singleElementAnnotation
  ;

normalAnnotation
  :	'@' typeName '(' elementValuePairList? ')'
  ;

elementValuePairList
  :	elementValuePair (',' elementValuePair)*
  ;

elementValuePair
  :	Identifier ASSIGN elementValue
  ;

elementValue
  :	conditionalExpression
  |	elementValueArrayInitializer
  |	annotation
  ;

elementValueArrayInitializer
  :	'{' elementValueList? ','? '}'
  ;

elementValueList
  :	elementValue (',' elementValue)*
  ;

markerAnnotation
  :	'@' typeName
  ;

singleElementAnnotation
  :	'@' typeName '(' elementValue ')'
  ;

/*
 * Productions from §10 (Arrays)
 */

arrayInitializer
  :	'{' variableInitializerList? ','? '}'
  ;

variableInitializerList
  :	variableInitializer (',' variableInitializer)*
  ;

/*
 * Productions from §14 (Blocks and Statements)
 */

block
  :	'{' blockStatements? '}'
  ;

blockStatements
  :	blockStatement+
  ;

blockStatement
  :	localVariableDeclarationStatement
  |	classDeclaration
  |	statement
  | methodDeclaration
  ;

localVariableDeclarationStatement
  :	localVariableDeclaration ';'
  ;

localVariableDeclaration
  :	variableModifier* unannType variableDeclaratorList
  ;

statement
  :	statementWithoutTrailingSubstatement
  |	labeledStatement
  |	ifThenStatement
  |	ifThenElseStatement
  |	whileStatement
  |	forStatement
  ;

statementNoShortIf
  :	statementWithoutTrailingSubstatement
  |	labeledStatementNoShortIf
  |	ifThenElseStatementNoShortIf
  |	whileStatementNoShortIf
  |	forStatementNoShortIf
  ;

statementWithoutTrailingSubstatement
  :	block
  |	emptyStatement
  |	expressionStatement
  |	assertStatement
  |	switchStatement
  |	doStatement
  |	breakStatement
  |	continueStatement
  |	returnStatement
  |	synchronizedStatement
  |	throwStatement
  |	tryStatement
  ;

emptyStatement
  :	';'
  ;

labeledStatement
  :	Identifier ':' statement
  ;

labeledStatementNoShortIf
  :	Identifier ':' statementNoShortIf
  ;

expressionStatement
  :	statementExpression ';'
  ;

statementExpression
  :	assignment
  |	preIncrementExpression
  |	preDecrementExpression
  |	postIncrementExpression
  |	postDecrementExpression
  |	methodInvocation
  |	classInstanceCreationExpression
  ;

ifThenStatement
  :	'if' '(' expression ')' statement
  ;

ifThenElseStatement
  :	'if' '(' expression ')' statementNoShortIf 'else' statement
  ;

ifThenElseStatementNoShortIf
  :	'if' '(' expression ')' statementNoShortIf 'else' statementNoShortIf
  ;

assertStatement
  :	'assert' expression ';'
  |	'assert' expression ':' expression ';'
  ;

switchStatement
  :	'switch' '(' expression ')' switchBlock
  ;

switchBlock
  :	'{' switchBlockStatementGroup* switchLabel* '}'
  ;

switchBlockStatementGroup
  :	switchLabels blockStatements
  ;

switchLabels
  :	switchLabel switchLabel*
  ;

switchLabel
  :	'case' constantExpression ':'
  |	'case' enumConstantName ':'
  |	'default' ':'
  ;

enumConstantName
  :	Identifier
  ;

whileStatement
  :	'while' '(' expression ')' statement
  ;

whileStatementNoShortIf
  :	'while' '(' expression ')' statementNoShortIf
  ;

doStatement
  :	'do' statement 'while' '(' expression ')' ';'
  ;

forStatement
  :	basicForStatement
  |	enhancedForStatement
  ;

forStatementNoShortIf
  :	basicForStatementNoShortIf
  |	enhancedForStatementNoShortIf
  ;

basicForStatement
  :	'for' '(' forInit? ';' expression? ';' forUpdate? ')' statement
  ;

basicForStatementNoShortIf
  :	'for' '(' forInit? ';' expression? ';' forUpdate? ')' statementNoShortIf
  ;

forInit
  :	statementExpressionList
  |	localVariableDeclaration
  ;

forUpdate
  :	statementExpressionList
  ;

statementExpressionList
  :	statementExpression (',' statementExpression)*
  ;

enhancedForStatement
  :	'for' '(' variableModifier* unannType variableDeclaratorId ':' expression ')' statement
  ;

enhancedForStatementNoShortIf
  :	'for' '(' variableModifier* unannType variableDeclaratorId ':' expression ')' statementNoShortIf
  ;

breakStatement
  :	'break' Identifier? ';'
  ;

continueStatement
  :	'continue' Identifier? ';'
  ;

returnStatement
  :	'return' expression? ';'
  ;

throwStatement
  :	'throw' expression ';'
  ;

synchronizedStatement
  :	'synchronized' '(' expression ')' block
  ;

tryStatement
  :	'try' block catches
  |	'try' block catches? finally_
  |	tryWithResourcesStatement
  ;

catches
  :	catchClause catchClause*
  ;

catchClause
  :	'catch' '(' catchFormalParameter ')' block
  ;

catchFormalParameter
  :	variableModifier* catchType variableDeclaratorId
  ;

catchType
  :	unannClassType ('|' classType)*
  ;

finally_
  :	'finally' block
  ;

tryWithResourcesStatement
  :	'try' resourceSpecification block catches? finally_?
  ;

resourceSpecification
  :	'(' resourceList ';'? ')'
  ;

resourceList
  :	resource (';' resource)*
  ;

resource
  :	variableModifier* unannType variableDeclaratorId ASSIGN expression
  ;

/*
 * Productions from §15 (Expressions)
 */

primary
  :	(	primaryNoNewArray_lfno_primary
    |	arrayCreationExpression
    )
    (	primaryNoNewArray_lf_primary
    )*
  ;

primaryNoNewArray
  :	literal
  |	typeName ('[' ']')* '.' 'class'
  |	'void' '.' 'class'
  |	'this'
  |	typeName '.' 'this'
  |	'(' expression ')'
  |	classInstanceCreationExpression
  |	fieldAccess
  |	arrayAccess
  |	methodInvocation
  |	methodReference
  ;

primaryNoNewArray_lf_arrayAccess
  :
  ;

primaryNoNewArray_lfno_arrayAccess
  :	literal
  |	typeName ('[' ']')* '.' 'class'
  |	'void' '.' 'class'
  |	'this'
  |	typeName '.' 'this'
  |	'(' expression ')'
  |	classInstanceCreationExpression
  |	fieldAccess
  |	methodInvocation
  |	methodReference
  ;

primaryNoNewArray_lf_primary
  :	classInstanceCreationExpression_lf_primary
  |	fieldAccess_lf_primary
  |	arrayAccess_lf_primary
  |	methodInvocation_lf_primary
  |	methodReference_lf_primary
  ;

primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary
  :
  ;

primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary
  :	classInstanceCreationExpression_lf_primary
  |	fieldAccess_lf_primary
  |	methodInvocation_lf_primary
  |	methodReference_lf_primary
  ;

primaryNoNewArray_lfno_primary
  :	literal
  |	typeName ('[' ']')* '.' 'class'
  |	unannPrimitiveType ('[' ']')* '.' 'class'
  |	'void' '.' 'class'
  |	'this'
  |	typeName '.' 'this'
  |	'(' expression ')'
  |	classInstanceCreationExpression_lfno_primary
  |	fieldAccess_lfno_primary
  |	arrayAccess_lfno_primary
  |	methodInvocation_lfno_primary
  |	methodReference_lfno_primary
  ;

primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary
  :
  ;

primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary
  :	literal
  |	typeName ('[' ']')* '.' 'class'
  |	unannPrimitiveType ('[' ']')* '.' 'class'
  |	'void' '.' 'class'
  |	'this'
  |	typeName '.' 'this'
  |	'(' expression ')'
  |	classInstanceCreationExpression_lfno_primary
  |	fieldAccess_lfno_primary
  |	methodInvocation_lfno_primary
  |	methodReference_lfno_primary
  ;

classInstanceCreationExpression
  :	'new' typeArguments? annotation* Identifier ('.' annotation* Identifier)* typeArgumentsOrDiamond? '(' argumentList? ')' classBody?
  |	expressionName '.' 'new' typeArguments? annotation* Identifier typeArgumentsOrDiamond? '(' argumentList? ')' classBody?
  |	primary '.' 'new' typeArguments? annotation* Identifier typeArgumentsOrDiamond? '(' argumentList? ')' classBody?
  ;

classInstanceCreationExpression_lf_primary
  :	'.' 'new' typeArguments? annotation* Identifier typeArgumentsOrDiamond? '(' argumentList? ')' classBody?
  ;

classInstanceCreationExpression_lfno_primary
  :	'new' typeArguments? annotation* Identifier ('.' annotation* Identifier)* typeArgumentsOrDiamond? '(' argumentList? ')' classBody?
  |	expressionName '.' 'new' typeArguments? annotation* Identifier typeArgumentsOrDiamond? '(' argumentList? ')' classBody?
  ;

typeArgumentsOrDiamond
  :	typeArguments
  |	LT GT
  ;

fieldAccess
  :	primary '.' Identifier
  |	'super' '.' Identifier
  |	typeName '.' 'super' '.' Identifier
  ;

fieldAccess_lf_primary
  :	'.' Identifier
  ;

fieldAccess_lfno_primary
  :	'super' '.' Identifier
  |	typeName '.' 'super' '.' Identifier
  ;

arrayAccess
  :	(	expressionName '[' expression ']'
    |	primaryNoNewArray_lfno_arrayAccess '[' expression ']'
    )
    (	primaryNoNewArray_lf_arrayAccess '[' expression ']'
    )*
  ;

arrayAccess_lf_primary
  :	(	primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary '[' expression ']'
    )
    (	primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary '[' expression ']'
    )*
  ;

arrayAccess_lfno_primary
  :	(	expressionName '[' expression ']'
    |	primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary '[' expression ']'
    )
    (	primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary '[' expression ']'
    )*
  ;

methodInvocation
  :	methodName '(' argumentList? ')'
  |	typeName '.' typeArguments? Identifier '(' argumentList? ')'
  |	expressionName '.' typeArguments? Identifier '(' argumentList? ')'
  |	primary '.' typeArguments? Identifier '(' argumentList? ')'
  |	'super' '.' typeArguments? Identifier '(' argumentList? ')'
  |	typeName '.' 'super' '.' typeArguments? Identifier '(' argumentList? ')'
  ;

methodInvocation_lf_primary
  :	'.' typeArguments? Identifier '(' argumentList? ')'
  ;

methodInvocation_lfno_primary
  :	methodName '(' argumentList? ')'
  |	typeName '.' typeArguments? Identifier '(' argumentList? ')'
  |	expressionName '.' typeArguments? Identifier '(' argumentList? ')'
  |	'super' '.' typeArguments? Identifier '(' argumentList? ')'
  |	typeName '.' 'super' '.' typeArguments? Identifier '(' argumentList? ')'
  ;

argumentList
  :	expression (',' expression)*
  ;

methodReference
  :	expressionName '::' typeArguments? Identifier
  |	referenceType '::' typeArguments? Identifier
  |	primary '::' typeArguments? Identifier
  |	'super' '::' typeArguments? Identifier
  |	typeName '.' 'super' '::' typeArguments? Identifier
  |	classType '::' typeArguments? 'new'
  |	arrayType '::' 'new'
  ;

methodReference_lf_primary
  :	'::' typeArguments? Identifier
  ;

methodReference_lfno_primary
  :	expressionName '::' typeArguments? Identifier
  |	referenceType '::' typeArguments? Identifier
  |	'super' '::' typeArguments? Identifier
  |	typeName '.' 'super' '::' typeArguments? Identifier
  |	classType '::' typeArguments? 'new'
  |	arrayType '::' 'new'
  ;

arrayCreationExpression
  :	'new' primitiveType dimExprs dims?
  |	'new' classOrInterfaceType dimExprs dims?
  |	'new' primitiveType dims arrayInitializer
  |	'new' classOrInterfaceType dims arrayInitializer
  ;

dimExprs
  :	dimExpr dimExpr*
  ;

dimExpr
  :	annotation* '[' expression ']'
  ;

constantExpression
  :	expression
  ;

expression
  :	lambdaExpression
  |	assignmentExpression
  ;

lambdaExpression
  :	lambdaParameters '->' lambdaBody
  ;

lambdaParameters
  :	Identifier
  |	'(' formalParameterList? ')'
  |	'(' inferredFormalParameterList ')'
  ;

inferredFormalParameterList
  :	Identifier (',' Identifier)*
  ;

lambdaBody
  :	expression
  |	block
  ;

assignmentExpression
  :	conditionalExpression
  |	assignment
  ;

assignment
  :	leftHandSide assignmentOperator expression
  ;

leftHandSide
  :	expressionName
  |	fieldAccess
  |	arrayAccess
  ;

assignmentOperator
  :	ASSIGN
  |	'*='
  |	'/='
  |	'%='
  |	'+='
  |	'-='
  |	'<<='
  |	'>>='
  |	'>>>='
  |	'&='
  |	'^='
  |	'|='
  ;

conditionalExpression
  :	conditionalOrExpression
  |	conditionalOrExpression '?' expression ':' conditionalExpression
  ;

conditionalOrExpression
  :	conditionalAndExpression
  |	conditionalOrExpression '||' conditionalAndExpression
  ;

conditionalAndExpression
  :	inclusiveOrExpression
  |	conditionalAndExpression '&&' inclusiveOrExpression
  ;

inclusiveOrExpression
  :	exclusiveOrExpression
  |	inclusiveOrExpression '|' exclusiveOrExpression
  ;

exclusiveOrExpression
  :	andExpression
  |	exclusiveOrExpression '^' andExpression
  ;

andExpression
  :	equalityExpression
  |	andExpression '&' equalityExpression
  ;

equalityExpression
  :	relationalExpression
  |	equalityExpression '==' relationalExpression
  |	equalityExpression '!=' relationalExpression
  ;

relationalExpression
  :	shiftExpression
  |	relationalExpression LT shiftExpression
  |	relationalExpression GT shiftExpression
  |	relationalExpression '<=' shiftExpression
  |	relationalExpression '>=' shiftExpression
  |	relationalExpression 'instanceof' referenceType
  ;

shiftExpression
  :	additiveExpression
  |	shiftExpression LT LT additiveExpression
  |	shiftExpression GT GT additiveExpression
  |	shiftExpression GT GT GT additiveExpression
  ;

additiveExpression
  :	multiplicativeExpression
  |	additiveExpression '+' multiplicativeExpression
  |	additiveExpression '-' multiplicativeExpression
  ;

multiplicativeExpression
  :	unaryExpression
  |	multiplicativeExpression '*' unaryExpression
  |	multiplicativeExpression DIV unaryExpression
  |	multiplicativeExpression '%' unaryExpression
  ;

unaryExpression
  :	preIncrementExpression
  |	preDecrementExpression
  |	'+' unaryExpression
  |	'-' unaryExpression
  |	unaryExpressionNotPlusMinus
  ;

preIncrementExpression
  :	'++' unaryExpression
  ;

preDecrementExpression
  :	'--' unaryExpression
  ;

unaryExpressionNotPlusMinus
  :	postfixExpression
  |	'~' unaryExpression
  |	'!' unaryExpression
  |	castExpression
  ;

postfixExpression
  :	(	primary
    |	expressionName
    )
    (	postIncrementExpression_lf_postfixExpression
    |	postDecrementExpression_lf_postfixExpression
    )*
  ;

postIncrementExpression
  :	postfixExpression '++'
  ;

postIncrementExpression_lf_postfixExpression
  :	'++'
  ;

postDecrementExpression
  :	postfixExpression '--'
  ;

postDecrementExpression_lf_postfixExpression
  :	'--'
  ;

castExpression
  :	'(' primitiveType ')' unaryExpression
  |	'(' referenceType additionalBound* ')' unaryExpressionNotPlusMinus
  |	'(' referenceType additionalBound* ')' lambdaExpression
  ;

//XML parser declarations
xml_document    :   xml_prolog? xml_misc* xml_element xml_misc*;

xml_prolog      :   XMLDeclOpen xml_attribute* SPECIAL_CLOSE ;

xml_content     :   xml_chardata?
                ((xml_element | xml_reference |  PI | COMMENT ) xml_chardata?)* ;

xml_element    :  OPEN Name xml_attribute* CLOSE xml_content OPEN SLASH Name CLOSE 
               |  OPEN Name xml_attribute* SLASH_CLOSE 
               |  BS_ELEMENT_START CDATA_START bsCompilationUnit CDATA_END BS_ELEMENT_END 
               |  BS_ELEMENT_START bsCompilationUnit BS_ELEMENT_END 
               ;

xml_reference   :   EntityRef | CharRef ;

xml_attribute   :   Name EQUALS STRING ;

/** ``All text that is not markup constitutes the character data of
 *  the document.''
 */
xml_chardata    :   TEXT | SEA_WS ;

xml_misc        :   COMMENT | PI | SEA_WS ;