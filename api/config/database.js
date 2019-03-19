var mysql = require("mysql");
var config = require("./env");

var connection = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database
});

module.exports = connection;
