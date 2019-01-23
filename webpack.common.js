const path = require( 'path' );
const webpack = require( 'webpack' );
const LiveReloadPlugin = require( 'webpack-livereload-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const nodeExternals = require('webpack-node-externals')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }]

      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [

    new LiveReloadPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
    //new BaseHrefWebpackPlugin({ baseHref: '/' })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }

};
