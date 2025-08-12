import vue from 'eslint-plugin-vue';

export default [
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      vue,
    },
    rules: {
      // Add your custom rules here
      'vue/no-unused-vars': 'warn',
      'vue/html-self-closing': 'error',
    },
  },
];
