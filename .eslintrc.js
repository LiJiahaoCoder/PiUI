'use strict';

const { ESLintOptions } = require('eslint');

/**
 * @const
 * @type {ESLintOptions}
 */
const config = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    'plugin:react/recommended',
    'xo',
  ],
  ignorePatterns: [
    'lib',
    '__tests__/setup.ts',
    '*.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'sort-imports': [
      'error',
      {
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

module.exports = config;
