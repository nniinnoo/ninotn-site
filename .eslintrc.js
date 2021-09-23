// This setting is designed to disable all formating rules inside airbnb ESLint
// and only use it to catch errors

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "import/no-unresolved": "off",
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
  },
};
