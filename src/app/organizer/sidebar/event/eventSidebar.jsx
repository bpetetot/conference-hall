import React from 'react'
import PropTypes from 'prop-types'

import { SideBarPanel, SideBarLink } from 'app/layout/sidebar'
import IconLabel from 'components/iconLabel'
import HasRole from 'features/organization/hasRole'
import { ROLE_OWNER_OR_MEMBER } from '../../../../firebase/constants'

function EventSidebar({ eventId, name }) {
  if (!eventId) return null
  return (
    <SideBarPanel label={name}>
      <SideBarLink to={`/organizer/event/${eventId}`} exact>
        <IconLabel icon="fa fa-calendar-check-o" label="Event profile" />
      </SideBarLink>
      <HasRole of={ROLE_OWNER_OR_MEMBER} forEventId={eventId}>
        <SideBarLink to={`/organizer/event/${eventId}/edit`}>
          <IconLabel icon="fa fa-gear" label="Configuration" />
        </SideBarLink>
      </HasRole>
      <SideBarLink to={`/organizer/event/${eventId}/proposals`} exact>
        <IconLabel icon="fa fa-paper-plane" label="Proposals" />
      </SideBarLink>
    </SideBarPanel>
  )
}

EventSidebar.propTypes = {
  eventId: PropTypes.string,
  name: PropTypes.string,
}

EventSidebar.defaultProps = {
  eventId: undefined,
  name: 'no name',
}

export default EventSidebar
