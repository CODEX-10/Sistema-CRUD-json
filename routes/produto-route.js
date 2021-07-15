const express = require('express')
const Route = express.Router()
const controllerP = require('../controllers/produto-controller')
const authService = require('../services/auth-service');

// CREATE: CRIAR UMA NOVA POSTAGEM
Route.post('/add', authService.authorize, controllerP.post);

// READ: LISTA TODAS AS POSTAGENS
Route.get('/', controllerP.get);

// READ: LISTAR APENAS UMA POSTAGEM
Route.get('/produto/:id', controllerP.getById);

// UPDATE: EDITAR UMA POSTAGEM
Route.put('/produto/:id', authService.authorize, controllerP.put);

// DELETE: DELETAR POSTAGEM
Route.delete('/produto/:id', authService.authorize, controllerP.delete);

module.exports = Route