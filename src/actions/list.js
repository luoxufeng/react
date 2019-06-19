import netApi from '../api/index'

export const getNews = query => ({
  type: 'GET_NEWS',
  // payload: netApi.getBanner().then(() => dispatch(getItem()))
  payload: netApi.getNewsList(query).then(res => res)
})

export const getItem = url => ({
  type: 'GET_ITEM',
  payload: netApi.getInsuranceFee(10)
})
