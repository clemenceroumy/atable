<template>
  <v-slide-y-transition mode="out-in">
    <div>
      <v-layout row wrap xs12 class="headerBooking" align-center>
        <btnBack class="ml-3"/>
        <h1 class="white--text">{{$t('favorite.favorite')}}</h1>
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
    </div>
  </v-slide-y-transition>
</template>

<script>
import userDao from "../../dao/user";

import cardRestaurant from "../../components/cardRestaurant";
import btnBack from "../../components/btnBack";

export default {
  name: "Favorite",
  components: { cardRestaurant, btnBack },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    userDao
      .getAllFavoritesRestaurants(this.$store.state.user.idClient)
      .then(result => {
        this.restaurants = result.data;
      });
  }
};
</script>

<style>
</style>
