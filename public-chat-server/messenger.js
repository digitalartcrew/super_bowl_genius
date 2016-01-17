/**
*MESSENGER subsystem
*@author Demetris Gerogiannis
*
*/
const THIS_SERVER_PORT = 6789;
const MODULE_NAME      = 'messenger';

//app routing
var app = require('express')();
var multer = require('multer');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//connect to DB - add a promie scheme SQL query execution function
global.db = require('knex')({client: 'mysql',connection: require('./database.json')});
//use underscorejs
var _ = require('underscore')._;
//register server
var server = require('http').createServer(app);
io = require('socket.io')(server);
io.on('connection', function(socket) {
  socket.on('join', function(data) {
    global.db
      .from('user2channel')
      .where({
        user: req.body.user,
      })
      .del()
    .then(function(resp) {
      global.db
        .insert({
          user: req.body.user,
          channel: req.body.channel,
        })
        .into('user2channel')
      .then(function(resp) {
        socket.join(req.body.user);
      });
    });
  });
});
//
// RPCs
//
/*
  get all the available channels
*/
app.all('/' + MODULE_NAME + '/loadChannels', function(req,res) {
  global.db
    .select('*')
    .from('channel')
  .then(function(resp) {
    res.jsonp(resp);
  });
});
/*
  get the conversations of that channel
*/
app.all('/' + MODULE_NAME + '/loadChannel', function(req,res) {
  global.db
    .select('*')
    .from('message')
    .where ({
      channel: req.body.channel,
    })
    .orderBy('created_on')
    .offset(req.body.offset)
    .limit(15)
  .then(function(resp) {
    res.jsonp(resp);
  });
});
/*
  send a new message
*/
app.all('/' + MODULE_NAME + '/post', function(req,res) {
  global.db
    .insert({
      sender: req.body.msg.sender,
      channel: req.body.msg.channel,
      body: req.body.msg.body,
      created_on: new Date().getTime(),
    })
    .into('message')
  .then(function(resp) {
    global.db
      .select('user')
      .from('user2channel')
      .where({
        channel: req.body.msg.channel,
      })
    .then(function(resp) {
      for (var i=0; i<resp.length; i++)
        io.sockets.to(resp[i].user).emit('post', req.body.msg);
      res.jsonp(1);
    });
  });
});
//
//start this server
//
server.listen(THIS_SERVER_PORT, function() {
  console.log ('____________________________________________________');
  console.log ('|' + MODULE_NAME.toUpperCase() + ' Server Started...');
  console.log ('----------------------------------------------------');
  console.log ('|> Date  : ' + new Date().toDateString()             );
  console.log ('|> Server: ' + require('os').hostname()              );
  console.log ('|> Port  : ' + THIS_SERVER_PORT                      );
  console.log ('|> Author: DpG (2015)'                               );
  console.log ('____________________________________________________');
  console.log ();
});