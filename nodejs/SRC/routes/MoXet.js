var express = require('express');
const router = express.Router();

const MoXetController = require('../app/controllers/MoXetController');
// router.post('/updateSK', UPSKController.updateSK);
router.post('/Update', MoXetController.upSK);
router.get('/', MoXetController.index);

module.exports = router;
