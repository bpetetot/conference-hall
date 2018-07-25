import React from 'react'
import PropTypes from 'prop-types'

import { SideBarPanel, SideBarLink } from 'layout/sidebar'
import IconLabel from 'components/iconLabel'
import SubmitTalksLink from 'screens/components/submitTalksLink'

const EventSidebar = ({ id, name, surveyActive }) => {
  if (!id) return null
  return (
    <SideBarPanel label={name}>
      <SideBarLink to={`/speaker/event/${id}`}>
        <IconLabel icon="fa fa-calendar-check-o" label="Event profile" />
      </SideBarLink>
      {surveyActive && (
        <SideBarLink to={`/speaker/event/${id}/survey`}>
          <IconLabel icon="fa fa-question-circle" label="Speaker survey" />
        </SideBarLink>
      )}
      <SubmitTalksLink eventId={id} className="sidebar-link" />
    </SideBarPanel>
  )
}

EventSidebar.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  surveyActive: PropTypes.bool,
}

EventSidebar.defaultProps = {
  id: undefined,
  name: 'no name',
  surveyActive: false,
}

export default EventSidebar
