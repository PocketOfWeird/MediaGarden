const isAscii = require('validator/lib/isAscii')
const isMongoId =require('validator/lib/isMongoId')


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
  if (typeof(str) === 'string' && isAscii(str)) {
    return true
  }
  return emitError({ message:'Invalid string'}, socket)
}

const isValidId = (id, socket) => {
  if (typeof(id) === 'string' && isMongoId(id)) {
    return true
  }
  return emitError({ message:'Invalid document id'}, socket)
}


const andErrorOrResults = socket => (err, results) => {
  if (err) return emitError(err, socket)
  return emmitState(results, socket)
}

module.exports = {
  isValidId,
  isValidString,
  andErrorOrResults
}
