import firebase from 'firebase/app'
import { flow, unset } from 'immutadot'
import pick from 'lodash/pick'

import talksCrud from './talks'
import { updateProposal, addProposal, removeProposal } from './proposals'

/**
 * Save all data needed when submitting to an event
 * @param {object} talk talk data
 * @param {string} eventId event id
 * @param {object} talkDataForEvent data asked to the user about the submission
 */
export const saveTalkSubmission = async (talk, eventId, talkDataForEvent, isUpdate) => {
  const db = firebase.firestore()
  const batch = db.batch()

  // add submission to talk and copy the submitted talk
  talksCrud.update({
    id: talk.id,
    [`submissions.${eventId}`]: {
      ...talkDataForEvent,
      ...pick(talk, [
        'title',
        'description',
        'abstract',
        'references',
        'level',
        'speakers',
        'updateTimestamp',
      ]),
    },
  })

  // add or update proposal to event
  if (isUpdate) {
    updateProposal(eventId, talk, talkDataForEvent)
  } else {
    addProposal(eventId, talk, talkDataForEvent)
  }
  await batch.commit()
}

/**
 * Unsubmitting  talk from an event
 * @param {object} talk talk data
 * @param {string} eventId event id
 */
export const unsubmitTalk = async (talk, eventId) => {
  const db = firebase.firestore()
  const batch = db.batch()

  // remove submissions
  const updatedTalk = flow(unset(`submissions.${eventId}`), unset('state'))(talk)
  talksCrud.update(updatedTalk)

  // remove proposal from event
  removeProposal(eventId, talk.id)

  await batch.commit()
  return updatedTalk
}
