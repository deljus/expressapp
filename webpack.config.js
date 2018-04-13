var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './admin/src/index.js'
  ],
  output: {
    path: __dirname + '/static/js',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve('./admin/src'),
      path.resolve('./node_modules')
    ]
  },
  devServer:{
    contentBase: './admin/public/',
    port: 9000
  }
};