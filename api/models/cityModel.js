var connection = require("../config/database");

exports.getAllCities = function(callback) {
  connection.query(
    "SELECT * FROM ville INNER JOIN departement ON ville.idDepartement = departement.idDepartement",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};
