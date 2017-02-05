var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 9000;
var app = express();

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.use('/', require('./router/router'));
app.use('/auth', require('./modules/auth'));

// 404 page not found
app.get('*', function(request, response){
	response.status(404);
	response.send('Sorry what?');
});

app.listen(port, function(){
	console.log('Services started at port '+port);
});

module.exports = app;