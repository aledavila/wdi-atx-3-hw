var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Compliment = new Schema({
  compliment: { type: String, required: true }
});

// Make this available to our other files
module.exports = Compliment;