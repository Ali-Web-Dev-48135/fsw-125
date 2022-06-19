const express = require("express");
const app = express();
const morgan = require("morgan");


const {v4: uuidv4} = require("uuid");
// importing our recycled items module.

const toDoItemRouter = require("../routes/toDoRouter");


const PORT = 9000;

// middleware to parse body.
app.use(express.json());
app.use(morgan("dev"));


// routes
app.use("/toDoItem", toDoItemRouter);



app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});



