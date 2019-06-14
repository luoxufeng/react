import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from '../components/Todo'
class TodoListPage extends Component {
  constructor(args) {
    super(args)
    this.state = {
      value: 1
    }
  }

  onSubmit(e) {
    e.preventDefault()
    let num = e.target.value
    if (num) {
      this.setState({ value: num })
      this.props.addTodo(num)
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    let { todos, onTodoClick } = this.props
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            ref="inputNum"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos &&
            todos.length > 0 &&
            todos.map(todo => (
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
              />
            ))}
        </ul>
      </div>
    )
  }
}
// TodoListPage.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired,
//   addTodo: PropTypes.func.isRequired
// }
export default TodoListPage
