/* eslint-disable import/no-extraneous-dependencies */
// vue.config.js
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const listWebpackPlugin = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    axios: 'axios',
  }),
  new LodashModuleReplacementPlugin(),
  new MomentLocalesPlugin({
    localesToKeep: ['es-us', 'vi'],
  }),
];

if (process.env.ANALYZER === 'true') {
  listWebpackPlugin.push(new BundleAnalyzerPlugin());
}

module.exports = {
  configureWebpack: {
    plugins: listWebpackPlugin,
    performance: {
      hints: false,
    },
  },
};
