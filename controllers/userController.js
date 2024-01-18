const userModel = require('../models/userModel');
const userView = require('../views/userView');

const userController = {
  registerUser: function(req, res) {
    const userData = {
      id: req.body.id,
      email: req.body.email,
      password: req.body.password,
    };

    userModel.registerUser(userData, function(err, results) {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.redirect('/login');
      }
    });
  },

  getUserDetails: function(req, res) {
    const userId = req.params.id;

    userModel.getUserDetails(userId, function(err, userDetails) {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.render('userDetails', { userDetails: userDetails });
      }
    });
  },

  // 다른 사용자 컨트롤러 메소드들...
};

module.exports = userController;
