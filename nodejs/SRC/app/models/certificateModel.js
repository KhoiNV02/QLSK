const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const Course1 = new Schema({
  mssv: {type: String},
  condition: {type: String},
  img:{type: String},
  year:{type:String}
});


const certificate= mongoose.model('certificate', Course1);

module.exports = certificate;
//module.exports=mongoose.model('Course',Course)