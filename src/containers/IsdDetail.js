import { connect } from 'react-redux'
import Detail from '../page/Detail'
import withPage from '../components/CPage'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const EnDetail = withPage()(Detail)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnDetail)
