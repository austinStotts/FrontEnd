const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');
app.use(cors());

app.post('/', (req, res) => {
  console.log('post request')
})


io.listen(3000);

io.on('connection', socket => {
  console.log('connected!');
  socket.emit('hello', 'welcome to the connection :)');
  socket.on('disconnect', () => console.log('disconnected!'))
})



// app.listen(3000, _=> console.log('listening...'))