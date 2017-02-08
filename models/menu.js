var mongoose = require('mongoose');

// Menu Schema
var MenuSchema = mongoose.Schema({
	name: {
		type: String
	},
	price: {
		type: Number
	}
});

var Menu = module.exports = mongoose.model('menus', MenuSchema);

module.exports.getMenus = function(callback, limit){
	Menu.find(callback).limit(limit);
}