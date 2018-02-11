import { compose } from 'redux'
import { inject } from 'k-ramel/react'
import forRoute from 'hoc-little-router'

import { getRouterParam } from 'store/router'
import loader from 'components/loader'
import EventEdit from './eventEdit'

const mapStore = (store) => {
  const eventId = getRouterParam('eventId')(store.getState())
  const event = store.data.events.get(eventId)
  return {
    loaded: !!event,
    eventId,
    load: () => store.dispatch({ type: 'ON_LOAD_EVENT_PAGE' }),
  }
}

export default compose(
  forRoute('EDIT_EVENT'), //
  inject(mapStore), //
  loader, //
)(EventEdit)
