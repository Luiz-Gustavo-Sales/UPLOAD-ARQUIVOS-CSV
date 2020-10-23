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
  async download1(req, res) {
    const filtro1 = (value) => {
      return value.filial == 1;
    };
    const valorFIltrado1 = csv.filter(filtro1);
    console.log('Valor filtrado: ', valorFIltrado1);
    return res.json(valorFIltrado1);
  },
};
