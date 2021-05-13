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
        fecha_creacion: {
            type: DataTypes.DATE
        },
        texto: {
            type: DataTypes.STRING
        },

    }

    let configs = {
        tableName: "comentarios",
        timestamps: false
    }

    const Comentario = sequelize.define(alias, cols, configs);

    return Comentario;

}