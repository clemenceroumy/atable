import axios from "axios";
import config from "../config/config.js";

export default class restaurantDao {
  static bookRestaurant(item) {
    return axios.post(`${config.api}/restaurants/book`, item).catch(e => {
      console.log(e);
    });
  }

  static getRestaurantById(restaurantId) {
    return axios.get(`${config.api}/restaurants/${restaurantId}`).catch(e => {
      console.log(e);
    });
  }

  static getRestaurantByIdSpecialite(restaurantId) {
    return axios
      .get(`${config.api}/restaurants/${restaurantId}/specialite`)
      .catch(e => {
        console.log(e);
      });
  }

  static getRestaurantByCity(cityId) {
    return axios.get(`${config.api}/restaurants/city/${cityId}`).catch(e => {
      console.log(e);
    });
  }
}
