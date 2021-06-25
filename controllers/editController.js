const bcrypt = require('bcryptjs')
const { UnsupportedMediaType } = require('http-errors');
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

    password:  async function (req, res) {
        let user = await db.Usuario.findByPk(req.session.user.id)
        if (bcrypt.compareSync(req.body.contrasena, user.contrasena)) {
            let contrasena = { contrasena: bcrypt.hashSync(req.body.new_contrasena)}
            user.update(contrasena);
            res.redirect('/profile')

        } else {
            req.flash('danger', 'Contraseña incorrecta')
            res.redirect(req.get('Referrer'))
        }
        // db.Usuario.findByPk(req.session.user.id)
        //     .then((user) => {
        //         if (bcrypt.compareSync(req.body.contrasena, user.contrasena)) {
        //             db.Usuario.update()
        //             return res.redirect('/');
        //         } else {
        //             req.flash('danger', 'Mail/Contraseña incorrectos')
        //         }
        //     })
        //     .catch((error) => {
        //         res.redirect('/login')
        //     })
    },

    show: function (req, res) {
        db.Usuario.findByPk(req.session.user.id)
            .then(data => {
                res.render('password-change', {
                    user: data,
                })
            })
    },
    
}
module.exports = editController;