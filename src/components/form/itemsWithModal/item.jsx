import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/button'
import './item.css'

const Item = ({ name, onEdit, onDelete }) => {
  const handleDelete = (e) => {
    e.stopPropagation()
    onDelete()
  }
  return (
    <div className="item-box">
      <div>{name}</div>
      <Button secondary simple small onClick={onEdit} aria-label={`Edit ${name}`}>
        <i className="fa fa-pencil" />
      </Button>
      <Button secondary simple small onClick={handleDelete} aria-label={`Delete ${name}`}>
        <i className="fa fa-times" />
      </Button>
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Item
