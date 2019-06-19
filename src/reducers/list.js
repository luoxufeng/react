// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
const initialState = {
  newList: []
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS_PENDING':
      // 异步加载中
      return state
    case 'GET_NEWS_FULFILLED':
      // 请求成功
      console.log('action=' + action)
      return {
        ...state,
        newList: action.payload && action.payload.items
      }
    case 'GET_NEWS_REJECTED':
      // 请求失败
      return Object.assign({}, state, { newList: [] })
    default:
      return state
  }
}

export default list
