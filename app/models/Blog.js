const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, required: true },
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
  body: { type: String, required: true },
});

module.exports = Blog = mongoose.model("blogs", BlogSchema);
