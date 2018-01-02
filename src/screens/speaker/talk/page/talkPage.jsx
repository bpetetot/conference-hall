import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import { Link } from 'redux-little-router'

import Titlebar from 'components/titlebar'
import IconLabel from 'components/iconLabel'
import Badge from 'components/badge'
import Speaker from './speaker'

import './talkPage.css'

const TalkPage = ({
  id, title, abstract, level, references, speakers,
}) => (
  <div>
    <Titlebar icon="fa fa-microphone" title={title}>
      <Link href={`/speaker/talk/${id}/edit`} className="btn btn-primary">
        <IconLabel icon="fa fa-pencil" label="Edit" />
      </Link>
    </Titlebar>
    <div className="talk-page">
      <div className="talk-content card">
        <h3>Abstract</h3>
        {abstract && <Markdown className="markdown" source={abstract} escapeHtml />}
        <h3 className="margin-gap">References</h3>
        {references && <Markdown className="markdown" source={references} escapeHtml />}
      </div>
      <div className="talk-info">
        <div className="card">
          <h3>Speakers & Details</h3>
          {Object.keys(speakers).map(key => <Speaker key={key} id={key} />)}
          <Badge>Level {level}</Badge>
        </div>
        <div className="card margin-gap">
          <h3>Proposals</h3>
          <small>No proposal yet</small>
        </div>
      </div>
    </div>
  </div>
)

TalkPage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string,
  level: PropTypes.string,
  references: PropTypes.string,
  speakers: PropTypes.objectOf(PropTypes.bool),
}

TalkPage.defaultProps = {
  abstract: undefined,
  level: 'not defined',
  references: undefined,
  speakers: {},
}

export default TalkPage
