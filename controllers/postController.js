// const userModel = require('../models/user');
// // const userView = require('../views/userView');

// const postController = {
//   newPost: function(req, res) {
//     const userData = {
//       id: req.body.id,
//       email: req.body.email,
//       password: req.body.password,
//     };

//     userModel.registerUser(userData, function(err, results) {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.redirect('/login');
//       }
//     });
//   },

//   getPostDetails: function(req, res) {
//     const userId = req.params.id;

//     userModel.getUserDetails(userId, function(err, userDetails) {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.render('userDetails', { userDetails: userDetails });
//       }
//     });
//   }
// };

// module.exports = userController;
