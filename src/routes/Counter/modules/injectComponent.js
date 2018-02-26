import { connect } from 'react-redux'
import * as actions from './actions'

const mapDispatchToProps = { ...actions }

const mapStateToProps = (state) => ({ counter : state.counter })

const combinContainer = function (component) {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default combinContainer
