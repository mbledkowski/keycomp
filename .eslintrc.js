module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: false
  }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "max-len": [2, 168, 2, {"ignoreComments": true, "ignoreUrls": true, "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\("}],
    "import/extensions": ["error", "never"]
  },
};
