const express = require('express');

const server = express();

server.use('/api/users');

module.exports = server;
