// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { LIST_GET_NEWS } from '../actions/list'
const initialState = {
  newList: []
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case `${LIST_GET_NEWS}_PENDING`:
      // 异步加载中
      return state
    case `${LIST_GET_NEWS}_FULFILLED`:
      // 请求成功
      console.log('action=' + action)
      return {
        ...state,
        newList: action.payload && action.payload.items
      }
    case `${LIST_GET_NEWS}_REJECTED`:
      // 请求失败
      return Object.assign({}, state, { newList: [] })
    default:
      return state
  }
}

export default list
