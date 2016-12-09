import { SERVER_SEARCH } from '../actions'
import socket from '../db'

const search = store => next => action => {
  if (action.type === SERVER_SEARCH) {
    if (action.meta !== false) {
      switch (action.meta.by) {
        case 'type':
          socket.emit('searchByType', {
            searchTerm: action.payload,
            type: action.meta.type
          })
          break;
        case 'author':
          socket.emit('searchbyAuthor', {
            searchTerm: action.payload,
            author: action.meta.author
          })
          break;
        default:
          break;
      }
    } else {
      socket.emit('search', action.payload)
    }
  }
  return next(action)
}

export default search
