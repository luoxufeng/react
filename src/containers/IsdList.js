import { connect } from 'react-redux'
import { getNews } from '../actions/list'
import List from '../page/List'

const mapStateToProps = state => {
  const { newList } = state.list
  return {
    newList
  }
}

const mapDispatchToProps = dispatch => ({
  getNews: query => dispatch(getNews(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
