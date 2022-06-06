const express = require("express");
const app = express();
const {v4: uuidv4} = require("uuid");
// importing our recycled items module.

const recycledRouter = require("./routes/recycleItemsRouter");


const PORT = 3000;

// middleware to parse body.
app.use(express.json());

// routes
app.use("/recycledItems", recycledRouter);



app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});

