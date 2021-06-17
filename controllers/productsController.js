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

    comment: function (req, res,) {
        let product = db.Product.findByPk(req.params.id);
        product.update({ total_comments: product.comentarios + 1 }, {
            where: { id: req.params.id }
        });
        db.Comentario.create({...req.body, id_usuario: req.session.user.id, id_producto: req.params.id})
            .then(() => {
                res.redirect("/product/" + req.params.id)    
            })
        
            .catch((error) => {
                res.send(error)
            })
    }
}

module.exports = productsController;