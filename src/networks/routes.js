const express = require('express');
const example = require('../components/example/network');
const message = require('../components/message/network');
const user = require('../components/user/network')

const routes = (server) => {
  server.use('/examples', example)
  server.use('/messages', message)
  server.use('/users', user)
};

module.exports = routes;