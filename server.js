const express = require('express');

const app = express();
app.use(express.json());

const alunos =[
{
    "nome": "didi",
    "idade": "28"
},
{
    "nome": "vivi",
    "idade": "67"
},
{
    "nome": "dede",
    "idade": "69"
}
]

app.get('/alunos', (req, res) =>{
    res.send('Pegando dados da API')
})

app.post('/alunos', (req, res) => {
    //const novoItem = {id: idCounter++, nome: req.body.nome};
    //itens.push(noveItem);
    //res.status(201).json(novoItem);

    const {nome, idade} =req.body
    res.send('Nome: ${nome} Idade: ${idade}')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});