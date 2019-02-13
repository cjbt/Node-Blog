const express = require('express');
const usersRouter = require('./data/routers/usersRouter');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/users', usersRouter);

module.exports = server;
