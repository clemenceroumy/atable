var connection = require("../config/database");

exports.getAllRestaurants = function(callback) {
  connection.query(
    "SELECT restaurant.idRestaurant, nomRestaurant, descriptionRestaurant, nombrePlaces, logoRestaurant, ville.idVille, nomVille, type.idType, libelleType FROM restaurant INNER JOIN ville ON restaurant.idVille = ville.idVille LEFT JOIN atype ON atype.idRestaurant = restaurant.idRestaurant LEFT JOIN type ON atype.idType = type.idType ",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.getRestaurantById = function(restaurantId, callback) {
  connection.query(
    "SELECT restaurant.idRestaurant, nomRestaurant, descriptionRestaurant, nombrePlaces, logoRestaurant, ville.idVille, nomVille, type.idType, libelleType FROM restaurant INNER JOIN ville ON restaurant.idVille = ville.idVille LEFT JOIN atype ON atype.idRestaurant = restaurant.idRestaurant LEFT JOIN type ON atype.idType = type.idType   WHERE restaurant.idRestaurant = " +
      restaurantId,
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.getRestaurantByCityId = function(cityId, callback) {
  connection.query(
    "SELECT restaurant.idRestaurant, nomRestaurant, descriptionRestaurant, nombrePlaces, logoRestaurant, ville.idVille, nomVille FROM restaurant INNER JOIN ville ON restaurant.idVille = ville.idVille  WHERE ville.idVille = " +
      cityId,
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.bookRestaurant = function(
  idRestaurant,
  idClient,
  date,
  nombrePersonne,
  callback
) {
  connection.query(
    "INSERT INTO reserve (idRestaurant, idClient, date, nombrePersonne, estRendu) VALUES (" +
      idRestaurant +
      ", " +
      idClient +
      ", '" +
      date +
      "'," +
      nombrePersonne +
      ", 0)",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};
