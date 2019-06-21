const initialState = {
  isLoading: false
}

const shared = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_PAGE_PROPS':
      const { name, props } = action.payload
      let newState = state
      newState[name + 'ExtendProps'] = Object.assign(
        {},
        state[name + 'ExtendProps'],
        props
      )
      return newState
    default:
      return state
  }
}

export default shared
