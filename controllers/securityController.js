const db = require('../database/models')
const op = db.Sequelize.Op;

let securityController = {
    login: function (req, res, next) {
        res.render('login', );
    },
    authenticate: function (req, res) {
        db.Usuario.findOne({ where: { mail: req.body.email }})
        .then((user) => {
            if (req.body.password == Usuario.contrasena ){
                req.session.user = user
                return res.redirect('/')
            }

            res.redirect('/login?failed=true')
        })
        .catch((error) => {
            return res.send(error);
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
        return res.render('register')
    },
    logout: function(req,res) {
        req.session.destroy();

        return res.redirect('/')
    }
}

module.exports = securityController;