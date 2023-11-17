const express = require('express');
// configuralçao da rota
const router = express.Router();

const app = express();
const porta = 3333;

function mostraOla (req, res) {
    res.send('Olá, mundo!');
}

function mostraPorta () {
    console.log(`Servidor rodando na porta ${porta}`);
}

app.use(router.get('/ola', mostraOla));
app.listen(porta, mostraPorta);