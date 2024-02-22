const eventCurrent = require('../models/eventCurrentModel');
const {mongooseToObject, mutipleMongooseToObject}=require('../../ultil/mongoose');
class MeController {
  //[get]/news

  storeCourses(req, res,next) {
    console.log(req.params.id);
    eventCurrent .find({type:req.params.id})
    .sort({ _id: -1 })
   .then(courses=>res.render('Me',{
    TYPE:req.params.id,
    courses:mutipleMongooseToObject(courses),
    layout:"newlayout"
   }))
   .catch((error)=>next(error))
  }

  delete(req,res,next)
  {
    eventCurrent.deleteOne({_id:req.params.id})
    .then(()=>res.redirect('back'))
    .catch(error=>next(error))
  }

}
module.exports = new MeController();
