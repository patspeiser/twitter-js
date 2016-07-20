var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('yo');
});

app.get('/news', function(req, res){
	res.send('you are at news');
})


app.listen(3000);
