const { response } = require("express");
const express = require("express");
const app = express();

const PORT = 3000;
 
let movies = [
    {name: "Titanic", rating: "5"},
    {name: "Goodfellas", rating: "4"},
    {name: "Next", rating: 2}
];
let actors = [
    {name: "John Doe", rating: 3},
    {name: "Sam Doe", rating: 2},
    {name: "Jane Doe", rating: 3}
];
let vehicles = [
    {name: "Ferrari", rating: 4 },
    {name: "Lexus", rating: 2},
    {name: "Corvette", rating: 5}
];




app.get("/", (request, response) => {
    
    response.send("<h1>Welcome To The Home Page</h1><p>Try these different end points</p><ul><li>movies</li><li>actors</li><li>vehicles</li></ul>");

});

app.get("/movies", (request, response) => {
    response.send(movies);
});

app.get("/actors", (request, response) => {
    response.send(actors);
});

app.get("/vehicles", (request, response) => {
    response.send(vehicles);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});