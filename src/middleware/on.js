import socket from '../db'


const on = store => next => action => {
  if (action.type === 'INITIALIZE') {
    // Setup Observers
    socket.on('news', data => console.log(data))
  }
  return next(action)
}

export default on
