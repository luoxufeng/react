import request from '../utils/request'

export default {
  // 获取保费
  getInsuranceFee(value) {
    return request({
      url: '/order/supportValue',
      method: 'post',
      data: { goodsValue: value }
    })
  },
  getBanner() {
    return request({
      url: '/fileshow/filesid',
      method: 'get'
    })
  }
}
