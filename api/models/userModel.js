var connection = require("../config/database");

exports.getAllUsers = function(callback) {
  connection.query("SELECT * FROM user", function(error, results, fields) {
    if (error) throw error;
    callback(null, results);
  });
};

exports.getUser = function(userID, callback) {
  return connection.query(
    `SELECT * FROM user WHERE user_id = ${userID}`,
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};
