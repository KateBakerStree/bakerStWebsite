
var express = require('express');
var app = express();

//setting middleware
//app.use(express.static(__dirname + '\public')); //Serves resources from public folder
app.use(express.static('public'))

var server = app.listen(5000);