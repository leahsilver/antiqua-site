var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var art = new Schema({
  name: { type: String, require: true },
  price: { type: String },
  about: { type: String },
  src: { type: String },
  details: { type: String },
  year: { type: String },
  size: { type: String },
  kind: { type: String },
  artist: { type: String },
  buy: { type: Boolean },
});
module.exports = mongoose.model('Art', art);
