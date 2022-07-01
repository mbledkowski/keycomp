const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb", "@vue/typescript/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: false,
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": [WARN, 180, 2, { ignoreComments: true, ignoreUrls: true, ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(" }],
    semi: [ERROR, "never"],
    "no-plusplus": OFF,
    "import/extensions": OFF,
    "import/no-unresolved": OFF,
    "prefer-const": WARN,
  },
};
