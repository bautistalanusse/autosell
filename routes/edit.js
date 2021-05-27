var express = require('express');
var router = express.Router();
let editController = require('../controllers/editController')


router.get('/', editController.udpdate);
router.post('/', editController.udpdate);

module.exports = router;