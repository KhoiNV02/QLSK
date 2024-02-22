const eventCurrent = require('../models/eventCurrentModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
var TYPE;
class UPSKController {
  //[get]/news
  index(req, res) {
    eventCurrent.find({ type: req.query.type })
        .sort({ _id: -1 })  // Sắp xếp theo trường createdAt giảm dần
        .then(eventCurrent => { 
            TYPE = req.query.type;
            res.render('adminUpSK', { eventCurrent: mutipleMongooseToObject(eventCurrent), layout: 'newlayout', TYPE: req.query.type });
        })
        .catch(error => {
            // Xử lý lỗi nếu cần thiết
        });
}
  upSK(req, res) {
    const eventCurrent1= new eventCurrent({
      name:req.body.name,
      link:req.body.link,
      condition: req.body.condition,
      img: req.body.img,
      descript: req.body.descript,
      type: req.body.type,
      dateUp: req.body.dateUp,
    });
    eventCurrent1.save()
    .then(savedSuggestion => {

      // Trả về phản hồi thành công nếu cần
      res.status(200).json({ message: 'Suggestion saved successfully' });
    })
    .catch(error => {
      console.error('Error saving suggestion:', error);
      // Trả về phản hồi lỗi nếu cần
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
