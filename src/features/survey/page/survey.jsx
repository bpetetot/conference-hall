import React from 'react'
import PropTypes from 'prop-types'

import EventTitle from 'features/event/eventTitle'
import { useAuth } from 'features/auth'
import SurveyForm from '../form'

import './survey.css'

function SpeakerSurvey({ eventId, name }) {
  const { user } = useAuth()
  return (
    <div className="speaker-survey">
      <EventTitle name={name} subtitle="Speaker survey" />
      <div className="card">
        <p>
          Organizers need some information about you in order to make a better event experience for
          speakers. Please fill the following survey to help them.
        </p>
        <SurveyForm eventId={eventId} uid={user.uid} />
      </div>
    </div>
  )
}

SpeakerSurvey.propTypes = {
  eventId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default SpeakerSurvey
