var express = require('express');
var app = express();
var chalk = require('chalk');
var swig = require('swig');
var routes = require('./routes/');

swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile)
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use('/', routes);

app.listen(3000);
