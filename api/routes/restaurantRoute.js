module.exports = function(app) {
  var restaurant = require("../controllers/restaurantController");

  // restaurants Routes
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
