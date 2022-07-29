const { parse } = require('dotenv');
const res = require('express/lib/response');
const db = require ('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise ((accept, reject) => { 
            db.query('SELECT * FROM tblbiblioteca order by id desc' , (error, result) =>{
                if(error) {reject (error); return};
                accept (result);
            });
      });
    },

    buscarID: (id) => {
        return new Promise ((accept, reject) => { 
            db.query('SELECT * FROM tblbiblioteca where id =  ? ' , [id], (error, result) =>{

                accept(result[0])

                if(error) {reject (error); return;}
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

    update: (nome, editora, idioma, Autor, qtsPaginar, resumo, id ) => {
                
        return new Promise ((accept, reject) => { 
            db.query('UPDATE tblbiblioteca SET  nome = ?, editora = ?, idioma = ?, Autor = ?, qtsPaginar=?, resumo=? WHERE id = ?',
                     [nome, editora,idioma, Autor,qtsPaginar, resumo, id], 
                     (error, result) =>{
                        if(error) {reject (error); return; }
                        accept (result);
                             
            });
      });
    },  
};