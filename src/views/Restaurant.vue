<template>
  <v-slide-y-transition mode="out-in">
    <v-container grid-list-xs>
      <btnBack/>

      <v-layout row wrap>
        <v-flex xs12>
          <v-img :src="restaurant.logoRestaurant" contain alt="logo of the restaurant"/>
        </v-flex>

        <v-flex xs12>
          <h1>{{ restaurant.nomRestaurant }}</h1>
          <h3>{{ `${$t('restaurant.numberPlace')} : ${restaurant.nombrePlaces}`}}</h3>
          <p>{{ restaurant.descriptionRestaurant }}</p>
          <h3>{{ `${$t('restaurant.type')} : ` }}</h3>
          <ul>
            <li v-for="type in restaurant.types" :key="type.id">{{type.libelle}}</li>
          </ul>
        </v-flex>

        <v-flex xs12>
          <v-btn color="success">{{ $t('restaurant.book') }}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import btnBack from "../components/btnBack";

import axios from "axios";
import config from "../config/config.js";

export default {
  name: "Restaurant",
  components: { btnBack },
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