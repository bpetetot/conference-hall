import { inject } from '@k-ramel/react'
import { canBeDeleted } from 'store/reducers/data/talks.selector'

import DeleteTalkModal from './deleteTalkModal'

const mapStore = (store, { talkId }) => {
  const { title } = store.data.talks.get(talkId) || {}
  return {
    talkTitle: title,
    canDelete: canBeDeleted(talkId)(store),
    deleteTalk: () => store.dispatch({ type: '@@ui/DELETE_TALK', payload: { talkId } }),
  }
}

export default inject(mapStore)(DeleteTalkModal)
