import { connect } from 'react-redux'
import { getNews } from '../actions/list'
import List from '../page/List'
import withPage from '../components/CPage'

const mapStateToProps = state => {
  const { listExtendProps } = state.shared //ExtendProps用于传递页面push，replace时携带的临时参数， 命名为site中配置的页面name + 'ExtendProps'
  const { newList } = state.list
  return {
    newList,
    ...listExtendProps
  }
}

const mapDispatchToProps = dispatch => ({
  getNews: query => dispatch(getNews(query))
})

const EnList = withPage()(List)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnList)
