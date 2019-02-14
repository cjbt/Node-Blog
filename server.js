const express = require('express');
const usersRouter = require('./data/routers/usersRouter');
const postsRouter = require('./data/routers/postRouter');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

module.exports = server;
