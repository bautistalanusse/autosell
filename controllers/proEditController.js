const db = require('../database/models')
const op = db.Sequelize.Op;

let editController = {
udpdate: function(req, res) {
        if (req.method == 'POST') {
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
                db.Usuario.update(product, {
                where: { id:  req.params.id }
            })
                .then((user) => {
                    db.Usuario.findByPk(req.session.user.id)
                        .then(usuario => {
                            req.session.user = usuario;
                    res.redirect('/profile')
                        })
                })
                .catch((error) => {
                    return res.send(error);
                })
        }
        if (req.method == 'GET') {  
                return res.render('profile-edit',{
                    nombre: req.session.user.nombre,
                    apellido: req.session.user.apellido,
                    mail: req.session.user.mail,
                    telefono: req.session.user.numero_telefono,

                })

        }

    },
    
}
module.exports = editController;