const bcrypt = require('bcryptjs')
const db = require('../database/models')
const op = db.Sequelize.Op;
const { flash } = require('express-flash-message');

let securityController = {
    login: function (req, res, next) {
       return res.render('login', );
    },
    authenticate: function (req, res) {
        db.Usuario.findOne({ where: { mail: req.body.mail }})
        .then((user) => {
            if (bcrypt.compareSync(req.body.contrasena, user.contrasena )){
                req.session.user = user;
                    if(req.body.rememberme){
                        res.cookie('userId', user.id,{ maxAge: 1000 * 60 * 60 * 24})
                    }
                return res.redirect('/profile');
            } else{
                req.flash('danger', 'Mail/Contraseña incorrectos')
            }
        })
        .catch((error) => {
            req.flash('danger', 'Mail/Contraseña incorrectos')
            res.redirect('/login')
        })
    },
    register: function(req, res) {
        if (req.method == 'POST'){
            req.body.contrasena = bcrypt.hashSync(req.body.contrasena);
            db.Usuario.create(req.body)
            .then(() => {
                res.redirect('/')
            })
            .catch((error) => {
                return res.send(error);
            })
        }
        if (req.method == 'GET'){
            return res.render('register')

        }
    },
    logout: function(req,res) {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/');
    }
}

module.exports = securityController;