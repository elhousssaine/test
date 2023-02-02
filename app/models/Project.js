const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true },
  cardType: Number,
  parag1: String,
  parag2: String,
  //gradient
  hex1: String,
  hex2: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  imgs: [
    {
      id: { type: String, required: true },
      path_url: { type: String, required: true },
      ext: String,
      alt: String,
    },
  ],
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
