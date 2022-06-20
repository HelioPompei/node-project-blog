const bodyParser = require("body-parser");
const express = require("express"); 
const app = express(); 
const PORT = 8080;
const connection = require("./database/Database");

connection.authenticate()
    .then(() => {
        console.log("connection authenticated");
    }).catch((error) => {
        console.log("connection error: " + error.message);
    });

// listen on port 8080 
app.listen(PORT, () => {
    console.log("listening on port " + PORT);  
});

// view engine configuration
app.set("view engine", "ejs");

// static
app.use(express.static("public"));

// body parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.render("index.ejs");
});

