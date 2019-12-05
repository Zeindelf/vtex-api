module.exports =  {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends:  [
    'airbnb-typescript/base',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions:  {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'import',
    'promise',
  ],
  rules:  {
    'linebreak-style': 0, // Avoid LF/CRLF on Win/Linux/Mac
    'import/no-unresolved': 0,
  },
};
