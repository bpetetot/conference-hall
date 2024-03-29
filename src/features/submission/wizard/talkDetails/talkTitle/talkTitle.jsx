import React from 'react'
import PropTypes from 'prop-types'

import { TalkStatus } from 'features/talk'
import './talkTitle.css'

function TalkTitle({ talkId, title, eventId }) {
  return (
    <div className="talk-title">
      <span>{title}</span>
      <TalkStatus className="talk-status" talkId={talkId} eventId={eventId} />
    </div>
  )
}

TalkTitle.propTypes = {
  talkId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
}

export default TalkTitle
