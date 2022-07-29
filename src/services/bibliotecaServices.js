const db = require ('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise ((accept, reject) => { 
            db.query('SELECT * FROM tblbiblioteca' , (error, result) =>{
                if(error) {reject (error); return};
                accept (result);
            });
      });
    },

    buscarID: (codigo) => {
        return new Promise ((accept, reject) => { 
            db.query('SELECT * FROM tblbiblioteca where codigo =  ? ' , [codigo], (error, result) =>{
                if(error) {reject (error); return};
                if(result.lengh > 0){
                    accept (result[0]);
                }else{
                    accept(false);
                }
                  
            });
      });
    },

    inserir: (nome, editora, idioma, Autor, qtsPaginar, resumo ) => {
        
        return new Promise ((accept, reject) => { 
            db.query('INSERT INTO tblbiblioteca(nome, editora, idioma, Autor, qtsPaginar, resumo) VALUES (?,?,?,?,?,?)',
                     [nome, editora,idioma, Autor,qtsPaginar, resumo], 
                     (error, result) =>{
                        if(error) {reject (error); return; }
                        accept (result.insertCodigo);
                             
            });
      });
    },
        update: (nome, editora, idioma, Autor, qtsPaginar, resumo, codigo ) => {
        return new Promise ((accept, reject) => { 
            db.query('UPDATE tblbiblioteca SET  nome = ?, editora = ?, idioma = ?, Autor = ?, qtsPaginar=?, resumo=? WHERE codigo = ?',
                     [nome, editora,idioma, Autor,qtsPaginar, resumo, codigo], 
                     (error, result) =>{
                        if(error) {reject (error); return; }
                        accept (result);
                             
            });
      });
    },
    
  
};