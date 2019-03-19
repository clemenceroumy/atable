module.exports = function(app) {
  var user = require("../controllers/userController");

  // Users Routes
  app.route("/users").get(function(req, res) {
    var result = user.getAllUsers(function(error, data) {
      if (error) throw error;
      res.send(data);
    });
  });

  app.route("/users/:userID").get(function(req, res) {
    let userID = req.params.userID;
    var result = user.getUser(userID, function(error, data) {
      if (error) throw error;
      res.send(data);
    });
  });
};
