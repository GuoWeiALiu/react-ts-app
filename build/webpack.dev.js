const path = require('path');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = webpackMerge.merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/',
    compress: true,
    port: 9000,
  },
});
