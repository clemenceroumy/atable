var connection = require("../config/database");

exports.getAllUsers = function(callback) {
  connection.query("SELECT * FROM client", function(error, results, fields) {
    if (error) throw error;
    callback(null, results);
  });
};

exports.getUser = function(userID, callback) {
  connection.query(
    "SELECT * FROM client WHERE idClient ='" + userID + "'",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.connectUser = function(login, password, callback) {
  connection.query(
    "SELECT COUNT(idClient) AS haveAccount, idClient, login, password FROM client WHERE login='" +
      login +
      "' AND password='" +
      password +
      "'",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.signupUser = function(payload, callback) {
  connection.query(
    "INSERT INTO client (login, password, nomClient, prenomClient) VALUES('" +
      payload.login +
      "','" +
      payload.password +
      "','" +
      payload.lastName +
      "','" +
      payload.firstName +
      "')",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.checkPassword = function(idClient, password, callback) {
  connection.query(
    "SELECT idClient FROM client WHERE idClient = '" +
      idClient +
      "' AND password = '" +
      password +
      "'",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.updatePassword = function(idClient, password, callback) {
  connection.query(
    "UPDATE client SET password= '" +
      password +
      "' WHERE idClient = " +
      idClient,
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.deleteAccount = function(idClient, callback) {
  connection.query("DELETE FROM client WHERE idClient = " + idClient, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    callback(null, results);
  });
};

exports.checkIfUserExist = function(login, callback) {
  connection.query(
    "SELECT login FROM client WHERE login = '" + login + "'",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.getReservationByUser = function(idClient, callback) {
  connection.query(
    "SELECT restaurant.idRestaurant, nomRestaurant, logoRestaurant, reserve.date, nomVille FROM client INNER JOIN reserve ON client.idClient = reserve.idClient INNER JOIN restaurant ON reserve.idRestaurant = restaurant.idRestaurant INNER JOIN ville ON restaurant.idVille = ville.idVille WHERE client.idClient = " +
      idClient,
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.getFavoriteRestaurant = function(idClient, callback) {
  connection.query(
    "SELECT afavoris.idClient, restaurant.idRestaurant, nomRestaurant, logoRestaurant, nomVille FROM restaurant INNER JOIN afavoris ON restaurant.idRestaurant = afavoris.idRestaurant INNER JOIN ville ON ville.idVille = restaurant.idVille WHERE afavoris.idClient = " +
      idClient,
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};

exports.deleteFavoriteRestaurant = function(idClient, idRestaurant, callback) {
  connection.query(
    "DELETE FROM afavoris WHERE idRestaurant = " +
      idRestaurant +
      " AND idClient = " +
      idClient,
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};
