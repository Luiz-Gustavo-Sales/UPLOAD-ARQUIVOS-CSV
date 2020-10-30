const Papa = require("papaparse");
const fs = require("fs");

var ArrayObjeto = [""];
module.exports = {
  async upload(req, res) {
    var csv = [""];
    csv = req;
    const resultado = await Papa.parse(csv, {
      header: true,
      delimiter: ";",
      complete: (results, file) => {
        ArrayObjeto = results.data;
      },
    });

    return res.json(ArrayObjeto);
  },
  async download1(req, res) {
    //===================FILIAL 3======================
    const filtro3 = (value) => {
      return value.CODFILIAL == 3;
    };

    var valorFIltrado3 = [""];
    valorFIltrado3 = ArrayObjeto.filter(filtro3);
    var Filial3Soma = 0;

    for (var prop3 in valorFIltrado3) {
      console.log("valor ", valorFIltrado3[prop3].VLATEND);
      Filial3Soma += parseFloat(
        valorFIltrado3[prop3].VLATEND.replace(",", ".")
      );
    }

    console.log("OLHA AQUI :", Filial3Soma);
    //setando os valores no array
    //========== =tratando valores FILIAL-1 ============
    const filtro1 = (value) => {
      return value.CODFILIAL == 1;
    };

    var valorFIltrado1 = [""];
    valorFIltrado1 = ArrayObjeto.filter(filtro1);
    var Filial1Soma = 0;

    for (var prop1 in valorFIltrado1) {
      console.log("valor ", valorFIltrado1[prop1].VLATEND);
      Filial1Soma += parseFloat(
        valorFIltrado1[prop1].VLATEND.replace(",", ".")
      );
    }

    console.log("OLHA AQUI :", Filial1Soma);
    const array1_3 = [];
    //setando os valores no array FILIAL 1
    array1_3.push(Filial1Soma.toFixed(2));
    //VALOR SOMADO FILIAL 3
    array1_3.push(Filial3Soma.toFixed(2));

    //=========console log===========
    console.log("Filial 1 soma: ", Filial1Soma);
    console.log("oS VALORES ", array1_3);
    return res.json(array1_3);
  },
};
