const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      index: './src/index.js',
      print: './src/print.js',
      db: './src/db.js',
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
  },
  
  //plugins: [
      //new HtmlWebpackPlugin({
          //title: 'Todo List',
      //}),
    //],
  mode: 'development',
  target: 'web',
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {

        test: /\.js$|jsx/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};