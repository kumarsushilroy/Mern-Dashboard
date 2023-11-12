
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname:{
        type:String,
        
    },

    productimage:{
        type:String,
        required:true
    },

    category:{
        type:String,
        
    },

    price:{
        type:Number,
        
    },

    company:{
        type:String,
        
    }
});

module.exports = mongoose.model('products', productSchema);