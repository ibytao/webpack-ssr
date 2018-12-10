const webpack = require('webpack')

const path = require('path')

const client = {
  name: 'client',
  mode: 'development',
  entry: {
    index: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000',
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}

const server = {
  mode: 'development',
  name: 'server',
  target: 'node',
  entry: './src/server/render.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}

module.exports = [client, server]
