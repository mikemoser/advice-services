(function(undefined) {
	var express = require('express');
	var app = express();
  var mongoose = require('mongoose');
  var Service = require('./services');

  mongoose.connect('mongodb://localhost:27017/advice');

  app.configure(function(){
    app.use(express.bodyParser());
  });

	app.get('/', function(req, res){
	  res.json({
      text: 'advice'
    })
	});

  app.post('/ask', function(req, res) {
    Service.Message.ask(req.body)
    .then(function (message) {
      res.json(message);
    });
  });

	app.listen(3000);
})();