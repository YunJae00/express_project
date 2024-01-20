module.exports = function (passport) {
    var bkfd2Password = require('pbkdf2-password');
    var hasher = bkfd2Password();
    var conn = require('../config/database')();
    var router = require('express').Router();
    let request = require('request');

    // router.get('/main', function(req, res){
    //     res.render('main.html');
    // });

    // router.get('/login', function(req, res){
    //     res.render('login.html');
    // });

    // router.post('/login', function(req, res){
    //     passport.authenticate(
    //         'local',
    //         {
    //             successRedirect: '/dashboard',
    //             failureRedirect: '/main',
    //             failureFlash: false
    //         }
    //     )
    // });

    // router.post('/register', function(req, res){
    //     hasher({ password: req.body.password }, function (err, pass, salt, hash) {
    //         var user = {
    //             userId : req.body.username
    //             //id: req.body.id,
    //             //email: req.body.email,
    //             ,password: hash,
    //             salt: salt,
    //         };
    //         var sql = 'INSERT INTO users SET ?';
    //         conn.query(sql, user, function (err, results) {
    //             if (err) {
    //                 console.log(err);
    //                 res.status(500);
    //             }
    //             else {
    //                 res.redirect('/login');
    //             }
    //         });
    //     });
    // });

    // router.get('/dashboard', function(req, res) {
    //     res.render('dashboard', { user: req.user });
    // });

    return router;
}