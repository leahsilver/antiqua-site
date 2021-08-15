var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Opinion = new Schema({
  val: { type: String },
  rating: { type: Number },

});

module.exports = mongoose.model("Opinion", Opinion);
