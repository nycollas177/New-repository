const { application } = require("express")
const express = require("express")

const app = express()

application.get('/', (requisicao, resposta) =>{
    resposta.send("Estou funcionando com o express")
})

application.listen(3000, () => {
    console.log("servidor rodando na porta 3000!")
})