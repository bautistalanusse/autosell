const db = require('../database/models')

let indexController = {
    index: function (req, res, next) {
        db.Product.findAll({
            order: [
                ['created_at', 'DESC']
            ],
            limit: 4,
        })
        .then((novedades) => {
            db.Product.findAll({
                order: [[
                    "total_comments", 'DESC'
                ] ],
                limit:8
            })
            .then(comentados => {
                res.render('index', {
                    autos: novedades,
                    comentados: comentados,
                }) 

            })
        })    
    },

}

module.exports = indexController;