const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  // devtool: 'eval', // product -> hidden-source-map
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },

  entry: {
    app: './src/Client.tsx',
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
