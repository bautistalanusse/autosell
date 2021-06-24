var express = require('express');
var router = express.Router();
let editController = require('../controllers/editController')

const multer = require('multer');
const path = require('path');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/user')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.filename + path.extname(file.originalname))
    },
})

var upload = multer({ storage: storage})

router.get('/', editController.udpdate);
router.post('/', upload.single('foto'), editController.udpdate);

router.get('/password', editController.show)
router.post('/password', editController.password)



module.exports = router;