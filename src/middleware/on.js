import { serverState, raiseNote, raiseError, formReset, clearData, goBackward } from '../actions'
import socket from '../db'


const on = store => next => action => {
  if (action.type === 'INITIALIZE') {
    // Setup Observers
    socket.on('server_state', state => store.dispatch(serverState(state)))
    socket.on('added', addedArr => {
      store.dispatch(raiseNote('Added ' + addedArr[0].name))
      store.dispatch(serverState(addedArr))
      store.dispatch(goBackward())
    })
    socket.on('removed', () => {
      store.dispatch(formReset())
      store.dispatch(clearData())
      store.dispatch(goBackward())
      store.dispatch(raiseNote('Removed sound'))
    })
    socket.on('error', err => store.dispatch(raiseError(err)))
  }
  return next(action)
}

export default on
