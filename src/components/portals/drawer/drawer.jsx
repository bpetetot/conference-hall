import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Portal from 'components/portals/portal'
import Backdrop from 'components/portals/backdrop'
import OpenTrigger from 'components/helpers/openTrigger'
import Button from 'components/button'
import CloseIcon from 'components/icons/close'
import useTheme from 'styles/themes/useTheme'

import './drawer.css'

function Drawer({ title, subtitle, className, actions, children, defaultOpen, renderTrigger }) {
  const theme = useTheme()

  return (
    <OpenTrigger defaultOpen={defaultOpen} renderTrigger={renderTrigger}>
      {({ hide, show, isOpen }) => (
        <Portal>
          <Backdrop onClick={hide} />
          <div className={cn('drawer-sidebar', theme, className)}>
            <div className="drawer-header">
              <div className="drawer-titles">
                <div className="drawer-title">{title}</div>
                {subtitle && <div className="drawer-subtitle">{subtitle}</div>}
              </div>
              <Button simple onClick={hide} aria-label="Close">
                <CloseIcon />
              </Button>
            </div>
            <div className="drawer-content">{children}</div>
            {actions && <div className="drawer-actions">{actions({ hide, show, isOpen })}</div>}
          </div>
        </Portal>
      )}
    </OpenTrigger>
  )
}

Drawer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
  defaultOpen: PropTypes.bool,
  renderTrigger: PropTypes.func,
  className: PropTypes.string,
}

Drawer.defaultProps = {
  subtitle: undefined,
  actions: undefined,
  defaultOpen: false,
  renderTrigger: undefined,
  className: undefined,
}

export default Drawer
