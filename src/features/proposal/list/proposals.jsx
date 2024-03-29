import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import HasRole from 'features/organization/hasRole'
import { useAuth } from 'features/auth'

import ProposalsHeader from './proposalsHeader'
import ProposalsFilters from './proposalsFilters'
import ProposalsToolbar from './proposalsToolbar'
import ProposalsList from './proposalsList'
import ProposalsPaging from './proposalsPaging'
import { ROLE_OWNER_OR_MEMBER } from '../../../firebase/constants'

function Proposals({ eventId }) {
  const { user } = useAuth()

  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const filters = {
    search: params.get('search'),
    state: params.get('state'),
    ratings: params.get('ratings'),
    formats: params.get('formats'),
    categories: params.get('categories'),
    sortOrder: params.get('sortOrder'),
  }

  return (
    <div>
      <ProposalsHeader eventId={eventId} />
      <ProposalsFilters eventId={eventId} />
      <HasRole of={ROLE_OWNER_OR_MEMBER} forEventId={eventId}>
        <ProposalsToolbar eventId={eventId} userId={user.uid} filters={filters} />
      </HasRole>
      <ProposalsList eventId={eventId} userId={user.uid} filters={filters} />
      <ProposalsPaging />
    </div>
  )
}

Proposals.propTypes = {
  eventId: PropTypes.string.isRequired,
}

export default Proposals
