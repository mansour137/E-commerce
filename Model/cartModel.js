const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
        userId :{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        productIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required:true
        }],
        quantity: {
            type:Number,
            required:true
        }
    },{
    versionKey: false,
})



const Cart = mongoose.model('Cart' ,cartSchema );

module.exports = Cart;