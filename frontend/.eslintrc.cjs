module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'react/display-name': 0,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react-hooks',
    'react',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unicorn',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 0,
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': 2,
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'eol-last': 2,
    // `import/default` and `import/namespace` are slow.
    'import/default': 0,
    'import/namespace': 0,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': [2],
    'import/no-namespace': 2,
    'import/order': 0,
    'no-console': 0,
    'no-const-assign': 2,
    'no-extra-parens': [2, 'functions'],
    'no-irregular-whitespace': 2,
    'no-this-before-super': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 1,
    'no-unused-vars': 0,
    'no-var': 2,
    'object-curly-spacing': 0,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/jsx-sort-props': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    semi: [2, 'always'],
    'sort-keys-fix/sort-keys-fix': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      { anonymous: 'never', asyncArrow: 'always', named: 'never' },
    ],
    'typescript-sort-keys/interface': 2,
    'typescript-sort-keys/string-enum': 2,
    'unicorn/better-regex': 2,
    'unicorn/catch-error-name': 2,
    'unicorn/consistent-function-scoping': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-useless-promise-resolve-reject': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/numeric-separators-style': 2,
    'unicorn/prefer-array-flat-map': 2,
    'unicorn/prefer-array-index-of': 2,
    'unicorn/prefer-array-some': 2,
    'unicorn/prefer-at': 2,
    'unicorn/prefer-dom-node-append': 2,
    'unicorn/prefer-native-coercion-functions': 2,
    'unicorn/prefer-node-protocol': 2,
    'unicorn/prefer-number-properties': 2,
    'unicorn/prefer-optional-catch-binding': 2,
    'unicorn/prefer-string-replace-all': 2,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-ternary': 2,
    'unicorn/prefer-top-level-await': 2,
    'unicorn/text-encoding-identifier-case': 2,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: '18.0.0',
    },
  },
};