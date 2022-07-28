const express = require ('express')
const router = express.Router()

const controllerBiblioteca = require('./controller/controllerBibliotec.js')

//Criando os endPoint
router.get('/livros', controllerBiblioteca.buscarTodos)
router.get('./livro/:codigo', controllerBiblioteca.buscarID );

module.exports = router;
