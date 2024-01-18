const createConnection = require('../config/database');

const dbMiddleware = {
  query: function(sql, values, callback) {
    const conn = createConnection();

    conn.query(sql, values, function(err, results) {
      conn.end(); // 연결 해제
      callback(err, results);
    });
  },

  insertUser: function(userData, callback) {
    const sql = 'INSERT INTO users SET ?';
    this.query(sql, userData, callback);
  },

  // 다른 데이터베이스 관련 메소드들...
};

module.exports = dbMiddleware;
