var express = require('express');
var app = express();
app.use("/here",express.static("first"));
app.use( "/here",express.static("second"));
// app.use( "/there",express.static("second"));
//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
//    res.send('Thingssss');

   next();
});

// Route handler that sends the response
app.get('/things', function(req, res){
   res.send("hhh.html");
});
// var fs = require('fs');
app.get('/t', function(req, res){
   // var html = fs.readFileSync('./first/hh.html', 'utf8')
   res.sendFile('./first/hh.html', { root: __dirname });
 });

app.listen(3000);