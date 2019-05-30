const path = require('path');
const MarkdownItContainer = require('markdown-it-container');
const MarkdownItCheckBox = require('markdown-it-task-checkbox');
const MarkdownItDec = require('markdown-it-decorate');
const { wrapCustomClass } = require('./build/utils');

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

const vueMarkdown = {
  raw: true,
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">';
    };
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence);
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline;
    MarkdownIt.renderer.rules.code_inline = (...args) => {
      args[0][args[1]].attrJoin('class', 'code_inline');
      return codeInline(...args);
    };
    return source;
  },
  use: [
    [
      MarkdownItContainer,
      'demo',
      {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            return `<demo-block>
                      <div slot="highlight">`;
          }
          return '</div></demo-block>\n';
        }
      }
    ],
    [
      MarkdownItCheckBox,
      {
        disabled: true
      }
    ],
    [MarkdownItDec]
  ]
};

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('examples'));
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(vueMarkdown);
  }
};
