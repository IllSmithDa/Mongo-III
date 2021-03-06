const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  text: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  content: {
    type: String,
    required: true
  },
  comments:[CommentSchema]
});
module.exports = mongoose.model('Post', PostSchema);