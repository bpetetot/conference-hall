import React from 'react'
import PropTypes from 'prop-types'

import CopyInput from 'components/copyInput'
import Button from 'components/button'
import IconLabel from 'components/iconLabel/iconLabel'
import { useAuth } from 'features/auth'

import useInviteLink from './useInviteLink'
import styles from './inviteLink.module.css'

function InviteLink({ entity, entityId, entityTitle }) {
  const { user } = useAuth()

  const { generate, revoke, loading, inviteLink } = useInviteLink({
    entity,
    entityId,
    entityTitle,
    uid: user.uid,
  })

  if (!inviteLink || loading) {
    return (
      <Button onClick={generate} disabled={loading}>
        <IconLabel icon="fa fa-link" label="Generate an invitation link" />
      </Button>
    )
  }

  return (
    <div className={styles.inviteLink}>
      <CopyInput title="Invitation link" value={inviteLink} />
      <Button simple size="small" onClick={revoke} className={styles.revokeBtn}>
        <IconLabel icon="fa fa-ban" label="Revoke invitation link" />
      </Button>
    </div>
  )
}

InviteLink.propTypes = {
  entity: PropTypes.string.isRequired,
  entityId: PropTypes.string.isRequired,
  entityTitle: PropTypes.string.isRequired,
}

export default InviteLink
