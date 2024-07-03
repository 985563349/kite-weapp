import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  {
    ignores: ['miniprogram_dist', 'miniprogram_npm'],
  },
  {
    files: ['scripts/**'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/**', 'example/**'],
    languageOptions: {
      globals: {
        getApp: false,
        getCurrentPages: false,
        Page: false,
        Component: false,
        App: false,
        wx: false,
        Behavior: false,
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
