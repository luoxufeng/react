import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from '../components/TodoList'

class Home extends Component {
  constructor(args) {
    super(args)
    this.state = {
      text: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  static propTypes = {
    todos: PropTypes.array.isRequired,
    bannerImage: PropTypes.string,

    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    getBanner: PropTypes.func
  }
  componentDidMount() {
    this.props.getBanner()
  }
  render() {
    let { todos, toggleTodo, bannerImage } = this.props
    console.log('bannerImage=' + bannerImage)
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="请输入内容"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        {bannerImage && <img src={bannerImage} alt="" />}
      </div>
    )
  }
  onSubmit(e) {
    let { text } = this.state
    e.preventDefault()
    if (!text) {
      return
    }
    this.props.addTodo(text)
    this.setState({ text: '' })
  }
  handleChange(e) {
    this.setState({ text: e.target.value })
  }
}
export default Home
