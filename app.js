var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App is successfully listening on port 3000')
});
