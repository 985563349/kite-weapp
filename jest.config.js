export default {
  bail: 1,
  verbose: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/src/**/__test__/**/*.spec.{js,ts}'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}', '!**/__test__/**'],
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};
