export default {
  bail: 1,
  verbose: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/src/**/test/**/*.spec.{js,ts}'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}', '!**/test/**'],
  coverageProvider: 'v8',
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin'],
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
};
