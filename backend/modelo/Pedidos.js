const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');


class pedidos extends Model {}

pedidos.init({
    idpedidos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pagamento: {
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.INTEGER
    },
    datahora: {
        type: DataTypes.DATE
    },
    valortotal: {
        type: DataTypes.DECIMAL(5,2)
    },
    endereco: {
        type: DataTypes.STRING

    }
}, {
    sequelize,
    modelName: 'pedidos', // exatamente igual o nome da tabela
    timestamps: false
});

module.exports = pedidos;