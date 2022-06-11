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
 // a route parameter is never null or undefined.
 // also is always a string with positive length. 


recycledItemRouter.get("/", (request, response) => {
    response.send(recycledItems);
});

recycledItemRouter.get("/:itemId", (request, response) => {
    const itemId = request.params.itemId;
    const itemIndex = recycledItems.find(item => item.Id === itemId);

    response.send(itemIndex);
    
});

// query parameters.




recycledItemRouter.post("/", (request, response) => {
    const newItem = request.body;
    newItem.id = uuidv4();
    recycledItems.push(newItem);

    // printing out the array to check.
    console.log(recycledItems);
    response.send(`Added the following item ${newItem.Name}`);

});

recycledItemRouter.delete("/:itemId", (request, response) => {
    // Delete One.
    const itemId = request.params.itemId;
    const itemIndex = recycledItems.findIndex(item => item.Id === itemId);
    recycledItems.splice(itemIndex, 1);

    response.send("Item Deleted With Success.");
});

recycledItemRouter.put("/:itemId", (request, response) => {
    const itemId = request.params.itemId;
    const itemIndex = recycledItems.findIndex(item => item.Id === itemId);
    Object.assign(recycledItems[itemIndex], request.body);
    response.send("Items updated successfully.");
});





module.exports = recycledItemRouter;
