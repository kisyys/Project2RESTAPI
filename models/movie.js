var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MovieSchema = new Schema(
  {
    title: {type: String, required: true, maxlength: 150},
    director: {type: String, required: true, maxlength: 200},
    year: {type: String, required: true, maxlength: 150},
    id2: {type: Number, required: true, maxlength: 150}
  }
);

//Export model
module.exports = mongoose.model('Movie', MovieSchema);