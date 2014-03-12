(function (undefined) {
  var mongoose = require('mongoose');
  var Promise = require('promise');
  var Model = require('../model');
  
  function ask(data, callback) {
    var message = new Model.Message();
    message.text = data.text;

    return Promise.denodeify(message.save.bind(message))()
    .then(function (message) {
      return message;
    });
  }  

  module.exports = {
    ask: ask
  }

})();