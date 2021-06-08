const db = require('../database/models')
const op = db.Sequelize.Op;

let editController = {
udpdate: function(req, res) {
        if (req.method == 'POST') {
            let user = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                mail: req.body.mail, 
                numero_telefono: req.body.numero_telefono,
                foto: req.file.filename
            }
                db.Usuario.update(user, {
                where: { id:  req.session.user.id }
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