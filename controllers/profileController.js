const db = require('../database/models')
const op = db.Sequelize.Op;

let profileController = {
   index: function (req, res) {
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
            .catch((error) => {
                res.send(error)
            })
        })    
    },
}

module.exports = profileController;