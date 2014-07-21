/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
//var twilio = require('./routes/twilio');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/submitted', routes.submitted);
app.get('/quoteReceived', routes.quoteReceived);
app.get('/detail', routes.detail);
app.get('/users', user.list);
app.get('/myhealth', routes.myhealth);
app.get('/calendar', routes.calendar);
app.get('/price', routes.price);
app.post('/message', routes.sendemail)
//app.get('/twilio/new_message', twilio.new_message);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
