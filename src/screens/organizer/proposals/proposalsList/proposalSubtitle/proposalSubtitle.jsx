import React from 'react'
import PropTypes from 'prop-types'

import UserAvatar from 'screens/components/userAvatar'
import Inline from 'components/inline'

import './proposalSubtitle.css'

const ProposalSubtitle = ({ proposal, formatLabel, categoryLabel }) => {
  const { speakers = {} } = proposal
  return (
    <Inline className="proposal-subtitle" classNameItem="proposal-subtitle-item">
      {Object.keys(speakers).map(id => (
        <UserAvatar
          key={id}
          id={id}
          className="proposal-item-info-speaker"
          size="small"
        />
      ))}
      {!!formatLabel && formatLabel}
      {!!categoryLabel && categoryLabel}
    </Inline>
  )
}

ProposalSubtitle.propTypes = {
  proposal: PropTypes.objectOf(PropTypes.any),
  formatLabel: PropTypes.string,
  categoryLabel: PropTypes.string,
}

ProposalSubtitle.defaultProps = {
  proposal: {},
  formatLabel: undefined,
  categoryLabel: undefined,
}

export default ProposalSubtitle
