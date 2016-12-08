import uniqBy from 'lodash.uniqby'
import { SERVER_STATE, CLEAR_DATA } from '../actions'


const data = (state = [], action) => {
  switch (action.type) {
    case SERVER_STATE:
      return uniqBy([...state, ...action.payload], '_id')
    case CLEAR_DATA:
      return []
    default:
      return state
  }
}

export default data
