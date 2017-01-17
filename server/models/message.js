var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true});
mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'
 // We are retrieving this Schema from our Models, named 'Message'
