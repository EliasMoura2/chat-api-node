const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const db = require('./config/db');
// const routerExample = require('./components/example/network');
// const routerMessage = require('./components/message/network');
const router = require('./networks/routes');

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'))

io.on('Connection', (socket) => {
  console.log('nuevo cliente conectado');
  socket.emit('mensaje', 'Bienvenido!');
})

setInterval(() => {
  io.emit('mensaje', 'Hello all')
}, 3000);

db(process.env.MONGODB_URI)

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(logger('dev'));

app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(routerExample);
// app.use(routerMessage);
router(app);

module.exports = server;