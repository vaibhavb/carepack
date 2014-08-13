var mongoose = require('mongoose');
var messageSchema = new mongoose.Schema({
  to: String,
  from: String,
  subject: String,
  body: String
})

module.exports = mongoose.model('Messages', messageSchema)

