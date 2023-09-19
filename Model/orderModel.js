const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    userId : {
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
    },
    shippingAddress:{
        type:String,
        required: true
    },
    paymentMethod:{
        type:String,
        required: true
    },
    paymentStatus:{
        type:String,
        required: true
    },

    },{
    versionKey: false,
})



const Orders = mongoose.model('Order' ,orderSchema );

module.exports = Orders;