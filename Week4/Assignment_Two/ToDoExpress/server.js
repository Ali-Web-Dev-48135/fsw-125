const express = require("express");
const app = express();
const morgan = require("morgan");
const {v4: uuidv4} = require("uuid");


const toDoRouter = require("./routes/toDoRouter");
const PORT = 3000;

// middleware to parse body.
app.use(express.json());
app.use(morgan("dev"));


// routes
app.use("/toDoItem", toDoRouter);



app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});



