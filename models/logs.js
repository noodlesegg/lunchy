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

// get logs
module.exports.getLogs = function(callback, limit){
    logs.find(callback).limit(limit);
}

// insert log
module.exports.addLog = function(callback, data){
    // var logs = require('../models/logs');
    // var newLogin = new logs({
    //    'id':item.id,
    //    'userName':item.user_name,
    //    'loginDate':Date.now()
    // });
};