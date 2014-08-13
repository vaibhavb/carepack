var Message = require('../models/message.js')

exports.post = function(req, res){
  new Message({
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    body: req.body.body
  }).save();
}

exports.list = function(req, res){
  Message.find({to: req.query.user}, function(error, messages){
    console.log("[api/message.js] Getting messages for " + req.query.user)
    res.send(messages)    
  })
}