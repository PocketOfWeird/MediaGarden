import { serverState } from '../actions'
import socket from '../db'


const on = store => next => action => {
  if (action.type === 'INITIALIZE') {
    // Setup Observers
    socket.on('server_state', state => store.dispatch(serverState(state)))
  }
  return next(action)
}

export default on
