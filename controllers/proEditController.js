const db = require('../database/models')
const op = db.Sequelize.Op;

let proEditController = {
index: function(req, res) {
        if (req.method == 'POST') {
            
            let product = {
                nombre: req.body.marca + ' ' + req.body.modelo + ' ' + req.body.color + ' ' + req.body.anio,
                marca: req.body.marca,
                modelo: req.body.modelo, 
                color: req.body.color, 
                anio: req.body.anio,
                caracteristicas: req.body.caracteristicas,
                precio: req.body.precio,
            }
            db.Product.update(product, {
                where: { id: req.params.id }
            })
                .then(() => {
                   return res.redirect('/profile')
                })
                .catch((error) => {
                    return res.send(error);
                })
        }
        if (req.method == 'GET') {
            db.Product.findByPk(req.params.id)
            .then((auto) => {
                if(req.session.user.id == auto.id_usuarios){
                    return res.render('product-edit', {
                        auto: auto,
                    })
                } else{
                    return res.redirect('/products/' + req.params.id)
                }
                
            })  
                

        }

    },
    
}
module.exports = proEditController;