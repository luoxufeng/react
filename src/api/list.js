import request from '../utils/request'
export default {
  // 会员动态
  getNewsList(data) {
    return request({
      url: '/user/usertrend',
      method: 'get',
      params: data
    })
  }
}
