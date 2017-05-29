var mysql = require('mysql');

var connMySql = () => {
    //console.log('Conexao com db');

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}
module.exports = function () {
    return connMySql; 
}