import firebase from 'firebase/app'

/**
 * Add a meetup to a specific event
 * @param {string} eventId event id
 * @param {object} meetup
 */
// eslint-disable-next-line import/prefer-default-export
export const createMeetup = (eventId, data) => firebase
  .firestore()
  .collection('events')
  .doc(eventId)
  .collection('meetups')
  .add({
    ...data,
    createTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
    updateTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
  })

/**
 * Update a meetup to a specific event
 * @param {string} eventId event id
 * @param {object} meetup
 */
// eslint-disable-next-line import/prefer-default-export
export const updateMeetup = (eventId, data) => firebase
  .firestore()
  .collection('events')
  .doc(eventId)
  .collection('meetups')
  .set({
    ...data,
    updateTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }, { merge: true })

/**
 * Remove a meetup to a specific event
 * @param {string} eventId event id
 * @param {string} meetupId meetup id
 */
// eslint-disable-next-line import/prefer-default-export
export const removeMeetup = (eventId, meetupId) => firebase
  .firestore()
  .collection('events')
  .doc(eventId)
  .collection('meetups')
  .doc(meetupId)
  .delete()

/**
 * Fetch all meetups of an event
 * @param {string} eventId event id
 */
export const fetchEventMeetups = async (
  eventId,
) => {
  const query = firebase
    .firestore()
    .collection('events')
    .doc(eventId)
    .collection('meetups')

  const result = await query.get()
  return result.docs.map(ref => ({ id: ref.id, ...ref.data() }))
}
