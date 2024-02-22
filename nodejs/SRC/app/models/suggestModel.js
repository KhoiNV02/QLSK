const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const Course1 = new Schema({
  type: {type: String},
  content:{type: String},
});


const suggest= mongoose.model('suggestidea', Course1);

module.exports = suggest;
//module.exports=mongoose.model('Course',Course)