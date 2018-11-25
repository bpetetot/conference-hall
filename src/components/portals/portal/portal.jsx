import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { createPortal } from 'react-dom'

import './portal.css'

class Portal extends React.Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode)
    }
    this.defaultNode = null
  }

  render() {
    if (!this.defaultNode) {
      this.defaultNode = document.createElement('div')
      this.defaultNode.className = cn('portal', this.props.className)
      document.body.appendChild(this.defaultNode)
    }
    return createPortal(this.props.children, this.defaultNode)
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Portal.defaultProps = {
  className: undefined,
}

export default Portal
