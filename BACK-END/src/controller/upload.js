const Papa = require('papaparse');
const fs = require('fs');
var csv = [''];
module.exports = {
  async upload(req, res) {
    csv = req.body;
    const dados = req.body;
    console.log('Dados enviado pelo FRONT: ', dados);
    return res.json(csv);
  },
  async download(req, res) {
    const filtro = (value) => {
      return value.filial == 1;
    };
    const valorFIltrado = csv.filter(filtro);
    console.log('Valor filtrado: ', valorFIltrado);
    return res.json(valorFIltrado);
  },
};
