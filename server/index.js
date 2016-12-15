const settings = require('../.config/settings')
var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server, settings.socket_opts)
const { auth } = require('./auth')
const db = require('./db')
const { uploadFile, proceedIfValid } = require('./helpers')


///////////////////////////////////////////////////////////////////
//           Init Server
///////////////////////////////////////////////////////////////////
app.use(express.static('public'))
auth(app)
server.listen(settings.port)
console.log('Server listening on port', settings.port)

///////////////////////////////////////////////////////////////////
//           Routes
///////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html')
})

///////////////////////////////////////////////////////////////////
//           Socket Actions
///////////////////////////////////////////////////////////////////
io.on('connection', socket => {
  // Add data
  socket.on('add', ({ sound, token }) => {
    proceedIfValid(token, socket, user => db.add(user, sound, socket))
  })

  // Remove data
  socket.on('remove', ({ id, token }) => {
    proceedIfValid(token, socket, user => db.remove(user, id, socket))
  })

  // Update data
  socket.on('update', ({ sound, token }) => {
    proceedIfValid(token, socket, user => db.update(user, sound, socket))
  })

  // Search for data
  socket.on('search', searchTerm => {
    db.search(searchTerm, socket)
  })

  // Upload Sound File
  socket.on('uploadFile', ({ file, name, token }) => {
    proceedIfValid(token, socket, user => uploadFile(user, file, name, socket))
  })
})
