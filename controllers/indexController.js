const db = require('../database/models')

let indexController = {
    index: function (req, res, next) {
        db.Product.findAll({
            order: [
                ['updated_at', 'DESC']
            ],
            limit: 4,
        })
        .then((novedades) => {
            res.render('index', {
                autos: novedades,
            })
        })    
    },
}

module.exports = indexController;