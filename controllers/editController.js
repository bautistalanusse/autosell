const db = require('../database/models')
const op = db.Sequelize.Op;

let editController = {
udpdate: function(req, res) {
        if (req.method == 'POST') {
            db.Usuario.update(req.body, {
                where: { id: { [op.like]: req.params.id }}
            })
                .then(() => {
                    res.redirect('/profile')
                })
                .catch((error) => {
                    return res.send(error);
                })
        }
        if (req.method == 'GET') {
            db.Usuario.findByPk(req.params.id)
            .then((data) => {
                return res.render('profile-edit', {
                    user: data,
                })
            })

        }
    },
}
module.exports = editController;