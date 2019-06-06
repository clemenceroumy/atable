<template>
  <v-slide-y-transition mode="out-in">
    <div>
      <v-layout row wrap xs12 class="header" align-center>
        <v-flex xs8 offset-xs2>
          <searchBar v-on:cityIdChild="getCityId"/>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <v-list>
            <template v-for="(restaurant) in restaurants">
              <cardRestaurant :key="restaurant.idRestaurant" :restaurant="restaurant"/>
            </template>
          </v-list>
        </v-flex>
      </v-layout>

      <bottomNavbar/>
    </div>
  </v-slide-y-transition>
</template>

<script>
import { mapState } from "vuex";
import bottomNavbar from "../components/bottomNavbar";
import searchBar from "../components/searchBar";
import cardRestaurant from "../components/cardRestaurant";

import restaurantDao from "../dao/restaurant";

export default {
  name: "home",
  components: { bottomNavbar, searchBar, cardRestaurant },
  data() {
    return {
      cityId: 0,
      restaurants: [], // List of the restaurants,
      idVilleUser: this.$store.state.user.idVille
    };
  },
  computed: {
    //...mapState(["user"])
  },
  created() {
    restaurantDao.getRestaurantByCity(this.idVilleUser).then(response => {
      this.restaurants = response.data;
    });
  },
  watch: {
    cityId: {
      handler: function() {
        restaurantDao.getRestaurantByCity(this.cityId).then(response => {
          this.restaurants = response.data;
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

.header {
  background: linear-gradient(to right, #f46b45, #eea849);
  height: 150px;
}
</style>
