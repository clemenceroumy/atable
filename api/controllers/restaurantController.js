var restaurantModel = require("../models/restaurantModel");

exports.getAllRestaurants = function(callback) {
  restaurantModel.getAllRestaurants(function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};

exports.getRestaurantById = function(restaurantId, callback) {
  restaurantModel.getRestaurantById(restaurantId, function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};

exports.getRestaurantByCityId = function(cityId, callback) {
  restaurantModel.getRestaurantByCityId(cityId, function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};
