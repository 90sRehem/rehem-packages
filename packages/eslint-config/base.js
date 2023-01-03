module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
  ],
  rules: {
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
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/prefer-default-export": "off",
    camelcase: "off",
    "@typescript-eslint/ban-types": "off",
    "class-methods-use-this": "off",
    "no-shadow": "off",
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "off",
    "no-underscore-dangle": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [
          ".js",
          ".jsx",
        ],
      },
    },
  },
};
