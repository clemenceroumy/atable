<template>
  <v-slide-y-transition mode="out-in">
    booking vue
    <bottomNavbar/>
  </v-slide-y-transition>
</template>

<script>
import bottomNavbar from "../components/bottomNavbar";

export default {
  name: "Booking",
  components: { bottomNavbar }
};
</script>