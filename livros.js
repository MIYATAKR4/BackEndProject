const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

const livros = [
    {
        nome: "Retalhos ",
        imagem: "https://i.postimg.cc/NMf5W3Qf/image.jpg",
        descricao: "Thompson retrata sua própria história, da infância até o início da vida adulta, numa cidadezinha de Wisconsin, no centro dos Estados Unidos, que parece estar sempre coberta pela neve.",
        citacao: "Debaixo d'água, somos dois afogados, nossos corpos enroscados um no outro. Mas, ao emergir, nós apenas boiamos, e somos afastados pela correnteza até ficarmos à deriva em paralelo, mas nunca juntos.",
        autor: "Craig Thompson",
    },

    {
        nome: "As Muitas Mortes de Laila Starr",
        imagem: "https://i.postimg.cc/tCz1qd4M/717-Fw89-LFs-L.jpg",
        descricao: "Até a Morte está desempregada. Oi? Com a humanidade prestes a descobrir o segredo da imortalidade, o avatar da Morte é demitido e relegado ao mundo abaixo para viver os seus dias, agora finitos, no corpo de Laila Starr, uma jovem de vinte e poucos anos que vive em Mumbai. Lutando com sua recém-descoberta mortalidade, Laila busca uma maneira de ser colocada no momento e no lugar onde o criador da imortalidade nascerá. Será que Laila aproveitará sua chance para impedir a Humanidade de alterar de forma permanente o ciclo da vida ou a morte realmente se tornará uma coisa do passado?",
        citacao: "Por baixo dos cachos suaves de cabelos negros, seus olhos se fixavam em luzes distantes da cidade, e seus pensamentos, assim como a fumaça do cigarro, flutuavam ao céu",
        autor: "Ram v (autor) Filipe Andrade (ilustrador)"
    },

    {
        nome: "Os Devoradores da Noite: Ela Come a Noite",
        imagem: "https://i.postimg.cc/YCvBjkxm/image.jpg",
        descricao: "Gêmeos chineses americanos, Milly e Billy estão enfrentando momentos difíceis. Além dos vários fracassos em suas vidas pessoais e profissionais, eles estão lutando para manter o restaurante deles de pé. Felizmente, seus pais, Ipo e Keon, estão na cidade para a visita anual. Tendo imigrado de Hong Kong antes do nascimento dos gêmeos, Ipo e Keon têm apoiado seus filhos incondicionalmente, mas agora começam a se perguntar se esse apoio tornou Milly e Billy incapazes de se sustentarem.",
        citacao: "Você realmente pode fazer este lugar ser seu",
        autor: "Marjorie Liu"
    }
]

function mostraLivros (req, res) {
    res.json(livros)
}


function mostraPorta () {
    console.log(`Servidor rodando na porta ${porta}`);
}

app.use(router.get('/livros', mostraLivros));
app.listen(porta, mostraPorta);