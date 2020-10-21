//importando o express (rotas)
const express = require('express');
//modulo de rotas do express
const routes = express.Router();
const uploadFile = require('./controller//upload');

routes.post('/upload', uploadFile.upload);

module.exports = routes;
