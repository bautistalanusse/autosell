module.exports = (sequelize, DataTypes) => {
    let alias = "Categoria";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        categoria: {
            type: DataTypes.STRING
        },
    }

    let configs = {
        tableName: "categorias",
        timestamps: false      //para que no tenga created-at y updated
    }

    const Categoria = sequelize.define(alias, cols, configs);

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Product, {
            as: 'producto',
            foreignKey: 'id',
        })
    }

    return Categoria;

}