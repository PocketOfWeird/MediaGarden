import {
  SERVER_STATE, SERVER_SEARCH
} from '../actions'


const loading = (state = false, action) => {
  switch (action.type) {
    case SERVER_STATE:
      return false
    case SERVER_SEARCH:
      return true
    default:
      return state
  }
}

export default loading
