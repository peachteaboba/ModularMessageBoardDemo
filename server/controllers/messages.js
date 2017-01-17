var mongoose = require('mongoose');
var Message = mongoose.model('Message');



module.exports = {

  showAll: function(req, res) {
    // Find all messages and render index page
    Message.find({}).populate('comments').exec(function(err, data) {
      if(err){
        console.log("ya done messed up");
      } else {
        console.log(data);
        res.render('index', {messages: data});
      }
    });
  },
  addMessage: function(req, res) {
      console.log("POST DATA", req.body);
      var message = new Message({name: req.body.name, message: req.body.message});
      message.save(function(err) {
          if (err) {
              console.log('something went wrong');
          } else {
              console.log('successfully added a message!');
              res.redirect('/');
          }
      });
  }



}
