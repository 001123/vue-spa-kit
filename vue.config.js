/* eslint-disable import/no-extraneous-dependencies */
// vue.config.js
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const listWebpackPlugin = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    axios: 'axios',
    Axios: 'axios',
  }),
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
