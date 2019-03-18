var mysql = require("mysql");
var config = require("./env");

var connection = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password
});

connection.connect(function(err) {
  if (err) throw "Connection denied";
  console.log("Connected!");
  return connection;
});
