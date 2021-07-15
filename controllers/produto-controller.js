const mongoose = require('mongoose')
require('../models/produto')
const produto = mongoose.model('produto')


// CREATE: CRIAR UMA NOVA POSTAGEM
exports.post = (req, res) => {
    produto.create(req.body, (erro) => {
        if (erro) return res.status(400).json({ // 400: bad request: mensagem errada
            error: true,
            message: "Erro: Produto não cadastrado!"
        })
        return res.status(201).json({ // 201: created
            error: false,
            message: "Produto cadastrado com sucesso!"
        })
    })
}

// READ: LISTA TODAS AS POSTAGENS
exports.get = (req, res) => {
    produto.find().sort({ date: 'desc' }).then((produto) => {
        return res.status(200).send(produto) // 200 OK
    }).catch((erro) => {
        return res.status(204).json({ // 204 NO CONTENT
            error: true,
            message: "Nenhuma produto encontrado"
        })
    })
}

// READ: LISTAR APENAS UMA POSTAGEM
exports.getById = (req, res) => {
    produto.findOne({ _id: req.params.id }).then((produto) => {
        return res.status(200).json(produto) // 200 OK
    }).catch((erro) => {
        return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Produto não encontrado"
        })
    })
}

// UPDATE: EDITAR UMA POSTAGEM
exports.put = (req, res) => {
    produto.updateOne({ _id: req.params.id }, req.body, (erro) => {
        if (erro) return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Erro ao editar o produto"
        })
    })
    return res.status(200).json({
        error: false,
        message: "Produto editado com sucesso!"
    })
}

// DELETE: DELETAR POSTAGEM
exports.delete = (req, res) => {
    produto.deleteOne({ _id: req.params.id }, (erro) => {
        if (erro) return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Erro ao deletar o produto"
        })
    })
    return res.status(200).json({
        error: false,
        message: "Produto deletado com sucesso!"
    })
}