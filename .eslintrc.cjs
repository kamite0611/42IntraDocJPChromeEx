module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', '@typescript-eslint', 'unused-imports', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-var': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'method',
        format: ['camelCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        // TODO: どこかのタイミングで適応して一括修正
        // custom: {
        //   regex: '^I[A-Z]',
        //   match: true,
        // },
      },
    ],
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'import/order': 0,
    'arrow-body-style': 0,
    'react/display-name': 0,
    'import/no-duplicates': 1,
    'react/no-children-prop': 0,
    'react/self-closing-comp': 0,
    'react-hooks/exhaustive-deps': 0,
    '@next/next/no-img-element': 0,
    'react/no-unescaped-entities': 0,
    'import/no-useless-path-segments': 1,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/ban-types': 0,
  },
  overrides: [
    {
      // TypeScript 用に設定を上書く
      files: ['*.ts', '*.tsx'],
      rules: {
        'unused-imports/no-unused-imports': 'warn',
        'import/order': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling'],
              'index',
              'object',
              'type',
            ],
            pathGroups: [],
            pathGroupsExcludedImportTypes: ['builtin'],
            alphabetize: { order: 'asc', caseInsensitive: false },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
