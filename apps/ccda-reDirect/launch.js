var argv = require("optimist").argv;
var request = require("request");
var crypto = require('crypto');
var async = require('async');
var template = require('url-template');
var AdmZip = require('adm-zip');
var path = require('path');

var sourceDir = argv.source_dir || process.env["SOURCE_DIR"];
var progressDir = argv.progress_dir || process.env["PROGRESS_DIR"];
var httpPostUrlTemplate = argv.ccda_post_url || process.env["CCDA_POST_URL"];
var httpPostUrl = template.parse(httpPostUrlTemplate);

console.log(argv);
Watcher = require("./watcher");

w = new Watcher({
  sourceDir: sourceDir,
  progressDir: progressDir
});

w.on("incoming", function(filename, message){
  console.log("incoming message", filename);

  var posts = [];

  if (typeof message == 'undefined')
  { 
    return;
  }

  message.to.forEach(function(to) {
   var url = template.parse("http://localhost:8080/api/messages").expand({
        to: message.to[0].address});

   var content = {
      to: message.to[0].address,
      from: message.from[0].address,
      subject: message.subject,
      body: message.text
    };

   posts.push({url: url, content: content});
  });

  //All Messages out, need to refactor to avoid callback hell
  console.log("Writing all messages: ", posts.length, " posts");
  async.each(posts, function(p, callback) {
    console.log("POSTing to ", p.url);
    c = JSON.stringify(p.content);
    console.log(c);
    request(
      { method: 'POST',
        url: p.url,
        body: c,
        headers: {"Content-type": "application/json"}
      }, function (error, response, body) {
        if (response && response.statusCode === 200){
          console.log("POSTed ", filename, response.statusCode);
          return callback();
        }
        return callback(error||response.statusCode);
      });
    }, function(err){
    if (!err) {
      w.markComplete(filename);
      console.log("Marked progress for ", filename);
    } else {
      console.log("Error POSTing for", filename, err);
    }
  });

/*
  if (message.attachments){

    var posts = [];

    var ccdas = message.attachments.filter(function(a){
      return a.fileName && a.fileName.slice("-3").toLowerCase() === "xml";
    });

    message.attachments.filter(function(a){
      return a.fileName && a.fileName.slice("-3").toLowerCase() === "zip";
    }).forEach(function(a){
      new AdmZip(a.content).getEntries().forEach(function(e){
        var ext = path.extname(e.entryName).toLowerCase();
        if (ext !== '.xml') {
          return;
        }
        if (path.basename(e.entryName).toLowerCase() === 'metadata.xml') {
          return;
        }
        ccdas.push({ content: e.getData() });
      });
    });

    message.to.forEach(function(to){

      var url = httpPostUrl.expand({
        to: message.to[0].address,
        from: message.from[0].address
      });

      ccdas.forEach(function(ccda){
        posts.push({url: url, ccda:  ccda});
      });

    });

    console.log("C-CDA Attachments: ", ccdas.length, posts.length, " posts");
    async.each(posts, function(p, callback) {
      console.log("POSTing to ", p.url);
      request(
        { method: 'POST',
          url: p.url,
          body: p.ccda.content,
          headers: {"Content-type": "text/xml"}
        }, function (error, response, body) {
          if (response && response.statusCode === 200){
            console.log("POSTed ", filename, response.statusCode);
            return callback();
          }
          return callback(error||response.statusCode);
        });
    }, function(err){
      if (!err) {
        w.markComplete(filename);
        console.log("Marked progress for ", filename);
      } else {
        console.log("Error POSTing for", filename, err);
      }
    });
  }
*/
});