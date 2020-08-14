const
  globalDefinitions = {
    // shortcuts of bootstrap $.notify(). symfony\web\js\main.js
    bootstrapNotify: 'readonly',
    showToast: 'readonly'
  },

  // 'off': 0  |  'warn': 1  |  'error': 2  (only the errors will crash the pipeline)
  customRules = {
    // allow semicolons ;
    semi: 'off',

    // allow prototype extending (useful for dates, strings...)
    'no-extend-native': 'off',

    // require combine consecutive variable declarations (var, let, const)
    'one-var': ['error', 'consecutive'],

    // console.log()
    'no-console': 'error'
  };

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true
  },
  extends: ['eslint:recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    ...globalDefinitions
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: customRules
};
