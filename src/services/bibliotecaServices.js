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
    }
};