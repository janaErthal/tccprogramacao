const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Roupas extends Model {}

Roupas.init({
    idroupas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    preco: {
        type : DataTypes.DECIMAL(5,2)
    },
    descricao: {
        type: DataTypes.STRING
    },
    tamanho: {
        type: DataTypes.STRING
    },
    estoque: {
        type : DataTypes.INTEGER
    },
    cores : {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'roupas', // exatamente igual o nome da tabela
    timestamps: false
});

module.exports = Roupas;