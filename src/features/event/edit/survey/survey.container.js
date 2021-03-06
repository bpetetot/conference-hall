import { inject } from '@k-ramel/react'

import SurveyForm from './survey'

const mapStore = (store, { eventId }) => {
  const { surveyActive, survey } = store.data.events.get(eventId) || {}
  return {
    surveyActive,
    survey,
    onActiveSurvey: (checked) =>
      store.dispatch({
        type: '@@ui/ON_TOGGLE_EVENT_SURVEY',
        payload: {
          event: {
            id: eventId,
            surveyActive: checked,
          },
        },
      }),
    onSelectQuestion: (e) =>
      store.dispatch({
        type: '@@ui/ON_SELECT_SURVEY_QUESTION',
        payload: {
          event: {
            id: eventId,
            survey: {
              ...survey,
              [e.target.name]: e.target.checked,
            },
          },
        },
      }),
  }
}

export default inject(mapStore)(SurveyForm)
