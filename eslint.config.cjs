const globals = require('globals');
const { FlatCompat } = require('@eslint/eslintrc');
const pluginJs = require('@eslint/js');
// const path = require('path');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

module.exports = [
  { languageOptions: { globals: globals.node } },
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': ['error', 'ignorePackages'],
      'no-console': 'off',
    },
  },
];
