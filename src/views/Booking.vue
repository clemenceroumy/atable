<template>
  <v-slide-y-transition mode="out-in">
    <div>
      <v-layout row wrap xs12 class="headerBooking" align-center>
        <btnBack class="ml-3"/>
        <h1 class="ml-3 white--text">{{restaurant.nomRestaurant}}</h1>
      </v-layout>

      <v-layout column wrap class="ma-5">
        <datePicker v-on:dateChild="getDate"/>

        <timePicker v-on:timeChild="getTime"/>

        <v-text-field
          name="numberSeats"
          color="#f46b45"
          :label="$t('booking.numberSeats')"
          v-model="numberSeats"
          prepend-icon="person"
        ></v-text-field>

        <v-flex xs1 class="mt-4">
          <Button
            class="mt-4"
            color="#f46b45"
            :libelle="$t('booking.book')"
            :action="bookRestaurant"
          />
        </v-flex>
      </v-layout>
    </div>
  </v-slide-y-transition>
</template>

<script>
import datePicker from "../components/datePicker";
import timePicker from "../components/timePicker";
import btnBack from "../components/btnBack";
import Button from "../components/button";

import restaurantDao from "../dao/restaurant.js";

export default {
  name: "Booking",
  components: { btnBack, datePicker, timePicker, Button },
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
.headerBooking {
  height: 100px;
  background: linear-gradient(to right, #f46b45, #eea849);
}
</style>
