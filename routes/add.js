var express = require('express');
var router = express.Router();
let addController = require('../controllers/addController')


router.get('/', addController.index);
router.post('/', addController.index);

module.exports = router;