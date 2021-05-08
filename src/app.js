const express = require('express');
const logger = require('morgan')
const app = express();

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(logger('dev'));

app.use('/examples', require('./controllers/example'))
app.use('/messages', require('./controllers/message'));

module.exports = app;