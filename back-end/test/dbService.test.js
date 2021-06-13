// Initialize DbObject
const Delivery = require('../models/delivery.model');

// creat an object with values
const deliveryObj = {
    
    type: "Test",
    owner: "Test Osener",
    description: "Testdescrition",
    products: []
};


// test case 1
test('test case: Insert new dilevery ', () => {
    const delivery = new Delivery(deliveryObj);
    const Id = category.save()
        .then(data => {
            // console.log(data);
        })
});


// test case 2
test('Test Case: Get Inserted dilevery ', () => {
    const delivery = new Delivery(categoryObj);
    const Id = delivery.save()
        .then(data => {
            return delivery.findById(Id).then(data => {
                expect(data.type).toStrictEqual(deliveryObj.type);
            });
            // console.log(data);
        })
});




