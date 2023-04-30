'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rollup = require('rollup');
var pluginNodeResolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var rollupPluginSwc3 = require('rollup-plugin-swc3');
var rollupPluginTypescriptPaths = require('rollup-plugin-typescript-paths');
var path = require('path');
var packageJson = require('./package.json');

var rollup_config = rollup.defineConfig([
  {
    input: packageJson.source,
    output: [
      {
        dir: path.dirname(packageJson.module),
        format: 'esm',
        entryFileNames: '[name].mjs',
        sourcemap: true,
        preserveModules: true,
        strict: true,
        exports: 'named',
      },
      {
        dir: path.dirname(packageJson.main),
        format: 'cjs',
        entryFileNames: '[name].js',
        sourcemap: true,
        preserveModules: true,
        strict: true,
        exports: 'named',
        esModule: false,
      },
    ],
    treeshake: 'smallest',
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      rollupPluginTypescriptPaths.typescriptPaths(),
      pluginNodeResolve.nodeResolve(),
      commonjs(),
      rollupPluginSwc3.swc(
        rollupPluginSwc3.defineRollupSwcOption({
          sourceMaps: true,
          tsconfig: 'tsconfig.json',
        })
      ),
    ],
  },
]);

exports.default = rollup_config;
