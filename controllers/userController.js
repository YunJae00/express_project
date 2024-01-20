const userModel = require('../models/user');
// const userView = require('../views/userView');

const userController = {
  registerUser: function(req, res) {
    const userData = {
      auth_id : 'local:' + req.body.username,
      ID : req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
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

  // getUserDetails: function(req, res) {
  //   const userId = req.params.id;

  //   userModel.getUserDetails(userId, function(err, userDetails) {
  //     if (err) {
  //       console.error(err);
  //       res.status(500).send('Internal Server Error');
  //     } else {
  //       res.render('userDetails', { userDetails: userDetails });
  //     }
  //   });
  // }
};

module.exports = userController;
