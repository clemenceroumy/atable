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
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
              </div>
            </template>
          </v-list>
        </v-layout>

        <v-layout row wrap>
          <v-btn color="error">{{$t('disconnect')}}</v-btn>
        </v-layout>
      </v-container>
      <bottomNavbar/>
    </div>
  </v-slide-y-transition>
</template>

<script>
import bottomNavbar from "../components/bottomNavbar";

import userDao from "../dao/user.js";

export default {
  name: "Account",
  components: { bottomNavbar },
  data() {
    return {
      user: {},
      items: [
        { title: this.$t("account.profil") },
        { title: this.$t("account.notifications") },
        { title: this.$t("account.deleteAccount") }
      ]
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