
const { application } = require("express")
const express = require("express")

const path = require("path")

const app = express()

app.get('/usuarios/:id', (requisiçao, resposta) => {
    const id = requisiçao.params.id

    console.log(id)
    resposta.sendFile(`${caminhoBase}/usurios.html`)
})
const caminhoBase = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) =>{
    resposta.sendFile(`${caminhoBase}index.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000!")
})