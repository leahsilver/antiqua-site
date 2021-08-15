var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String },
  Phone: { type: Number },
  Password: { type: Number },
  Confirm: { type: Number },
});

module.exports = mongoose.model("User", User);
