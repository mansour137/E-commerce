const express  = require('express');
const orderController = require('../Controller/orderController');
const authController = require('../Controller/authController');
const router = express.Router();

/////////////////////ORDERS///////////////////////

router
    .route('/:id?')
    .get(authController.protect , orderController.getAllOrder)
    .post(authController.protect, orderController.addOrder)
    .delete(authController.protect, orderController.deleteOrder)


module.exports = router;