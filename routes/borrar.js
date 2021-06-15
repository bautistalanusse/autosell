var express = require('express');
var router = express.Router();
const db = require('../database/models')

let deleteController = require('../controllers/deleteController')


router.get('/:id',deleteController.delete)


module.exports = router;