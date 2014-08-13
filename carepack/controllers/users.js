var User = require('../models/user.js')

exports.create = function(req, res){
  console.log(req.body)
  new User(req.body).save();
  res.send(200)
}

exports.list = function(req, res){
  User.find({to: req.query.email}, function(error, user){
    console.log("[api/message.js] Getting messages for " + req.query.email)
    res.send(user)
  })
}