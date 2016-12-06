var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(80)
console.log('Server listening on port 80')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html')
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  });
});
