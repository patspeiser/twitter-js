var express = require('express');
var app = express();
var chalk = require('chalk');
var swig = require('swig');

swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile)
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use( function(req, res, done){
	console.log(chalk.red(req.method), chalk.blue(req.url))
	done();
});

app.get('/', function(req, res) {
		var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf IS A WIZARD!!!'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
	res.render('index', locals);
	
});


app.get('/news', function(req, res){
	res.send('you are at news');
});


app.listen(3000);
