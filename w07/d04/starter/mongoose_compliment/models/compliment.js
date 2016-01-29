var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var complimentSchema = new mongoose.Schema({
  compliment: { type: String, required: true }
});

complimentSchema.statics.randomCompliment = function(complimentArray) {
  var documents = complimentArray;
  return documents[Math.floor(Math.random()*documents.length)];
};

var Compliment = mongoose.model('Compliment', complimentSchema);
// Make this available to our other files
module.exports = Compliment;
