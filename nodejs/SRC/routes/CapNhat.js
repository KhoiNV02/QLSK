var express = require('express');
const router = express.Router();

const CapNhatController = require('../app/controllers/CapNhatController');
router.post('/delete', CapNhatController.delete);
router.get('/getCertificate', CapNhatController.getCertificate);
router.post('/Update', CapNhatController.update);
router.get('/', CapNhatController.index);

module.exports = router;
