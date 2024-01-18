module.exports = function () {
    var mysql = require('mysql2');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'example'
    });
    conn.connect();
    return conn;
}