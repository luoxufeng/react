import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
// import { Provider } from 'react-redux'

import rootReducer from './reducers'
import Root from './router/root'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

render(<Root store={store} />, document.getElementById('root'))
