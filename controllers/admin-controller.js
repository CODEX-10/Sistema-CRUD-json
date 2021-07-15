const mongoose = require('mongoose')
require('../models/admin')
const adm = mongoose.model('admin')


// CREATE: CRIAR UMA NOVA POSTAGEM
exports.post = (req, res) => {
    adm.create(req.body, (erro) => {
        if (erro) return res.status(400).json({ // 400: bad request: mensagem errada
            error: true,
            message: "Erro: Admin não cadastrado!"
        })
        return res.status(201).json({ // 201: created
            error: false,
            message: "Admin cadastrado com sucesso!"
        })
    })
}

// READ: LISTA TODAS AS POSTAGENS
exports.get = (req, res) => {
    adm.find().sort({ date: 'desc' }).then((admin) => {
        return res.status(200).send(admin) // 200 OK
    }).catch((erro) => {
        return res.status(204).json({ // 204 NO CONTENT
            error: true,
            message: "Nenhuma admin encontrado"
        })
    })
}

// READ: LISTAR APENAS UMA POSTAGEM
exports.getById = (req, res) => {
    adm.findOne({ _id: req.params.id }).then((admin) => {
        return res.status(200).json(admin) // 200 OK
    }).catch((erro) => {
        return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Admin não encontrado"
        })
    })
}

// UPDATE: EDITAR UMA POSTAGEM
exports.put = (req, res) => {
    adm.updateOne({ _id: req.params.id }, req.body, (erro) => {
        if (erro) return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Erro ao editar o admin"
        })
    })
    return res.status(200).json({
        error: false,
        message: "Admin editado com sucesso!"
    })
}

// DELETE: DELETAR POSTAGEM
exports.delete = (req, res) => {
    adm.deleteOne({ _id: req.params.id }, (erro) => {
        if (erro) return res.status(400).json({ // 400 BAD REQUEST
            error: true,
            message: "Erro ao deletar o admin"
        })
    })
    return res.status(200).json({
        error: false,
        message: "Admin deletado com sucesso!"
    })
}