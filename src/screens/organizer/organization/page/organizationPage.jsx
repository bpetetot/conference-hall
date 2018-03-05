import React from 'react'
import PropTypes from 'prop-types'
import Titlebar from 'components/titlebar'
import AvatarLabel from 'components/avatar/avatarLabel'
import { List, ListItem } from 'components/list'
import RelativeDate from 'components/relativeDate'
import AddUserButton from 'components/addUser'

import './organizationPage.css'

const OrganizationPage = ({ name, users, onSelectUser, inviteLink }) => (
  <div className="organization-page">
    <Titlebar className="organization-header" icon="fa fa-users" title={name} >
      <AddUserButton
        modalId="add-user-to-organization"
        modalOptions={{
          message: 'Some message',
          resultsMessage: 'Some message result',
          onSelectUser,
          inviteLink,
        }}
      />
    </Titlebar>
    <List
      className="organization-content"
      array={users}
      noResult="No users yet !"
      renderRow={({
        id,
        displayName,
        photoURL,
        updateTimestamp,
      }) => (
        <ListItem
          key={id}
          title={(
            <AvatarLabel displayName={displayName} photoURL={photoURL} />
          )}
          subtitle={<RelativeDate date={updateTimestamp} />}
        />
      )}
    />
  </div>
)

OrganizationPage.propTypes = {
  name: PropTypes.string.isRequired,
  inviteLink: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
  onSelectUser: PropTypes.func.isRequired,
}

OrganizationPage.defaultProps = {
  users: [],
}

export default OrganizationPage
