require('dotenv').load();

var mongoose = require('mongoose'),
	express = require('express'),
	request = require('request'),
	cors = require('cors'),
	app = express(),
	bodyParser = require("body-parser"),
	methodOverride = require('method-override'),
	morgan = require('morgan'),
	Yelp = require('yelp');

var eventful = 'http://api.eventful.com/rest/events/search?app_key=5RSMsLpdHrrX55Pz&keywords=super+bowl&location=san+jose+metro+area';

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method'));
app.use(cors());

var yelp = new Yelp({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	token: process.env.TOKEN,
	token_secret: process.env.TOKEN_SECRET,
});


var espn = 'http://espn.go.com/nfl/team/_/name/';
var eventful = 'http://api.eventful.com/json/events/search?app_key=5RSMsLpdHrrX55Pz&keywords=super+bowl&location=san+jose+metro+area';

app.get('/restaurants', function(req,res){
	yelp.search({ term: 'food', location: 'San Francisco' })
	.then(function (error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/teams', function(req,res){
	request(espn, function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/trivia', function(req,res){
	request(url+'trivia', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/events', function(req,res){
	request(eventful, function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/rules', function(req,res){
	request('https://en.wikipedia.org/w/api.php?format=json&action=query&titles=Glossary_of_American_football&prop=revisions&rvprop=content&callback=?', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/weather', function(req,res){
	request('#', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

//NFL Teams

app.get('/greenbay', function(req,res){
	request(espn+'gb/?xhr=1', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/carolina', function(req,res){
	request(espn+'car/?xhr=1', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/seattle', function(req,res){
	request(espn+'sea/?xhr=1', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/arizona', function(req,res){
	request(espn+'ari/?xhr=1', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/denver', function(req,res){
	request(espn+'den/?xhr=1', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/kansas', function(req,res){
	request(espn+'kc/?xhr=1', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});

app.get('/newengland', function(req,res){
	request(espn+'ne/?xhr=1', function(error, response, body) {
		if (error || response.statusCode !== 200) return res.status(404).json({error: error});
		res.status(200).json(body);
	});
});


app.listen(3001,function(req,res){
	console.log("App running on localhost 3001");
});