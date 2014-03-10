(function(undefined) {
	var express = require('express');
	var app = express();

	app.get('/', function(req, res){
	  res.send('advice services');
	});

	app.listen(3000);
})();