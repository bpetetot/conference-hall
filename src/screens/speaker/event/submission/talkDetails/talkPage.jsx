import React from 'react'
import PropTypes from 'prop-types'

import Titlebar from 'components/titlebar'
import IconLabel from 'components/iconLabel'
import { TalkAbstract, TalkSpeakers, TalkStatus } from 'screens/components/talk'

import './talkPage.css'

const TalkPage = ({
  id, eventId, title, abstract, level, references, speakers, onNext,
}) => (
  <div className="talk-details">
    <Titlebar icon="fa fa-microphone" title={title} className="talk-title">
      <button className="btn btn-primary" onClick={onNext}>
        <IconLabel icon="fa fa-angle-right" label="Next" right />
      </button>
    </Titlebar>
    <TalkStatus className="talk-status" talkId={id} eventId={eventId} />
    <div className="talk-page">
      <TalkAbstract className="talk-content" abstract={abstract} references={references} />
      <TalkSpeakers className="talk-info" speakers={speakers} level={level} />
    </div>
  </div>
)

TalkPage.propTypes = {
  id: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string,
  level: PropTypes.string,
  references: PropTypes.string,
  speakers: PropTypes.objectOf(PropTypes.bool),
  onNext: PropTypes.func.isRequired,
}

TalkPage.defaultProps = {
  abstract: undefined,
  level: 'not defined',
  references: undefined,
  speakers: {},
}

export default TalkPage
