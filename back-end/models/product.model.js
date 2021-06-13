//imports
const mongoose = require('mongoose');

//set schema
const ProductSchema = new mongoose.Schema({
    code: { type: String, required: true, trim: true }, 
    name: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, trim: true }, 
    inStock: { type: Number, required: true, trim: true }, 
    deliveries: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'Deliveries' }]
});

//define object
const Products = mongoose.model('products', ProductSchema);

//exports
module.exports = Products;