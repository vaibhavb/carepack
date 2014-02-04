var client = require("request");
//TODO: Make this a config variable
var carepack = "http://localhost:6080/api/messages?user=vaibhavb%40direct.test.vitraag.com"

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

exports.getMessages = getMessages;