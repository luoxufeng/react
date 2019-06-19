import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  static propTypes = {
    newList: PropTypes.array.isRequired,
    getNews: PropTypes.func.isRequired
  }

  componentDidMount() {
    let query = {
      pageNo: 1,
      limit: 10
    }
    this.props.getNews(query)
  }

  render() {
    let { newList } = this.props
    return (
      <div>
        <h1>这是我的列表页面哦</h1>
        {newList &&
          newList.length > 0 &&
          newList.map(item => {
            return <p key={item.id}>{item.title}</p>
          })}
      </div>
    )
  }
}
export default List
