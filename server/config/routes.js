

// Require controller methods
var messages = require('../controllers/messages.js');
var comments = require('../controllers/comments.js');




module.exports = function(app){

  // GET ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: GET
  // GET ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: GET
  // GET ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: GET
  app.get('/', function(req, res){
    messages.showAll(req, res);
  });

  // POST :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POST
  // POST :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POST
  // POST :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POST
  app.post('/addMessage', function(req, res){
    messages.addMessage(req, res);
  });


  app.post('/addComment/:id', function(req, res){
    comments.addComment(req, res);
  });


}
