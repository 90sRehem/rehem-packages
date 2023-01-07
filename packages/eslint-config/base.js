module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
    indent: [
      "error",
      2,
    ],
    "linebreak-style": [
      "error",
      "unix",
    ],
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "always",
    ],
    "comma-dangle": ["error", "only-multiline"],
    "import/prefer-default-export": "off",
    camelcase: "off",
    "@typescript-eslint/ban-types": "off",
    "class-methods-use-this": "off",
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: [
          "PascalCase",
        ],
        prefix: ["I"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
