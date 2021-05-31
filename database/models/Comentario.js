module.exports = (sequelize, DataTypes) => {
    let alias = "Comentario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        id_usuario: {
            type: DataTypes.INTEGER

        },
        id_producto: {
            type: DataTypes.INTEGER

        },
        texto: {
            type: DataTypes.STRING
        },

    }

    let configs = {
        tableName: "comentario",
        underscored: true
    }

    const Comentario = sequelize.define(alias, cols, configs);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'id_usuario',
        })
        Comentario.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'id_producto',
        })
    }

    return Comentario;

}