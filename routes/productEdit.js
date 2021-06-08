var express = require('express');
var router = express.Router();
let proEditController = require('../controllers/proEditController');

router.get('/', proEditController.index);
router.post('/', proEditController.index);

module.exports = router;

