const bibliotecaServices = require ('../services/bibliotecaServices')

module.exports = {
     buscarTodos : async (req, res) =>{
       
        let json = {error: '', result: []}

        let livros = await bibliotecaServices.buscarTodos()

        for (let i in livros ){
            json.result.push({
                codigo: livros[i].codigo,
                descricao: livros[i]
            })
        }
        res.json(json)
     },
    
     buscarID: async (req, res) => {

        console.log('TESTE');
        let json = {error: '', result:{}}
        
        let codigo = req.params.codigo;
        let livro = await bibliotecaServices.buscarID(codigo);

        if(livro){
            json.result = livro;
        }else{
            res.json(json);
        }


    }
}

