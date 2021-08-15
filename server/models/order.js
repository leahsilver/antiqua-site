var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema(
    {
        name: {type: String, required: true, maxLength: 100},
        author: {type: Schema.Types.ObjectId, ref:'Author',  required: true},
        year: {type: Date},
    }
);

OrderSchema.virtual('title').get(function () {
    return this.name + ' By: ' + this.author;
});

module.exports = mongoose.model('Order', OrderSchema);