//Create object
const Delivery = require('../models/delivery.model');
// const Product = require('../models/product.model');
//insert to the database
const createDelivery = async (req, res) => {
    //to prevent crashes
    if (req.body) {
        const delivery = new Delivery(req.body);
        delivery.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Retrieve all data related to the model
const getAllDeliveries = async (req, res) => {
    await Delivery.find({}).populate('vehicles')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Retrieve all sub array data related to the specific Model
//this is only can use at the Delivery has value inside the vehicle array
const getproductsForDelivery = async (req, res) => {

    if (req.params && req.params.id) {
        await Delivery.findById(req.params.id).populate('products')
            .then(data => {
                res.status(200).send({ data: data.products });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}



//export to use in another class
module.exports = {
    createDelivery,
    getAllDeliveries,
    getproductsForDelivery,
}