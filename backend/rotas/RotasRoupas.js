const express = require('express');
const router = express.Router();
const RoupaController = require('../controlador/ControladorRoupa');

// Rota para criar um novo roupa
router.post('/roupas', RoupaController.createRoupa);

// Rota para obter todos os roupas
router.get('/roupas', RoupaController.getAllRoupas);

// Rota para obter um roupa pelo ID
router.get('/roupas/:id', RoupaController.getRoupaById);

// Rota para atualizar um roupa
router.put('/roupas/:id', RoupaController.updateRoupa);

// Rota para deletar um roupa
router.delete('/roupas/:id', RoupaController.deleteRoupa);

// Rota para registrar entrada de estoque
//router.post('/roupas/:id/entrada', RoupaController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/roupas/:id/saida', RoupaController.registrarSaida);

module.exports = router;