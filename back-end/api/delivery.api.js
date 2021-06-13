//imports
const express = require('express');
const router = express.Router();
const DeliveryController = require('../controller/delivery.controller');


module.exports = ()=>{
    
/** insert a Delivery. */
router.post('/', DeliveryController.createDelivery);

/** get all Deliveries. */
router.get('/', DeliveryController.getAllDeliveries);

/** get all products of particular Delivery. */
router.get('/:id', DeliveryController.getproductsForDelivery);

return router;

}

