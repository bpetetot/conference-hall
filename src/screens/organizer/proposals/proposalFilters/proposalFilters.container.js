import { inject } from '@k-ramel/react'

import ProposalFilters from './proposalFilters'

const mapStore = (store, props, { router }) => {
  const eventId = router.getRouteParam('eventId')
  const { deliberationActive } = store.data.events.get(eventId) || {}
  const sortOrders = router.getParentResultParam('sortOrders')
  const ratings = router.getParentResultParam('ratings')
  const statuses = router.getParentResultParam('statuses')
  const filters = store.ui.organizer.proposals.get()
  const { formats, categories } = store.data.events.get(eventId) || {}
  const { isExporting } = store.ui.organizer.proposalsExport.get()
  return {
    statuses,
    ratings,
    formats,
    categories,
    sortOrders,
    filters,
    deliberationActive,
    isExporting,
    onChange: ({ target }) => {
      store.ui.organizer.proposals.update({ [target.id]: target.value })
    },
    onExportProposals: () => store.dispatch('@@ui/EXPORT_PROPOSALS'),
  }
}

export default inject(mapStore)(ProposalFilters)
