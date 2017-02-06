var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'lunchy'
});

connection.connect();

module.exports = connection;