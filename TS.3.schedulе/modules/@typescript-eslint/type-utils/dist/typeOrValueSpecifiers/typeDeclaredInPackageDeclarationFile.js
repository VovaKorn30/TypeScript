"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDeclaredInPackageDeclarationFile = typeDeclaredInPackageDeclarationFile;
const ts = __importStar(require("typescript"));
function findParentModuleDeclaration(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ModuleDeclaration:
            return ts.isStringLiteral(node.name)
                ? node
                : undefined;
        case ts.SyntaxKind.SourceFile:
            return undefined;
        default:
            return findParentModuleDeclaration(node.parent);
    }
}
function typeDeclaredInDeclareModule(packageName, declarations) {
    return declarations.some(declaration => findParentModuleDeclaration(declaration)?.name.text === packageName);
}
function typeDeclaredInDeclarationFile(packageName, declarationFiles, program) {
    // Handle scoped packages: if the name starts with @, remove it and replace / with __
    const typesPackageName = packageName.replace(/^@([^/]+)\//, '$1__');
    const matcher = new RegExp(`${packageName}|${typesPackageName}`);
    return declarationFiles.some(declaration => {
        const packageIdName = program.sourceFileToPackageName.get(declaration.path);
        return (packageIdName !== undefined &&
            matcher.test(packageIdName) &&
            program.isSourceFileFromExternalLibrary(declaration));
    });
}
function typeDeclaredInPackageDeclarationFile(packageName, declarations, declarationFiles, program) {
    return (typeDeclaredInDeclareModule(packageName, declarations) ||
        typeDeclaredInDeclarationFile(packageName, declarationFiles, program));
}
//# sourceMappingURL=typeDeclaredInPackageDeclarationFile.js.map