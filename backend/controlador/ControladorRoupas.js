const Roupa = require('../modelo/Roupa');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const RoupaController = {
    createRoupa: async (req, res) => {
        try {
            const novoRoupa = await Roupa.create(req.body);
            res.json(novoRoupa);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllRoupas: async (req, res) => {
        try {
            const roupas = await Roupa.findAll();
            res.json(roupas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getRoupaById: async (req, res) => {
        try {
            const roupa = await Roupa.findByPk(req.params.id);
            if (!roupa) {
                return res.status(404).send('Roupa não foi encontrado');
            }
            res.json(roupa);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateRoupa: async (req, res) => {
        try {
            const roupa = await Roupa.findByPk(req.params.id);
            if (!roupa) {
                return res.status(404).send('Roupa não encontrado');
            }
            await roupa.update(req.body);
            res.send('Roupa atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteRoupa: async (req, res) => {
        try {
            const roupa = await Roupa.findByPk(req.params.id);
            if (!roupa) {
                return res.status(404).send('Roupa não encontrado');
            }
            await roupa.destroy();
            res.send('Roupa deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = RoupaController;