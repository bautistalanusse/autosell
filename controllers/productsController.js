const db = require('../database/models')

let productsController = {

    show: function (req, res, next) {
        db.Product.findByPk(req.params.id)
            .then((data) => {
                res.render('product', {
                    auto: data,
                })
            })
    },
}

module.exports = productsController;