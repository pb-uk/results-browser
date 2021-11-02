// rollup.config.js

import vue from 'rollup-plugin-vue';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default [
  // ESM build to be used with webpack/rollup.
  /*
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js',
    },
    plugins: [vue()],
  },
  */
  // SSR build.
  /*
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js',
    },
    plugins: [vue({ template: { optimizeSSR: true } })],
  },
  */
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: `dist/${pkg.name}.min.js`,
    },
    plugins: [
      nodeResolve(),
      vue({ template: { isProduction: true } }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
    ],
  },
];
