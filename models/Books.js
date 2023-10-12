const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// type, default, required, unique
const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  like: {
    type: Boolean,
    default: false,
  },
  comments: [{ message: String }],
  meta: {
    votes: Number,
    favs: Number,
  },
});

module.exports = mongoose.model("book", BookSchema);
