const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MsgSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = Message = mongoose.model("message", MsgSchema);
