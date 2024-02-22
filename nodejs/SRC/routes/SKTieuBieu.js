var express = require('express');
const router = express.Router();

const SKTieuBieuController = require('../app/controllers/SKTieuBieuController');
// router.post('/updateSK', UPSKController.updateSK);
router.post('/Update', SKTieuBieuController.Update);
router.get('/', SKTieuBieuController.index);

module.exports = router;
