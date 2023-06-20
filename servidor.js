const {response} = require ('express');
var http = require('http');
var url = require('url');       

http.createServer(
    function(req, res){
        res.setHeader("charset", "UTF-8");
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Resposta...</title>");
        res.write("</head>");

        res.write("<body>");
        res.write("<p>Dados de compra cadastrados com sucesso!!...</p>");

        

        var querystring = url.parse(req.url, true).query;
        var Nome = querystring['nome'];
        var Email = querystring['email'];

        var Total = querystring['calculo'];

        var SQL = "INSERT INTO customers(name, address, total) VALUES ('" + Nome + "', '" + Email + "' , '" + Total + "')";
        console.log(SQL);

        var mysql = require('mysql');
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "01122001",
            database: "site"
        });

        if (Nome != undefined && Email != undefined) {
            con.connect(function(err){
                if(err) throw err;
                console.log("Conexao realizada com sucesso");
                con.query(SQL, function(err, result) {
                    if(err) throw err;
                    console.log("Dados inseridos com sucesso!");
                    });
            });
        }
        res.write("</body>");
        res.write("</html>");
    }
).listen(8080);