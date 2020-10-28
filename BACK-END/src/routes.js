//importando o express (rotas)
const express = require('express');
//modulo de rotas do express
const routes = express.Router();
const Dismelo = require('./controller/dismelo');
const Distrimix = require('./controller/distrimix');
//rotas apra filial Dismelo
routes.post('/upload', Dismelo.upload);
routes.get('/list1', Dismelo.download1);
//rotas apra filial Distrimix
routes.post('/upload3', Distrimix.upload3);
routes.get('/list3', Distrimix.download3);

module.exports = routes;
