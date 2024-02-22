const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const Course1 = new Schema({
  stt:{type:String},
  type:{type:String},
  name: {type: String},
  done:{type: String},
  note:{type:String},
});


const condition = mongoose.model('condition', Course1);

module.exports = condition;
//module.exports=mongoose.model('Course',Course)