const Papa = require('papaparse');
const fs = require('fs');
var csv = [''];
module.exports = {
  async upload(req, res) {
    const dados = req.body;
    console.log('Dados recebido pela rota: ', dados);
    const arquivo = fs.readFileSync(dados);
    const string = arquivo.toString('utf-8');

    console.log('STRING ', string);
    //var arquivo = fs.readFileSync(dados, 'utf8');
    console.log('OLha aqui arquivo UTF8 ', string);
    const resultado = await Papa.parse(arquivo, {
      header: true,
      delimiter: ';',
      complete: (results, file) => {
        console.log('Olha aqui results BACK-', results);
        csv = results.data;
      },
    });
    return res.json(csv);
  },
  async download(req, res) {
    const filtro = (value) => {
      return value.filial == 1;
    };
    const valorFIltrado = csv.filter(filtro);
    return res.json(valorFIltrado);
  },
};
