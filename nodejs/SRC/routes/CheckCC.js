var express = require('express');
const router = express.Router();

const CheckCCController = require('../app/controllers/CheckCCController');
// router.post('/updateSK', UPSKController.updateSK);
router.post('/Update', CheckCCController.upSK);
router.get('/', CheckCCController.index);

module.exports = router;
