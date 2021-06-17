var express = require('express');
var router = express.Router();
let addController = require('../controllers/addController');

const multer = require('multer');
const path = require('path');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/products')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

var upload = multer({ storage: storage})

router.get('/', addController.index);
router.post('/', upload.single('product'), addController.index);

module.exports = router;