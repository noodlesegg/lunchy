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

    // Get Form Values
    var name = request.body.name;
    var email = request.body.email;
    var username = request.body.username;
    var password = request.body.password;
    var password2 = request.body.password2;

    // Validation
    request.checkBody('name', 'Name field is required').notEmpty();
    request.checkBody('email', 'Email field is required').notEmpty();
    request.checkBody('email', 'Please use a valid email address').isEmail();
    request.checkBody('username', 'Username field is required').notEmpty();
    request.checkBody('password', 'Password field is required').notEmpty();
    request.checkBody('password2', 'Passwords do not match').equals(request.body.password);

    // Check for errors
    var errors = request.validationErrors();

    if(errors){
        console.log('Form has errors...');
        response.render('register', {
            errors: errors,
            name: name,
            email: email,
            username:username,
            password: password,
            password2: password2
        });
    }

    user.register({
    	'name': name,
    	'email': email,
    	'username': username,
    	'password': password
    }, function(error, status){
    	if(error){
    		console.log(error);
    	}
    	response.redirect('/logs');
    });
});

module.exports = router;