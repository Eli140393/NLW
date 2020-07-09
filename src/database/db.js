// Importar a depedencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto de banco de dados operações no db

const db = new sqlite3.Database("./src/database/database.db") // Construtor ou classe

// Exportando o banco para utilizar no server
module.exports = db
// utilizar o objeto de database

db.serialize(() => {
       // Criando tabelas n sqlite3
    
    //     db.run(  `
    //    DROP TABLE IF   EXISTS places `
    //     )
    //     db.run(  `
    //    CREATE TABLE IF  NOT EXISTS places (
    //        ID_Place INTEGER PRIMARY KEY AUTOINCREMENT,
    //        img_Place TEXT,
    //        NM_Place TEXT,
    //        DS_Address TEXT,
    //        DS_Address2 TEXT,
    //        DS_State TEXT,
    //        DS_City TEXT,
    //        DS_Items TEXT
    //    );
    //    `)
//     // Inserindo dados na tabela
      
        
    // const query =`
    //     INSERT INTO places (
    //         img_Place,
    //         NM_Place,
    //         DS_Address,
    //         DS_Address2,
    //         DS_State,
    //         DS_City,
    //         DS_Items
    //     ) VALUES (?,?,?,?,?,?,?);
    // ` 
    // // Const com o array para inserir dados
    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
    //     "Colectoria",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]
    //     função que retorna se o valor foi inserido apos a e execução
    // dos parametros
    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

//  //  afterInsertData) = > Desta forma ela so É executada depois dos outros values
// //  callBack =  afterInsertData)
//  db.run(query, values, afterInsertData)





//     // Consultando os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registros")
    //     console.log(rows)
    // })


    // Deletando dados de uma tabela

    // db.run(`
    // DELETE FROM places WHERE ID_Place = ?
    // `, [1], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso")
    //     console.log(this)
    // })
 })