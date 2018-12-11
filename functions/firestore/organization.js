const admin = require('firebase-admin')

const getOrganization = organizationId => admin
  .firestore()
  .collection('organizations')
  .doc(organizationId)
  .get()
  .then(doc => doc.data())

module.exports = {
  getOrganization,
}
