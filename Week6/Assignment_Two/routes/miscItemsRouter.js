const express = require("express");
const miscItemsRouter = express.Router();
const {v4: uuidv4} = require("uuid");


// dummy data.
let itemsArray = [
    {
        name: "avocado",
        type: "food",
        price: 20,
        Id: uuidv4(),
    },
    {
        name: "apple",
        type: "food",
        price: 10,
        Id: uuidv4(),
    },
    {
        name: "playstation",
        type: "electronic",
        price: 20,
        Id: uuidv4(),
    },
    {
        name: "ipad",
        type: "electronic",
        price: 30,
        Id: uuidv4(),
    },
    {
        name: "hat",
        type: "clothing",
        price: 5,
        Id: uuidv4(),
    },
    {
        name: "shirt",
        type: "clothing",
        price: 7,
        Id: uuidv4(),
    }
];

// routes.
miscItemsRouter

    .get("/", (request, response) => {

        // checking if there is an actual query or if undefined.
        if(request.query.type)
        {
            console.log(request.query.type);
            const queriedString = request.query.type;
            const queriedArray = itemsArray.filter(element => element.type === queriedString);
            return response.status(200).send(queriedArray);   

        }

        response.status(200).send(itemsArray);
    })


    .get("/:miscItemsId", (request, response) => {
        const itemId = request.params.miscItemsId;
        const itemIndex = itemsArray.find(element => element.Id === itemId);
        response.status(200).send(itemIndex);
    })

module.exports = miscItemsRouter;
