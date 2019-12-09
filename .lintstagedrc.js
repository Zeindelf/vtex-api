module.exports = {
  '**/*.{js,ts}': [
    'npm run lint',
    'jest --bail --findRelatedTests',
  ],
};
