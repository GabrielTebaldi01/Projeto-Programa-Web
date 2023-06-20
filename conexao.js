
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "01122001",
database: "site"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255), total FLOAT)";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    });
    });
    
