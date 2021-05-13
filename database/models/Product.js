module.exports = (sequelize, DataTypes) => {
    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        url_img: {
            type: DataTypes.STRING
        },
        id_usuarios: {
            type: DataTypes.INTEGER

        },
        nombre_producto: {
            type: DataTypes.STRING

        },
        fecha_creacion: {
            type: DataTypes.DATE
        },
        marca: {
            type: DataTypes.STRING
        },
        modelo: {
            type: DataTypes.STRING
        },
        anio: {
            type: DataTypes.DATE
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
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, configs);

    return Product;

}

