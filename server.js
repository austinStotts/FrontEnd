const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);


app.use(express.static('dist'));

let current = '';

io.on('connection', socket => {
  console.log('connected!');
  socket.emit('hello', 'welcome to the connection :)');
  socket.emit('new', current);
  socket.on('update', (image) => {
    console.log('broadcasting');
    current = image;
    socket.broadcast.emit('update', image);
  })
  socket.on('disconnect', () => console.log('disconnected!'))
})

server.listen(3000);
