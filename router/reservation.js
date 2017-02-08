var express = require('express');
var router = express.Router();

// Confirm Page - GET
router.get('/confirm', function(req, res){
	res.render('confirm');
});

// Thankyou - GET
router.get('/thankyou', function(req, res){
	res.render('thankyou');
});

module.exports = router;