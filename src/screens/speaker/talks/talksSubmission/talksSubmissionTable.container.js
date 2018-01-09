import { compose } from 'redux'
import { connect } from 'react-redux'
import { push } from 'redux-little-router'
import loader from 'hoc-react-loader/build/core'

import { getSpeakerAppEvent } from 'redux/ui/speaker'
import speakerTalks from 'redux/ui/speaker/talks'
import LoadingIndicator from 'components/loading'
import TalksTable from '../components/talksTable'

const mapState = (state) => {
  const { name } = getSpeakerAppEvent(state) || {}
  return {
    name,
    loaded: speakerTalks.isInitialized(state),
    talks: speakerTalks.getKeys(state),
  }
}
const mapDispatch = dispatch => ({
  load: () => dispatch({ type: 'FETCH_SPEAKER_TALKS' }),
  onSelectTalk: id => dispatch(push(`/speaker/talk/${id}/submit`)),
})

export default compose(
  connect(mapState, mapDispatch),
  loader({ print: ['loaded'], LoadingIndicator }),
)(TalksTable)
