export default {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@models/(.*)$': '<rootDir>/src/models/$1',
    '@repositories/(.*)$': '<rootDir>/src/repositories/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  }
}
