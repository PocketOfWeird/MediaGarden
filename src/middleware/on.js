import { serverState, raiseNote } from '../actions'
import socket from '../db'


const on = store => next => action => {
  if (action.type === 'INITIALIZE') {
    // Setup Observers
    socket.on('server_state', state => store.dispatch(serverState(state)))
    socket.on('added', addedArr => {
      store.dispatch(raiseNote('Added ' + addedArr[0].name))
      store.dispatch(serverState(addedArr))
    })
    socket.on('removed', addedArr => store.dispatch(raiseNote('Removed sound')))
  }
  return next(action)
}

export default on
