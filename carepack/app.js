

var express = require('express');
var db = require('mongojs').connect('127.0.0.1:27017/carepack');

function index(req, res, next){
  res.send("API Schema in RAML - just kidding!");
}

function getMessages(req, res, next){

  messages = db.collection('messages');
  messages.find({"to": req.query.user}, function(err, msg) {
    console.log("Get Message for: " + req.query.user)
    res.send(msg);
  });
}

function postMessages(req, res)
{
  var message;
  console.log('POST message:');
  console.log(req.body);
  message = req.body;
  messages = db.collection('messages');
  d = messages.insert(message);
  res.send(d)
}

function testRespond(req, res, next) {
  res.send('hello ' + req.params.name);
}

var apiserver = express();
// config 
apiserver.use(express.json());
apiserver.use(express.urlencoded());
apiserver.use(apiserver.router)

/* APIs */
apiserver.get('/api', index)

apiserver.post('/api/messages', postMessages);
apiserver.get('/api/messages', getMessages);

apiserver.get('/hello/:name', testRespond);
apiserver.head('/hello/:name', testRespond);



/* Start Server */
//TODO: Make this a config variable
apiserver.listen(6080);
