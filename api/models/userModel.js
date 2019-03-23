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
    "SELECT COUNT(idClient) AS haveAccount, login, password FROM client WHERE login='" +
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

exports.checkIfUserExist = function(login, callback) {
  connection.query(
    "SELECT login FROM client WHERE login = '" + login + "'",
    function(error, results, fields) {
      if (error) throw error;
      callback(null, results);
    }
  );
};
