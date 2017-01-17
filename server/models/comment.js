var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
 _message: {type: Schema.Types.ObjectId, ref: 'Message'},
 comment: { type: String, required: true },
 name: { type: String, required: true }
}, {timestamps: true });
mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Comment'
