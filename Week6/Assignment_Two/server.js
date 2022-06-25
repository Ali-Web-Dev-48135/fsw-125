const express = require("express");

const morgan = require("morgan");
// importing our recycled items module.

const recycledItemRouter = require("./routes/recycleItemsRouter");

const app = express();
const PORT = 9000;

// middleware to parse body.
app.use(express.json());
app.use(morgan("dev"));


// routes
app.use("/recycledItem", recycledItemRouter);

app.use((error, request, response, next) => {
    
    console.log(error);
    return response.send({errorMsg: error.message});

});



app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});



