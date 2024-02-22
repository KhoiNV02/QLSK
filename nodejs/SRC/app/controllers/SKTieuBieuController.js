const eventCurrent = require('../models/eventCurrentModel');
const Event= require('../models/CourseModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
var TYPE;
class UPSKController {
  index(req, res) {
    eventCurrent.find({})
        .sort({ _id: -1 })  // Sắp xếp theo trường createdAt giảm dần
        .then(eventCurrent => { 
            TYPE = req.query.type;
            res.render('SKTieuBieu', { eventCurrent: mutipleMongooseToObject(eventCurrent), layout: 'admin'});
        })
        .catch(error => {
            // Xử lý lỗi nếu cần thiết
        });
}
  // UPDSSV(req, res) {
  //   console.log(req.body);
  //   const eventCurrent1= new Event({
  //     name:req.body.name,
  //     condition: req.body.condition,
  //     nam:req.body.nam,
  //     member:req.body.member,
  //   });
  //   eventCurrent1.save()
  //   .then(savedSuggestion => {
  //     // Trả về phản hồi thành công nếu cần
  //     res.status(200).json({ message: 'Suggestion saved successfully' });
  //   })
  //   .catch(error => {
  //     console.error('Error saving suggestion:', error);
  //     // Trả về phản hồi lỗi nếu cần
  //     res.status(500).json({ error: 'Internal server error' });
  //   });
  // }
 Update(req, res) {
    const query = {
        _id: req.body.id,
    };

    const update = {
        type: req.body.type,
    };

    // Sử dụng findOneAndUpdate để tìm và cập nhật hoặc thêm mới nếu không tìm thấy
   eventCurrent.findOneAndUpdate(query, update, { upsert: true, new: true })
        .then(updatedEvent => {
            // Kiểm tra xem có sự kiện hiện tại nào được tìm thấy và cập nhật không
            if (updatedEvent) {
                res.status(200).json({ message: 'Suggestion updated successfully' });
            } else {
                res.status(200).json({ message: 'Suggestion saved successfully' });
            }
        })
        .catch(error => {
            console.error('Error updating or saving suggestion:', error);
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
