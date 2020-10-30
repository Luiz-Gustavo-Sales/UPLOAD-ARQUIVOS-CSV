//importando o express (rotas)
const express = require("express");
//modulo de rotas do express
const routes = express.Router();
const Dismelo = require("./controller/dismelo");
 //////////////
const Teste = require("./Test/controller");
//rotas apra filial Dismelo
routes.post("/upload", Dismelo.upload);
routes.get("/list1", Dismelo.download1);


module.exports = routes;
