const mysql = require('mysql');

/* 
frank
8155057renan
*/

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'f8r1t5l5',
    database: 'agenda'
});

module.exports = conexao;