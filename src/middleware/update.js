import { SERVER_UPDATE, raiseNote } from '../actions'
import socket from '../db'

const update = store => next => action => {
  if (action.type === SERVER_UPDATE) {
    const token = store.getState().token
    store.dispatch(raiseNote('Updating ' + action.payload.name))
    socket.emit('update', { sound: action.payload, token })
  }
  return next(action)
}

export default update
