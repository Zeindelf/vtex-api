module.exports = {
  '**/*.{js,ts}': [
    'npm run lint',
    'jest --verbose --bail --findRelatedTests',
  ],
};
