import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'redux-little-router'

import IconLabel from 'components/iconLabel'
import Avatar from 'components/avatar'
import Dropdown from 'components/dropdown'

import './avatarDropdown.css'

const AvatarDropdown = ({ fullname, image, signout }) => {
  const avatar = <Avatar image={image} fullname={fullname} className="avatar-dropdown" />
  return (
    <Dropdown action={avatar}>
      <div>{fullname}</div>
      <Link href="/">
        <IconLabel icon="fa fa-home" label="Conference Hall" />
      </Link>
      <button onClick={signout}>
        <IconLabel icon="fa fa-sign-out" label="Sign out" />
      </button>
    </Dropdown>
  )
}

AvatarDropdown.propTypes = {
  fullname: PropTypes.string,
  image: PropTypes.string,
  signout: PropTypes.func.isRequired,
}

AvatarDropdown.defaultProps = {
  fullname: undefined,
  image: undefined,
}

export default AvatarDropdown
