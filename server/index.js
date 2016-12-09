var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var db = require('./db')


///////////////////////////////////////////////////////////////////
//           Init Server
///////////////////////////////////////////////////////////////////
app.use(express.static('public'))
server.listen(80)
console.log('Server listening on port 80')

///////////////////////////////////////////////////////////////////
//           Routes
///////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html')
});

///////////////////////////////////////////////////////////////////
//           Socket Actions
///////////////////////////////////////////////////////////////////
io.on('connection', socket => {
  // Connection
  socket.emit('connected', { hello: 'world' })

  // Add data
  socket.on('add', obj => {
    db.add(obj, socket)
  })

  // Remove data
  socket.on('remove', id => {
    db.remove(id, socket)
  })

  // Update data
  socket.on('update', obj => {
    db.update(obj, socket)
  })

  // Search for data
  socket.on('search', searchTerm => {
    db.search(searchTerm, socket)
  })
  socket.on('searchByType', ({ searchTerm, type }) => {
    db.searchByType(searchTerm, type, socket)
  })
  socket.on('searchbyAuthor', ({ searchTerm, author }) => {
    db.searchbyAuthor(searchTerm, author, socket)
  })
})
