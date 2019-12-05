module.exports =  {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends:  [
    'airbnb-typescript/base',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions:  {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  plugins: [
    'import',
    'promise',
    'jest',
  ],
  rules:  {
    'linebreak-style': 0, // Avoid LF/CRLF on Win/Linux/Mac
    'import/no-unresolved': 0,
  },
  globals: {
    jest: true,
  },
};
