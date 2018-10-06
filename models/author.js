let mongoose = require('mongoose');
var moment = require('moment');
let Schema = mongoose.Schema;

let AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date},
    }
);

// Virtual for author's full name
AuthorSchema
    .virtual('name')
    .get(function () {
        return this.family_name + ', ' + this.first_name;
    });



// Virtual for author's lifespan
AuthorSchema
    .virtual('lifespan')
    .get(function () {
        return (moment(this.date_of_death).year() - moment(this.date_of_birth).year()).toString();
    });

// Virtual for author's URL
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });

AuthorSchema
    .virtual('livedYears')
    .get(function(){
        let startYear = this.date_of_birth? moment(this.date_of_birth).year().toString() : " NA ";
        let endYear   = this.date_of_death? moment(this.date_of_death).year().toString() : "  ";
        return startYear + ' - ' + endYear;
    });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
