<template>
  <v-slide-y-transition mode="out-in">
    Account Vue
    <bottomNavbar/>
  </v-slide-y-transition>
</template>

<script>
import bottomNavbar from "../components/bottomNavbar";

import UserDao from "../dao/user.js";

export default {
  name: "Account",
  components: { bottomNavbar }
};
</script>