<template>
  <v-slide-y-transition mode="out-in">
    <v-container grid-list-xs>
      <v-layout row wrap>
        <btnBack/>
        <h1>{{restaurant.nomRestaurant}}</h1>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <datePicker v-on:dateChild="getDate"/>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <timePicker v-on:timeChild="getTime"/>
      </v-layout>

      <v-layout row wrap>
        <v-text-field
          name="numberSeats"
          :label="$t('booking.numberSeats')"
          v-model="numberSeats"
          prepend-icon="person"
        ></v-text-field>
      </v-layout>

      <v-layout row wrap>
        <v-btn color="success" v-on:click="bookRestaurant">{{$t('booking.book')}}</v-btn>
      </v-layout>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import datePicker from "../components/datePicker";
import timePicker from "../components/timePicker";
import btnBack from "../components/btnBack";

import restaurantDao from "../dao/restaurant.js";

export default {
  name: "Booking",
  components: { btnBack, datePicker, timePicker },
  data() {
    return {
      restaurant: {},
      restaurantId: this.$route.params.idRestaurant,
      numberSeats: 0,
      date: "",
      time: ""
    };
  },
  created() {
    restaurantDao.getRestaurantById(this.restaurantId).then(response => {
      this.restaurant = response.data;
    });
  },
  methods: {
    bookRestaurant() {
      let dateTime = `${this.date} ${this.time}`;

      restaurantDao
        .bookRestaurant({
          idRestaurant: this.restaurantId,
          idClient: this.$store.state.user.idClient,
          date: dateTime,
          nombrePersonne: this.numberSeats
        })
        .then(response => {
          this.$store.commit("setShowSnackbar", {
            value: true,
            message: this.$t("booking.bookingOK"),
            color: "green lighten-1"
          });
        });
    },
    getDate(value) {
      this.date = value;
    },
    getTime(value) {
      this.time = value;
    }
  }
};
</script>

<style>
</style>
