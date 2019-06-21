import { combineReducers } from 'redux'
import home from './home'
import list from './list'
import shared from './shared'

export default combineReducers({
  home,
  list,
  shared
})
