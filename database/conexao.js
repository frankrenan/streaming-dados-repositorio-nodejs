const mysql = require('mysql');


const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'f8r1t5l5',
    database: 'agenda'
});

module.exports = conexao;