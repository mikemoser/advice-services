(function (undefined) {
  var mongoose = require('mongoose');
  // mongoose.connect('mongodb://localhost/test');

  var messageSchema = mongoose.Schema({
    text: { type: String }
  });

  var message = mongoose.model('Message', messageSchema);

  module.exports = message;
})();