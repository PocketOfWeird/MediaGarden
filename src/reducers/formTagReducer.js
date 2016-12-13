import { FORM_TAG_CHANGE, FORM_TAG_REMOVE } from '../actions'

const formTag = (state=[], action) => {
  switch (action.type) {
    case FORM_TAG_CHANGE:
      return state.length > 0 ? [...state, action.payload.value] : [action.payload.value]
    case FORM_TAG_REMOVE:
      return state.filter(tag => tag !== action.payload.value)
    default:
      return state
  }
}

export default formTag
