const express = require('express');
const router = express.Router();
const PedidoController = require('../controlador/ControladorPedidos');

// Rota para criar um novo pedido
router.post('/pedidos', PedidoController.createPedido);

// Rota para obter todos os pedidos
router.get('/pedidos', PedidoController.getAllPedidos);

// Rota para obter um pedido pelo ID
router.get('/pedidos/:id', PedidoController.getPedidoById);

// Rota para atualizar um pedido
router.put('/pedidos/:id', PedidoController.updatePedido);

// Rota para deletar um pedido
router.delete('/pedidos/:id', PedidoController.deletePedido);


// Rota para registrar entrada de estoque
//router.post('/pedidos/:id/entrada', PedidoController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/pedidos/:id/saida', PedidoController.registrarSaida);

module.exports = router;