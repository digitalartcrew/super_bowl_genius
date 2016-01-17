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

var yelp = new Yelp({
  consumer_key: 'Iuoy6KrHKBu5rk6lH9XmMw',
  consumer_secret: 'fwN5297z2Cuzn-V40GytBXh5c0w',
  token: 'BAQiwhrIzRJedyuXZN2SO80F2HtM5dXo',
  token_secret: 'a18oajlWieOxRW8qnKzBZX63wJs',
});


app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method'));
app.use(cors());



app.get('/restaurants', function(req,res){
	request(yelp, function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/team', function(req,res){
	request(url+'team', function(error, response, body) {
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
	request(url+'events', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/celebrities', function(req,res){
	request(url+'celebrities', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/rules', function(req,res){
	request(url+'rules', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/weather', function(req,res){
	request(url+'weather', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});





app.listen(3001,function(req,res){
	console.log("App running on localhost 3001");
});