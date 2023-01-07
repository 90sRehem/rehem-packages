module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "camelcase": "off",
    "@typescript-eslint/ban-types": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": [
          "PascalCase"
        ],
        "prefix": ["I"],
      },
      {
        "selector": "typeAlias",
        "format": [
          "PascalCase"
        ],
        "prefix": ["I"],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "_"
      }
    ],
    "react/no-unused-prop-types": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "no-restricted-imports": [
      "error",
      {
        "patterns": [
          "@/features/*/*"
        ]
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
