/* eslint-disable */

const path = require('path');
const webpack = require('webpack');


function addStyleResource(config, type, lang) {
  const rule = config.module.rule(lang)
    .oneOf(type);
  rule.use('resolve-url-loader')
    .loader('resolve-url-loader')
    .after('css-loader');
}


module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  productionSourceMap: false,
  runtimeCompiler: true,

  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },

  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/styles/settings.scss`
        data: '@import "@/styles/settings.scss";',
        includePaths: [
          path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules'),
        ],
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    disableHostCheck: true,
    proxy: {
      '^/admin|api|static|media/|server': {
        target: 'http://localhost:9000',
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    overlay: {
      warnings: false,
      errors: true,
    },
  },

  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config, type, 'sass'));
    types.forEach(type => addStyleResource(config, type, 'scss'));
  },
  transpileDependencies: [
    /^buefy/,
    /^vue2-google-maps/,
    /^vue-search-select/,
    /^vuex-module-decorators/,
  ], // Babel no explora los node modules, esto es para que si lo haga.
};
