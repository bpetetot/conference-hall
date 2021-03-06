import { inject } from '@k-ramel/react'

import Navbar from './navbar'

const mapStore = (store, { eventId }) => {
  const { name } = store.data.events.get(eventId) || {}
  return {
    name,
  }
}

export default inject(mapStore)(Navbar)
