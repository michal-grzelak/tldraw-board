// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import reactHooks from 'eslint-plugin-react-hooks'
// @ts-expect-error - no types available
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: ['build', 'eslint.config.js'],
  },

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
  },

  eslint.configs.recommended,

  tseslint.configs.strict,
  tseslint.configs.stylistic,

  tanstackQuery.configs['flat/recommended'],

  // TODO: this uses `canary` version for compatibility with flat config; update to >= 5.2.0 when released
  reactHooks.configs['recommended-latest'],

  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,

  {
    rules: {
      'no-misleading-character-class': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'unknown',
            'parent',
            'sibling',
            'index',
            'type',
          ],
        },
      ],
    },
  },
)
