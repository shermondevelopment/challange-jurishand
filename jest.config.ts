export default {
  collectCoverageFrom: ['<rootDir>/app/**/*.ts'],
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  roots: ['<rootDir>/tests', '<rootDir>/app'],
  transform: {
    '\\.ts$': 'ts-jest'
  }
}
