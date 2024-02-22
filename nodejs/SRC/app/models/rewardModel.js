const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const Course1 = new Schema({
  name: {type: String},
  link:{type: String},
  time:{type:Date},
});


const reward= mongoose.model('reward', Course1);

module.exports = reward;
//module.exports=mongoose.model('Course',Course)