import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  preset: 'ts-jest',
  rootDir: 'src/tests',
  collectCoverage: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  coverageDirectory: '.coverage'
}

export default config