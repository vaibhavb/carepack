var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  organization: String,
  organizationAddress: String,
  organizationCity: String,
  organizationState: String,
  organizationZip: String,
})

module.exports = mongoose.model('Users', userSchema)