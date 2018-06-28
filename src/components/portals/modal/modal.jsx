import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Portal from 'components/portals/portal'
import Backdrop from 'components/portals/backdrop'
import OpenTrigger from 'components/helpers/openTrigger'
import Button from 'components/button'
import CloseIcon from 'components/icons/close'

import './modal.css'

const Modal = ({
  children,
  onClose,
  withClickOutside,
  withEscapeClose,
  withCloseIcon,
  className,
  defaultOpen,
  renderTrigger,
}) => (
  <OpenTrigger
    defaultOpen={defaultOpen}
    renderTrigger={renderTrigger}
    withEscapeClose={withEscapeClose}
    onClose={onClose}
  >
    {({ hide, show, isOpen }) => (
      <Portal>
        <Backdrop onClick={hide} withClickOutside={withClickOutside} />
        <div className={cn('modal', className)}>
          {children({ hide, show, isOpen })}
          {withCloseIcon && (
            <Button className="modal-close" simple onClick={hide}>
              <CloseIcon />
            </Button>
          )}
        </div>
      </Portal>
    )}
  </OpenTrigger>
)

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  defaultOpen: PropTypes.bool,
  renderTrigger: PropTypes.func,
  onClose: PropTypes.func,
  withClickOutside: PropTypes.bool,
  withEscapeClose: PropTypes.bool,
  withCloseIcon: PropTypes.bool,
  className: PropTypes.string,
}

Modal.defaultProps = {
  defaultOpen: false,
  renderTrigger: undefined,
  onClose: undefined,
  withClickOutside: true,
  withEscapeClose: true,
  withCloseIcon: true,
  className: undefined,
}

export default Modal
