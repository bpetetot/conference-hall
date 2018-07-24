import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Badge from 'components/badge'
import Markdown from 'components/markdown'
import './abstract.css'

const TalkAbstract = ({
  abstract, references, level, className,
}) => (
  <div className={cn('talk-abstract card', className)}>
    <div className="talk-abstract-title">
      <h3>Abstract</h3>
      <Badge outline pill light>Level {level}</Badge>
    </div>
    <Markdown source={abstract} />
    <h3 className="talk-reference">References</h3>
    <Markdown source={references} />
  </div>
)

TalkAbstract.propTypes = {
  abstract: PropTypes.string,
  references: PropTypes.string,
  level: PropTypes.string,
  className: PropTypes.string,
}

TalkAbstract.defaultProps = {
  abstract: undefined,
  references: undefined,
  level: 'not defined',
  className: undefined,
}

export default TalkAbstract
