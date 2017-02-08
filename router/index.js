var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.redirect('/user/login');
});

module.exports = router;