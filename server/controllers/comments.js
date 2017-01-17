
var mongoose = require('mongoose');

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment'); // We are retrieving this Schema from our Models, named 'Comment'





module.exports = {
  addComment: function(req, res) {
      console.log("POST DATA", req.body);

      // Find the one message
      Message.findOne({ _id: req.params.id}, function(err, oneMessage){

        // Create the comment object
        var comment = new Comment({name: req.body.name, comment: req.body.comment, _message: req.params.id});

        // Save the comment object
        comment.save(function(err) {
            if (err) {
                console.log('something went wrong');
            } else {
                console.log('successfully added a comment!');

                // Add the comment's id to the comments array
                oneMessage.comments.push(comment._id);

                // Save the message with the changes
                oneMessage.save(function(err){
                  if(err){
                    console.log("nooo");
                  } else {
                    res.redirect('/');
                  }
                });
            }
        });
      })
  }
}
