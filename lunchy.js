var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var app = express();
var port = 9000;

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Connect-Flash Middleware
app.use(flash());
app.use(function (request, response, next) {
  request.locals.messages = require('express-messages')(request, response);
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
app.use('/users', require('./router/users'));
app.use('/menu', require('./router/menu'));
app.use('/reservation', require('./router/reservation'));

// 404 page not found
app.get('*', function(request, response){
	response.status(404);
	response.render('404');
});

app.listen(port, function(){
	console.log('The luncy app started at port '+port);
});

module.exports = app;