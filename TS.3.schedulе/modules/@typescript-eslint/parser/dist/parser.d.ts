import type { ScopeManager } from '@typescript-eslint/scope-manager';
import type { ParserOptions, TSESTree } from '@typescript-eslint/types';
import type { AST, ParserServices } from '@typescript-eslint/typescript-estree';
import type { VisitorKeys } from '@typescript-eslint/visitor-keys';
import type * as ts from 'typescript';
interface ESLintProgram extends AST<{
    comment: true;
    tokens: true;
}> {
    comments: TSESTree.Comment[];
    range: [number, number];
    tokens: TSESTree.Token[];
}
interface ParseForESLintResult {
    ast: ESLintProgram;
    scopeManager: ScopeManager;
    services: ParserServices;
    visitorKeys: VisitorKeys;
}
declare function parse(code: ts.SourceFile | string, options?: ParserOptions): ParseForESLintResult['ast'];
declare function parseForESLint(code: ts.SourceFile | string, parserOptions?: ParserOptions | null): ParseForESLintResult;
export { parse, parseForESLint };
export type { ParserOptions } from '@typescript-eslint/types';
//# sourceMappingURL=parser.d.ts.map