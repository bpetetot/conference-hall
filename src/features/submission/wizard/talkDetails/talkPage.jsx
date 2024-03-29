import React from 'react'
import PropTypes from 'prop-types'

import Titlebar from 'components/titlebar'
import IconLabel from 'components/iconLabel'
import Button from 'components/button'
import { TalkAbstract, TalkSpeakers } from 'features/talk'
import TalkTitle from './talkTitle'

import './talkPage.css'

function TalkPage({
  id,
  eventId,
  title,
  abstract,
  level,
  owner,
  references,
  language,
  speakers,
  onNext,
}) {
  const titleComponent = <TalkTitle talkId={id} eventId={eventId} title={title} />
  return (
    <div className="talk-details">
      <Titlebar icon="fa fa-microphone" title={titleComponent} className="talk-title">
        <Button accent onClick={onNext}>
          <IconLabel icon="fa fa-angle-right" label="Next" right />
        </Button>
      </Titlebar>
      <div className="talk-page">
        <TalkAbstract
          className="talk-content"
          abstract={abstract}
          references={references}
          language={language}
          level={level}
        />
        <TalkSpeakers
          className="talk-info"
          talkId={id}
          talkTitle={title}
          owner={owner}
          speakers={speakers}
        />
      </div>
    </div>
  )
}

TalkPage.propTypes = {
  id: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string,
  level: PropTypes.string,
  owner: PropTypes.string,
  references: PropTypes.string,
  language: PropTypes.string,
  speakers: PropTypes.objectOf(PropTypes.bool),
  onNext: PropTypes.func.isRequired,
}

TalkPage.defaultProps = {
  abstract: undefined,
  level: 'not defined',
  owner: undefined,
  references: undefined,
  language: undefined,
  speakers: {},
}

export default TalkPage
