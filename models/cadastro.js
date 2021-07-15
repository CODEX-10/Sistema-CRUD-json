/**
 * ALGUNS COMANDO DE CLI DO MONGODB
 * show databases  // mostras as bases de dados
 * use databaseName // seleciona uma base de dados
 * show collections // mostra as coleções da base selecionada
 * db.collectionName.find() // mostra conteúdo da coleção selecionada
 * db.collectionName.drop() // deleta a coleção selecionada
 * use databaseName // seleciona uma base de dados
 * db.dropDatabase() // deleta a base de dados selecionada
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cadastro = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('cadastro', Cadastro)


