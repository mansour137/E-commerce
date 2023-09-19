const slugify = require('slugify');
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
    },
    slug : String,
    quantity:{
        type: Number,
        required: true,
    },
    color: [],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    brand:{
        type:String,
        required:true,
    },
    price: {
        type: Number,
        required: true,
    },
    description:{
        type:String,
        required:[true,'A product must have a description']
    },
    imageCover:{
        type:String,
        required:[true,'A product must have a cover image']
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
},
    {
        versionKey: false,

    })

productSchema.pre('save',function (next){
    this.slug = slugify(this.name, {lower:true});
    next();
})



const Products = mongoose.model('Product' ,productSchema );

module.exports = Products;