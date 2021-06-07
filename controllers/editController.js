const db = require('../database/models')
const op = db.Sequelize.Op;

let editController = {
udpdate: function(req, res) {
        if (req.method == 'POST') {
                db.Usuario.update(req.body, {
                where: { id:  req.session.user.id }
            })
                .then((user) => {
                    db.Usuario.findByPk(req.session.user.id)
                        .then(usuario => {
                            req.session.user = usuario;
                    res.redirect('/login')
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