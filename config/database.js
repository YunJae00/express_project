module.exports = function () {
    var mysql = require('mysql2');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rnjsdbswo00!',
        database: 'new'
    });
    conn.connect();
    return conn;
}