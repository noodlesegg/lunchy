var express = require('express');
var router = express.Router();

// Auth by post
router.post('/', function(request, response){
	var username = request.body.username;
	var password = request.body.password;

	var status = {
	  	'error':1,
	  	'message':'failed'
	}
	response.status(200);
	if(username == null || password == null) {
		response.send(status);
		return false;
	}
	var mysql = require('../database/mysql');
	var query = 'SELECT * '+
	     		'FROM user '+
				'WHERE user_name = "'+username+'"'+
				' AND password = PASSWORD("'+password+'")';
	mysql.query(query, function(error, rows, fields) {
	  	if (error) {
	  		console.log(error);
	  		response.send(status);
	  		return false;
	  	}
	  	if (rows.length == 0){
	  		response.send(status);
	  		return false;
	  	}
		rows.forEach(function(item){
		    var status = {
		    	'error':0,
		    	'message':'success',
				'id':item.id,
				'user_name':item.user_name,
				'email':item.email,
				'first_name':item.first_name,
				'last_name':item.last_name
			};
			var logs = require('../models/logs');
		  	var newLogin = new logs({
		  		'id':item.id,
		  		'userName':item.user_name,
		  		'loginDate':Date.now()
		  	});

			newLogin.save(function(error, logs){
				if(error){
					console.log(error);
		  			return false;
				}
				console.log('loging '+item.user_name);
			});
			response.send(status);
		});
	});
});

module.exports = router;