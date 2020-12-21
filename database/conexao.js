const mysql = require('mysql');

/* 
frank
8155057renan

root
8r1t5l5
*/

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'frank',
    password: '8155057renan',
    database: 'agenda'
});

module.exports = conexao;