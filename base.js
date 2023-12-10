/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-import-helpers'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-case-declarations': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'type',
          '/.css$/',
          ['/^next/', '/^react/'],
          ['/^styled-components/', '/^polished/'],
          '/^@asjuanguilherme/',
          'module',
          '/lib/',
          '/hooks/',
          '/contexts/',
          ['/components/', '/icons/'],
          'parent',
          ['sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
}
