const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const server = require('http').Server(app);
const socket = require('./socket');

const db = require('./config/db');

const router = require('./networks/routes');

app.use(express.static('public'));

// io.on('Connection', (socket) => {
//   console.log('nuevo cliente conectado');
//   socket.emit('mensaje', 'Bienvenido!');
// })

// setInterval(() => {
//   io.emit('mensaje', 'Hello all')
// }, 3000);

db(process.env.MONGODB_URI);

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(logger('dev'));

app.use('/static', express.static(path.join(__dirname, 'public')));

socket.connect(server);
router(app);

module.exports = server;