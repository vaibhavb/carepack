var client = require("request");
//TODO: Make this a config variable
var carepack = "http://localhost:6080/api/messages?user=vaibhavb%40direct.test.vitraag.com"
var carepacksendemail = "http://localhost:6080/api/sendemail"
var createuser = "http://localhost:6080/api/users"

function getMessages(callback){
  client(carepack, function (error, response, body) {
      if (!error && response && response.statusCode == 200){
        console.log("Got Messages ", body);
        return callback(body);
      }
      console.log('Oops! there was an error:' + error)
      return callback(error||response.statusCode);
  });
}

function sendEmail(callback){
  client(carepacksendemail, function (error, response, body) {
      if (!error && response && response.statusCode == 200){
        return callback(body);
      }
      console.log('Oops! there was an error:' + error)
      return callback(error||response.statusCode);
  });
}

function createUser(req, res, callback){
  client.post(createuser,{form: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      organization: req.body.organization,
      organizationAddress: req.body.organizationAddress,
      organizationCity: req.body.organizationCity,
      organizationState: req.body.organizationState,
      organizationZip: req.body.organizationZip,
      role: req.body.role
    }
  }, function (error, response, body){
      if (!error && response && response.statusCode == 200){
        return callback(body);
      }
      console.log('Oops! there was an error:' + error)
      return callback(error||response.statusCode);
  })
}

exports.getMessages = getMessages;
exports.sendEmail = sendEmail;
exports.createUser = createUser;