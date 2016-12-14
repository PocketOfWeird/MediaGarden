import { FORM_VALUE_CHANGE, FORM_VALUE_VALIDATE,
  FORM_ERROR, FORM_RESET, FORM_TAG_CHANGE, FORM_TAG_REMOVE,
  SERVER_STATE, SET_UPDATE_DATA } from '../actions'
import formTag from './formTagReducer'


const setIn = (state, substate, action) => ({
  ...state,
  [substate]: {
    ...state[substate], [action.payload.name]: action.payload.value
  }
})

const setTagState = (state, action) => ({
  ...state,
  values: {
    ...state.values,
    [action.payload.name]: formTag(state.values[action.payload.name], action)
  }
})

const defaultState = { values: {}, errors: {} }

const form = (state = defaultState, action) => {
  switch (action.type) {
    case FORM_VALUE_CHANGE:
      return setIn(state, 'values', action)
    case FORM_TAG_CHANGE:
    case FORM_TAG_REMOVE:
      return setTagState(state, action)
    case FORM_VALUE_VALIDATE:
      return setIn(state, 'errors', action)
    case FORM_ERROR:
      return { ...state, errors: action.payload }
    case FORM_RESET:
    case SERVER_STATE:
      return defaultState
    case SET_UPDATE_DATA:
      return {
        ...defaultState,
        values: action.payload
      }
    default:
      return state
  }
}

export default form
