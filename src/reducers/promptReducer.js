import { SET_PROMPT, CLEAR_PROMPT } from '../actions'

const prompt = (state={}, action) => {
  switch (action.type) {
    case SET_PROMPT:
      return action.payload
    case CLEAR_PROMPT:
      return {}
    default:
      return state
  }
}

export default prompt
