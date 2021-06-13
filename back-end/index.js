//imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./util/database.util');
const ProductAPI = require('./api/product.api');
const DeliveryAPI = require('./api/delivery.api');
const DeliveryCostAPI = require('./api/deliveryCost.api');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>welcome</h1>');
})

//enable cors
app.use(cors());
app.use(bodyParser.json());

//set routing
app.use('/product', ProductAPI());
app.use('/delivery',DeliveryAPI());
app.use('/cost',DeliveryCostAPI());

//run the server
app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});


