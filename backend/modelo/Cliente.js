const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Cliente extends Model {}

Cliente.init({
    idcliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
    cep: {
        type: DataTypes.CHAR(8)
    }
}, {
    sequelize,
    modelName: 'cliente', // exatamente igual o nome da tabela
    timestamps: false
});

module.exports = Cliente;