var express = require('express');
var router = express.Router();
let proEditController = require('../controllers/proEditController');

router.get('/:id', proEditController.index);
router.post('/:id', proEditController.index);

module.exports = router;

