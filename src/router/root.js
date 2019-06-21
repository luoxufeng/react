import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IsdHome from '../containers/IsdHome'
import IsdList from '../containers/IsdList'
import IsdDetail from '../containers/IsdDetail'

const routes = [
  {
    path: '/',
    component: IsdHome
  },
  {
    path: '/list',
    component: IsdList
  },
  {
    path: '/detail',
    component: IsdDetail
  }
]

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      {routes.map(v => (
        <Route exact key={v.path} path={v.path} component={v.component} />
      ))}
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
