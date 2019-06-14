import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import List from '../page/List'
const Rout = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/list" component={List} />
    </Router>
  </Provider>
)
Rout.propTypes = {
  store: PropTypes.object.isRequired
}
export default Rout
