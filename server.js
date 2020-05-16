const connection = require("./config/connection");
const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000;
const router = require('./controllers/burgers_controller')

//Serve static content for the app from the "public" directory in the application directory
//app.use(express.static(__dirname + '/public'));
app.use(express.static(process.cwd()+ '/public'))

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set up handlebars view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
app.use('/', router);

// Connect to the database and start express server
app.listen(PORT, function(){
    console.log('Eat-Da-Burger app is listening on PORT: ' + PORT);
});