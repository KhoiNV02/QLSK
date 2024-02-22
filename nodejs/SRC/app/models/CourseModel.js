const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const Course1 = new Schema({
  name: {type: String},
  nam:{type: String},
  member:{type:Array},
  condition:{type:Array},
});


const event = mongoose.model('event', Course1);

module.exports = event;
//module.exports=mongoose.model('Course',Course)