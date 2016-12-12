import { SERVER_SEARCH } from '../actions'
import socket from '../db'

const search = store => next => action => {
  if (action.type === SERVER_SEARCH) {
    socket.emit('search', action.payload)
  }
  return next(action)
}

export default search
