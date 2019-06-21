import { connect } from 'react-redux'
import { toggleTodo, addTodo, getBanner } from '../actions/index'
import withPage from '../components/CPage'
import Home from '../page/Home'
const mapStateToProps = state => {
  const { todos, bannerImage } = state.home
  return {
    todos,
    bannerImage
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodo: text => dispatch(addTodo(text)),
  getBanner: () => dispatch(getBanner())
})

const EnHome = withPage()(Home)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnHome)
