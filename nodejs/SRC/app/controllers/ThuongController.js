const Event= require('../models/CourseModel');
const Reward= require('../models/rewardModel');
const eventCurrent= require('../models/eventCurrentModel');
const {mongooseToObject, mutipleMongooseToObject}=require('../../ultil/mongoose');
const reward = require('../models/rewardModel');
var ye=new Date().getFullYear();
var ye2=new Date();
class ThuongController {

  // index(req, res, next) {
  //   const eventQuery = Event.find({
  //     $and: [
  //       { 'member.MSSV': '20520831' },
  //       { 'nam': '2023' }
  //     ]
  //   }).exec();

  //   const rewardQuery = Reward.find(/* Add your reward query criteria here */).exec();

  //   // Use Promise.all to wait for both queries to complete
  //   Promise.all([eventQuery, rewardQuery])
  //     .then(([event, rewards]) => {
  //       res.render('thuong', {
  //         event: mutipleMongooseToObject(event),
  //         rewards: mutipleMongooseToObject(rewards), // Adjust this line accordingly
  //         showHeaderAndFooter: true,
  //       });
  //     })
  //     .catch(error => next(error));
  // }

  // index(req, res, next) {
  //   console.log(ye);
  //   const eventQuery = Event.find({
  //     $and: [
  //       { 'member.mssv':'20520999' },
  //       { 'nam': ye }
  //     ]
  //   }).exec();

  //   const rewardQuery = Reward.find(/* Add your reward query criteria here */).exec();
  //   const eventCurrentQuery = eventCurrent.find({ 'condition': 'Học tập tốt' }).exec();

  //   // Use Promise.all to wait for all three queries to complete
  //   Promise.all([eventQuery, rewardQuery, eventCurrentQuery])
  //     .then(([event, rewards, eventCurrentResults]) => {
  //       res.render('thuong', {
  //         event: mutipleMongooseToObject(event),
  //         rewards: mutipleMongooseToObject(rewards),
  //         eventCurrent: mutipleMongooseToObject(eventCurrentResults),
  //         showHeaderAndFooter: true,
  //         MSSV:req.query.MSSV,
  //       });
  //     })
  //     .catch(error => next(error));
  // }
  index(req, res, next) {
  
    const eventQuery = Event.find({
      $and: [
        { 'member': req.query.MSSV },
        { 'nam': { $gte: ye - 1, $lte: ye } }
      ],
    }).exec();
    
    const rewardQuery = Reward.find({time:{ $gt: ye2 }}).exec();
  
    // Truy vấn để lấy ra các điều kiện từ bảng Event
    const eventConditionsQuery = Event.find({}, { 'condition': 1, '_id': 0 }).exec();
  
    // Sử dụng Promise.all để chờ cả ba truy vấn hoàn thành
    Promise.all([eventQuery, rewardQuery, eventConditionsQuery])
      .then(([event, rewards, eventConditions]) => {

        // Lấy ra mảng các điều kiện từ kết quả truy vấn
        const eventConditionsArray = eventConditions.map(item => item.condition);

        const arrFlat = eventConditionsArray.flat();

        // Kiểm tra và chuyển đổi giá trị truyền vào thành mảng nếu nó không phải là mảng
        const conditionsArray = Array.isArray(arrFlat)
          ? arrFlat
          : (arrFlat ? JSON.parse(arrFlat) : []);

        // Truy vấn bảng eventCurrent với điều kiện condition không nằm trong mảng điều kiện của Event
        const eventCurrentQuery = eventCurrent.find({ 'condition': { $nin: conditionsArray } }).exec();
  
        return Promise.all([event, rewards, eventCurrentQuery]);
      })
      .then(([event, rewards, eventCurrentResults]) => {
        console.log(event);
        res.render('thuong', {
          event: mutipleMongooseToObject(event),
          rewards: mutipleMongooseToObject(rewards),
          eventCurrent: mutipleMongooseToObject(eventCurrentResults),
          showHeaderAndFooter: true,
          MSSV: req.query.MSSV,
        });
      })
      .catch(error => {
        console.error(error);
        next(error);
      });
  }
  
   getReward(req,res)
   {
   
   }
}
module.exports = new ThuongController();
