<template>
  <v-slide-y-transition mode="out-in">
    <div>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <h1>{{$t('booking.booking')}}</h1>
        </v-layout>
      </v-container>
      <bottomNavbar/>
    </div>
  </v-slide-y-transition>
</template>

<script>
import bottomNavbar from "../components/bottomNavbar";

export default {
  name: "Booking",
  components: { bottomNavbar }
};
</script>