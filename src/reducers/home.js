// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
const initialState = {
  todos: [
    {
      id: '1',
      text: '这是测试数据哦',
      completed: true
    }
  ],
  bannerImage: '',
  amount: 0
}
const home = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push({
        id: action.id,
        text: action.text,
        completed: false
      })
      return state
    case 'TOGGLE_TODO':
      return state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'GET_BANNER_FULFILLED':
      debugger
      // 请求成功
      console.log('action=' + action)
      return {
        ...state,
        bannerImage: action.payload && action.payload.message
      }
    default:
      return state
  }
}

export default home
