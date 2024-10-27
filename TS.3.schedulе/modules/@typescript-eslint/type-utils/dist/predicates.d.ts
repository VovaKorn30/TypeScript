import * as ts from 'typescript';
/**
 * Checks if the given type is (or accepts) nullable
 */
export declare function isNullableType(type: ts.Type): boolean;
/**
 * Checks if the given type is either an array type,
 * or a union made up solely of array types.
 */
export declare function isTypeArrayTypeOrUnionOfArrayTypes(type: ts.Type, checker: ts.TypeChecker): boolean;
/**
 * @returns true if the type is `never`
 */
export declare function isTypeNeverType(type: ts.Type): boolean;
/**
 * @returns true if the type is `unknown`
 */
export declare function isTypeUnknownType(type: ts.Type): boolean;
export declare function isTypeReferenceType(type: ts.Type): type is ts.TypeReference;
/**
 * @returns true if the type is `any`
 */
export declare function isTypeAnyType(type: ts.Type): boolean;
/**
 * @returns true if the type is `any[]`
 */
export declare function isTypeAnyArrayType(type: ts.Type, checker: ts.TypeChecker): boolean;
/**
 * @returns true if the type is `unknown[]`
 */
export declare function isTypeUnknownArrayType(type: ts.Type, checker: ts.TypeChecker): boolean;
export declare enum AnyType {
    Any = 0,
    PromiseAny = 1,
    AnyArray = 2,
    Safe = 3
}
/**
 * @returns `AnyType.Any` if the type is `any`, `AnyType.AnyArray` if the type is `any[]` or `readonly any[]`, `AnyType.PromiseAny` if the type is `Promise<any>`,
 *          otherwise it returns `AnyType.Safe`.
 */
export declare function discriminateAnyType(type: ts.Type, checker: ts.TypeChecker, program: ts.Program, tsNode: ts.Node): AnyType;
/**
 * @returns Whether a type is an instance of the parent type, including for the parent's base types.
 */
export declare function typeIsOrHasBaseType(type: ts.Type, parentType: ts.Type): boolean;
export declare function isTypeBigIntLiteralType(type: ts.Type): type is ts.BigIntLiteralType;
export declare function isTypeTemplateLiteralType(type: ts.Type): type is ts.TemplateLiteralType;
//# sourceMappingURL=predicates.d.ts.map