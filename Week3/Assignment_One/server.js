const express = require("express");
const app = express();
const {v4: uuidv4} = require("uuid");

const PORT = 3000;

// MiddleWare Level.
app.use(express.json()); // parsing application.



let books = [
    {title: "Devil and the White city", author: "Erik Larson", _id: uuidv4()},
    {title: "Devil and the Red city", author: "Erik Doe",  _id: uuidv4()},
    {title: "Devil and the Yellow city", author: "Erik Carson",  _id: uuidv4()},
    {title: "Devil and the Black city", author: "Erik Blacksonson",  _id: uuidv4()},
];



// post to add a new resource.
app.post("/books", (request, response) => {
    const newBook = request.body;
    newBook._id = uuidv4();
    books.push(newBook);
    console.log(books);
    response.send("Post Successful");

});


app.get("/books", (request, response) => {
    response.send(books);
});





app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});


