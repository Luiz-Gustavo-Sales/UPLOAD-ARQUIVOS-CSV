var csv = [''];
module.exports = {
  async upload(req, res) {
    csv = req.body;
    const dados = req.body;
    console.log('Dados enviado pelo FRONT: ', dados);
    return res.json(csv);
  },
  async download3(req, res) {
    const filtro3 = (value) => {
      return value.filial == 3;
    };
    const valorFIltrado3 = csv.filter(filtro3);
    console.log('Valor filtrado: ', valorFIltrado3);
    return res.json(valorFIltrado3);
  },
};
