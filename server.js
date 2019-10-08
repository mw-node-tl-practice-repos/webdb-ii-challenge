const express = require('express');

const server = express();

const carsRouter = require('./api/cars/carsRouter.js');

server.use(express.json())
server.use('/api/cars', carsRouter)

module.exports = server;