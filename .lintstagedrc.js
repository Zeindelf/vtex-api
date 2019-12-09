module.exports = {
  '**/*.{js,ts}': [
    'eslint **/*{.js,.ts} --fix --color',
    'jest --bail --findRelatedTests',
  ],
};
