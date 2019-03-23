module.exports = function(app) {
  var user = require("../controllers/userController");

  // Users Routes
  app.route("/users").get(function(req, res) {
    var result = user.getAllUsers(function(error, data) {
      if (error) throw error;
      res.send(data);
    });
  });

  app.route("/users/connect").get(function(req, res) {
    let login = req.query.login;
    let password = req.query.password;
    var result = user.connectUser(login, password, function(error, data) {
      if (error) throw error;
      res.send(data);
    });
  });

  app.route("/users/signup").post(function(req, res) {
    let payload = req.body;
    var result = user.signupUser(payload, function(error, data) {
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
