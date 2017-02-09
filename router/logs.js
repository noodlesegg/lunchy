var express = require('express');
var router = express.Router();
var logs = require('../models/logs');

// logs page
router.get('/', function(request, response){
    var getLogs = logs.getLogs(function(error, logs){
        response.render('logs', {'logs':logs});
    }, 9999);
});