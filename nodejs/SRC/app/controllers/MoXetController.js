const rewards = require('../models/rewardModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
var TYPE;
class UPSKController {
  //[get]/news
  index(req, res) {
    rewards.find({})
        .sort({ _id: -1 })  // Sắp xếp theo trường createdAt giảm dần
        .then(rewards => { 
            res.render('MoXet', { rewards: mutipleMongooseToObject(rewards), layout: 'admin' });
        })
        .catch(error => {
            // Xử lý lỗi nếu cần thiết
        });
}
upSK(req, res) {
  rewards.deleteMany({})
    .then(() => {
      const Mang = req.body.Results;
      console.log(Mang);

      const savePromises = Mang.map(item => {
        const eventCurrent1 = new rewards({
          name: item.name,
          link: item.link,
          time: item.time,
        });

        return eventCurrent1.save();
      });

      return Promise.all(savePromises);
    })
    .then(savedSuggestions => {
      res.status(200).json({ message: 'Suggestions saved successfully' });
    })
    .catch(error => {
      console.error('Error saving suggestions:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
}

  updateSK(req, res) {
    const filter = { '_id': req.body.id }; // Điều kiện để xác định bản ghi cần cập nhật
  console.log(filter);
    const update = {
      $set: {
        name: req.body.name,
        link: req.body.link,
        condition: req.body.condition,
        img: req.body.img,
        descript: req.body.descript,
        type: req.body.type,
        dateUp: req.body.dateUp,
      },
    };
    eventCurrent.updateOne(filter, update)
      .then(result => {
  
          res.status(200).json({ message: 'Suggestion updated successfully' });
        
      })
      .catch(error => {
        console.error('Error updating suggestion:', error);
        // Trả về phản hồi lỗi nếu cần
        res.status(500).json({ error: 'Internal server error' });
      });
  }
  
}
module.exports = new UPSKController();
