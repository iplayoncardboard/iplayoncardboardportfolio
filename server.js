const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const env = require('dotenv').config(); 
const PORT = process.env.PORT || 80;
const routes = require('./controllers/router');
const exphbs = require("express-handlebars");
// const Models = require("./models");

//setup express session
const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.listen(PORT, () => {
console.log("Server listening on: http://localhost:" + PORT)}); 