var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Forum = new Schema({
  replay: { type: String },
  title: { type: String },
  user: { type: String },
  lastReply: { type: String },
  lastName: { type: String },
  email: { type: String },
});
module.exports = mongoose.model("Forum", Forum);
