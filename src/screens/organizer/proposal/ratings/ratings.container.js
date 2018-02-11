/* eslint-disable prefer-destructuring */
import { inject } from 'k-ramel/react'

import { hasNext, hasPrevious } from 'redux/ui/organizer/proposal'
import Ratings from './ratings'

const mapStore = (store) => {
  const { uid } = store.auth.get()
  return {
    isLoaded: store.data.ratings.isInitialized(),
    ...store.data.ratings.get(uid),
    hasNext: hasNext(store),
    hasPrevious: hasPrevious(store.getState()),
    onRating: (rating, feeling) =>
      store.dispatch({ type: 'RATE_PROPOSAL', payload: { rating, feeling } }),
    onNext: () => store.dispatch({ type: 'NEXT_PROPOSAL' }),
    onPrevious: () => store.dispatch({ type: 'PREVIOUS_PROPOSAL' }),
  }
}

export default inject(mapStore)(Ratings)
