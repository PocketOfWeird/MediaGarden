import {
  SERVER_STATE, SERVER_SEARCH, SERVER_ADD
} from '../actions'


const loading = (state = false, action) => {
  switch (action.type) {
    case SERVER_STATE:
      return false
    case SERVER_SEARCH:
      return true
    case SERVER_ADD:
      return true
    default:
      return state
  }
}

export default loading
