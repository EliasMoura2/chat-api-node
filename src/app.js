const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(logger('dev'));

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/examples', require('./controllers/example'))
app.use('/messages', require('./controllers/message'));

module.exports = app;