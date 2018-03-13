// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type':'text/plain'})
//     res.end('Hello New York\n')
//
// }).listen(3001);
// console.log('Server running at http://localhost:3001/');
var express = require('express'),
    mongoose = require('mongoose'),
    fs = require('fs')

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var mongoUri = 'mongodb://localhost/noderest'
mongoose.connect(mongoUri)
var db = mongoose.connection
db.on('error',function () {
    throw new Error('unable to connect to database at '+mongoUri)
})

var app = express()

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require('./models/musician')
require('./routes')(app);

// app.configure(function () {
//     app.use(express.bodyParser());
// })
app.listen(8080)
console.log('Listening on port 8080...')