const bcrypt = require('bcryptjs')
const db = require('../database/models')
const op = db.Sequelize.Op;

let addController = {
    index: function (req, res) {
        if (req.method == 'POST') {
            console.log(req.body);
            let product = {
                id_usuarios: req.session.user.id,
                nombre: req.body.marca + ' ' + req.body.modelo + ' ' + req.body.color + ' ' + req.body.anio,
                marca: req.body.marca,
                modelo: req.body.modelo, 
                color: req.body.color, 
                anio: req.body.anio,
                caracteristicas: req.body.caracteristicas,
                precio: req.body.precio,
                url_img: req.file.filename
            }
            console.log(product);
                db.Product.create(product)
                .then(() => {
                    res.redirect(res.get('/profile'))
                })
                .catch((error) => {
                    return res.send(error);
                })
        }
        if (req.method == 'GET') {
            return res.render('product-add')

        }

    },
}

module.exports = addController;