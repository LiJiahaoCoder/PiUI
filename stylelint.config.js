'use strict';

const { Config } = require('stylelint');
const PROD = process.env.NODE_ENV === 'production';

/**
 * @const
 * @type {Config}
 */
const config = {
  extends: 'stylelint-config-standard',
  rules: {
    'prettier/prettier': PROD ? true : null,
  },
};

module.exports = config;
