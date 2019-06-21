import netApi from '../api/index'
export const LIST_GET_NEWS = 'LIST_GET_NEWS'

export const getNews = query => ({
  type: LIST_GET_NEWS,
  // payload: netApi.getBanner().then(() => dispatch(getItem()))
  payload: netApi.getNewsList(query).then(res => res)
})
