var express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
router.delete('/delete/:id', meController.delete);
router.get('/:id', meController.storeCourses);

module.exports = router;
