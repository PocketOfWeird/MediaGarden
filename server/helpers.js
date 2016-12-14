const fs = require('fs')
const jwt = require('jsonwebtoken')
const settings = require('../.config/settings')
const { authorizedUser } = require('./auth')

const emitError = (errObject, socket) => {
  socket.emit('error', errObject)
  return false
}

const emitUnauthorized = socket => emitError({ message: 'Unauthorized request' }, socket)

const emitState = (results, socket) => {
  const resultsArray = Array.isArray(results) ? results : [ results ]
  socket.emit('server_state', resultsArray)
  return true
}

const emitAdded = (added, socket) => {
  const addedArray = [added]
  socket.emit('added', addedArray)
  return true
}

const emitRemoved = socket => {
  socket.emit('removed')
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

const uploadFile = (user, file, name, socket) => {
  if (authorizedUser(user)) {
    const path = __dirname + '/../public' + settings.data + name
    const relativePath = settings.data + name
    fs.writeFile(path, file, err => {
      if (err) emitError(err, socket)
      else {
        socket.emit('fileUploaded', relativePath)
      }
    })
  } else {
    emitUnauthorized(socket)
  }
}

const proceedIfValid = (token, socket, callback) => {
  jwt.verify(token, settings.secret, (err, decoded) => {
    if (err) return emitUnauthorized(socket)
    callback(decoded)
  })
}

module.exports = {
  isValidId,
  isValidString,
  emitState,
  emitError,
  emitAdded,
  emitRemoved,
  uploadFile,
  proceedIfValid
}
