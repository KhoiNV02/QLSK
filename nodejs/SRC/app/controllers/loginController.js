const Event = require('../models/CourseModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');

class LoginController {
  //[get]/news
  index(req, res) {
   res.render('login',{ showHeaderAndFooter: false });
  }
  show(req,res)
  {
    res.send("Đường dẫn không tồn tại, vui lòng nhập đường dẫn chính xác");
  }
}
module.exports = new LoginController();
