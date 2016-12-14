import { SERVER_ADD, raiseNote } from '../actions'
import socket from '../db'

const add = store => next => action => {
  if (action.type === SERVER_ADD) {
    const token = store.getState().token
    store.dispatch(raiseNote('Uploading ' + action.payload.name))
    socket.emit('uploadFile', {
      file: action.payload.url,
      name: action.payload.url.name,
      token
    })
    socket.on('fileUploaded', returnedUrl => {
      const sound = {
        ...action.payload,
        url: returnedUrl
      }
      socket.emit('add', { sound, token })
    })
  }
  return next(action)
}

export default add
