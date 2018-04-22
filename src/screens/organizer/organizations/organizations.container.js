import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import forRoute from 'hoc-little-router'

import loader from 'components/loader'
import Organizations from './organizations'

const mapStore = (store, ownProps, { router }) => ({
  loaded: store.data.organizations.isInitialized(),
  organizations: store.data.organizations.getAsArray(),
  load: () => store.dispatch('@@ui/ON_LOAD_USER_ORGANIZATIONS'),
  onSelect: organizationId => router.push(`/organizer/organizations/${organizationId}`),
})

export default compose(
  forRoute.absolute('HOME_ORGANIZATION'), //
  inject(mapStore), //
  loader, //
)(Organizations)
