var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
router.use(bodyParser.urlencoded({ encoded: false }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res){
	var name = req.params.name;
	var list = tweetBank.find( {name: name});
	res.render( 'index', { title: 'Twitter.js - Posts by ' + name, tweets: list, showForm: true });
})

router.get('/tweets/:id', function(req, res){
	var id = req.params.id*1;
	var tweet = tweetBank.find( {id: id});	
	console.log(id, tweet);
	res.render('index', { title: 'Twitter.js - tweets ', tweets: tweet})
}); 

router.post('/tweets', jsonParser, function(req, res){
	var body = req.body;
	tweetBank.add(req.body.name, req.body.content);
	res.redirect('/');
});

module.exports = router;
