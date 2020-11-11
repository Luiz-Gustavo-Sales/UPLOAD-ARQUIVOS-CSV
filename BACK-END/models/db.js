const { Schema, model } = require("mongoose");

const DashboardSchema = new Schema({
  COD: {
    type: String,
    required: true,
  },
  NAME: {
    type: String,
    required: true,
  },
  DATE: {
    type: String,
    required: true,
  },
  CIDADE: {
    type: String,
    required: true,

  },
  POSICAO_P: {
    type: String,
    required: true,
  },
  VLATEND: {
    type: String,
    required: true,
  },  
});
module.exports = model("Dashboard", DashboardSchema);