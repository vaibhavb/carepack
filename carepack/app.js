
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
  host: 'direct.test.vitraag.com',
  port: 25,
  secure: false,
  auth: {
    user: 'catchall',
    pass: 'password'
  },
  maxConnections: 5,
  maxMessages: 10
}));
var express = require('express');
var mongoose = require('mongoose');

var connect = function(){
  var options = { server: { socketOptions: { keepAlive: 1 } } }
  mongoose.connect('mongodb://localhost/carepack')
}
connect();

/* Following keeps sanity in case you start seeing connection drops */
var db = mongoose.connection;
db.on('error', console.error);
db.once('disconnected', function(){
  connect();
})

function index(req, res, next){
  res.send("API Schema in RAML - just kidding!");
}

function testRespond(req, res, next) {
  res.send('hello ' + req.params.name);
}

function sendEmail(req, res, next){
  email = {
    to : "provider1@direct.sitenv.org",
    from : "vaibhavb@direct.test.vitraag.com",
    subject : "nodemailer test email",
    text : "hello this a test email from the nodemailer"
  }
  transporter.sendMail(email, function(err, result){
      if(err){ console.log(err); }
  });
  console.log("Sending email...")
  res.send('Done')
}

var apiserver = express();
// config 
apiserver.use(express.json());
apiserver.use(express.urlencoded());
apiserver.use(apiserver.router)

/* APIs */
apiserver.get('/api', index)

var messageapi = require('./controllers/messages.js')
var userapi = require('./controllers/users.js')

apiserver.post('/api/messages', messageapi.post);
apiserver.get('/api/messages', messageapi.list);
apiserver.post('/api/users', userapi.create);

/* email sending */
apiserver.get('/api/sendemail', sendEmail);


/* Start Server */
//TODO: Make this a config variable
apiserver.listen(6080);
