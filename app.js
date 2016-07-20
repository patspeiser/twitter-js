var express = require('express');
var app = express();
var chalk = require('chalk');

app.use( function(req, res, done){
	console.log(chalk.red(req.method), chalk.blue(req.url))
	done();
});

app.get('/', function(req, res){
	res.send('yo');
});

app.get('/news', function(req, res){
	res.send('you are at news');
});

app.listen(3000);
