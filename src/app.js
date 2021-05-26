const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const socket = require('./socket');
const cors = require('cors');
const config = require('./config/config');

const db = require('./config/db');

const router = require('./networks/routes');

db(config.dbUrl);

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));


socket.connect(server);
router(app);

module.exports = server;