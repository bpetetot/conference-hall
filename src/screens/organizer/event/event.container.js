import { compose } from 'redux'
import { connect } from 'react-redux'
import loader from 'hoc-react-loader/build/core'
import forRoute from 'hoc-little-router'

import event from 'redux/data/event'
import LoadingIndicator from 'components/loading'
import Event from './event'

const mapState = state => ({
  loaded: event.isInitialized(state),
})

const mapDispatch = dispatch => ({
  load: () => dispatch({ type: 'FETCH_EVENT' }),
})

export default compose(
  forRoute('HOME_EVENT'),
  connect(mapState, mapDispatch),
  loader({ print: ['loaded'], LoadingIndicator }),
)(Event)
