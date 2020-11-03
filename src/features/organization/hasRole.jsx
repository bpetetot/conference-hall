import { node } from 'prop-types'
import { useAuth } from 'features/auth'
import { useEvent } from 'features/event/useEvents'
import { useOrganization } from './useOrganizations'

const HasRole = ({ of, forOrganizationId, children, otherwise }) => {
  const { user } = useAuth()
  const { data: event, isLoading: isLoadingEvent } = useEvent()
  const { data: orga, isLoading } = useOrganization(event?.organization || forOrganizationId)

  const roles = Array.isArray(of) ? of : [of]
  if (
    isLoading ||
    isLoadingEvent ||
    (!roles.includes(orga?.members?.[user.uid]) && event?.owner !== user.uid)
  ) {
    return otherwise
  }

  return children
}

HasRole.propTypes = {
  children: node.isRequired,
  otherwise: node,
}

HasRole.defaultProps = {
  otherwise: null,
  orgaMembers: null,
  eventOwner: null,
}

export default HasRole
