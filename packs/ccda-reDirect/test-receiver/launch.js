var express = require('express');

var app = express();
app.use(parseBody);

app.post('*', function(req, res, next){
  console.log("POST URL", req.originalUrl);
  next();
});

app.post('/incoming/fail/(from/:from)?/(to/:to)?', function(req, res, next){
  console.log("instructed to fail on", req.params);
  console.log(req.rawBody);
  next("Err!");
});

app.post('/incoming/succeed/(from/:from)?/(to/:to)?', function(req, res, next){
  console.log("instructed to succeed on", req.params);
  console.log(req.rawBody);
  res.end();
});
app.post('*', function(req, res, next){
  console.log("got here", req.originalUrl);
});


console.log(app._router.map.post);

function parseBody(req, res, next) {

    req.rawBody = '';
    req.setEncoding('utf8');

    req.on('data', function(chunk) {
      req.rawBody += chunk;
    });

    req.on('end', function(){
      next();
    })

};


app.listen(process.env.VMC_APP_PORT || 4001);;
