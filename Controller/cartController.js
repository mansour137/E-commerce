const Cart = require('../Model/cartModel')
const Product = require('../Model/productModel')
const factory = require('./factoryHandler');
const catchAsync = require('../utilis/catchAsync')

exports.getAllCart = factory.getAllOrOne(Cart);
exports.addToCart = factory.creatNewOne(Cart);
exports.deleteProductCart = factory.delete(Cart);
exports.deleteCart = factory.deleteAll(Cart);

exports.isAvailable = catchAsync(async (req,res,next)=>{
    const{productIds , quantity} = req.body
    const product = await Product.findById(productIds);
    if(product.quantity >= quantity){
        return next();
    }
    res.status(302).json({message : `there's last: ${quantity}piece` })
})
