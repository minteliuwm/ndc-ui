const path = require('path');

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(false);
    config.resolve.alias.set('@', resolve('examples'));
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('./build/md-loader/index.js')
      .loader('./build/md-loader/index.js');
  }
};
