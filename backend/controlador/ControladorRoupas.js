const Roupas = require('../modelo/Roupas');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const roupasController = {
    createroupas: async (req, res) => {
        try {
            const novoroupas = await Roupas.create(req.body);
            res.json(novoroupas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllroupas: async (req, res) => {
        try {
            const roupas = await Roupas.findAll();
            res.json(roupas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getroupasById: async (req, res) => {
        try {
            const roupas = await Roupas.findByPk(req.params.id);
            if (!roupas) {
                return res.status(404).send('roupas não foi encontrado');
            }
            res.json(roupas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateroupas: async (req, res) => {
        try {
            const roupas = await Roupas.findByPk(req.params.id);
            if (!roupas) {
                return res.status(404).send('roupas não encontrado');
            }
            await roupas.update(req.body);
            res.send('roupas atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteroupas: async (req, res) => {
        try {
            const roupas = await Roupas.findByPk(req.params.id);
            if (!roupas) {
                return res.status(404).send('roupas não encontrado');
            }
            await roupas.destroy();
            res.send('roupas deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = roupasController;