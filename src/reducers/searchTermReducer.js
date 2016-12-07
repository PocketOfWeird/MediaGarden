import { SET_SEARCH_TERM, CLEAR_DATA } from '../actions'


const searchTerm = (state='', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload
    case CLEAR_DATA:
      return ''
    default:
      return state
  }
}

export default searchTerm
