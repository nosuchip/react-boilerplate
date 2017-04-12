const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: path.resolve(BUILD_DIR, 'js'),
    publicPath: 'js',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
