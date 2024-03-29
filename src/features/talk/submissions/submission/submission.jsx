/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Status from '../../status'
import './submission.css'

function Submission({ talkId, eventId, name }) {
  return (
    <div className="talk-submission-event">
      <Link to={`/speaker/event/${eventId}/submissions/${talkId}`}>{name}</Link>
      <div className="talk-submission-event-actions">
        <Status talkId={talkId} eventId={eventId} />
      </div>
    </div>
  )
}

Submission.propTypes = {
  talkId: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  name: PropTypes.string,
}

Submission.defaultProps = {
  name: undefined,
}

export default Submission
