const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);


app.use(express.static('dist'));

let current = {}

io.on('connection', socket => {
  console.log('connected!');
  socket.emit('hello', 'welcome to the connection :)');

  socket.on('get', (room) => {
    socket.join(room);
    console.log(room);
    socket.emit('give', current[room])
  })

  socket.on('update', (info) => {
    console.log('broadcasting');
    current[info.room] = info.image;
    socket.join(info.room)
    socket.in(info.room).emit('update', info);
  })



  socket.on('disconnect', () => console.log('disconnected!'))
})

server.listen(3000);
