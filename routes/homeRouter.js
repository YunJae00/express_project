const { render } = require('nunjucks');

module.exports = function (passport) {
    var bkfd2Password = require('pbkdf2-password');
    var hasher = bkfd2Password();
    var conn = require('../config/database')();
    var router = require('express').Router();
    let request = require('request');
    const userController = require('../controllers/userController');

    router.get('/main', function(req, res){
        res.render('main.html');
    });


    router.get('/login', function(req, res){
        res.render('login.html');
    });

    router.post('/login',
        passport.authenticate(
            'local',
            {
                successRedirect: '/main',
                failureRedirect: '/main',
                failureFlash: false
            }
        )
    );

    router.get('/dashboard', function(req, res){
        res.render('dashboard.html');
    });

    router.get('/register', function(req, res){
        res.render('register.html');
    });

    router.post('/register', userController.registerUser);

    // router.post('/register', function(req, res){
    //     hasher({ password: req.body.password }, function (err, pass, salt, hash) {
    //         var user = {
    //             auth_id : 'local:' + req.body.username,
    //             ID : req.body.username,
    //             password: hash,
    //             email: req.body.email,
    //             name: req.body.name,
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


    return router;
}