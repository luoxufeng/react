import { createStore, applyMiddleware } from 'redux'
import reduxpromiseMiddleware from 'redux-promise-middleware'
import { queryToString } from './query'
import rootReducer from '../reducers'

const store = createStore(rootReducer, applyMiddleware(reduxpromiseMiddleware))
let h5Site = ''

//首页
export let homePage = {
  name: 'home',
  prev: 'car',
  h5: {
    site: h5Site,
    url: '/',
    pageid: '',
    channel: ''
  }
}

//列表页
export let listPage = {
  name: 'list',
  prev: 'home',
  h5: {
    site: h5Site,
    url: '/list',
    pageid: '',
    channel: ''
  }
}

//详细页面
export let detailPage = {
  name: 'city',
  prev: '',
  h5: {
    site: h5Site,
    url: '/detail',
    pageid: '',
    channel: ''
  }
}

export let relativeUrl = function(pageConfig, params) {
  let query = queryToString(params)

  return pageConfig.site + pageConfig.url + (query ? '?' + query : '')
}

export let navigateToH5 = function(url, options) {
  window.location.href = url
}

/**
 * 跳转到指定的Url
 * @param {String} url 要打开的Url
 * @param {Object} options 打开窗口的参数
 */
export let navigateToUrl = function(url, options) {
  options = options || {}
  navigateToH5(url, options)
}

/**
 * h5的后退方法
 */
export let goBack = function() {
  if (window.history.length === 1) {
    window.location.href = 'http://ec.yto.net.cn'
  } else {
    window.history.back()
  }
}

export let routerPush = function(
  self,
  { page, props, query, isBackRefreshPage }
) {
  //props为存储在reducerStore中的参数，添加到对应页面的props中
  //query为url上的临时参数，添加到对应页面的state中
  // let $store = window.$store
  let queryString = queryToString(query)
  let options = {}

  options.title = page.title || ''
  options.name = page.name || ''
  options.isBackRefreshPage = isBackRefreshPage || false
  options.isSelfApp = true

  if (props) {
    store.dispatch({
      type: 'INIT_PAGE_PROPS',
      payload: {
        name: page.name,
        props: props
      }
    })
    options.urlCallback = props.urlCallback
  }

  self.props.history.push(
    getPagePath(page) + (queryString ? '?' + queryString : '')
  )
}

export let routerReplace = function(self, { page, props, query }) {
  //props为存储在reducerStore中的参数，添加到对应页面的props中
  //query为url上的临时参数，添加到对应页面的state中
  // let $store = window.$store
  let queryString = queryToString(query)
  if (props) {
    store.dispatch({
      type: 'INIT_PAGE_PROPS',
      payload: {
        name: page.name,
        props: props
      }
    })
  }

  self.props.history.replace(
    getPagePath(page) + (queryString ? '?' + queryString : '')
  )
}

export let getPagePath = function(page) {
  let config = page.h5
  return config.site + config.url
}
