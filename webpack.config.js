var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var path = require('path');
module.exports = {
   entry: './js/index.js',
   output: {
       path: './js',
       filename: 'app.js'
   },
   module:  {
     loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
        loader: "file-loader?name=[name].[ext]"
      }
     ]
   },
   plugins: [
     new BowerWebpackPlugin(),
     new webpack.ProvidePlugin({
       $:      "jquery",
       jQuery: "jquery"
     }),
     new ExtractTextPlugin('./css/style.css'),
     new webpack.optimize.UglifyJsPlugin({
           compress: { warnings: false }
    })
   ]
 };
