import { SERVER_ADD, raiseNote } from '../actions'
import socket from '../db'

const add = store => next => action => {
  if (action.type === SERVER_ADD) {
    store.dispatch(raiseNote('Uploading ' + action.payload.name))
    socket.emit('uploadFile', { file: action.payload.url, name: action.payload.url.name })
    socket.on('fileUploaded', returnedUrl => {
      const newSound = {
        ...action.payload,
        url: returnedUrl
      }
      socket.emit('add', newSound)
    })
  }
  return next(action)
}

export default add
