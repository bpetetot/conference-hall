import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import HasRole from 'features/organization/hasRole'
import Titlebar from 'components/titlebar'
import { ROLE_OWNER_OR_MEMBER } from '../../../../firebase/constants'

import TeamRatings from './teamRatings'
import SpeakerSurveys from './speakerSurveys'
import ReviewersThread from './reviewersThread'
import EditProposal from './editProposal'
import styles from './actions.module.css'

function Actions({ eventId, proposal, surveyActive, displayOrganizersRatings, className }) {
  return (
    <Titlebar className={cn(styles.header, className)} title={proposal.title}>
      <HasRole of={ROLE_OWNER_OR_MEMBER} forEventId={eventId}>
        <EditProposal eventId={eventId} proposal={proposal} />

        {displayOrganizersRatings && <TeamRatings proposalId={proposal.id} />}

        {surveyActive && <SpeakerSurveys eventId={eventId} proposalId={proposal.id} />}
      </HasRole>
      <ReviewersThread eventId={eventId} proposalId={proposal.id} />
    </Titlebar>
  )
}

Actions.propTypes = {
  eventId: PropTypes.string.isRequired,
  proposal: PropTypes.object.isRequired,
  displayOrganizersRatings: PropTypes.bool,
  surveyActive: PropTypes.bool,
  className: PropTypes.string,
}

Actions.defaultProps = {
  displayOrganizersRatings: false,
  surveyActive: false,
  className: undefined,
}

export default Actions
