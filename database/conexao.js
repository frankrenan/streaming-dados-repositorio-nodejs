const mysql = require('mysql');


const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'frank',
    password: '8155057renan',
    database: 'agenda'
});

module.exports = conexao;