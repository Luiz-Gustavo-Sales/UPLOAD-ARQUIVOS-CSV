const multer = require('multer');
const teste1 = 0;
const upload = multer({ dest: teste1 });
var csv = [''];
module.exports = {
  async upload3(req, res) {
    // const arquivo_teste ;
    csv = req.body;
    // console.log('Dados enviado pelo FRONT: ', csv);
    const dados = req.body;
    // console.log('Dados enviado pelo FRONT: ', dados);
    return res.json(csv);
  },
  async download3(req, res) {
    const filtro3 = (value) => {
      return value.filial == 3;
    };
    const valorFIltrado3 = csv.filter(filtro3);
    console.log('Valor filtrado3: ', valorFIltrado3);
    //return res.json(valorFIltrado3);
  },
};
