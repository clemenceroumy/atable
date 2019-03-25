<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <searchBar v-on:cityIdChild="getCityId"/>
      </v-flex>

      <v-flex xs12>
        <v-list>
          <template v-for="(restaurant) in restaurants">
            <cardRestaurant :restaurant="restaurant" :key="restaurant.idRestaurant"/>
          </template>
        </v-list>
      </v-flex>
    </v-layout>

    <bottomNavbar/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import bottomNavbar from "../components/bottomNavbar";
import searchBar from "../components/searchBar";
import cardRestaurant from "../components/cardRestaurant";

import config from "../config/config.js";
import axios from "axios";

export default {
  name: "home",
  components: { bottomNavbar, searchBar, cardRestaurant },
  data() {
    return {
      cityId: 0,
      restaurants: [] // List of the restaurants
    };
  },
  computed: {
    //...mapState(["user"])
  },
  watch: {
    cityId: {
      handler: function() {
        axios
          .get(`${config.api}/restaurants/city/${this.cityId}`)
          .then(response => {
            this.restaurants = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  },
  methods: {
    getCityId(value) {
      this.cityId = value;
    }
  }
};
</script>

<style>
.theme--light.v-list {
  background-color: rgba(0, 0, 0, 0);
}
</style>
