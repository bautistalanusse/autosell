const db = require('../database/models')
const Comentario = require('../database/models/Comentario')

let productsController = {

    show: function (req, res, next) {
        db.Product.findByPk(req.params.id)
            .then((data) => {
                db.Comentario.findAll()
                    .then((Comentario) => {
                        db.Usuario.findAll()
                            .then((nombre) => {
                                res.render('product', {
                                    comentario: Comentario,
                                    auto: data,
                                    usuario: nombre,
                                })

                            })

                    })

            })
    },
}

module.exports = productsController;