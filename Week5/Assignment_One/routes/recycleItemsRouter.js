const express = require("express");
const recycledItemRouter = express.Router();
const {v4: uuidv4} = require("uuid");


// dummy data.
let toDoItem = {
    Name: "Garbadge",
    Description: "Take out the garbadge tomorrow",
    imageUrl:"http://www.image.com",
    Importance: 5,
    _Id: uuidv4(),
};

let toDoArray = [];
toDoArray.push(toDoItem);
 // a route parameter is never null or undefined.
 // also is always a string with positive length. 


recycledItemRouter

    .get("/", (request, response, next) => {
        // response.send(recycledItems);
        // console.log("Pre Next");
        console.log("Does some stuff here");

        next();
    })

    // .get("/", (request, response, next) => {
    //     // console.log("This is the next middleware...");
    //     request.body = {somePropKey: "Value"};
    //     next();
    // })
    // .get("/", (request, response) => {

    //     response.send(request.body);
    // })

    .get("/:itemId", (request, response) => {
        const itemId = request.params.itemId;
        const itemIndex = recycledItems.find(item => item.Id === itemId);

        response.send(itemIndex);
    
    })

// query parameters.

    .post("/", (request, response) => {
        const newItem = request.body;
        newItem.id = uuidv4();
        recycledItems.push(newItem);

        // printing out the array to check.
        console.log(recycledItems);
        response.send(`Added the following item ${newItem.Name}`);

    })

    .delete("/:itemId", (request, response) => {
        // Delete One.
        const itemId = request.params.itemId;
        const itemIndex = recycledItems.findIndex(item => item.Id === itemId);
        recycledItems.splice(itemIndex, 1);

        response.send("Item Deleted With Success.");
    })

    .put("/:itemId", (request, response) => {
        const itemId = request.params.itemId;
        const itemIndex = recycledItems.findIndex(item => item.Id === itemId);
        Object.assign(recycledItems[itemIndex], request.body);
        response.send("Items updated successfully.");
    });





module.exports = recycledItemRouter;
