var express = require('express');
var router = express.Router();

// Auth by get
router.get('/', function(request, response){
	var url = require('url');
	var urlParts = url.parse(request.url, true, true);
	var query = urlParts.query;
	var username = query.username;
	var password = query.password;
	// var User = require('../models/user');
	// User = new User({'username':username.trim(), 'password':password});
	response.status(200);
	var status = {
	  	'error':1,
	  	'message':'failed'
	}
	var mysql = require('../database/mysql');
	var query = 'SELECT * '+
	     		'FROM user '+
				'WHERE user_name = "'+username.trim()+'"'+
				' AND password = PASSWORD("'+password+'")';
	mysql.query(query, function(error, rows, fields) {
	  	if (error) {
	  		console.log(error);
	  		response.send(status);
	  	}
	  	if (rows.length == 0){
	  		response.send(status);
	  	}
		rows.forEach(function(item){
		    var status = {
				'id':item.id,
				'user_name':item.user_name,
				'email':item.email,
				'first_name':item.first_name,
				'last_name':item.last_name
			};
			response.send(status);
		});
	});
});

// Auth by post
router.post('/', function(request, response){
	var username = request.body.username;
	var password = request.body.password;
	var User = require('../models/user');
	var User = new User(
		{
			"error":0,
			"message":"error message"
		},
		{
			"username": username,
		    "password": password
		}
	);
	response.status(200);
	response.send(User);
});

module.exports = router;