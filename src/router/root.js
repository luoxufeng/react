import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IsdHome from '../containers/IsdHome'
import IsdList from '../containers/IsdList'
import IsdDetail from '../containers/IsdDetail'
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={IsdHome} />
      <Route path="/list" exact component={IsdList} />
      <Route path="/detail" exact component={IsdDetail} />
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
