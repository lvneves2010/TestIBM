var mongoose = require('mongoose');
const Chamado = require('../models/model.js');

mongoose.connect('mongodb+srv://lvneves2010:Gustavo0801@cluster0-m9sca.mongodb.net/testIBM?retryWrites=true')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

const CreateChamado = (chamadoData) => {
    Chamado.create(chamadoData, function (err, post) {
        if (err) return next(err);
    });
}

module.exports = { CreateChamado };