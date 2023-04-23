var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MovieSchema = new Schema(
  {
    title: {type: String, required: true, maxlength: 150},
    year: {type: String, required: true, maxlength: 200},
    genre: {type: String, required: true, maxlength: 150}
  }
);

//Export model
module.exports = mongoose.model('Movie', MovieSchema);