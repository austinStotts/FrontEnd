const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const redis = require('./redis');

app.use(express.static('dist'));

io.on('connection', socket => {
  console.log('connected!');
  socket.emit('hello', 'welcome to the connection :)');

  socket.on('get', (room) => {
    socket.join(room);
    redis.get(room, (image) => socket.emit('give', image));
  })

  socket.on('update', (info) => {
    console.log('broadcasting');
    redis.set(info.room, info.image);
    socket.join(info.room)
    socket.in(info.room).emit('update', info);
  })

  socket.on('disconnect', () => console.log('disconnected!'))
})

server.listen(3000);
