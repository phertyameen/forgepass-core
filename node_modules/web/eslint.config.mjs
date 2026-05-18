import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  globalIgnores([
    '.next/**',
    'node_modules/**',
    '*.config.ts',
    '*.config.mjs',
    '*.config.js',
  ]),
  ...nextVitals,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
])