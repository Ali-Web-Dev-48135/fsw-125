const express = require("express");
const toDoRouter = express.Router();
const {v4: uuidv4} = require("uuid");


// dummy data.
let toDoItems = [
    {
        Name: "Garbadge",
        Description: "Take out the garbadge tomorrow",
        imageUrl:"http://www.image.com",
        Importance: 5,
        _Id: uuidv4(),  
    },
    {
        Name: "Udemy Course",
        Description: "Complete the udemy course",
        imageUrl:"http://www.image.com",
        Importance: 5,
        _Id: uuidv4(),  
    },
    {
        Name: "Drive",
        Description: "Driving Lessons",
        imageUrl:"http://www.image.com",
        Importance: 5,
        _Id: uuidv4(),  
    },
    {
        Name: "Video Games",
        Description: "Beat a video game",
        imageUrl:"http://www.image.com",
        Importance: 5,
        _Id: uuidv4(),  
    },
    {
        Name: "Home Work",
        Description: "Complete the react homework",
        imageUrl:"http://www.image.com",
        Importance: 5,
        _Id: uuidv4(),  
    },


];



 // a route parameter is never null or undefined.
 // also is always a string with positive length. 


toDoRouter
    .get("/", (request, response, next) => {
        response.send(toDoItems);
    })

    .get("/:itemId", (request, response) => {
        const itemId = request.params.itemId;
        const itemIndex = toDoItems.find(item => item._Id === itemId);

        response.send(itemIndex);
    
    })

    .post("/", (request, response) => {
        const newToDoItem = request.body;
        newToDoItem._Id = uuidv4();
        toDoItems.push(newToDoItem);

        // printing out the array to check.
        console.log(toDoItems);
        response.send(`Added the following item ${newToDoItem.Name}`);

    })

    .delete("/:itemId", (request, response) => {
        // Delete One.
        const itemId = request.params.itemId;
        const itemIndex = toDoItems.findIndex(item => item._Id === itemId);
        toDoItems.splice(itemIndex, 1);

        response.send("Item Deleted With Success.");
    })

    .put("/:itemId", (request, response) => {
        const itemId = request.params.itemId;
        const itemIndex = toDoItems.findIndex(item => item._Id === itemId);
        Object.assign(toDoItems[itemIndex], request.body);
        response.send("Items updated successfully.");
    });

module.exports = toDoRouter;
