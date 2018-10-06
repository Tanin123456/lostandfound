let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema(
    {
        name: { type: String, min: 3, max: 100, required: true, default: 'fiction'}, //reference to the associated book
        
    }
);

// Virtual for genre's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
