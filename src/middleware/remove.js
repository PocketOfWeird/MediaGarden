import { SERVER_REMOVE, raiseNote } from '../actions'
import socket from '../db'

const remove = store => next => action => {
  if (action.type === SERVER_REMOVE) {
    const token = store.getState().token
    store.dispatch(raiseNote('Removing ' + action.payload.name))
    socket.emit('remove', { id: action.payload.id, token })
  }
  return next(action)
}

export default remove
