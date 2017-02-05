var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.redirect('/auth');
});

// function ensureAuthenticated(req, res, next){
// 	if(req.isAuthenticated()){
// 		return next();
// 	}
// 	res.redirect('/users/login');
// }

module.exports = router;