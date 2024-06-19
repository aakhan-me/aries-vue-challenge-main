module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/recommended', // Use plugin:vue/recommended instead
      'eslint:recommended',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Add additional rules if needed
    },
  };
  