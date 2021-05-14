const db = require('../database/models')
const op = db.Sequelize.Op;

let profileController = {
   index: function (req, res, next) {
        db.Usuario.findByPk(req.params.id)
        .then((data) => {
            db.Product.findAll({
                where: [
                    { id_usuarios: { [op.like]: req.params.id} }
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