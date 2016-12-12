const emitError = (errObject, socket) => {
  socket.emit('error', errObject)
  return false
}

const emmitState = (results, socket) => {
  const resultsArray = Array.isArray(results) ? results : [ results ]
  socket.emit('server_state', resultsArray)
  return true
}

const isValidString = (str, socket) => {
  if (typeof(str) === 'string') {
    return true
  }
  return emitError({ message:'Invalid string'}, socket)
}

const isValidId = (id, socket) => {
  if (typeof(id) === 'number') {
    return true
  }
  return emitError({ message:'Invalid document id'}, socket)
}

module.exports = {
  isValidId,
  isValidString,
  emmitState,
  emitError
}
