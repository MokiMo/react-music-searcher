module.exports = {
    "extends": ["airbnb", "prettier"],
    "parser": "babel-eslint",
    "plugins": ["prettier", "react"],
    "rules": {
      "linebreak-style" : 0,
      "react/jsx-filename-extension": 0,
      "react/destructuring-assignment": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/prop-types": 0,
      "react/forbid-prop-types": 0,
      "import/no-named-as-default-member": 0,
      "import/no-named-as-default": 0,
      "class-methods-use-this": 0,
      "no-console": 0,
      "no-nested-ternary": 0,
      "prettier/prettier": [
        "error",
        { "singleQuote": true, "trailingComma": true },
      ]
    },
    
};