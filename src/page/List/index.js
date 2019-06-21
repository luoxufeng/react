import React, { Component } from 'react'
import PropTypes from 'prop-types'

class index extends Component {
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
    let { newList, id, city } = this.props
    return (
      <div>
        <h1>这是我的列表页面哦</h1>
        <h2>
          传过来的参数为：id={id},city={city}
        </h2>
        <h2>从服务返回的数据列表</h2>
        {newList &&
          newList.length > 0 &&
          newList.map(item => {
            return <p key={item.id}>{item.title}</p>
          })}
      </div>
    )
  }
}
export default index
