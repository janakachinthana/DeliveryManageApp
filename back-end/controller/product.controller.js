//Create object
const Product = require('../models/product.model');

//insert to the database
const createProduct = async (req, res) => {
    //to prevent crashes
    if (req.body) {
        const product = new Product(req.body);
        product.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Retrieve all data related to the model
const getAllProducts = async (req, res) => {
    await Product.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//export to use in another class
module.exports = {
    createProduct,
    getAllProducts,
}