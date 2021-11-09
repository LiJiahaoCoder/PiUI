'use strict';

const path = require('path');
const { RollupOptions } = require('rollup');
const json = require('@rollup/plugin-json');
const alias = require('@rollup/plugin-alias');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const { default: resolve } = require('@rollup/plugin-node-resolve');
const pkg = require('./package.json');

const rootDir = path.resolve(__dirname, './src');
const input = path.join(rootDir, './index.ts');

/**
 * @const
 * @type {RollupOptions}
 */
const config = {
  input,
  treeshake: true,
  external: ['react', 'react-dom'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: false,
    }
  ],
  plugins: [
    alias({
      resolve: ['.ts', '.tsx', '.js', '.jsx'],
      entries: {
        '@/*': path.resolve(__dirname, './src'),
      },
    }),
    typescript(),
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    json(),
    postcss(),
    terser(),
  ],
};

module.exports = config;
