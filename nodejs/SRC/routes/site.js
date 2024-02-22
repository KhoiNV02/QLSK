var express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
router.get('/getHot', siteController.getHot);
router.get('/getMajor', siteController.getMajor);
router.get('/getclb', siteController.getclb);
router.get('/getSchool', siteController.getSchool);
router.get('/', siteController.index);

module.exports = router;
