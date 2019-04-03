<template>
  <div>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <h1>{{`${user.prenomClient} ${user.nomClient}`}}</h1>

        <v-img :src="user.photoClient" contain/>
      </v-layout>
    </v-container>
    <bottomNavbar/>
  </div>
</template>

<script>
import bottomNavbar from "../components/bottomNavbar";

import userDao from "../dao/user.js";

export default {
  name: "Account",
  components: { bottomNavbar },
  data() {
    return {
      user: {}
    };
  },
  created() {
    userDao.getUser(this.$store.state.user.idClient).then(result => {
      this.user = result.data[0];
      console.log(this.user);
    });
  }
};
</script>