interface RootObject
{
    DuildFileType: string[];
    mode: string;
    typescript: Typescript;
}

interface Typescript
{
    include: string[];
    compilerOptions: CompilerOptions;
}

interface CompilerOptions
{
    outDir: string;
    target: string;
    module: string;
    jsx: string;
    alwaysStrict: boolean;
    noEmit: boolean;
    removeComments: boolean;
    sourceMap: boolean;
    declaration: boolean;
    declarationMap: boolean;
    importHelpers: boolean;
    incremental: boolean;
    strictBindCallApply: boolean;
    noImplicitAny: boolean;
    noUnusedLocals: boolean;
    noUnusedParameters: boolean;
    strictNullChecks: boolean;
    noFallthroughCasesInSwitch: boolean;
    forceConsistentCasingInFileNames: boolean;
    strictFunctionTypes: boolean;
    strictPropertyInitialization: boolean;
    esModuleInterop: boolean;
    allowSyntheticDefaultImports: boolean;
    moduleResolution: string;
    lib: string[];
}
export { RootObject, Typescript, CompilerOptions }