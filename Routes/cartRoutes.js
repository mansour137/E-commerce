const express  = require('express');
const cartController = require('../Controller/cartController');
const router = express.Router();

/////////////////////CART///////////////////

router
    .route('/add-to-cart')
    .post(cartController.isAvailable , cartController.addToCart)
router
    .route('/delete-product-from-cart/:id')
    .delete(cartController.deleteProductCart)
router
    .route('/delete-all-cart')
    .delete(cartController.deleteCart);

module.exports = router;