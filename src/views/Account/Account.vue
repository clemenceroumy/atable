<template>
  <v-slide-y-transition mode="out-in">
    <div>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-img style="height: 100px;" :src="user.photoClient" contain/>
        </v-layout>

        <v-layout row wrap>
          <h1>{{`${user.prenomClient} ${user.nomClient}`}}</h1>
        </v-layout>

        <v-layout row wrap>
          <v-list>
            <template v-for="item in items">
              <div :key="item.title">
                <v-list-tile>
                  <router-link :to="item.link">
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                  </router-link>
                </v-list-tile>
                <v-divider></v-divider>
              </div>
            </template>
          </v-list>
        </v-layout>

        <v-layout row wrap>
          <v-btn color="error" v-on:click="doLogout">{{$t('disconnect')}}</v-btn>
        </v-layout>
      </v-container>
      <bottomNavbar/>
    </div>
  </v-slide-y-transition>
</template>

<script>
import bottomNavbar from "../../components/bottomNavbar";

import userDao from "../../dao/user.js";

export default {
  name: "Account",
  components: { bottomNavbar },
  data() {
    return {
      user: {},
      items: [
        { title: this.$t("account.profil"), link: "manageAccount" },
        { title: this.$t("account.notifications"), link: "" },
        { title: this.$t("account.favorites"), link: "favorite" }
      ]
    };
  },
  created() {
    userDao.getUser(this.$store.state.user.idClient).then(result => {
      this.user = result.data[0];
      console.log(this.user);
    });
  },
  methods: {
    doLogout() {
      this.$store.commit("disconnect");
      this.$router.push("/");
    }
  }
};
</script>