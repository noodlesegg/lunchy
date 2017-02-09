var mongoose = require('mongoose');
mongoose.connect('wmp_stack.server/lunchy');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function(){
    console.log('MongoDB Connected....');
});

module.exports = db;