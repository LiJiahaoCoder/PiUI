'use strict';

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  modules: true,
  plugins: [
    autoprefixer(),
    cssnano(),
  ],
};
