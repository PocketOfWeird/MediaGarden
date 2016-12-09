import { SET_TYPE_FILTER, SET_AUTHOR_FILTER, CLEAR_FILTERS } from '../actions'


const defaultState = {
  searchType: 1,
  author: ''
}

const searchFilter = (state=defaultState, action) => {
  switch (action.type) {
    case SET_TYPE_FILTER:
      return { ...state, searchType: action.payload }
    case SET_AUTHOR_FILTER:
      return { ...state, author: action.payload }
    case CLEAR_FILTERS:
      return defaultState
    default:
      return state
  }
}

export default searchFilter
