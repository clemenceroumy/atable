var restaurantModel = require("../models/restaurantModel");

exports.getRestaurantByCityId = function(cityId, callback) {
  restaurantModel.getRestaurantByCityId(cityId, function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};
