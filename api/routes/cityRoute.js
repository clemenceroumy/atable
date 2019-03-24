module.exports = function(app) {
  var city = require("../controllers/cityController");

  // cities Routes
  app.route("/cities").get(function(req, res) {
    var result = city.getAllCities(function(error, data) {
      if (error) throw error;
      res.send(data);
    });
  });
};
