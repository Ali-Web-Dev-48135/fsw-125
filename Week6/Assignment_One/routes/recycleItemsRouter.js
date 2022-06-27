const express = require("express");
const recycledItemRouter = express.Router();
const {v4: uuidv4} = require("uuid");


// dummy data.
let recycledItems = [
    {
        Name: "Glass",
        Description: "Glass material.",
        Level: 5,
        Id: uuidv4(),
    },
    {
        Name: "Plastic",
        Description: "Plastic material.",
        Level: 3,
        Id: uuidv4(),
    },
    {
        Name: "Cotton",
        Description: "Cotton material.",
        Level: 2,
        Id: uuidv4(),
    },
    // {
    //     Name: "Rubber",
    //     Description: "Rubber material.",
    //     Level: 4,
    //     Id: uuidv4(),
    // },
    // {
    //     Name: "Tires",
    //     Description: "Tire material.",
    //     Level: 3,
    //     Id: uuidv4(),
    // },
];

// routes.
recycledItemRouter

    .get("/", (request, response) => {

        response.status(200).send(recycledItems);

    })

    .get("/:recycledItemId", (request, response, next) => {
        const itemId = request.params.recycledItemId;
        const itemIndex = recycledItems.find(item => item.Id === itemId);
        
        if(!itemIndex)
        {
            const error = new Error("This item was not found.");
            return next(error);

        }
        response.status(200).send(itemIndex);
    })

    .post("/", (request, response) => {
        const newItem = request.body;
        newItem.Id = uuidv4();
        recycledItems.push(newItem);
        response.status(201).send(newItem);
    })

    .delete("/:recycledItemId", (request, response) => {
        const itemId = request.params.recycledItemId;
        const itemIndex = recycledItems.findIndex(item => item.Id === itemId);
        recycledItems.splice(itemIndex, 1);
        response.send("Item Deleted With Success.");
    })

    .put("/:recycledItemId", (request, response) => {
        const itemId = request.params.recycledItemId;
        const itemIndex = recycledItems.findIndex(item => item.Id === itemId);
        Object.assign(recycledItems[itemIndex], request.body);
        response.status(201).send("Items updated successfully.");
    });

module.exports = recycledItemRouter;
