const express = require('express');
const app = express();
const io = require('socket.io');

app.use(express.static('dist'));

app.post('/', (req,res) => {
  console.log('post request');
  console.log(req.headers.data);
})

app.listen(4000, () => {console.log('listening...')})