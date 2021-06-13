//imports
const express = require('express');
const router = express.Router();
const VehicleController = require('../controller/product.controller');


module.exports = ()=>{
    
/** insert a Product. */
router.post('/', VehicleController.createProduct);

/** get all Products. */
router.get('/', VehicleController.getAllProducts);

return router;

}

