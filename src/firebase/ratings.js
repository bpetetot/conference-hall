import firebase from 'firebase/app'
import { ratingConverter } from 'models/Rating'

/**
 * Return user rating for an event and proposal
 * @param {string} eventId event id
 * @param {string} proposalId proposal id
 * @param {string} userId user id
 */
export const getUserRating = async (eventId, proposalId, userId) => {
  const result = await firebase
    .firestore()
    .collection('events')
    .doc(eventId)
    .collection('proposals')
    .doc(proposalId)
    .collection('ratings')
    .doc(userId)
    .withConverter(ratingConverter)
    .get()

  return result.data()
}

/**
 * Return ratings with for an event and proposal
 * @param {string} eventId event id
 * @param {string} proposalId proposal id
 */
export const getRatings = async (eventId, proposalId) => {
  const result = await firebase
    .firestore()
    .collection('events')
    .doc(eventId)
    .collection('proposals')
    .doc(proposalId)
    .collection('ratings')
    .withConverter(ratingConverter)
    .get()
  return result.docs.map((ref) => ref.data())
}

/**
 * Add or update a rating to a proposal
 * @param {string} eventId event id
 * @param {string} proposalId proposal id
 * @param {string} userId user id
 * @param {object} ratingObject complete rating object
 */
export const addRating = (eventId, proposalId, userId, ratingObject) =>
  firebase
    .firestore()
    .collection('events')
    .doc(eventId)
    .collection('proposals')
    .doc(proposalId)
    .collection('ratings')
    .doc(userId)
    .withConverter(ratingConverter)
    .set({
      uid: userId,
      ...ratingObject,
      updateTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

/**
 * Delete user rating for a proposal
 * @param {String} eventId event id
 * @param {String} proposalId proposal id
 * @param {String} userId rating id (uid)
 */
export const deleteRating = (eventId, proposalId, userId) =>
  firebase
    .firestore()
    .collection('events')
    .doc(eventId)
    .collection('proposals')
    .doc(proposalId)
    .collection('ratings')
    .doc(userId)
    .delete()
