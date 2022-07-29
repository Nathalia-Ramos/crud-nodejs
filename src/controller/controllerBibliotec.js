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
        let json = {error: '', result:{}}
        
        // Resgatando o ID
        let id = req.params.id;
        let livro = await bibliotecaServices.buscarID(id);

        // Só vai entrar aqui se o livro for retornado pelo banco
        if(livro) {
            json.result = livro;
        }

        res.json(json);
    },

    inserir: async (req, res) => {

        let json = {error: '', result:{}};

      
        let nome       = req.body.nome;
        let editora    = req.body.editora;
        let idioma     = req.body.idioma;
        let Autor      = req.body.Autor;
        let qtsPaginar = req.body.qtsPaginar;
        let resumo     = req.body.resumo;
      
        if(nome && editora && idioma && Autor && qtsPaginar && resumo){
            let livroCodigo = await bibliotecaServices.inserir(nome, editora, idioma, Autor, qtsPaginar, resumo);
            json.result = {
                codigo: livroCodigo,
                nome,   
                editora,
                idioma,
                Autor,
                qtsPaginar,
                resumo
            };
        }else{
            json.error = 'ERRO';
        }

            res.json(json);
    },

    update : async (req, res) => {
        let json = {error: '', result:{}};

        let id         = req.body.id;
        let nome       = req.body.nome;
        let editora    = req.body.editora;
        let idioma     = req.body.idioma;
        let Autor      = req.body.Autor;
        let qtsPaginar = req.body.qtsPaginar;
        let resumo     = req.body.resumo;

            await bibliotecaServices.update(id,nome, editora, idioma, Autor, qtsPaginar, resumo);
            json.result = {
                id,
                nome,   
                editora,
                idioma,
                Autor,
                qtsPaginar,
                resumo
            };
       
            
        

            res.json(json);
    }
}

