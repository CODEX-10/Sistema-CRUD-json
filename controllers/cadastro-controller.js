const mongoose = require('mongoose')
require('../models/cadastro')
const conta = mongoose.model('cadastro')


// CREATE: CRIAR UMA NOVA POSTAGEM
exports.post = (req, res) => {
    conta.create(req.body, (erro) => {
        if (erro) return res.status(400).json({ // 400: bad request: mensagem errada
            error: true,
            message: "Erro: Conta não cadastrada!"
        })
        return res.status(201).json({ // 201: created
            error: false,
            message: "Conta cadastrada com sucesso!"
        })
    })
}

// READ: LISTA TODAS AS POSTAGENS
exports.get = (req, res) => {
    conta.find().sort({ date: 'desc' }).then((cadastro) => {
        return res.status(200).send(cadastro) // 200 OK
    }).catch((erro) => {
        return res.status(204).json({ // 204 NO CONTENT
            error: true,
            message: "Nenhuma conta encontrada"
        })
    })
}

// READ: LISTAR APENAS UMA POSTAGEM
exports.getById = (req, res) => {
    conta.findOne({ _id: req.params.id }).then((cadastro) => {
        return res.status(200).json(cadastro) // 200 OK
    }).catch((erro) => {
        return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Conta não encontrada"
        })
    })
}

// UPDATE: EDITAR UMA POSTAGEM
exports.put = (req, res) => {
    conta.updateOne({ _id: req.params.id }, req.body, (erro) => {
        if (erro) return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Erro ao editar a conta"
        })
    })
    return res.status(200).json({
        error: false,
        message: "Conta editada com sucesso!"
    })
}

// DELETE: DELETAR POSTAGEM
exports.delete = (req, res) => {
    conta.deleteOne({ _id: req.params.id }, (erro) => {
        if (erro) return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Erro ao deletar a conta"
        })
    })
    return res.status(200).json({
        error: false,
        message: "Conta deletada com sucesso!"
    })
}