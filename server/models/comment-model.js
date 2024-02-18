const mongoose = require("mongoose");
const { Schema } = mongoose;

var current = new Date();
const timeStamp = new Date(
  Date.UTC(
    current.getFullYear(),
    current.getMonth(),
    current.getDate(),
    current.getHours(),
    current.getMinutes(),
    current.getSeconds(),
    current.getMilliseconds()
  )
);

const commentSchema = new Schema({
  id: {
    type: String,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  commentText: {
    type: String,
  },
  date: {
    type: Date,
    default: timeStamp,
  },
});

module.exports = mongoose.model("Comments", commentSchema);
