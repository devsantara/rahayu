import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';

const nextJsReservedFiles = [
  'default',
  'error',
  'forbidden',
  'instrumentation',
  'layout',
  'loading',
  'mdx-components',
  'middleware',
  'not-found',
  'page',
  'route',
  'template',
  'unauthorized',
];

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: eslintJs.configs.recommended,
});

/**
 * @type {import('eslint').Linter.Config}
 */
const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'prettier',
      'next/core-web-vitals',
      'next/typescript',
    ],
  }),
  {
    name: 'Javascript rules',
    rules: {
      'no-console': ['warn'],
      'no-debugger': ['error'],
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-tabs': ['error', { allowIndentationTabs: false }],
      indent: ['error', 2],
      'max-len': ['error', 80],
      'jsx-quotes': ['error', 'prefer-double'],
      'linebreak-style': ['error', 'unix'],
      eqeqeq: ['error', 'always'],
      'no-undef': 'error',
      'prefer-const': [
        'error',
        { destructuring: 'all', ignoreReadBeforeAssign: false },
      ],
    },
  },
  {
    name: 'Import rules',
    rules: {
      'import/first': ['error'],
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-absolute-path': ['error'],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/no-cycle': ['error'],
      'import/no-self-import': ['error'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'unknown',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          named: true,
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    name: 'Source code export rules',
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    // only allow named export in source code
    rules: {
      'import/no-default-export': ['error'],
    },
  },
  {
    name: 'NextJS reserved files export rules',
    files: [
      ...nextJsReservedFiles.map((keyword) => {
        return `src/app/**/${keyword}.{js,jsx,ts,tsx}`;
      }),
    ],
    // only allow default export in reserved files
    rules: {
      'import/no-default-export': ['off'],
      'import/prefer-default-export': ['error'],
    },
  },
  {
    name: 'Typescript rules',
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'all', argsIgnorePattern: '_' },
      ],
      '@typescript-eslint/no-empty-interface': [
        'error',
        { allowSingleExtends: true },
      ],
    },
  },
  {
    name: 'React rules',
    rules: {
      'react/jsx-boolean-value': ['error', 'never'],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
      'react/function-component-definition': [
        'error',
        { namedComponents: 'function-declaration' },
      ],
    },
  },
];

export default eslintConfig;
