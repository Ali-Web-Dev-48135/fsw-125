const express = require("express");

const morgan = require("morgan");
// importing our recycled items module.

const miscItemsRouter = require("./routes/miscItemsRouter");

const app = express();
const PORT = 3000;

// middleware to parse body.
app.use(express.json());
app.use(morgan("dev"));


// routes
app.use("/miscItems", miscItemsRouter);




app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});



