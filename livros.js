const express = require('express'); // Importando o express
const router = express.Router(); // Importando o router do express
const app = express(); // Iniciando o express
app.use(express.json()); // Usando o express para trabalhar com json


const connectDB = require('./database'); // Importando o connectDB do database.js
connectDB(); // Conectando ao banco de dados

const Livro = require('./livroModel'); // Importando o Livro do models/Livro.js


const porta = 3333; // Definindo a porta padrão

//GET 
async function mostraLivros (req, res) {
    try {
        const livrosDB = await Livro.find(); // Buscando todos os livros no banco de dados
        res.json(livrosDB); // Mostrando os livros em json
    } catch (err) {
        console.log(err);
    }

}

//POST
async function adicionaLivros (req, res) {
    const livro = new Livro({
        nome: req.body.nome,
        imagem: req.body.imagem,
        descricao: req.body.descricao,
        citacao: req.body.citacao,
        autor: req.body.autor
    });

    try {
        const livroDB = await livro.save(); // Salvando o livro no banco de dados
        res.status(201).json(livroDB); // Mostrando o livro em json com mensagem de sucesso
    } catch (err) {
        console.log(err);
    }
}

//PATCH
async function atualizaLivros (req, res) {
    try {
        const foundBook = await Livro.findById(req.params.id); // Buscando o livro no banco de dados

        if (req.body.nome) {
            foundBook.nome = req.body.nome;
        }
        if (req.body.imagem) {
            foundBook.imagem = req.body.imagem;
        }
        if (req.body.descricao) {
            foundBook.descricao = req.body.descricao;
        }
        if (req.body.citacao) {
            foundBook.citacao = req.body.citacao;
        }
        if (req.body.autor) {
            foundBook.autor = req.body.autor;
        }

        const updatedBook = await foundBook.save(); // Salvando o livro atualizado no banco de dados
        res.json(updatedBook); // resposta em json

    } catch (err) {
        console.log(err);
    }


}

//DELETE
async function deletaLivros (req, res) {
    try {
        await Livro.findByIdAndDelete(req.params.id); // Buscando o livro no banco de dados e deletando
        res.json({ message: 'Livro deletado com sucesso!'}); // Mostrando o livro em json com mensagem de sucesso
    } catch (err) {
        console.log(err);
    }
}

// porta
function mostraPorta () {
    console.log(`Servidor rodando na porta ${porta}`);
}


app.use(router.get('/livros', mostraLivros)); // Rota para mostrar os livros
app.use(router.post('/livros', adicionaLivros)); // Rota para adicionar um livro
app.use(router.patch('/livros/:id', atualizaLivros)); // Rota para atualizar um livro
app.use(router.delete('/livros/:id', deletaLivros)); // Rota para deletar um livro

app.listen(porta, mostraPorta); // Iniciando o servidor
