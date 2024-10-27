export declare namespace configs {
    export const flat: {
        recommended: {
            plugins: {
                react: {
                    deprecatedRules: any;
                    rules: {
                        'boolean-prop-naming': import("eslint").Rule.RuleModule;
                        'button-has-type': import("eslint").Rule.RuleModule;
                        'checked-requires-onchange-or-readonly': import("eslint").Rule.RuleModule;
                        'default-props-match-prop-types': import("eslint").Rule.RuleModule;
                        'destructuring-assignment': import("eslint").Rule.RuleModule;
                        'display-name': import("eslint").Rule.RuleModule;
                        'forbid-component-props': import("eslint").Rule.RuleModule;
                        'forbid-dom-props': import("eslint").Rule.RuleModule;
                        'forbid-elements': import("eslint").Rule.RuleModule;
                        'forbid-foreign-prop-types': import("eslint").Rule.RuleModule;
                        'forbid-prop-types': import("eslint").Rule.RuleModule;
                        'forward-ref-uses-ref': {
                            meta: {
                                docs: {
                                    description: string;
                                    category: string;
                                    recommended: boolean;
                                    url: string;
                                };
                                messages: {
                                    missingRefParameter: string;
                                    addRefParameter: string;
                                    removeForwardRef: string;
                                };
                                schema: undefined[];
                                type: string;
                                hasSuggestions: boolean;
                            };
                            create(context: any): {
                                'FunctionExpression, ArrowFunctionExpression'(node: any): void;
                            };
                        };
                        'function-component-definition': import("eslint").Rule.RuleModule;
                        'hook-use-state': import("eslint").Rule.RuleModule;
                        'iframe-missing-sandbox': import("eslint").Rule.RuleModule;
                        'jsx-boolean-value': import("eslint").Rule.RuleModule;
                        'jsx-child-element-spacing': import("eslint").Rule.RuleModule;
                        'jsx-closing-bracket-location': import("eslint").Rule.RuleModule;
                        'jsx-closing-tag-location': import("eslint").Rule.RuleModule;
                        'jsx-curly-spacing': import("eslint").Rule.RuleModule;
                        'jsx-curly-newline': import("eslint").Rule.RuleModule;
                        'jsx-equals-spacing': import("eslint").Rule.RuleModule;
                        'jsx-filename-extension': import("eslint").Rule.RuleModule;
                        'jsx-first-prop-new-line': import("eslint").Rule.RuleModule;
                        'jsx-handler-names': import("eslint").Rule.RuleModule;
                        'jsx-indent': import("eslint").Rule.RuleModule;
                        'jsx-indent-props': import("eslint").Rule.RuleModule;
                        'jsx-key': import("eslint").Rule.RuleModule;
                        'jsx-max-depth': import("eslint").Rule.RuleModule;
                        'jsx-max-props-per-line': import("eslint").Rule.RuleModule;
                        'jsx-newline': import("eslint").Rule.RuleModule;
                        'jsx-no-bind': import("eslint").Rule.RuleModule;
                        'jsx-no-comment-textnodes': import("eslint").Rule.RuleModule;
                        'jsx-no-constructed-context-values': import("eslint").Rule.RuleModule;
                        'jsx-no-duplicate-props': import("eslint").Rule.RuleModule;
                        'jsx-no-leaked-render': import("eslint").Rule.RuleModule;
                        'jsx-no-literals': {
                            meta: import("eslint").Rule.RuleMetaData;
                            create(context: any): (false & {
                                Literal(node: any): void;
                                JSXAttribute(node: any): void;
                                JSXText(node: any): void;
                                TemplateLiteral(node: any): void;
                            }) | ({
                                ImportDeclaration(node: any): void;
                                VariableDeclaration(node: any): void;
                            } & {
                                Literal(node: any): void;
                                JSXAttribute(node: any): void;
                                JSXText(node: any): void;
                                TemplateLiteral(node: any): void;
                            });
                        };
                        'jsx-no-script-url': import("eslint").Rule.RuleModule;
                        'jsx-no-target-blank': import("eslint").Rule.RuleModule;
                        'jsx-no-useless-fragment': import("eslint").Rule.RuleModule;
                        'jsx-one-expression-per-line': import("eslint").Rule.RuleModule;
                        'jsx-no-undef': import("eslint").Rule.RuleModule;
                        'jsx-curly-brace-presence': import("eslint").Rule.RuleModule;
                        'jsx-pascal-case': import("eslint").Rule.RuleModule;
                        'jsx-fragments': import("eslint").Rule.RuleModule;
                        'jsx-props-no-multi-spaces': import("eslint").Rule.RuleModule;
                        'jsx-props-no-spreading': import("eslint").Rule.RuleModule;
                        'jsx-props-no-spread-multi': {
                            meta: {
                                docs: {
                                    description: string;
                                    category: string;
                                    recommended: boolean;
                                    url: string;
                                };
                                messages: {
                                    noMultiSpreading: string;
                                };
                            };
                            create(context: any): {
                                JSXOpeningElement(node: any): void;
                            };
                        };
                        'jsx-sort-default-props': import("eslint").Rule.RuleModule;
                        'jsx-sort-props': import("eslint").Rule.RuleModule;
                        'jsx-space-before-closing': import("eslint").Rule.RuleModule;
                        'jsx-tag-spacing': import("eslint").Rule.RuleModule;
                        'jsx-uses-react': import("eslint").Rule.RuleModule;
                        'jsx-uses-vars': import("eslint").Rule.RuleModule;
                        'jsx-wrap-multilines': import("eslint").Rule.RuleModule;
                        'no-invalid-html-attribute': import("eslint").Rule.RuleModule;
                        'no-access-state-in-setstate': import("eslint").Rule.RuleModule;
                        'no-adjacent-inline-elements': import("eslint").Rule.RuleModule;
                        'no-array-index-key': import("eslint").Rule.RuleModule;
                        'no-arrow-function-lifecycle': import("eslint").Rule.RuleModule;
                        'no-children-prop': import("eslint").Rule.RuleModule;
                        'no-danger': import("eslint").Rule.RuleModule;
                        'no-danger-with-children': import("eslint").Rule.RuleModule;
                        'no-deprecated': import("eslint").Rule.RuleModule;
                        'no-did-mount-set-state': import("eslint").Rule.RuleModule;
                        'no-did-update-set-state': import("eslint").Rule.RuleModule;
                        'no-direct-mutation-state': import("eslint").Rule.RuleModule;
                        'no-find-dom-node': import("eslint").Rule.RuleModule;
                        'no-is-mounted': import("eslint").Rule.RuleModule;
                        'no-multi-comp': import("eslint").Rule.RuleModule;
                        'no-namespace': import("eslint").Rule.RuleModule;
                        'no-set-state': import("eslint").Rule.RuleModule;
                        'no-string-refs': import("eslint").Rule.RuleModule;
                        'no-redundant-should-component-update': import("eslint").Rule.RuleModule;
                        'no-render-return-value': import("eslint").Rule.RuleModule;
                        'no-this-in-sfc': import("eslint").Rule.RuleModule;
                        'no-typos': import("eslint").Rule.RuleModule;
                        'no-unescaped-entities': import("eslint").Rule.RuleModule;
                        'no-unknown-property': import("eslint").Rule.RuleModule;
                        'no-unsafe': import("eslint").Rule.RuleModule;
                        'no-unstable-nested-components': import("eslint").Rule.RuleModule;
                        'no-unused-class-component-methods': import("eslint").Rule.RuleModule;
                        'no-unused-prop-types': import("eslint").Rule.RuleModule;
                        'no-unused-state': import("eslint").Rule.RuleModule;
                        'no-object-type-as-default-prop': import("eslint").Rule.RuleModule;
                        'no-will-update-set-state': import("eslint").Rule.RuleModule;
                        'prefer-es6-class': import("eslint").Rule.RuleModule;
                        'prefer-exact-props': import("eslint").Rule.RuleModule;
                        'prefer-read-only-props': import("eslint").Rule.RuleModule;
                        'prefer-stateless-function': import("eslint").Rule.RuleModule;
                        'prop-types': import("eslint").Rule.RuleModule;
                        'react-in-jsx-scope': import("eslint").Rule.RuleModule;
                        'require-default-props': import("eslint").Rule.RuleModule;
                        'require-optimization': import("eslint").Rule.RuleModule;
                        'require-render-return': import("eslint").Rule.RuleModule;
                        'self-closing-comp': import("eslint").Rule.RuleModule;
                        'sort-comp': import("eslint").Rule.RuleModule;
                        'sort-default-props': import("eslint").Rule.RuleModule;
                        'sort-prop-types': import("eslint").Rule.RuleModule;
                        'state-in-constructor': import("eslint").Rule.RuleModule;
                        'static-property-placement': import("eslint").Rule.RuleModule;
                        'style-prop-object': import("eslint").Rule.RuleModule;
                        'void-dom-elements-no-children': import("eslint").Rule.RuleModule;
                    };
                    configs: {
                        recommended: {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                            };
                            rules: {
                                'react/display-name': number;
                                'react/jsx-key': number;
                                'react/jsx-no-comment-textnodes': number;
                                'react/jsx-no-duplicate-props': number;
                                'react/jsx-no-target-blank': number;
                                'react/jsx-no-undef': number;
                                'react/jsx-uses-react': number;
                                'react/jsx-uses-vars': number;
                                'react/no-children-prop': number;
                                'react/no-danger-with-children': number;
                                'react/no-deprecated': number;
                                'react/no-direct-mutation-state': number;
                                'react/no-find-dom-node': number;
                                'react/no-is-mounted': number;
                                'react/no-render-return-value': number;
                                'react/no-string-refs': number;
                                'react/no-unescaped-entities': number;
                                'react/no-unknown-property': number;
                                'react/no-unsafe': number;
                                'react/prop-types': number;
                                'react/react-in-jsx-scope': number;
                                'react/require-render-return': number;
                            };
                        };
                        all: {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                            };
                            rules: Record<string, 2>;
                        };
                        'jsx-runtime': {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                                jsxPragma: any;
                            };
                            rules: {
                                'react/react-in-jsx-scope': number;
                                'react/jsx-uses-react': number;
                            };
                        };
                    };
                };
            };
            rules: {
                'react/display-name': number;
                'react/jsx-key': number;
                'react/jsx-no-comment-textnodes': number;
                'react/jsx-no-duplicate-props': number;
                'react/jsx-no-target-blank': number;
                'react/jsx-no-undef': number;
                'react/jsx-uses-react': number;
                'react/jsx-uses-vars': number;
                'react/no-children-prop': number;
                'react/no-danger-with-children': number;
                'react/no-deprecated': number;
                'react/no-direct-mutation-state': number;
                'react/no-find-dom-node': number;
                'react/no-is-mounted': number;
                'react/no-render-return-value': number;
                'react/no-string-refs': number;
                'react/no-unescaped-entities': number;
                'react/no-unknown-property': number;
                'react/no-unsafe': number;
                'react/prop-types': number;
                'react/react-in-jsx-scope': number;
                'react/require-render-return': number;
            };
            languageOptions: {
                parserOptions: {
                    ecmaFeatures: {
                        jsx: boolean;
                    };
                };
            };
        };
        all: {
            plugins: {
                react: {
                    deprecatedRules: any;
                    rules: {
                        'boolean-prop-naming': import("eslint").Rule.RuleModule;
                        'button-has-type': import("eslint").Rule.RuleModule;
                        'checked-requires-onchange-or-readonly': import("eslint").Rule.RuleModule;
                        'default-props-match-prop-types': import("eslint").Rule.RuleModule;
                        'destructuring-assignment': import("eslint").Rule.RuleModule;
                        'display-name': import("eslint").Rule.RuleModule;
                        'forbid-component-props': import("eslint").Rule.RuleModule;
                        'forbid-dom-props': import("eslint").Rule.RuleModule;
                        'forbid-elements': import("eslint").Rule.RuleModule;
                        'forbid-foreign-prop-types': import("eslint").Rule.RuleModule;
                        'forbid-prop-types': import("eslint").Rule.RuleModule;
                        'forward-ref-uses-ref': {
                            meta: {
                                docs: {
                                    description: string;
                                    category: string;
                                    recommended: boolean;
                                    url: string;
                                };
                                messages: {
                                    missingRefParameter: string;
                                    addRefParameter: string;
                                    removeForwardRef: string;
                                };
                                schema: undefined[];
                                type: string;
                                hasSuggestions: boolean;
                            };
                            create(context: any): {
                                'FunctionExpression, ArrowFunctionExpression'(node: any): void;
                            };
                        };
                        'function-component-definition': import("eslint").Rule.RuleModule;
                        'hook-use-state': import("eslint").Rule.RuleModule;
                        'iframe-missing-sandbox': import("eslint").Rule.RuleModule;
                        'jsx-boolean-value': import("eslint").Rule.RuleModule;
                        'jsx-child-element-spacing': import("eslint").Rule.RuleModule;
                        'jsx-closing-bracket-location': import("eslint").Rule.RuleModule;
                        'jsx-closing-tag-location': import("eslint").Rule.RuleModule;
                        'jsx-curly-spacing': import("eslint").Rule.RuleModule;
                        'jsx-curly-newline': import("eslint").Rule.RuleModule;
                        'jsx-equals-spacing': import("eslint").Rule.RuleModule;
                        'jsx-filename-extension': import("eslint").Rule.RuleModule;
                        'jsx-first-prop-new-line': import("eslint").Rule.RuleModule;
                        'jsx-handler-names': import("eslint").Rule.RuleModule;
                        'jsx-indent': import("eslint").Rule.RuleModule;
                        'jsx-indent-props': import("eslint").Rule.RuleModule;
                        'jsx-key': import("eslint").Rule.RuleModule;
                        'jsx-max-depth': import("eslint").Rule.RuleModule;
                        'jsx-max-props-per-line': import("eslint").Rule.RuleModule;
                        'jsx-newline': import("eslint").Rule.RuleModule;
                        'jsx-no-bind': import("eslint").Rule.RuleModule;
                        'jsx-no-comment-textnodes': import("eslint").Rule.RuleModule;
                        'jsx-no-constructed-context-values': import("eslint").Rule.RuleModule;
                        'jsx-no-duplicate-props': import("eslint").Rule.RuleModule;
                        'jsx-no-leaked-render': import("eslint").Rule.RuleModule;
                        'jsx-no-literals': {
                            meta: import("eslint").Rule.RuleMetaData;
                            create(context: any): (false & {
                                Literal(node: any): void;
                                JSXAttribute(node: any): void;
                                JSXText(node: any): void;
                                TemplateLiteral(node: any): void;
                            }) | ({
                                ImportDeclaration(node: any): void;
                                VariableDeclaration(node: any): void;
                            } & {
                                Literal(node: any): void;
                                JSXAttribute(node: any): void;
                                JSXText(node: any): void;
                                TemplateLiteral(node: any): void;
                            });
                        };
                        'jsx-no-script-url': import("eslint").Rule.RuleModule;
                        'jsx-no-target-blank': import("eslint").Rule.RuleModule;
                        'jsx-no-useless-fragment': import("eslint").Rule.RuleModule;
                        'jsx-one-expression-per-line': import("eslint").Rule.RuleModule;
                        'jsx-no-undef': import("eslint").Rule.RuleModule;
                        'jsx-curly-brace-presence': import("eslint").Rule.RuleModule;
                        'jsx-pascal-case': import("eslint").Rule.RuleModule;
                        'jsx-fragments': import("eslint").Rule.RuleModule;
                        'jsx-props-no-multi-spaces': import("eslint").Rule.RuleModule;
                        'jsx-props-no-spreading': import("eslint").Rule.RuleModule;
                        'jsx-props-no-spread-multi': {
                            meta: {
                                docs: {
                                    description: string;
                                    category: string;
                                    recommended: boolean;
                                    url: string;
                                };
                                messages: {
                                    noMultiSpreading: string;
                                };
                            };
                            create(context: any): {
                                JSXOpeningElement(node: any): void;
                            };
                        };
                        'jsx-sort-default-props': import("eslint").Rule.RuleModule;
                        'jsx-sort-props': import("eslint").Rule.RuleModule;
                        'jsx-space-before-closing': import("eslint").Rule.RuleModule;
                        'jsx-tag-spacing': import("eslint").Rule.RuleModule;
                        'jsx-uses-react': import("eslint").Rule.RuleModule;
                        'jsx-uses-vars': import("eslint").Rule.RuleModule;
                        'jsx-wrap-multilines': import("eslint").Rule.RuleModule;
                        'no-invalid-html-attribute': import("eslint").Rule.RuleModule;
                        'no-access-state-in-setstate': import("eslint").Rule.RuleModule;
                        'no-adjacent-inline-elements': import("eslint").Rule.RuleModule;
                        'no-array-index-key': import("eslint").Rule.RuleModule;
                        'no-arrow-function-lifecycle': import("eslint").Rule.RuleModule;
                        'no-children-prop': import("eslint").Rule.RuleModule;
                        'no-danger': import("eslint").Rule.RuleModule;
                        'no-danger-with-children': import("eslint").Rule.RuleModule;
                        'no-deprecated': import("eslint").Rule.RuleModule;
                        'no-did-mount-set-state': import("eslint").Rule.RuleModule;
                        'no-did-update-set-state': import("eslint").Rule.RuleModule;
                        'no-direct-mutation-state': import("eslint").Rule.RuleModule;
                        'no-find-dom-node': import("eslint").Rule.RuleModule;
                        'no-is-mounted': import("eslint").Rule.RuleModule;
                        'no-multi-comp': import("eslint").Rule.RuleModule;
                        'no-namespace': import("eslint").Rule.RuleModule;
                        'no-set-state': import("eslint").Rule.RuleModule;
                        'no-string-refs': import("eslint").Rule.RuleModule;
                        'no-redundant-should-component-update': import("eslint").Rule.RuleModule;
                        'no-render-return-value': import("eslint").Rule.RuleModule;
                        'no-this-in-sfc': import("eslint").Rule.RuleModule;
                        'no-typos': import("eslint").Rule.RuleModule;
                        'no-unescaped-entities': import("eslint").Rule.RuleModule;
                        'no-unknown-property': import("eslint").Rule.RuleModule;
                        'no-unsafe': import("eslint").Rule.RuleModule;
                        'no-unstable-nested-components': import("eslint").Rule.RuleModule;
                        'no-unused-class-component-methods': import("eslint").Rule.RuleModule;
                        'no-unused-prop-types': import("eslint").Rule.RuleModule;
                        'no-unused-state': import("eslint").Rule.RuleModule;
                        'no-object-type-as-default-prop': import("eslint").Rule.RuleModule;
                        'no-will-update-set-state': import("eslint").Rule.RuleModule;
                        'prefer-es6-class': import("eslint").Rule.RuleModule;
                        'prefer-exact-props': import("eslint").Rule.RuleModule;
                        'prefer-read-only-props': import("eslint").Rule.RuleModule;
                        'prefer-stateless-function': import("eslint").Rule.RuleModule;
                        'prop-types': import("eslint").Rule.RuleModule;
                        'react-in-jsx-scope': import("eslint").Rule.RuleModule;
                        'require-default-props': import("eslint").Rule.RuleModule;
                        'require-optimization': import("eslint").Rule.RuleModule;
                        'require-render-return': import("eslint").Rule.RuleModule;
                        'self-closing-comp': import("eslint").Rule.RuleModule;
                        'sort-comp': import("eslint").Rule.RuleModule;
                        'sort-default-props': import("eslint").Rule.RuleModule;
                        'sort-prop-types': import("eslint").Rule.RuleModule;
                        'state-in-constructor': import("eslint").Rule.RuleModule;
                        'static-property-placement': import("eslint").Rule.RuleModule;
                        'style-prop-object': import("eslint").Rule.RuleModule;
                        'void-dom-elements-no-children': import("eslint").Rule.RuleModule;
                    };
                    configs: {
                        recommended: {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                            };
                            rules: {
                                'react/display-name': number;
                                'react/jsx-key': number;
                                'react/jsx-no-comment-textnodes': number;
                                'react/jsx-no-duplicate-props': number;
                                'react/jsx-no-target-blank': number;
                                'react/jsx-no-undef': number;
                                'react/jsx-uses-react': number;
                                'react/jsx-uses-vars': number;
                                'react/no-children-prop': number;
                                'react/no-danger-with-children': number;
                                'react/no-deprecated': number;
                                'react/no-direct-mutation-state': number;
                                'react/no-find-dom-node': number;
                                'react/no-is-mounted': number;
                                'react/no-render-return-value': number;
                                'react/no-string-refs': number;
                                'react/no-unescaped-entities': number;
                                'react/no-unknown-property': number;
                                'react/no-unsafe': number;
                                'react/prop-types': number;
                                'react/react-in-jsx-scope': number;
                                'react/require-render-return': number;
                            };
                        };
                        all: {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                            };
                            rules: Record<string, 2>;
                        };
                        'jsx-runtime': {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                                jsxPragma: any;
                            };
                            rules: {
                                'react/react-in-jsx-scope': number;
                                'react/jsx-uses-react': number;
                            };
                        };
                    };
                };
            };
            rules: Record<string, 2>;
            languageOptions: {
                parserOptions: {
                    ecmaFeatures: {
                        jsx: boolean;
                    };
                };
            };
        };
        'jsx-runtime': {
            plugins: {
                react: {
                    deprecatedRules: any;
                    rules: {
                        'boolean-prop-naming': import("eslint").Rule.RuleModule;
                        'button-has-type': import("eslint").Rule.RuleModule;
                        'checked-requires-onchange-or-readonly': import("eslint").Rule.RuleModule;
                        'default-props-match-prop-types': import("eslint").Rule.RuleModule;
                        'destructuring-assignment': import("eslint").Rule.RuleModule;
                        'display-name': import("eslint").Rule.RuleModule;
                        'forbid-component-props': import("eslint").Rule.RuleModule;
                        'forbid-dom-props': import("eslint").Rule.RuleModule;
                        'forbid-elements': import("eslint").Rule.RuleModule;
                        'forbid-foreign-prop-types': import("eslint").Rule.RuleModule;
                        'forbid-prop-types': import("eslint").Rule.RuleModule;
                        'forward-ref-uses-ref': {
                            meta: {
                                docs: {
                                    description: string;
                                    category: string;
                                    recommended: boolean;
                                    url: string;
                                };
                                messages: {
                                    missingRefParameter: string;
                                    addRefParameter: string;
                                    removeForwardRef: string;
                                };
                                schema: undefined[];
                                type: string;
                                hasSuggestions: boolean;
                            };
                            create(context: any): {
                                'FunctionExpression, ArrowFunctionExpression'(node: any): void;
                            };
                        };
                        'function-component-definition': import("eslint").Rule.RuleModule;
                        'hook-use-state': import("eslint").Rule.RuleModule;
                        'iframe-missing-sandbox': import("eslint").Rule.RuleModule;
                        'jsx-boolean-value': import("eslint").Rule.RuleModule;
                        'jsx-child-element-spacing': import("eslint").Rule.RuleModule;
                        'jsx-closing-bracket-location': import("eslint").Rule.RuleModule;
                        'jsx-closing-tag-location': import("eslint").Rule.RuleModule;
                        'jsx-curly-spacing': import("eslint").Rule.RuleModule;
                        'jsx-curly-newline': import("eslint").Rule.RuleModule;
                        'jsx-equals-spacing': import("eslint").Rule.RuleModule;
                        'jsx-filename-extension': import("eslint").Rule.RuleModule;
                        'jsx-first-prop-new-line': import("eslint").Rule.RuleModule;
                        'jsx-handler-names': import("eslint").Rule.RuleModule;
                        'jsx-indent': import("eslint").Rule.RuleModule;
                        'jsx-indent-props': import("eslint").Rule.RuleModule;
                        'jsx-key': import("eslint").Rule.RuleModule;
                        'jsx-max-depth': import("eslint").Rule.RuleModule;
                        'jsx-max-props-per-line': import("eslint").Rule.RuleModule;
                        'jsx-newline': import("eslint").Rule.RuleModule;
                        'jsx-no-bind': import("eslint").Rule.RuleModule;
                        'jsx-no-comment-textnodes': import("eslint").Rule.RuleModule;
                        'jsx-no-constructed-context-values': import("eslint").Rule.RuleModule;
                        'jsx-no-duplicate-props': import("eslint").Rule.RuleModule;
                        'jsx-no-leaked-render': import("eslint").Rule.RuleModule;
                        'jsx-no-literals': {
                            meta: import("eslint").Rule.RuleMetaData;
                            create(context: any): (false & {
                                Literal(node: any): void;
                                JSXAttribute(node: any): void;
                                JSXText(node: any): void;
                                TemplateLiteral(node: any): void;
                            }) | ({
                                ImportDeclaration(node: any): void;
                                VariableDeclaration(node: any): void;
                            } & {
                                Literal(node: any): void;
                                JSXAttribute(node: any): void;
                                JSXText(node: any): void;
                                TemplateLiteral(node: any): void;
                            });
                        };
                        'jsx-no-script-url': import("eslint").Rule.RuleModule;
                        'jsx-no-target-blank': import("eslint").Rule.RuleModule;
                        'jsx-no-useless-fragment': import("eslint").Rule.RuleModule;
                        'jsx-one-expression-per-line': import("eslint").Rule.RuleModule;
                        'jsx-no-undef': import("eslint").Rule.RuleModule;
                        'jsx-curly-brace-presence': import("eslint").Rule.RuleModule;
                        'jsx-pascal-case': import("eslint").Rule.RuleModule;
                        'jsx-fragments': import("eslint").Rule.RuleModule;
                        'jsx-props-no-multi-spaces': import("eslint").Rule.RuleModule;
                        'jsx-props-no-spreading': import("eslint").Rule.RuleModule;
                        'jsx-props-no-spread-multi': {
                            meta: {
                                docs: {
                                    description: string;
                                    category: string;
                                    recommended: boolean;
                                    url: string;
                                };
                                messages: {
                                    noMultiSpreading: string;
                                };
                            };
                            create(context: any): {
                                JSXOpeningElement(node: any): void;
                            };
                        };
                        'jsx-sort-default-props': import("eslint").Rule.RuleModule;
                        'jsx-sort-props': import("eslint").Rule.RuleModule;
                        'jsx-space-before-closing': import("eslint").Rule.RuleModule;
                        'jsx-tag-spacing': import("eslint").Rule.RuleModule;
                        'jsx-uses-react': import("eslint").Rule.RuleModule;
                        'jsx-uses-vars': import("eslint").Rule.RuleModule;
                        'jsx-wrap-multilines': import("eslint").Rule.RuleModule;
                        'no-invalid-html-attribute': import("eslint").Rule.RuleModule;
                        'no-access-state-in-setstate': import("eslint").Rule.RuleModule;
                        'no-adjacent-inline-elements': import("eslint").Rule.RuleModule;
                        'no-array-index-key': import("eslint").Rule.RuleModule;
                        'no-arrow-function-lifecycle': import("eslint").Rule.RuleModule;
                        'no-children-prop': import("eslint").Rule.RuleModule;
                        'no-danger': import("eslint").Rule.RuleModule;
                        'no-danger-with-children': import("eslint").Rule.RuleModule;
                        'no-deprecated': import("eslint").Rule.RuleModule;
                        'no-did-mount-set-state': import("eslint").Rule.RuleModule;
                        'no-did-update-set-state': import("eslint").Rule.RuleModule;
                        'no-direct-mutation-state': import("eslint").Rule.RuleModule;
                        'no-find-dom-node': import("eslint").Rule.RuleModule;
                        'no-is-mounted': import("eslint").Rule.RuleModule;
                        'no-multi-comp': import("eslint").Rule.RuleModule;
                        'no-namespace': import("eslint").Rule.RuleModule;
                        'no-set-state': import("eslint").Rule.RuleModule;
                        'no-string-refs': import("eslint").Rule.RuleModule;
                        'no-redundant-should-component-update': import("eslint").Rule.RuleModule;
                        'no-render-return-value': import("eslint").Rule.RuleModule;
                        'no-this-in-sfc': import("eslint").Rule.RuleModule;
                        'no-typos': import("eslint").Rule.RuleModule;
                        'no-unescaped-entities': import("eslint").Rule.RuleModule;
                        'no-unknown-property': import("eslint").Rule.RuleModule;
                        'no-unsafe': import("eslint").Rule.RuleModule;
                        'no-unstable-nested-components': import("eslint").Rule.RuleModule;
                        'no-unused-class-component-methods': import("eslint").Rule.RuleModule;
                        'no-unused-prop-types': import("eslint").Rule.RuleModule;
                        'no-unused-state': import("eslint").Rule.RuleModule;
                        'no-object-type-as-default-prop': import("eslint").Rule.RuleModule;
                        'no-will-update-set-state': import("eslint").Rule.RuleModule;
                        'prefer-es6-class': import("eslint").Rule.RuleModule;
                        'prefer-exact-props': import("eslint").Rule.RuleModule;
                        'prefer-read-only-props': import("eslint").Rule.RuleModule;
                        'prefer-stateless-function': import("eslint").Rule.RuleModule;
                        'prop-types': import("eslint").Rule.RuleModule;
                        'react-in-jsx-scope': import("eslint").Rule.RuleModule;
                        'require-default-props': import("eslint").Rule.RuleModule;
                        'require-optimization': import("eslint").Rule.RuleModule;
                        'require-render-return': import("eslint").Rule.RuleModule;
                        'self-closing-comp': import("eslint").Rule.RuleModule;
                        'sort-comp': import("eslint").Rule.RuleModule;
                        'sort-default-props': import("eslint").Rule.RuleModule;
                        'sort-prop-types': import("eslint").Rule.RuleModule;
                        'state-in-constructor': import("eslint").Rule.RuleModule;
                        'static-property-placement': import("eslint").Rule.RuleModule;
                        'style-prop-object': import("eslint").Rule.RuleModule;
                        'void-dom-elements-no-children': import("eslint").Rule.RuleModule;
                    };
                    configs: {
                        recommended: {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                            };
                            rules: {
                                'react/display-name': number;
                                'react/jsx-key': number;
                                'react/jsx-no-comment-textnodes': number;
                                'react/jsx-no-duplicate-props': number;
                                'react/jsx-no-target-blank': number;
                                'react/jsx-no-undef': number;
                                'react/jsx-uses-react': number;
                                'react/jsx-uses-vars': number;
                                'react/no-children-prop': number;
                                'react/no-danger-with-children': number;
                                'react/no-deprecated': number;
                                'react/no-direct-mutation-state': number;
                                'react/no-find-dom-node': number;
                                'react/no-is-mounted': number;
                                'react/no-render-return-value': number;
                                'react/no-string-refs': number;
                                'react/no-unescaped-entities': number;
                                'react/no-unknown-property': number;
                                'react/no-unsafe': number;
                                'react/prop-types': number;
                                'react/react-in-jsx-scope': number;
                                'react/require-render-return': number;
                            };
                        };
                        all: {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                            };
                            rules: Record<string, 2>;
                        };
                        'jsx-runtime': {
                            plugins: string[];
                            parserOptions: {
                                ecmaFeatures: {
                                    jsx: boolean;
                                };
                                jsxPragma: any;
                            };
                            rules: {
                                'react/react-in-jsx-scope': number;
                                'react/jsx-uses-react': number;
                            };
                        };
                    };
                };
            };
            rules: {
                'react/react-in-jsx-scope': number;
                'react/jsx-uses-react': number;
            };
            languageOptions: {
                parserOptions: {
                    ecmaFeatures: {
                        jsx: boolean;
                    };
                    jsxPragma: any;
                };
            };
        };
    };
}
//# sourceMappingURL=index.d.ts.map