module.exports = {
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  verbose: true,
  testMatch: [
    '<rootDir>/tests/**/*.+(js|ts)',
    '<rootDir>/src/**/?(*.)+(spec|test).+(js|ts)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
};
