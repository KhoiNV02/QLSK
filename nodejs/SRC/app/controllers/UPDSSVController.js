const eventCurrent = require('../models/eventCurrentModel');
const Event= require('../models/CourseModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
var TYPE;
class UPSKController {
  //[get]/news
  index(req, res) {
    eventCurrent.find({ type: req.query.type })
        .sort({ _id: -1 })  // Sắp xếp theo trường createdAt giảm dần
        .then(eventCurrent => { 
            TYPE = req.query.type;
            res.render('adminUpDSSV', { eventCurrent: mutipleMongooseToObject(eventCurrent), layout: 'newlayout', TYPE: req.query.type });
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
  UPDSSV(req, res) {
    console.log(req.body);

    const query = {
        $and: [
            { name: req.body.name },
            { nam: req.body.nam }
        ]
    };

    const update = {
        name: req.body.name,
        condition: req.body.condition,
        nam: req.body.nam,
        member: req.body.member,
    };

    // Use findOneAndUpdate to find and update or insert if not found
    Event.findOneAndUpdate(query, update, { upsert: true, new: true })
        .then(updatedEvent => {
            // Check if an existing event was found and updated
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
