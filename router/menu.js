var express = require('express');
var router = express.Router();

var Menu = require('../models/menus');

// Get All List
router.get('/', function(request, resonse, next){
	Menu.getMenus(function(error, menus){
		if(error){
			console.log(error);
		}
		resonse.render('menus', {'menus': menus});
	}, 10);
});

router.get('/users/test', function(request, resonse){
	resonse.render('options');
});

module.exports = router;