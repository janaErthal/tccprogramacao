const express = require('express');
const router = express.Router();
const RoupaController = require('../controlador/ControladorRoupas');

// Rota para criar um novo roupa
router.post('/roupa', RoupaController.createroupas);

// Rota para obter todos os roupas
router.get('/roupa', RoupaController.getAllroupas);

// Rota para obter um roupa pelo ID
router.get('/roupa/:id', RoupaController.getroupasById);

// Rota para atualizar um roupa
router.put('/roupa/:id', RoupaController.updateroupas);

// Rota para deletar um roupa
router.delete('/roupa/:id', RoupaController.deleteroupas);





// Rota para registrar entrada de estoque
//router.post('/roupas/:id/entrada', RoupaController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/roupas/:id/saida', RoupaController.registrarSaida);

module.exports = router;