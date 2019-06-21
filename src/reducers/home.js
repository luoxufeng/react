// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import { deepCopy } from '../utils/Helper'
import {
  HOME_ADD_TODO,
  HOME_TOGGLE_TODO,
  HOME_GET_BANNER
} from '../actions/index'
const initialState = {
  todos: [
    {
      id: 1,
      text: '这是测试数据哦',
      completed: true
    }
  ],
  bannerImage: '',
  amount: 0
}
const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ADD_TODO:
      state.todos.push({
        id: action.id,
        text: action.text,
        completed: false
      })
      return state
    case HOME_TOGGLE_TODO:
      let todos = deepCopy(state.todos)
      todos.map(x => {
        if (x.id === action.id) {
          x.completed = !x.completed
        }
      })
      return {
        ...state,
        todos: todos
      }
    case `${HOME_GET_BANNER}_PENDING`:
      // 请求loading
      return state
    case `${HOME_GET_BANNER}_FULFILLED`:
      // 请求成功
      console.log('action=' + action)
      return {
        ...state,
        bannerImage: action.payload && action.payload.message
      }
    case `${HOME_GET_BANNER}_REJECTED`:
      // 请求失败
      return {
        ...state,
        todos: []
      }
    default:
      return state
  }
}

export default home
