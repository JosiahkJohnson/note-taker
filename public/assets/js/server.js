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
app.get("/api/notes", function(req, res){
    console.log("Notes returned");
    return res.json(notes);
});

//save new note with the post command
app.post("/api/notes", function(req, res){
    const newNote = req.body;
    newNote.id = notes.length + 1;

    //add the note to the server's data
    notes.push(newNote);

    res.json(newNote);
    console.log(req.body);
    console.log("new note saved");
});

//delete notes from the server when the trash icon is hit
app.delete("/api/notes/:id", function(req, res){
    notes.splice(req.params.id - 1);

    return res.json(notes);
});

//starting the server and having it listen on the correct port
//console logging the confirmation
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});