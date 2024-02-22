const certificate = require('../models/certificateModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
class ThuongController {
  //[get]/news
  index(req, res) {
    certificate.find({
      $and: [
        { 'mssv': req.query.MSSV },
        { 'year': new Date().getFullYear() }
      ]
  }).
    then( certificate =>
    { 
      res.render('CCDetail',{ showHeaderAndFooter: false,MSSV:req.query.MSSV,certificate:mutipleMongooseToObject(certificate),});
      // res.status(200).json({event});
    })
    .catch()
    {

    }
   
  }
  update(req, res) {
    const Certificate= new certificate({
      mssv:req.body.MSSV,
      condition:req.body.TYPE,
      img: req.body.URL,
      year:new Date().getFullYear(),
    });
    Certificate.save()
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
  getCertificate(req,res)
  {
  
    certificate.find({mssv:req.query.mssv}).
    then( event =>
    {
      res.status(200).json({event});
    })
    .catch()
    {

    }
  }
  async  delete(req,res)
  {
 
    const arrayValues = [];
    req.body.Mang.forEach(obj => {
  arrayValues.push(obj.id);
});
    const result = await certificate.deleteMany({ _id: { $in: arrayValues } });
    res.status(200).json({result});
  }
}
module.exports = new ThuongController();
