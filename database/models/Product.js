module.exports = (sequelize, DataTypes) => {
    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING

        },
        url_img: {
            type: DataTypes.STRING
        },
        id_usuarios: {
            type: DataTypes.INTEGER
        },    
        marca: {
            type: DataTypes.STRING
        },
        modelo: {
            type: DataTypes.STRING
        },
        anio: {
            type: DataTypes.INTEGER
        },
        caracteristicas: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.INTEGER
        },
        descripcion: {
            type: DataTypes.STRING
        },

    }

    let configs = {
        tableName: "producto",
        underscored: true
    }

    const Product = sequelize.define(alias, cols, configs);

    Product.associate = function(models) {
        Product.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'id_usuarios',
        })
        Product.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'id_producto',
        })
    }

    return Product;

}

