'use strict';
var UglifyJsPlugin = require("uglify-js-plugin");
var webpack = require('webpack');
var webpackConfig = {
  entry: './src/app.js',

  output: {
    path: 'build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.eot$/, /\.woff$/, /\.ttf$/],
        loader: 'url-loader'

		}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
   devServer: {
        historyApiFallback: true,
    },
};

module.exports = webpackConfig;
