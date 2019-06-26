import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import PropTypes from 'prop-types'
import TodoList from '../../components/TodoList'
import { listPage, routerPush } from '../../utils/site'
import style from './style.scss'

class index extends Component {
  constructor(args) {
    super(args)
    this.state = {
      text: ''
    }
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
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="text"
            placeholder="请输入内容"
            value={this.state.text}
            onChange={e => this.handleChange(e)}
          />
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div>
          <h2>页面跳转</h2>
          <Button type="primary" onClick={() => this.goList()}>
            跳转到列表页面2
          </Button>
          <div className={style.title}>我的颜色变了吗</div>
        </div>
        <div>
          <h2>请求服务得到banner</h2>
          {bannerImage && <img src={bannerImage} alt="" />}
        </div>
      </div>
    )
  }
  onSubmit = e => {
    let { text } = this.state
    e.preventDefault()
    if (!text) {
      return
    }
    this.props.addTodo(text)
    this.setState({ text: '' })
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  // 跳转到列表页面
  goList = () => {
    routerPush(this, {
      page: listPage,
      props: {
        id: 1,
        city: '上海'
      }
    })
  }
}
export default index
