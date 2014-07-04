var fs = require('fs')
var BlueButton = function (str){"{}"}/*require('../bb/bluebutton')*/
var chc = require('../public/chc')
var xml = fs.readFileSync('./bb/examples/CCD.samples.json', 'utf-8');
var bb = JSON.parse(xml); //BlueButton(xml);
var carepack = require('./carepack')

/*
 * GET home page.
 */

exports.index = function(req, res){
  //TODO: make this async
  carepack.getMessages(function(messages){
    console.log(messages)
    res.render('index', { title: 'List', messages: JSON.parse(messages)});
  });

};

exports.submitted = function(req, res){
  res.render('submitted', { title: 'List' });
};

exports.quoteReceived = function(req, res){
  res.render('quoteReceived', { title: 'List' });
};

exports.detail = function(req, res){
	res.render('detail', { title: 'Detail' });
};

exports.myhealth = function(req, res){
	
	res.render('myhealth', { data: bb });
};

exports.price = function(req, res){
	res.render('price', { data: chc });
};

exports.calendar = function(req, res){
  res.render('calendar', {title: 'Calendar'})
};

