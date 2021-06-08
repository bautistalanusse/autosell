module.exports = ( sequelize, DataTypes) =>{
    let alias = "Usuario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING

        },
        fecha_nacimiento: {
            type: DataTypes.DATE

        },
        mail: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        },
        numero_telefono: {
            type: DataTypes.STRING
        },
        foto:{
            type: DataTypes.STRING
        },

    }

    let configs = {
        tableName: "usuario",
        timestamps: false

    }

    const Usuario = sequelize.define(alias, cols, configs);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'id_usuarios',
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'id_usuario',
        })
    }

    return Usuario;

}

