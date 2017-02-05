var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'reservation'
});

connection.connect();

module.exports = connection;