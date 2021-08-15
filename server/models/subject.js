var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Subject = new Schema({
  val: { type: String },
  views: { type: Number },
  user: { type: String },
  res: { type: Number },
});

module.exports = mongoose.model("Subject", Subject);
