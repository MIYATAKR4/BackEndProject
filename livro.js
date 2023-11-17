const express = require('express');
// configuralçao da rota
const router = express.Router();

const app = express();
const porta = 3333;

function mostraLivro (req, res) {
    res.json({
        imagem: "https://i.postimg.cc/NMf5W3Qf/image.jpg",
        nome: "Retalhos ",
        descricao: "Thompson retrata sua própria história, da infância até o início da vida adulta, numa cidadezinha de Wisconsin, no centro dos Estados Unidos, que parece estar sempre coberta pela neve.",
        citacao: "Debaixo d’água, somos dois afogados, nossos corpos enroscados um no outro. Mas, ao emergir, nós apenas boiamos, e somos afastados pela correnteza até ficarmos à deriva em paralelo, mas nunca juntos.",
        autor: "Craig Thompson",
    })
}

function mostraPorta () {
    console.log(`Servidor rodando na porta ${porta}`);
}

app.use(router.get('/livros', mostraLivro));
app.listen(porta, mostraPorta);