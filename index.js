var express = require("express");
var app = express()
// var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.render("index.ejs");
});


app.listen(3000, function(){
  console.log("The YelpCamp server has started");
});
