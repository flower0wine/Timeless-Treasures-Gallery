module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: [".vue"],
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    "eslint:recommended",

    "@vue/standard",

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    "plugin:@typescript-eslint/recommended",

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    // "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
    "plugin:vue/vue3-strongly-recommended", // Priority B: Strongly Recommended (Improving Readability)
    // "plugin:vue/vue3-recommended", // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    "plugin:prettier/recommended",
  ],

  plugins: ["vue", "prettier", "@typescript-eslint"],

  globals: {
    ga: "readonly", // Google Analytics
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
  },

  // add your custom rules here
  rules: {
    "vue/script-setup-uses-vars": "error",
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "vue/no-export-in-script-setup": "off",
    "@typescript-eslint/no-require-imports": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],

    semi: ["error", "always"],

    "eol-last": ["error", "always"],

    "no-trailing-spaces": "error",

    "prefer-promise-reject-errors": "off",

    "no-multi-str": "error",

    quotes: ["error", "double", { avoidEscape: true }],

    // this rule, if on, would require explicit return type on the `render` function
    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/no-unused-expressions": "off",

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    "@typescript-eslint/no-var-requires": "off",

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    "no-unused-vars": "off",

    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "default-case": "error",

    "no-empty": ["error"],

    // 必须使用逗号结尾
    "comma-dangle": ["error", "always-multiline"],

    // 对象两端加空格
    "object-curly-spacing": ["error", "always"],

    // 强制使用一致的缩进风格
    indent: ["error", 2],

    "key-spacing": ["error", { beforeColon: false }],

    "no-multi-spaces": "error",

    // 禁止使用未声明的变量
    "no-undef": "error",

    // 如果变量未被重新赋值，推荐使用 const。
    "prefer-const": "error",

    // 强制箭头函数前后有空格
    "arrow-spacing": ["error", { before: true, after: true }],

    // 限制空行的数量
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],

    // 强制中缀操作符周围有空格
    "space-infix-ops": "error",

    // 强制数组括号内无空格
    "array-bracket-spacing": ["error", "never"],

    // 强制块内空格一致
    "block-spacing": "error",

    // 强制大括号风格一致
    "brace-style": ["error", "1tbs"],

    // 禁止不必要的布尔类型转换
    "no-extra-boolean-cast": "error",

    // 禁止不必要的三元表达式
    "no-unneeded-ternary": "error",

    // 禁止嵌套的三元表达式
    "no-nested-ternary": "error",

    // 禁止 if 语句作为 else 块中的唯一语句
    "no-lonely-if": "error",

    "no-useless-concat": "error",

    "no-useless-escape": "error",

    "space-in-parens": ["error", "never"],

    "function-call-argument-newline": ["error", "consistent"],

    "no-dupe-keys": "error",

    "no-duplicate-case": "error",

    "no-empty-function": [
      "error",
      {
        allow: ["functions", "arrowFunctions", "methods", "generatorFunctions"],
      },
    ],

    "no-extra-semi": "error",
  },
};
