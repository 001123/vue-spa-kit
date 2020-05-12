// vue.config.js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  configureWebpack: {
    plugins: process.env.ANALYZER === 'true' ? [new BundleAnalyzerPlugin()] : [],
    performance: {
      hints: process.env.ANALYZER === 'true',
    },
  },
};
