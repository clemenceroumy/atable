var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

var cors = require("cors");
var routesUser = require("./routes/userRoute"); //importing user route
var routesCity = require("./routes/cityRoute"); //importing city route

var connection = require("./config/database");

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routesUser(app); //register the user route
routesCity(app); //register the city route

app.listen(port);
