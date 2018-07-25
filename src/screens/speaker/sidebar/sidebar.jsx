import React from 'react'
import PropTypes from 'prop-types'

import { SideBar, SideBarPanel, SideBarLink } from 'layout/sidebar'
import IconLabel from 'components/iconLabel'
import EventSidebar from './event'

const SpeakerSideBar = ({ fullname, className }) => (
  <SideBar className={className}>
    <SideBarPanel label={fullname}>
      <SideBarLink to="/speaker/profile">
        <IconLabel icon="fa fa-user-o" label="Profile" />
      </SideBarLink>
      <SideBarLink to="/speaker">
        <IconLabel icon="fa fa-microphone" label="My talks" />
      </SideBarLink>
    </SideBarPanel>
    <EventSidebar />
  </SideBar>
)

SpeakerSideBar.propTypes = {
  fullname: PropTypes.string,
  className: PropTypes.string,
}

SpeakerSideBar.defaultProps = {
  fullname: undefined,
  className: undefined,
}

export default SpeakerSideBar
