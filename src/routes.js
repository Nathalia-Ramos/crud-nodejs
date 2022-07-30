const express = require ('express')
const router = express.Router()

const controllerBiblioteca = require('./controller/controllerBibliotec.js')
// const validate = require('./middlewares/Validate')

//Criando os endPoint
router.get('/livros', controllerBiblioteca.buscarTodos)
router.get('/livro/:id', controllerBiblioteca.buscarID );
router.post('/livros', controllerBiblioteca.inserir );
router.put('/livros/:id', controllerBiblioteca.update);
router.delete('/livro/:id', controllerBiblioteca.delete);
 

module.exports = router;


