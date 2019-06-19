import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import reduxpromiseMiddleware from 'redux-promise-middleware'
// import { Provider } from 'react-redux'

import rootReducer from './reducers'
import Root from './router/root'

const store = createStore(rootReducer, applyMiddleware(reduxpromiseMiddleware))

render(<Root store={store} />, document.getElementById('root'))
