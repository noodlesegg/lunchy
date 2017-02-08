/**
 * User model
 * @author marjune
 */
var mysql = require('../database/mysql');

// user login
module.exports.login = function(username, password, callback){
	var status = {
	  	'error':1,
	  	'message':'invalid username or password.'
	}
	username = username.trim();
	var query = 'SELECT * '+
	     		'FROM user '+
				'WHERE user_name = "'+username+'"'+
				' AND password = PASSWORD("'+password+'")';

	mysql.query(query, function(error, rows, fields) {
	  	if (error) {
	  		callback(error, status);
	  	}
	  	if (rows.length == 0){
	  		callback(false, status);
	  	}
		rows.forEach(function(item){
		    callback(false, {
			    	'error':0,
			    	'message':'success',
					'id':item.id,
					'user_name':item.user_name,
					'email':item.email,
					'first_name':item.first_name,
					'last_name':item.last_name
			});
		});
	});
};