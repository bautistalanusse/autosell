const db = require('../database/models')

let indexController = {
    index: function (req, res, next) {
        db.Product.findAll()
        .then((data) => {
            res.render('index', {
                autos: data,
                logueado: true,
            })
        })    
    },
}

module.exports = indexController;