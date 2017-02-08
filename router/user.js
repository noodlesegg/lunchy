var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var user = require('../models/user');

// Login Page - GET
router.get('/login', function(request, response){
	response.render('login');
});

// Login - POST
router.post('/login', function(request, response){
	var username = request.body.username;
	var password = request.body.password;
	response.status(200);
	if(username == null || password == null) {
		response.send({});
		return false;
	}

	user.login(username, password, function(error, status){
		if (error) {
			console.log(error);
		}
	    response.send(status);
	});
});

// Register Page - GET
router.get('/register', function(request, response){
	response.render('register');
});

// Register - POST
router.post('/register', function(request, response){

});

module.exports = router;