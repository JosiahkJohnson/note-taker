//importing express and path
const express = require("express");
const path = require("path");

//setting up the server port and app
const app = express();
const PORT = process.env.PORT || 8080;

//data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

let notes = [];

//initialize routing
//get the home page for a blank route
app.get("/", function(req, res){
    res.sendFile(`${process.cwd()}/public/index.html`);
});

//display the notes html
app.get("/notes", function(req, res){
    res.sendFile(`${process.cwd()}/public/notes.html`);
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});