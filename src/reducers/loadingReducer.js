import {
  SERVER_STATE, SERVER_SEARCH, SERVER_ADD, SERVER_UPDATE, SERVER_REMOVE,
  GO_BACKWARD
} from '../actions'


const loading = (state = false, action) => {
  switch (action.type) {
    case SERVER_STATE:
    case GO_BACKWARD:
      return false
    case SERVER_SEARCH:
    case SERVER_ADD:
    case SERVER_UPDATE:
    case SERVER_REMOVE:
      return true
    default:
      return state
  }
}

export default loading
