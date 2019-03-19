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
