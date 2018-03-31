/* eslint-disable no-return-assign */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Portal from 'components/portal'
import './modal.css'

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (e) => {
    if (this.modal && !this.modal.contains(e.target)) {
      this.props.onClose()
    }
  }

  render() {
    const {
      opened, onClose, children, className,
    } = this.props
    if (!opened) return null
    return (
      <Portal className="modal">
        <div ref={e => (this.modal = e)} className={cn('modal-content', className)}>
          {children}
          <div className="modal-close" onClick={onClose} role="button">
            <i className="fa fa-times fa-fw fa-2x" />
          </div>
        </div>
      </Portal>
    )
  }
}

Modal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  className: PropTypes.string,
}

Modal.defaultProps = {
  className: undefined,
}

export default Modal
