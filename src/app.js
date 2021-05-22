const express = require('express');
const logger = require('morgan');
const path = require('path');
const db = require('./config/db');
const app = express();

db(process.env.MONGODB_URI)

// const routerExample = require('./components/example/network');
// const routerMessage = require('./components/message/network');
const router = require('./networks/routes');

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(logger('dev'));

app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(routerExample);
// app.use(routerMessage);
router(app);

module.exports = app;