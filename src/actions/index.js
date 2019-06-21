let nextTodoId = 2
export const HOME_ADD_TODO = 'HOME_ADD_TODO'
export const HOME_TOGGLE_TODO = 'HOME_TOGGLE_TODO'
export const HOME_GET_BANNER = 'HOME_GET_BANNER'

export const addTodo = text => ({
  type: HOME_ADD_TODO,
  text,
  id: nextTodoId++
})

export const toggleTodo = id => ({
  type: HOME_TOGGLE_TODO,
  id
})

export const getBanner = () => ({
  type: HOME_GET_BANNER,
  // payload: netApi.getBanner().then(() => dispatch(getItem()))
  payload: fetch('https://dog.ceo/api/breeds/image/random').then(response =>
    response.json()
  )
})
