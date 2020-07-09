 const express = require("express")
 const server = express()

//  Pegar o banco de dados

const db = require("./database/db")
// configurar a pasta publica

server.use(express.static("public"))

// Habilitar o uso do req.body 
server.use(express.urlencoded({extended: true}))

// Utilizando template engine
 const nunjucks = require("nunjucks")
 nunjucks.configure("src/views",{
 express: server,
 noCache: true

 })


//  Configurar caminhos da minha aplicação

// Pagina inicial
// req: Requisição
// res: Resposta
server.get("/", function(req, res){
return res.render("index.html")

})
server.get("/create-point", function(req, res){

// O objeto req tem varios atributos
// mas para requisitar os dados da aplicação
// é o req.query = Query Strings da nossa url

// console.log (req.query)

    return res.render("create-point.html")

    })

    server.post("/savepoint", (req,res) =>{

        // req.body: O corpo do nosso formulario
         console.log (req.body)

        // Inserir dados no banco de dados

                
    const query =`
        INSERT INTO places (
            img_Place,
            NM_Place,
            DS_Address,
            DS_Address2,
            DS_State,
            DS_City,
            DS_Items
        ) VALUES (?,?,?,?,?,?,?);
    ` 
    // Const com o array para inserir dados
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    //     função que retorna se o valor foi inserido apos a e execução
    // dos parametros
    function afterInsertData(err){
        if(err){

            console.log(err)
            return res.send("Erro no cadastro")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", {saved: true})
    }

 //  afterInsertData) = > Desta forma ela so É executada depois dos outros values
//  callBack =  afterInsertData)
 db.run(query, values, afterInsertData)
       
    } )
    server.get("/search", function(req, res){
        const search = req.query.search
        if(search == ""){
            // Pesquisa vazia
            return res.render("search-results.html", {total: 0})

        }

          // Pegar os dados do banco de dados
        //  Consultando os dados da tabela
    db.all(`SELECT * FROM places  WHERE DS_City LIKE  '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }

        // Total de elementos
      const total = rows.length
        // Mostrar a pagina html com os dados do banco
        return res.render("search-results.html", {places: rows, total:total})

    })
        })
 server.listen(3000)