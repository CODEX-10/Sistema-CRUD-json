const express = require('express')
const Route = express.Router()
const controllerC = require('../controllers/cadastro-controller')
const authService = require('../services/auth-service');

// CREATE: CRIAR UMA NOVA POSTAGEM
Route.post('/add', authService.authorize, controllerC.post);

// READ: LISTA TODAS AS POSTAGENS
Route.get('/', controllerC.get);

// READ: LISTAR APENAS UMA POSTAGEM
Route.get('/cadastro/:id', controllerC.getById);

// UPDATE: EDITAR UMA POSTAGEM
Route.put('/cadastro/:id', authService.authorize, controllerC.put);

// DELETE: DELETAR POSTAGEM
Route.delete('/cadastro/:id', authService.authorize, controllerC.delete);

module.exports = Route