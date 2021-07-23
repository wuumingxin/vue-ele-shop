module.exports = {
  devServer: {
    proxy: {
      '/api1': {
        target: 'https://restapi.ele.me/bgs/poi/reverse_geo_coding', // 设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/api1': ''// 这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
          // 比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login'即可
        }
      },
      '/api2': {
        target: 'http://cangdu.org:8001', // 设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/api2': ''// 这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
          // 比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login'即可
        }
      }
    }
  }
}
