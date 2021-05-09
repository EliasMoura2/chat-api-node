const express = require('express');
const example = require('../components/example/network')
const message = require('../components/message/network');

const routes = (server) => {
  server.use('/examples', example);
  server.use('/messages', message);
};

module.exports = routes;