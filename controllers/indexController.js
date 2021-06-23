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
            .then((comentados) => {
                db.Categoria.findAll()
                .then((categorias) => {
                    res.render('index', {
                        autos: novedades,
                        comentados: comentados,
                        categorias: categorias,
                    })
                })
            })
        })    
    },

    category: function (req, res, next) {
        db.Product.findAll({
            where: [
                { id_categoria: req.params.categoria }
            ],
        })
        .then((data)=> {
            db.Categoria.findAll()
            .then((categorias) => {
                res.render('categoria', {
                    autos: data,
                    categorias: categorias,
                })
            })
        })
    },

}

module.exports = indexController;