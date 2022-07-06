const bodyparser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

// importing our recycled items module.

const STUDENT_ROUTER_FILE = require("./routes/StudentRouter");

const app = express();
const PORT = 9000;


app.use(express.json());
app.use(morgan("dev"));




// routes
app.use("/students", STUDENT_ROUTER_FILE);

app.use((error, request, response, next) => {
    
    return response.send({errorMsg: error.message});    

});



app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});



