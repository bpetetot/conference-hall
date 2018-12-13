import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import forRoute from 'hoc-little-router'

import DeliberationForm from './deliberation'

const mapStore = (store, { eventId }) => {
  const {
    deliberationActive,
    displayOrganizersRatings,
  } = store.data.events.get(eventId) || {}
  return {
    deliberationActive,
    displayOrganizersRatings,
    onActiveDeliberation: e => store.dispatch({
      type: '@@ui/ON_TOGGLE_EVENT_DELIBERATION',
      payload: {
        event: {
          id: eventId,
          deliberationActive: e.target.checked,
        },
      },
    }),
    onDisplayOrganizersRatings: e => store.dispatch({
      type: '@@ui/ON_TOGGLE_EVENT_DISPLAY_ORGANIZERS_RATINGS',
      payload: {
        event: {
          id: eventId,
          displayOrganizersRatings: e.target.checked,
        },
      },
    }),
  }
}

export default compose(forRoute.absolute('EDIT_EVENT_DELIBERATION'), inject(mapStore))(DeliberationForm)
