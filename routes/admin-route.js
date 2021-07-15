const express = require('express')
const Route = express.Router()
const controllerA = require('../controllers/admin-controller')


// CREATE: CRIAR UMA NOVA POSTAGEM
Route.post('/add', controllerA.post);

// READ: LISTA TODAS AS POSTAGENS
Route.get('/', controllerA.get);

// READ: LISTAR APENAS UMA POSTAGEM
Route.get('/adm/:id', controllerA.getById);

// UPDATE: EDITAR UMA POSTAGEM
Route.put('/adm/:id', controllerA.put);

// DELETE: DELETAR POSTAGEM
Route.delete('/adm/:id', controllerA.delete);

module.exports = Route