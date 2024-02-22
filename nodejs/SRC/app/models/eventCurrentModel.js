const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const Course1 = new Schema({
  name: {type: String},
  link:{type: String},
  condition:{type:String},
  img:{type:String},
  descript:{type:String},
  type:{type:String},
  dateUp:{type:String},
});


const eventCurrent= mongoose.model('eventCurrent', Course1);

module.exports = eventCurrent;
//module.exports=mongoose.model('Course',Course)