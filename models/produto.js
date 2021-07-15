const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Produto = new Schema({
    titulo: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('produto', Produto)