const express = require('express');
const example = require('../components/example/network');
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = (server) => {
  server.use('/examples', example);
  server.use('/messages', message);
  server.use('/users', user);
  server.use('/chats', chat);
};

module.exports = routes;