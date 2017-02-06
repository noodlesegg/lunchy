var mongoose = require('mongoose');
mongoose.connect('localhost/logs');
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection Error:'));
db.once('open', function(){
    console.log('MongoDB Connected....');
});

// logs schema
var logSchema = mongoose.Schema({
    id: {
        type: String
    },
    userName: {
        type: String
    },
    loginDate: {
        type: Date
    }
});

var logs = module.exports = mongoose.model('logins', logSchema);

module.exports.getLogs = function(callback, limit){
        logs.find(callback).limit(limit);
}