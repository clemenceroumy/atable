var connection = require("../config/database");

exports.getRestaurantByCityId = function(cityId, callback) {
  connection.query(
    "SELECT * FROM restaurant INNER JOIN ville ON restaurant.idVille = ville.idVille WHERE ville.idVille = " +
      cityId,
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};
