const db = require('../database/models')
const op = db.Sequelize.Op;

let securityController = {
    login: function (req, res, next) {
       return res.render('login', );
    },
    authenticate: function (req, res) {
        db.Usuario.findOne({ where: { mail: req.body.mail }})
        .then((user) => {
            console.log(user);
            if (req.body.contrasena == user.contrasena ){
                req.session.user = user;

                return res.redirect('/');
            }

            res.redirect('/login?failed=true')
        })
        .catch((error) => {
            throw error;
        })
    },
    register: function(req, res) {
        if (req.method == 'POST'){
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

        return res.redirect('/')
    }
}

module.exports = securityController;