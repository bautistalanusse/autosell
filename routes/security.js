var express = require('express');
var router = express.Router();

let securityController = require('../controllers/securityController')

router.get('/login', securityController.login);
router.post('/login', securityController.authenticate);
router.get('/register', securityController.register);
router.post('/register', securityController.register);
router.post('/logout', securityController.logout);

module.exports = router;