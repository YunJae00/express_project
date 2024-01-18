var app = require('./config/express')();
var passport = require('./config/passport')(app);
var router = require('./routes/homeRouter')(passport);
app.use('/', router);

app.listen(3030, function(){
    console.log('connected 3000 port');
});