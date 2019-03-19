var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

var cors = require("cors");
var routes = require("./routes/userRoute"); //importing route
var connection = require("./config/database");

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app); //register the route

app.listen(port);
