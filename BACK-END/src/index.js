const express = require("express");

const cors = require("cors");
const app = express();

//retirar do servidor http do express
const server = require("http").Server(app);

//habilitar o protocolo ws e http
const io = require("socket.io")(server);
 
app.use((req, res, next) => {
  //criando uma nova variavel no req para poder utilizar o io que está sendo atribuido no req da nova função
  req.io = io;
  //quando terminar a requisição faz com que ele passe para proxima requisição
  return next();
});
//permitir utilizar outros arquivos
app.use(cors());
//backeend tem que entender a estrutura de JSON, logo precisa import o json para o express entender essa estrutura
app.use(express.json());
//res= resposta para o fronteende
//req o que o usuário envia pela URL

//
app.use(require("./routes"));

//passando a porta apra inciada o servidor
server.listen(3002, (erro) => {
  console.log("rodando porta 3004");
});
