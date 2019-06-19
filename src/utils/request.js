import axios from 'axios'
import Cookies from 'js-cookie'
import netAPI from '../api'

// create an axios instance
const service = axios.create({
  baseURL: '/api/', // api的base_url
  // baseURL: 'steward-api', // api的base_url
  timeout: 5000, // request timeout
  headers: {
    source: 'PC'
  }
})
service.interceptors.request.use(
  config => {
    // 提交订单接口，未登陆不做统一跳登陆页面处理
    if (config.url === '/order') {
      config.loginType = 1
    } else if (config.url === '/user/login') {
      config.headers['trace'] = JSON.stringify({
        loginSource: '12',
        terminalModel: '01'
      })
    }
    // console.log('config1', config);
    let token = Cookies.get('jwt-token')
    let expires = Cookies.get('jwt-token-expires')
    var timer = null
    // console.log(expires);
    if (token) {
      config.headers['jwt-token'] = token
      if (Date.now() - expires > 600 * 1000) {
        timer = setTimeout(function() {
          // 超过10分钟，则更新下token
          netAPI
            .refresh({ 'jwt-token': token })
            .then(response => {
              let data = response.token
              // console.log('data=' + data);
              // 设置过期时间为30分钟
              Cookies.set('jwt-token', data, { expires: 1 / (24 * 2) })
              Cookies.set('jwt-token-expires', Date.now(), {
                expires: 1 / (24 * 2)
              })
              clearTimeout(timer)
            })
            .catch(err => {
              console.log('err', err)
              // 设置过期时间为15分钟
              Cookies.set('jwt-token-expires', Date.now(), {
                expires: 1 / (24 * 2) / 2
              })
              clearTimeout(timer)
            })
        }, 3000)
      }
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  res => {
    // console.log('拦截器response：', res);
    let { data, headers } = res
    if (headers['jwt-token']) {
      Cookies.set('jwt-token', headers['jwt-token'], { expires: 1 / (24 * 2) })
      Cookies.set('jwt-token-expires', Date.now(), { expires: 1 / (24 * 2) })
    }
    let type = typeof data
    // eslint-disable-next-line default-case
    switch (type) {
      case 'boolean':
      case 'number':
      case 'string':
        return data
      case 'object':
        if (!data) {
          return
        }
        return data
    }
  },
  error => {
    // console.log('error长时间未操作的返回结果：' , JSON.stringify(error));
    // console.log(error.response.status);
    // const originalRequest = error.config;
    //
    if (
      [401].indexOf(error.response.status) > -1 &&
      error.config.loginType !== 1
    ) {
      // 刷新token失败，跳转登录页面。
    } else {
      if (
        error.response.data &&
        error.response.data.message &&
        error.config.loginType !== 1
      ) {
        console.log(error.response.data.message)
      } else {
        if (error.response.data && error.config.loginType !== 1) {
          console.log('抱歉，请求出错了！')
        }
      }
    }
    return Promise.reject(error)
  }
)

export default service
