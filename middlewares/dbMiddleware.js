// var conn = require('../config/database');
const createConnection = require('../config/database');
const conn = createConnection();

const dbMiddleware = {
  // query: function(sql, values, callback) {
  //   const conn = createConnection();

  //   conn.query(sql, values, function(err, results) {
  //     conn.end(); // 연결 해제
  //     callback(err, results);
  //   });
  // },

  // insertUser: function(userData, callback) {
  //   const sql = 'INSERT INTO users SET ?';
  //   conn.query(sql, userData, function (err, results) {
  //     if (err) {
  //         console.log(err);
  //         res.status(500);
  //     }
  //     else {
  //         res.redirect('/login');
  //     }
  //   });
  // }
  

  query: (sql, values, callback) => {
    conn.query(sql, values, (err, results) => {
      callback(err, results);
    });
  },

  insertUser: (userData, callback) => {
    const sql = 'INSERT INTO users SET ?';
    dbMiddleware.query(sql, userData, callback);
  }


  // 다른 데이터베이스 관련 메소드들...
};

module.exports = dbMiddleware;
