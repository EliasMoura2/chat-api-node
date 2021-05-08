const express = require('express');
const app = express();

app.use('/messages', require('./controllers/message'));

module.exports = app;