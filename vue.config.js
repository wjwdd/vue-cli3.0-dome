const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  outputDir: 'dist',
  publicPath: './',

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@view', resolve('src/view'))
      .set('@assets', resolve('src/assets'))
      .set('@util', resolve('src/util'))
      .set('@service', resolve('src/service'));
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://www.apiopen.top', // 目标 API 地址
        ws: false, // 如果要代理 websockets
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 将主机标头的原点更改为目标URL
        pathRewrite: {
          '^/api': ''
        }
      }
    },

    before: app => {}
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/less/Mymixins.less')]
    }
  }
};
