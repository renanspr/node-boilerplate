import { defineConfig, mergeConfig } from 'vitest/config'
import vitestConfig from './vitest.config'

export default mergeConfig(vitestConfig, defineConfig({
  test: {
    include: ['src/tests/**/*.test.ts'],
    threads: false,
    setupFiles: ['src/tests/helpers/setup.ts'],
    coverage: {
      enabled: true
    }
  }
}))
