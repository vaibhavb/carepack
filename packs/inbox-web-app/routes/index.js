var fs = require('fs')
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
