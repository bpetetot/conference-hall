import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './button.css'

const Button = ({
  className,
  primary,
  secondary,
  tertiary,
  size,
  accent,
  error,
  block,
  href,
  simple,
  loading,
  children,
  onClick,
  ...rest
}) => {
  const classes = cn(
    'cc-button',
    {
      'cc-button-block': block,
      'cc-button-small': size === 'small',
      'cc-button-large': size === 'large',
      'cc-button-accent': accent,
      'cc-button-error': error,
      'cc-button-primary': primary && !secondary && !tertiary,
      'cc-button-secondary': secondary,
      'cc-button-tertiary': tertiary,
      'cc-button-simple': simple,
    },
    className,
  )

  if (typeof children === 'function') {
    return children(classes)
  }

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {loading && <i className="cc-button-loading fa fa-circle-o-notch fa-spin fa-fw" />}
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {loading && <i className="cc-button-loading fa fa-circle-o-notch fa-spin fa-fw" />}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  block: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'small', 'large']),
  accent: PropTypes.bool,
  error: PropTypes.bool,
  simple: PropTypes.bool,
  loading: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

Button.defaultProps = {
  primary: true,
  secondary: false,
  tertiary: false,
  size: 'normal',
  accent: false,
  error: false,
  simple: false,
  loading: false,
  href: undefined,
  onClick: undefined,
  block: false,
  className: undefined,
}

export default Button
