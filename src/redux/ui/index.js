import { combineReducers } from 'redux'
import modal from './modal'
import toaster from './toaster'
import speaker from './speaker'
import organizer from './organizer'

export default combineReducers({
  modal,
  toaster,
  speaker,
  organizer,
})
