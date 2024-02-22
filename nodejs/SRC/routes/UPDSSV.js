var express = require('express');
const router = express.Router();

const UPDSSVController = require('../app/controllers/UPDSSVController');
router.post('/UPDSSV', UPDSSVController.UPDSSV);
router.get('/', UPDSSVController.index);

module.exports = router;
