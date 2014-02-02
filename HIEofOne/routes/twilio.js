var config = require('../configvar');
var twilio_auth_token = config.twilio_auth_token;
var twilio_sid = config.twilio_sid;
var twilio_phone_number = config.twilio_phone_number;
var user_phone_number = config.user_phone_number;

var client = require('twilio')(twilio_sid, twilio_auth_token);

exports.new_message = function(req, res){
	client.sms.messages.create({
		to: user_phone_number,
		from: twilio_phone_number,
		body:'You have a new message in your HIEofOne inbox. Access it at http://localhost:3000'
	}, function(error, message) {
	    if (!error) {
	        console.log('Success! The SID for this SMS message is:');
	        console.log(message.sid);

	        console.log('Message sent on:');
	        console.log(message.dateCreated);
	    } else {
	    	console.log('Oops! There was an error.');
	    }
	});
};