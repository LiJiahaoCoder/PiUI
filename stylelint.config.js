'use strict';

const { Config } = require('stylelint');

/**
 * @const
 * @type {Config}
 */
const config = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-less'],
};

module.exports = config;
