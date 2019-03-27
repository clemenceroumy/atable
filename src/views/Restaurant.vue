<template>
  <div></div>
</template>

<script>
import axios from "axios";
import config from "../config/config.js";

export default {
  name: "Restaurant",
  data() {
    return {
      restaurantId: this.$route.params.idRestaurant,
      restaurant: {}
    };
  },
  created() {
    axios
      .get(`${config.api}/restaurants/${this.restaurantId}`)
      .then(response => {
        this.restaurant = response.data;
        console.log(this.restaurant);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>