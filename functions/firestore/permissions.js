const { getOrganization } = require('../firestore/user')

const isUserEvent = async (uid, event) => {
  const { owner, organization } = event

  if (owner === uid) return true

  if (!organization) return false

  const { members } = await getOrganization(organization)
  console.log({ uid, members })

  return !!members[uid]
}

module.exports = {
  isUserEvent,
}