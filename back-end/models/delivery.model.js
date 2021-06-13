//imports
const mongoose = require('mongoose');

//set schema
const DeliverySchema = new mongoose.Schema({
    type: { type: String, required: true, trim: true },
    owner: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'products' }]
});

//define object
const Deliveries = mongoose.model('Deliveries', DeliverySchema);

//exports
module.exports = Deliveries;