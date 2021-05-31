const db = require('../database/models')
const op = db.Sequelize.Op;

let productsController = {

    show: function (req, res) {
        db.Product.findByPk(req.params.id, {
            include: [
                { association: 'usuario' }
            ]
        })
        .then((data) => {
            db.Comentario.findAll({
                where: { id_producto: req.params.id},
                include: [
                    { association: 'usuario' }   
                ]
            })
            .then((comentario) => {
                return res.render('product', {
                    auto: data,
                    comentarios: comentario,
                })
            })
        })
        .catch((error) => {
            res.send(error)
        })
    },

  /*   show2: function (req, res, next) {
        db.Product.findByPk(req.params.id)
            .then((data) => {
                db.Comentario.findAll({
                    where: [
                        { id_producto: { [op.like]: req.params.id} }
                    ],
                })
                    .then((comentario) => {
                        db.Usuario.findAll()
                            .then((nombre) => {
                                res.render('product', {
                                    comentario: comentario,
                                    auto: data,
                                    usuario: nombre,
                                })

                            })

                    })

            }) 
    }, */

    index: function (req, res,) {
        db.Comentario.create({...req.body, id_usuario: req.session.user.id, id_producto: req.params.id})
            .then(() => {
                res.redirect("/")    
            })
        
            .catch((error) => {
                res.send(error)
            })
    }
}

module.exports = productsController;