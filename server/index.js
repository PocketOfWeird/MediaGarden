var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var fulltextsearchlight = require('full-text-search-light')

///////////////////////////////////////////////////////////////////
//           Init DB
///////////////////////////////////////////////////////////////////
const DB_FILE = 'server/db.json'
var db = fulltextsearchlight.loadSync(DB_FILE)

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
    addToDb(obj, socket)
  })

  // Remove data
  socket.on('remove', id => {
    removeFromDB(id, socket)
  })

  // Update data
  socket.on('update', obj => {
    const removed = removeFromDB(obj.id, socket)
    if (removed) addToDb(obj)
  })

  // Search for data
  socket.on('search', searchTerm => {
    if (valid(searchTerm, 'string', 'search term', socket)) {
      socket.emit('server_state', db.search(searchTerm))
    }
  })

})

///////////////////////////////////////////////////////////////////
//           Helpers
///////////////////////////////////////////////////////////////////
const emitError = (errObject, socket) => {
  socket.emit('error', errObject)
}

const saveDB = (socket) => {
  db.save(DB_FILE, err => {
    if (err) {
      emitError(err, socket)
      return false
    } else {
      socket.emit('success')
      return true
    }
  })
}

const valid = (data, type, name, socket) => {
  if (typeof(data) !== type) {
    emitError({ message:'Invalid ' + name }, socket)
    return false
  }
  return true
}

const addToDb = (obj, socket) => {
  if (valid(obj, 'object', 'item object', socket)) {
    id = db.add(obj)
    obj.id = id
    saveDB(socket)
    return true
  }
  return false
}

const removeFromDB = (id, socket) => {
  if (valid(id, 'number', 'item id', socket)) {
    try {
      db.remove(id)
      saveDB(socket)
      return true
    } catch (e) {
      emitError(e, socket)
      return false
    }
  }
  return false
}
