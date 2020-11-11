//importando o express (rotas)
const express = require("express");
//modulo de rotas do express
const routes = express.Router();
const Dismelo = require("./controller/dismelo_distrimix");
//
const Teste = require("./controller/ControllerDate");
//rotas apra filial Dismelo
routes.post("/upload", Dismelo.upload);
routes.get("/list1", Dismelo.download1);

//============Testes===================

routes.post("/arquivoCsv", Teste.arquivoCsv);
routes.get("/filtroCsv", Teste.filtroCsv);
module.exports = routes;
