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
          <datePicker v-on:dateTimeChild="getDateTime"/>
          {{dateTime}}
        </v-flex>
      </v-layout>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import btnBack from "../components/btnBack";
import datePicker from "../components/datePicker";

import { mapState } from "vuex";
import restaurantDao from "../dao/restaurant.js";

export default {
  name: "Restaurant",
  components: { btnBack, datePicker },
  data() {
    return {
      restaurantId: this.$route.params.idRestaurant,
      restaurant: {},
      dateTime: ""
    };
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    console.log(this.user);

    restaurantDao.getRestaurantById(this.restaurantId).then(response => {
      this.restaurant = response.data;
      console.log(this.restaurant);
    });
  },
  methods: {
    getDateTime(value) {
      this.dateTime = value;

      restaurantDao
        .bookRestaurant({
          idRestaurant: this.restaurantId,
          idClient: this.$store.state.user.idClient,
          date: value
        })
        .then(response => {
          this.$store.commit("setShowSnackbar", {
            value: true,
            message: this.$t("restaurant.bookingOK"),
            color: "green lighten-1"
          });
        });
    }
  }
};
</script>