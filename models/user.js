/**
 * User model
 * @author marjune
 */
var User = function(data){
	this.data = data;
	this.getByEmailPassword = function(username, password) {
		var status = {
			'status': {
				'error':1,
				'message':'failed'
			}
		};
		var mysql = require('../database/mysql');
		var query = 'SELECT * '+
		     		'FROM user '+
					'WHERE user_name = "'+this.data.username+'"'+
					' AND password = PASSWORD("'+this.data.password+'")';
		mysql.query(query, function(error, rows, fields) {
		  	if (error) {
		  		console.log(error);
		  	}
			rows.forEach(function(item){
				return status = {
					'id':item.id,
					'user_name':item.user_name,
					'email':item.email,
					'first_name':item.first_name,
					'last_name':item.last_name
				};
			});
		});
		return {};
	}
}

module.exports = User;