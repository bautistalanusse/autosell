const bcrypt = require('bcryptjs')
const db = require('../database/models')
const op = db.Sequelize.Op;

let addController = {
    index: function (req, res) {
        if (req.method == 'POST') {
            db.Product.create(req.body)
                .then(() => {
                    res.redirect('/')
                })
                .catch((error) => {
                    return res.send(error);
                })
        }
        if (req.method == 'GET') {
            return res.render('product-add')

        }
    },
}

module.exports = addController;