'use strict';

const { default: { createTransformer } } = require('babel-jest');
const { TransformOptions } = require('@babel/core');
const { version } = require('core-js/package.json');
const env = process.env.NODE_ENV;

/**
 * @const
 * @type {TransformOptions}
 */
const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '65',
          ie: '11'
        },
        modules: env === 'test' ? 'commonjs' : false,
        useBuiltIns: 'usage',
        corejs: version,
        bugfixes: true
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      },
    ],
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true
      },
    ],
  ],
};

module.exports = createTransformer(config);
