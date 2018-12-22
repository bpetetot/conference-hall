import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'

import loader from 'components/loader'
import TalkPage from './talkPage'

const mapStore = (store, props, { router }) => {
  const talkId = router.getParam('talkId')
  const talk = store.data.talks.get(talkId)
  return {
    loaded: !!talk,
    ...talk,
    load: () => store.dispatch('@@ui/ON_LOAD_TALK'),
  }
}

export default compose(
  forRoute.absolute('speaker-talk-page'), //
  inject(mapStore), //
  loader, //
)(TalkPage)
