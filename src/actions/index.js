let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: nextTodoId++
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const getBanner = () => ({
  type: 'GET_BANNER',
  // payload: netApi.getBanner().then(() => dispatch(getItem()))
  payload: fetch('https://dog.ceo/api/breeds/image/random').then(response =>
    response.json()
  )
})
