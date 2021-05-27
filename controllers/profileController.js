const db = require('../database/models')
const op = db.Sequelize.Op;

let profileController = {
   index: function (req, res, next) {
       console.log(req.session.user)
       db.Product.findAll()
        db.Usuario.findByPk(req.session.user.id)
        .then((data) => {
            db.Product.findAll({
                where: [
                    { id_usuarios: { [op.like]: req.session.user.id} }
                ],
            })
            .then((autos) => {
                res.render('profile', {
                    user: data,
                    autos: autos,
                })
            })
        })    
    },
}

module.exports = profileController;