//Create object
const Delivery = require('../models/delivery.model');
// const Product = require('../models/product.model');



//Retrieve all sub array data related to the specific Model
//this is only can use at the Delivery has value inside the vehicle array
const getproductsForDelivery = async (req, res) => {

    if (req.params && req.params.id) {
        await Delivery.findById(req.params.id).populate('products')
            .then(data => {
                let DeliveryCost = 0;
                data.products.map((product) => {
                    DeliveryCost += product.amount;
                });
                res.status(200).send({ data: DeliveryCost });
                console.log(DeliveryCost);
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}



//export to use in another class
module.exports = {
    getproductsForDelivery,

}