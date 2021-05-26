var express = require('express');
var router = express.Router();
let editController = require('../controllers/editController')


router.get('/:id', editController.udpdate);

module.exports = router;