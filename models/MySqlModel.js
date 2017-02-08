var mysql = require('../database/mysql');
    var query = 'SELECT * '+
                 'FROM order '+
                'WHERE user_name = "'+username+'"';
    mysql.query(query, function(error, rows, fields) {

