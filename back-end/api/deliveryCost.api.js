//imports
const express = require('express');
const router = express.Router();
const DeliveryCostController = require('../controller/deliveryCost.controller');


module.exports = ()=>{

    /** get all products of particular Delivery. */
router.get('/:id', DeliveryCostController.getproductsForDelivery);

  
return router;

}

