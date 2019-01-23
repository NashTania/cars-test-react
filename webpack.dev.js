const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const path = require( 'path' );

module.exports = merge( common, {
  watch: true,
  devServer: {
    contentBase: path.join( __dirname, 'public' ),
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    inline:true,
    port: 8080
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  }
});
