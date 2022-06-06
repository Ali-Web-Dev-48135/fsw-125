const express = require("express");
const recycledItemRouter = express.Router();
const {v4: uuidv4} = require("uuid");


// dummy data.
let recycledItem = {
    Name: "Dummy Name",
    Description: "Dummy Description",
    Recycable: false,
    Quantity: 0,
    Price: 0,
    Id: uuidv4(),
};

let recycledItems = [];
recycledItems.push(recycledItem);



recycledItemRouter.get("/", (request, response) => {
    response.send(recycledItems);

});


recycledItemRouter.post("/", (request, response) => {
    const newItem = request.body;
    newItem.id = uuidv4();
    recycledItems.push(newItem);

    // printing out the array to check.
    console.log(recycledItems);
    response.send(`Added the following item ${newItem.Name}`);

});

module.exports = recycledItemRouter;
