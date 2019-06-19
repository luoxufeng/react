import { connect } from 'react-redux'
import { toggleTodo, addTodo, getBanner } from '../actions/index'
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
