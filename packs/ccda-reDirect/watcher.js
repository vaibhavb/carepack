var mailparser = require("mailparser"),
watch = require("watch"),
fs = require("fs"),
path = require("path"),
util = require("util"),
events = require("events");

var MailParser = mailparser.MailParser;

var EmailWatcher = module.exports = function(p){

  var self = this;
  p.sourceDir = path.resolve(p.sourceDir);
  p.progressDir = path.resolve(p.progressDir);
  this.params = p;

  watch.createMonitor(self.params.sourceDir, function (monitor) {
    Object.keys(monitor.files).forEach(function(f){
      self.processIfNeeded(f, monitor.files[f]);
    });
    monitor.on("created", function (f, stat) {
      self.processIfNeeded(f, stat);
    })
  });
};

util.inherits(EmailWatcher, events.EventEmitter);

EmailWatcher.prototype.processIfNeeded = function(f, stat){

  if (stat.isDirectory()) {
    return;
  }

  var pf = this.progressFile(f);
  var self = this;

  fs.exists(pf, function(exists){
    if (!exists){
      mailparser = new MailParser(),
      mailparser.on("end", function(message){
        self.emit("incoming", f, message); 
      });
      fs.createReadStream(f).pipe(mailparser);
    }
  });
};

EmailWatcher.prototype.progressFile = function(f){
  var relative = path.relative(this.params.sourceDir, f);
  var progress = path.join(this.params.progressDir, relative);
  return progress;
};

EmailWatcher.prototype.markComplete = function(f){
  var pf = this.progressFile(f);
  fs.writeFile(pf, "{processed: true}", function(err) {
    if(err) {
      console.log(err);
    } 
  }); 
};

/* Wish this was a commonjs module */
