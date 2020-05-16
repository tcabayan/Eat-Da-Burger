const connection = require("./config/connection");
const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000;
const router = require('./controllers/burgers_controller')

// Add Routes
//Serve static content for the app from the "public" directory in the application directory
//app.use(express.static(__dirname + '/public'));
app.use(express.static(process.cwd()+ '/public'))

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up handlebars view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', router);

// Connect to the database and start express server
connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    }
});