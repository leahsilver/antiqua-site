var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name: {type: String},
        last_name:{type: String},
    }
);

module.exports = mongoose.model('Author', AuthorSchema);