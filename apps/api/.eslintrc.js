module.exports = {
  extends: ['../../.eslintrc.js'],
  parserOptions: { project: './tsconfig.json' },
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.e2e-spec.ts', 'test/**/*.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};