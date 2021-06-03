const db = require('../database/models')
const op = db.Sequelize.Op;

let searchController = {
    search: function (req, res) {
        db.Product.findAll({
            where: { nombre: { [op.like]: "%" + req.query.search + "%" } },
        })
        .then((result) => {
            console.log(result);
            res.render('search-results', {
                autos: result,
            })
        })
    },
}

module.exports = searchController;