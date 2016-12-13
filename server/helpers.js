const fs = require('fs')


const emitError = (errObject, socket) => {
  socket.emit('error', errObject)
  return false
}

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

const uploadFile = (file, name, socket) => {
  const path = __dirname + '/../public/data/uploads/' + name
  const relativePath = '/data/uploads/' + name
  fs.writeFile(path, file, err => {
    if (err) emitError(err, socket)
    else {
      socket.emit('fileUploaded', relativePath)
    }
  })
}

module.exports = {
  isValidId,
  isValidString,
  emitState,
  emitError,
  emitAdded,
  emitRemoved,
  uploadFile
}
