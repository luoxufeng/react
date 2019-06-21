import { stringToQuery } from '../utils/query'

export default function withPage() {
  return function(WrappedComponent) {
    return class withPage extends WrappedComponent {
      constructor(props) {
        super(props)
        const newState = Object.assign({}, this.state, this.queryToProps())
        this.state = newState
      }

      componentDidMount() {
        this.logUV()
        super.componentDidMount && super.componentDidMount()
      }

      /**
       * 页面分渠道转化率埋点
       * @method logUV
       */
      logUV() {
        try {
        } catch (e) {}
      }

      render() {
        return super.render()
      }

      queryToProps() {
        const location = this.props.location
        let props = {}

        if (location && location.search) {
          props = stringToQuery(location.search)
        }

        return props
      }
    }
  }
}
