<template>
  <v-slide-y-transition mode="out-in">
    <div>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <h1>{{$t('history.booking')}}</h1>
        </v-layout>

        <v-layout row wrap>
          <v-list>
            <template v-for="(booking) in bookings">
              <div :key="booking.date">
                <cardBooking :booking="booking"/>
                <v-divider></v-divider>
              </div>
            </template>
          </v-list>
        </v-layout>
      </v-container>
      <bottomNavbar/>
    </div>
  </v-slide-y-transition>
</template>

<script>
import bottomNavbar from "../components/bottomNavbar";
import cardBooking from "../components/cardBooking";

import userDao from "../dao/user.js";

export default {
  name: "History",
  components: { bottomNavbar, cardBooking },
  data() {
    return {
      bookings: []
    };
  },
  mounted() {
    userDao.getBookingByUser(this.$store.state.user.idClient).then(result => {
      this.bookings = result.data;
    });
  }
};
</script>