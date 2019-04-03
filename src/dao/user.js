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
}
