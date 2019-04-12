import axios from "axios";
import config from "../config/config.js";

export default class userDao {
  static login(email, password) {
    return axios
      .get(`${config.api}/users/connect?login=${email}&password=${password}`)
      .catch(e => {
        console.log(e);
      });
  }

  static signup(item) {
    return axios.post(`${config.api}/users/signup`, item).catch(e => {
      console.log(e);
    });
  }

  static getUser(userId) {
    return axios.get(`${config.api}/users/${userId}`).catch(e => {
      console.log(e);
    });
  }

  static updatePassword(user) {
    return axios.post(`${config.api}/users/updatePassword`, user).catch(e => {
      console.log(e);
    });
  }

  static getBookingByUser(userId) {
    return axios.get(`${config.api}/users/${userId}/booking`).catch(e => {
      console.log(e);
    });
  }
}
