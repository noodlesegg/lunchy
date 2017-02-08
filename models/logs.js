var mongoose = require('mongoose');

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