import { SET_TOKEN, CLEAR_TOKEN } from '../actions'

const token = (state='', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload
    case CLEAR_TOKEN:
      return ''
    default:
      return state
  }
}

export default token
