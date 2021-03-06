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

    //Make an array containing all types and return one value
    //(Otherwise, return a row with restaurant data for each type)
    data[0].types = [];
    data[0].specialite = [];

    for (let i = 0; i < data.length; i++) {
      data[0].types.push({ id: data[i].idType, libelle: data[i].libelleType });
    }

    callback(null, data[0]);
  });
};

exports.getRestaurantByIdSpecialite = function(restaurantId, callback) {
  restaurantModel.getRestaurantByIdSpecialite(restaurantId, function(
    error,
    data
  ) {
    if (error) throw error;

    //Make an array containing all types and return one value
    //(Otherwise, return a row with restaurant data for each type)
    data[0].specialite = [];

    for (let i = 0; i < data.length; i++) {
      data[0].specialite.push({
        id: data[i].idSpecialite,
        libelle: data[i].libSpecialite
      });
    }

    callback(null, data[0]);
  });
};

exports.getRestaurantByCityId = function(cityId, callback) {
  restaurantModel.getRestaurantByCityId(cityId, function(error, data) {
    if (error) throw error;
    callback(null, data);
  });
};

exports.bookRestaurant = function(
  idRestaurant,
  idClient,
  date,
  nombrePersonne,
  callback
) {
  restaurantModel.bookRestaurant(
    idRestaurant,
    idClient,
    date,
    nombrePersonne,
    function(error, data) {
      if (error) throw error;
      callback(null, data);
    }
  );
};
