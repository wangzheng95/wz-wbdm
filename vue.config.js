// 项目的配置文件
module.exports = {
  devServer: {
    proxy: {
      '/wbdm': {
        target: 'http://manhua.weibo.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/wbdm': ''
        }
      }
    }
  }
}
