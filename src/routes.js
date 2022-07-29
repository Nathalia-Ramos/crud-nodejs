const express = require ('express')
const router = express.Router()

const controllerBiblioteca = require('./controller/controllerBibliotec.js')
const validate = require('./middlewares/Validate')

//Criando os endPoint
router.get('/livros', controllerBiblioteca.buscarTodos)
router.get('/livro/:id', controllerBiblioteca.buscarID );
router.post('/livros', validate, controllerBiblioteca.inserir );
router.put('/livros/:id', validate, controllerBiblioteca.update);

 

module.exports = router;


