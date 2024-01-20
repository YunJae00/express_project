const dbMiddleware = require('../middlewares/dbMiddleware');
const bkfd2Password = require('pbkdf2-password');
const hasher = bkfd2Password();

const userModel = {
  registerUser: function(userData, callback) {
    hasher({ password: userData.password }, function(err, pass, salt, hash) {
      const user = {
        auth_id : userData.auth_id,
        ID : userData.ID,
        password: hash,
        email: userData.email,
        name: userData.name,
        salt: salt
      };

      dbMiddleware.insertUser(user, function(err, results) {
        callback(err, results);
      });
    });
  },

  getUserDetails: function(userId, callback) {
    // 데이터베이스에서 사용자 정보를 조회하는 로직
    // ...
  },

  // 다른 사용자 관련 메소드들...
};

module.exports = userModel;
