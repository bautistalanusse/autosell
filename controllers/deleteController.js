const db = require('../database/models')
const op = db.Sequelize.Op;

let deleteController = {
    delete: function (req, res) {
        db.Product.findByPk(req.params.id)
            .then((data)  => {
                data.destroy()
                res.redirect('/profile')
                req.flash('success', 'Produto eliminado.')
            })
        
    }
}

module.exports = deleteController;