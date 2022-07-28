require ('dotenv').config({path: 'variaveis.env'})   //le o arquivo de variavel de ambiente (varialvel.env)

const express = require('express')
const cors = require ('cors')

const router  = require ('./routes')

const server = express();
server.use(cors()); //colocar o servidor em uso chamando o cors

server.use('/api', router); //faz com que todos os endereços da rota tenha /api


server.listen(8080,() => {
    console.log(`servidor está rodando em http://localhost:${process.env.PORT}`)
})