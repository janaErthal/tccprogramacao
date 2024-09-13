const Pedido = require('../modelo/Pedidos');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const PedidoController = {
    createPedido: async (req, res) => {
        try {
            const novoPedido = await Pedido.create(req.body);
            res.json(novoPedido);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllPedidos: async (req, res) => {
        try {
            const pedidos = await Pedido.findAll();
            res.json(pedidos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getPedidoById: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).send('Pedido não encontrado');
            }
            res.json(pedido);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updatePedido: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).send('Pedido não encontrado');
            }
            await pedido.update(req.body);
            res.send('Pedido atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deletePedido: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).send('Pedido não encontrado');
            }
            await pedido.destroy();
            res.send('Pedido deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = PedidoController;