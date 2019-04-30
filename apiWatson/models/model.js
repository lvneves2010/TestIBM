var mongoose = require('mongoose');

var ChamadoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  situacao: String,
  atendente: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Chamado', ChamadoSchema);
