var express = require('express');
var router = express.Router();
let profileController = require('../controllers/profileController')


router.get('/:id', profileController.index);

module.exports = router;