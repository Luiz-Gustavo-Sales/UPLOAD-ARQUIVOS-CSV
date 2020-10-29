const Papa = require("papaparse");
const fs = require("fs");
var csv = [""];
module.exports = {
  async upload(req, res) {
    csv = req.body;
    const dados = req.body;
    console.log("Dados enviado pelo FRONT: ", dados);
    return res.json(csv);
  },
  async download1(req, res) {
    //========== =tratando valores FILIAL-3 =================
    const filtro3 = (value) => {
      return value.filial == 3;
    };
    const valorFIltrado3 = csv.filter(filtro3);
    var Filial3Soma = 0;
    for (var prop3 in valorFIltrado3) {
      Filial3Soma += parseFloat(valorFIltrado3[prop3].preco);
    }
    console.log("OLHA AQUI :", Filial3Soma);
    //========== =tratando valores FILIAL-1 =================
    const filtro1 = (value) => {
      return value.filial == 1;
    };
    const valorFIltrado1 = csv.filter(filtro1);
    var Filial1Soma = 0;
    for (var prop1 in valorFIltrado1) {
      Filial1Soma += parseFloat(valorFIltrado1[prop1].preco);
    }
    console.log("OLHA AQUI :", Filial1Soma);
    // Filial1Soma = parseFloat(Filial1Soma).toFixed(2);
    // Filial3Soma = parseFloat(Filial3Soma).toFixed(2);
    const array1_3 = [];
    //setando os valores no array
    array1_3.push(Filial3Soma);
    array1_3.push(Filial1Soma);
    array1_3.push(180);
    //=========console log================
    console.log("Filial 1 soma: ", Filial1Soma);
    console.log("Filial 3 soma: ", Filial3Soma);
    console.log("oS VALORES ", array1_3);
    return res.json(array1_3);
  },
};
