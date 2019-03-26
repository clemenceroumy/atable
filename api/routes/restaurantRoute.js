module.exports = function(app) {
  var restaurant = require("../controllers/restaurantController");

  // restaurants Routes
  app.route("/restaurants").get(function(req, res) {
    var result = restaurant.getAllRestaurants(function(error, data) {
      if (error) throw error;
      res.send(data);
    });
  });

  app.route("/restaurants/:restaurantId").get(function(req, res) {
    let restaurantId = req.params.restaurantId;

    var result = restaurant.getRestaurantById(restaurantId, function(
      error,
      data
    ) {
      if (error) throw error;
      res.send(data);
    });
  });

  app.route("/restaurants/city/:cityId").get(function(req, res) {
    let cityId = req.params.cityId;

    var result = restaurant.getRestaurantByCityId(cityId, function(
      error,
      data
    ) {
      if (error) throw error;
      res.send(data);
    });
  });
};
