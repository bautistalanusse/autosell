var express = require('express');
var router = express.Router();
const db = require('../database/models')

router.get('/:id',deleteController.delete)

