const express = require('express');
const app = express();
const porta = 8080;
const mongoose = require('mongoose');
const authService = require('./services/auth-service');

const produto = require('./routes/produto-route'); 
const cadastro = require('./routes/cadastro-route');
const admin = require('./routes/admin-route');
const { json } = require('express');
const adm = mongoose.model('admin')

//CONFIG. BODY-PARSER:
app.use(express.json());

// CONFIG. MONGOOSE:
mongoose.connect('mongodb://localhost/gustavo_valsechi', {
  useNewUrlParser: true, useUnifiedTopology: true,
  useFindAndModify: false, useCreateIndex: true
}).then(()=>{
    console.log("Conectado ao MongoDB")
}).catch((erro)=>{
    console.log("Erro ao conectar no MongoDB " + erro)
})

// ROTAS:
app.get('/', (req, res) => {
    res.json({ message: "Rota principal" })
})
app.use('/produtos', produto) 
app.use('/cadastros', cadastro)
app.use('/adms', authService.authorize, admin)
app.post('/admLogin', (req, res) => {
    adm.findOne({ username:req.body.username, password:req.body.password }).then((admin) => {
        if(admin){ 
            const token = authService.generateToken({ userId: 1 })
            return res.status(200).json({ auth: true, token })
        }
        return res.status(401).json({ auth: false, message: "Acesso negado! Login inválido..." })     
    })
})

// LEVANTA SERVIDOR
app.listen(porta,function(){
    console.log("Servidor conectado na porta " + porta);
})