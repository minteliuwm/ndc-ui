const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const Components = require('./get-components')();
const entry = {};
Components.forEach(c => {
  entry[c] = `./packages/${c}/index.js`;
});

const webpackConfig = {
  mode: 'production',
  entry: entry,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
    symlinks: false
  },
  performance: {
    hints: false
  },
  stats: 'none',
  optimization: {
    minimize: false
  },
  module: {
    rules: [{
      test: /\.(jsx?|babel|es6)$/,
      include: process.cwd(),
      loader: 'babel-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
};

module.exports = webpackConfig;
