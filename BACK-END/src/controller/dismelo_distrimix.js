const Papa = require("papaparse");
const fs = require("fs");
const DB = require("../../models/db.js");
var ArrayObjeto = [""];
module.exports = {
  async upload(req, res) {
    var csv = [""];
    //recebendo o arquivo inteiro
    csv = req;
    //convertendo o arquivo em um array de objetos String
    Papa.parse(csv, {
      header: true,
      delimiter: ";",
      complete: (results, file) => {
        ArrayObjeto = results.data;
        ArrayObjeto.map(async (objeto) => {

          const dados = await DB.create({
            COD: objeto.CODCLI,
            NAME: objeto.CLIENTE,
            CIDADE: objeto.NOMECIDADE,
            DATE:objeto.DATA,
            POSICAO_P: objeto.NOMECIDADE,
            VLATEND: objeto.VLATEND,
    
          });
          console.log("Olha aqui DADOS=>> ", dados);
        });
      },
    });

    return res.json(ArrayObjeto);
  },
  async download1(req, res) {
    //===================FILIAL 3======================

    //filtrando a pelo CODFILIAL com códgio 3
    const filtro3 = (value) => {
      return value.CODFILIAL == 3;
    };

    var valorFIltrado3 = [""];
    valorFIltrado3 = ArrayObjeto.filter(filtro3);
    var Filial3Soma = 0;

    for (var prop3 in valorFIltrado3) {
      // console.log("valor ", valorFIltrado3[prop3].VLATEND);
      Filial3Soma += parseFloat(
        valorFIltrado3[prop3].VLATEND.replace(",", ".")
      );
    }

    //  console.log("OLHA AQUI :", Filial3Soma);
    //setando os valores no array
    //========== =tratando valores FILIAL-1 ================
    const filtro1 = (value) => {
      return value.CODFILIAL == 1;
    };

    var valorFIltrado1 = [""];
    valorFIltrado1 = ArrayObjeto.filter(filtro1);
    var Filial1Soma = 0;

    for (var prop1 in valorFIltrado1) {
      //console.log("valor ", valorFIltrado1[prop1].VLATEND);
      Filial1Soma += parseFloat(
        valorFIltrado1[prop1].VLATEND.replace(",", ".")
      );
    }
    // var teste = Filial1Soma.replace(".", ",");
    // Filial1Soma = teste;
    // console.log("Teste ", teste);
    // Filial1Soma = Filial1Soma.toLocaleString("pt-BR");
    // console.log("OLHA AQUI :", Filial1Soma);
    const array1_3 = [];
    //setando os valores no array FILIAL 1
    array1_3.push(Filial1Soma.toFixed(2));
    //VALOR SOMADO FILIAL 3
    array1_3.push(Filial3Soma.toFixed(2));
    //=========console log===========
    //  console.log("Filial 1 soma: ", Filial1Soma);
    //  console.log("oS VALORES ", array1_3);
    return res.json(array1_3);
  },
};
