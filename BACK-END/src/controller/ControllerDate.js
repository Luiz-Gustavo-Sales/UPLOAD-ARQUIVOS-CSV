const Papa = require("papaparse");
const fs = require("fs");
var ArrayObjeto = [""];
module.exports = {
  async arquivoCsv(req, res) {
    var csv = [""];
    //recebendo o arquivo inteiro
    csv = req;
    //convertendo o arquivo em um array de objetos String
    const resultado = await Papa.parse(csv, {
      header: true,
      delimiter: ";",
      complete: (results, file) => {
        //envinado para um variavel global o arquivo convertido para poder tratar
        ArrayObjeto = results.data;
      //  console.log("Olha aqui o Array: ", ArrayObjeto);
      },
    });

    return res.json(ArrayObjeto);
  },
  async filtroCsv(req, res) {
    const filtroDate = (value) => {
      return value.data == "01/10/2020";
    };
    const filtrado = ArrayObjeto.filter(filtroDate);
  //  console.log("Olha aqui", ArrayObjeto.filter(filtroDate));
    return res.json(filtrado);
  },
};
