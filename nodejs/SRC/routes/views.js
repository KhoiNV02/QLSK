var express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewsController');

router.post('/save', newController.save);
router.get('/', newController.index);

module.exports = router;
