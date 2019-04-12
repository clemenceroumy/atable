var userModel = require("../models/userModel");

exports.getAllUsers = function(callback) {
  userModel.getAllUsers(function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};

exports.getUser = function(userID, callback) {
  userModel.getUser(userID, function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};

exports.connectUser = function(login, password, callback) {
  userModel.connectUser(login, password, function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};

exports.signupUser = function(payload, callback) {
  //TODO: check that all values are not null before insert
  userModel.checkIfUserExist(payload.login, function(error, data) {
    //IF user exist -> show error
    if (data.length > 0) {
      callback(null, "Un compte avec cette adresse existe déjà");
    }
    //ELSE -> create account
    else {
      userModel.signupUser(payload, function(error, data) {
        if (error) throw error;
        callback(null, data);
      });
    }
  });
};

exports.updatePassword = function(
  idClient,
  currentPassword,
  newPassword,
  callback
) {
  userModel.checkPassword(idClient, currentPassword, function(error, data) {
    if (error) throw error;

    if (data.length > 0) {
      userModel.updatePassword(idClient, newPassword, function(error, data) {
        if (error) throw error;
        callback(null, data);
      });
    } else {
      callback(null, "Le mot de passe actuel n'est pas correct");
    }
  });
};

exports.getReservationByUser = function(idClient, callback) {
  userModel.getReservationByUser(idClient, function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};
