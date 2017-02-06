var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var port = 9000;
var app = express();

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Connect-Flash Middleware
app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express Session Middleware
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.use('/', require('./router/index'));
app.use('/users', require('./modules/users'));
app.use('/menu', require('./router/menu'))

// 404 page not found
app.get('*', function(request, response){
	response.status(404);
	response.render('404');
});

app.listen(port, function(){
	console.log('Services started at port '+port);
});

module.exports = app;