const suggest= require('../models/suggestModel');
class NewsController {
  //[get]/news
  index(req, res) {
    res.render('views',{ showHeaderAndFooter: true,
    MSSV:req.query.MSSV, });
  }
  save(req, res) {
    const newSuggestion = new suggest({
      type:req.body.dt,
      content: req.body.dr,
    });
    newSuggestion.save()
    .then(savedSuggestion => {
      console.log('Suggestion saved:', savedSuggestion);
      // Trả về phản hồi thành công nếu cần
      res.status(200).json({ message: 'Suggestion saved successfully' });
    })
    .catch(error => {
      console.error('Error saving suggestion:', error);
      // Trả về phản hồi lỗi nếu cần
      res.status(500).json({ error: 'Internal server error' });
    });
  }
}
module.exports = new NewsController();
