var cityModel = require("../models/cityModel");

exports.getAllCities = function(callback) {
  cityModel.getAllCities(function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};
