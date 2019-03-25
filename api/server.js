var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

var cors = require("cors");
var routesUser = require("./routes/userRoute"); //importing user's route
var routesCity = require("./routes/cityRoute"); //importing city's route
var routesRestaurant = require("./routes/restaurantRoute"); //importing restaurant's route

var connection = require("./config/database");

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routesUser(app); //register the user's route
routesCity(app); //register the city's route
routesRestaurant(app); //register the restaurant's route

app.listen(port);
