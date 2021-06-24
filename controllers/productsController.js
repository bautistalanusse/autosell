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

    comment: async function (req, res,) {
        let product = await db.Product.findByPk(req.params.id);
        if (req.body.texto.length == 0) {
             req.flash('danger', 'Debe incluir un comentario.')
             res.redirect(req.get('Referrer'));
             
        } else {
            
            product.update({ total_comments: product.total_comments + 1 });

            db.Comentario.create({ ...req.body, id_usuario: req.session.user.id, id_producto: req.params.id })
                .then(() => {
                    res.redirect("/products/" + req.params.id)
                })

                .catch((error) => {
                    res.send(error)
                })

        }
       
    },
}

module.exports = productsController;