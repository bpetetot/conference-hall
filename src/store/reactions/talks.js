import compareDesc from 'date-fns/compareDesc'
import { set, unset } from 'immutadot'
import talkCrud, { fetchUserTalks } from '../../firebase/talks'

export const updateTalk = async (action, store) => {
  const talk = action.payload

  store.ui.loaders.update({ isTalkSaving: true })
  await talkCrud.update(talk)
  store.ui.loaders.update({ isTalkSaving: false })

  store.data.talks.update(talk)
}

export const updateTalkSubmissionState = (action, store) => {
  const { eventId, talkId, state } = action.payload
  const talk = store.data.talks.get(talkId)
  const updatedTalk = set(talk, `submissions[${eventId}].state`, state)
  talkCrud.update(updatedTalk)
  store.data.talks.update(updatedTalk)
}

export const fetchTalk = async (action, store) => {
  const { talkId } = action.payload
  if (!talkId) return
  // check if already in the store
  const current = store.data.talks.get(talkId)
  if (current && current.id === talkId) return
  // fetch talk from id
  const ref = await talkCrud.read(talkId)
  if (ref.exists) {
    store.data.talks.add({ id: talkId, ...ref.data() })
  }
}

export const fetchSpeakerTalks = async (action, store) => {
  const { userId } = action.payload
  const talks = await fetchUserTalks(userId)
  // set talks in the store
  store.data.talks.set(talks)
  // set talks id to the speaker talk store
  const sorted = talks.sort((t1, t2) => compareDesc(t1.updateTimestamp, t2.updateTimestamp))
  store.ui.speaker.myTalks.reset()
  store.ui.speaker.myTalks.set(sorted)
}

export const updateSpeakerToTalk = async (action, store) => {
  const { uid, talkId } = action.payload
  const talk = store.data.talks.get(talkId)
  if (talk) {
    let updated
    if (action.type === '@@ui/ADD_SPEAKER_TO_TALK') {
      updated = set(talk, `speakers.${uid}`, true)
    } else if (action.type === '@@ui/REMOVE_SPEAKER_TO_TALK') {
      updated = unset(talk, `speakers.${uid}`)
    }
    if (updated && Object.keys(updated.speakers).length > 0) {
      await talkCrud.update(updated)
      store.data.talks.update(updated)
    }
  }
}
