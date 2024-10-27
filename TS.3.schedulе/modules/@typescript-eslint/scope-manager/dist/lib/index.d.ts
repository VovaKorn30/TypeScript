declare const lib: {
    readonly es5: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es6: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2015: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es7: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2016: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2017: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2018: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2019: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2020: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2021: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2022: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly es2023: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly esnext: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly dom: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'dom.iterable': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'dom.asynciterable': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly webworker: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'webworker.importscripts': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'webworker.iterable': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'webworker.asynciterable': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly scripthost: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.core': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.collection': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.generator': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.iterable': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.promise': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.proxy': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.reflect': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.symbol': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2015.symbol.wellknown': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2016.array.include': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2016.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2017.date': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2017.object': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2017.sharedmemory': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2017.string': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2017.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2017.typedarrays': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2018.asyncgenerator': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2018.asynciterable': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2018.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2018.promise': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2018.regexp': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2019.array': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2019.object': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2019.string': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2019.symbol': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2019.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.bigint': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.date': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.promise': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.sharedmemory': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.string': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.symbol.wellknown': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.number': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2021.promise': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2021.string': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2021.weakref': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2021.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2022.array': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2022.error': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2022.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2022.object': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2022.sharedmemory': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2022.string': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2022.regexp': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2023.array': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2023.collection': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2023.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.array': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.collection': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.symbol': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.asynciterable': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.intl': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.disposable': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.bigint': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.string': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.promise': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.weakref': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.decorators': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.object': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.regexp': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly decorators: Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'decorators.legacy': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2016.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2017.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2018.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2019.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2020.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2021.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2022.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'es2023.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly 'esnext.full': Record<string, import("..").ImplicitLibVariableOptions>;
    readonly lib: Record<string, import("..").ImplicitLibVariableOptions>;
};
export { lib };
//# sourceMappingURL=index.d.ts.map