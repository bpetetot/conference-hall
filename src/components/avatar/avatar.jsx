/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import randomColor from 'randomcolor'

import './avatar.css'

const generateColor = (seed) => {
  if (!seed) return {}
  return {
    background: randomColor({
      seed,
      luminosity: 'bright',
      hsla: 'rgb',
    }),
  }
}

const Avatar = ({
  name,
  src,
  color,
  size,
  square,
  withLabel,
  className,
  labelClassName,
  style,
}) => {
  if (!name && !src) return null

  let bgColor = { background: 'transparent' }
  if (color) {
    bgColor = { background: color }
  } else if (!src) {
    bgColor = generateColor(name)
  }

  const classes = cn(
    'cc-avatar',
    {
      'cc-avatar-small': size === 'small',
      'cc-avatar-large': size === 'large',
      'cc-avatar-initials': !src,
      'cc-avatar-image': src,
      'cc-avatar-square': square,
    },
  )

  return (
    <div className={cn('cc-avatar-wrapper', className)}>
      <div className={classes} style={{ ...bgColor, ...style }}>
        {src && <img src={src} alt={name || 'avatar'} />}
        {!src && name && <span>{name.charAt(0)}</span>}
      </div>
      {withLabel && <span className={cn('cc-avatar-label', labelClassName)}>{name}</span>}
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  square: PropTypes.bool,
  withLabel: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
}

Avatar.defaultProps = {
  name: undefined,
  src: undefined,
  color: undefined,
  size: 'medium',
  square: false,
  withLabel: false,
  className: undefined,
  labelClassName: undefined,
  style: undefined,
}

export default Avatar
