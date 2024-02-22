var express = require('express');
const router = express.Router();

const CCDetailController = require('../app/controllers/CCDetailController');
router.post('/delete', CCDetailController.delete);
router.get('/getCertificate', CCDetailController.getCertificate);
router.post('/Update', CCDetailController.update);
router.get('/', CCDetailController.index);

module.exports = router;
