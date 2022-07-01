export default {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleNameMapper: {},
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  }
}
