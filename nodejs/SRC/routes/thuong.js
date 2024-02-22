var express = require('express');
const router = express.Router();

const ThuongController = require('../app/controllers/ThuongController');

router.get('/getReward', ThuongController.getReward);
router.get('/', ThuongController.index);

module.exports = router;
